'use server'

import { prisma } from "@/lib/prisma";

export type StudentResult = {
    success: boolean;
    error?: string;
    redirectUrl?: string;
    role?: string;
    birthDate?: string;
}

export async function studentEmailExists(
    email: string,
    origin: string,
    birthDate?: string // Add optional birth date parameter
): Promise<StudentResult> {
    try {
        // only allow requests with email and origin
        if (!email || !origin) {
            console.error('Validation error: Missing email or origin');
            return { success: false, error: 'Missing email or origin' };
        }

        // only allow requests from 'student' origin
        if (origin !== 'student') {
            console.error(`Invalid origin attempt: ${origin}`);
            return { success: false, error: 'Invalid origin attempt.' };
        }

        console.log(`🔍 Checking if student exists: ${email} with role: ${origin}${birthDate ? ` and birth date: ${birthDate}` : ''}`);

        // Step 1: Check if the user exists in the database
        const user = await prisma.user.findUnique({
            where: { email },
            include: {
                student: true
            }
        });

        // Step 2: If user does not exist, return error
        if (!user) {
            console.error('User not found');
            return { success: false, error: 'Invalid credentials.' };
        }

        // Step 3: If user exists but is not a student, return unauthorized error
        if (user.role.toLowerCase() !== 'student') {
            console.error(`Unauthorized login attempt for email: ${email}`);
            return { success: false, error: 'Access denied for this role' };
        }

        // Step 4: If birth date is provided, validate it
        if (birthDate) {
            if (!user.student) {
                console.error('Student data not found in database');
                return {
                    success: false,
                    error: 'Student data not found in our records'
                };
            }

            if (!user.student.birthdate) {
                console.error('Birth date not found in student records');
                return {
                    success: false,
                    error: 'Birth date not found in our records'
                };
            }

            // Convert database date to YYYY-MM-DD format for comparison
            const databaseDate = new Date(user.student.birthdate);
            const databaseDateString = databaseDate.toISOString().split('T')[0]; // Gets YYYY-MM-DD format
            const providedDate = String(birthDate).trim();

            if (providedDate !== databaseDateString) {
                console.error(`Birth date mismatch: provided ${providedDate}, database ${databaseDateString}`);
                return {
                    success: false,
                    error: 'Birth date and email do not match our records'
                };
            }

            console.log(`✅ Birth date validated: ${providedDate}`);
        }

        // Step 5: If user exists and is a student, return success
        console.log(`✅ Student user found: ${user.email} with role: ${user.role}${birthDate ? ` and birth date: ${birthDate}` : ''}`);
        return {
            success: true,
            role: user.role.toLowerCase(),
            birthDate: birthDate
        }
    } catch (error) {
        // Log the error for debugging
        console.error('Internal server error in studentEmailExists:', error);
        return { success: false, error: 'Network error. Please try again.' };
    }
}