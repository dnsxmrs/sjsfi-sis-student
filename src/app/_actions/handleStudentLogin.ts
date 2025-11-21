'use server'

import { prisma } from "@/lib/prisma";

export type StudentResult = {
    success: boolean;
    error?: string;
    redirectUrl?: string;
    role?: string;
    birthDate?: string;
}

// Constants for error messages
const ERROR_MESSAGES = {
    MISSING_FIELDS: 'Missing email or origin',
    INVALID_ORIGIN: 'Invalid origin attempt.',
    INVALID_CREDENTIALS: 'Invalid credentials.',
    ACCESS_DENIED: 'Access denied for this role',
    STUDENT_DATA_NOT_FOUND: 'Student data not found in our records',
    BIRTHDATE_NOT_FOUND: 'Birth date not found in our records',
    BIRTHDATE_MISMATCH: 'Birth date and email do not match our records',
    NETWORK_ERROR: 'Network error. Please try again.'
} as const;

/**
 * Validates if a student exists and their credentials match
 */
export async function studentEmailExists(
    email: string,
    origin: string,
    birthDate?: string
): Promise<StudentResult> {
    try {
        // Early validation with consistent error handling
        if (!email || !origin) {
            return { success: false, error: ERROR_MESSAGES.MISSING_FIELDS };
        }

        if (origin !== 'student') {
            return { success: false, error: ERROR_MESSAGES.INVALID_ORIGIN };
        }

        // Query user with student relationship
        const user = await prisma.user.findUnique({
            where: { email },
            include: { student: true }
        });

        // Early returns for validation failures
        if (!user) {
            return { success: false, error: ERROR_MESSAGES.INVALID_CREDENTIALS };
        }

        if (user.role.toLowerCase() !== 'student') {
            return { success: false, error: ERROR_MESSAGES.ACCESS_DENIED };
        }

        // Validate birthdate if provided
        if (birthDate) {
            const birthdateValidation = validateBirthdate(user, birthDate);
            if (!birthdateValidation.success) {
                return birthdateValidation;
            }
        }

        // Success case
        return {
            success: true,
            role: user.role.toLowerCase(),
            birthDate: birthDate
        };
    } catch (error) {
        // Only log errors in development
        if (process.env.NODE_ENV === 'development') {
            console.error('Student login error:', error);
        }
        return { success: false, error: ERROR_MESSAGES.NETWORK_ERROR };
    }
}

/**
 * Validates student birthdate against database record
 */
function validateBirthdate(
    user: { student: { birthdate: Date | null } | null },
    providedBirthDate: string
): StudentResult {
    if (!user.student) {
        return { success: false, error: ERROR_MESSAGES.STUDENT_DATA_NOT_FOUND };
    }

    if (!user.student.birthdate) {
        return { success: false, error: ERROR_MESSAGES.BIRTHDATE_NOT_FOUND };
    }

    // Format dates for comparison
    const databaseDateString = new Date(user.student.birthdate)
        .toISOString()
        .split('T')[0];
    const providedDate = String(providedBirthDate).trim();

    if (providedDate !== databaseDateString) {
        return { success: false, error: ERROR_MESSAGES.BIRTHDATE_MISMATCH };
    }

    return { success: true };
}