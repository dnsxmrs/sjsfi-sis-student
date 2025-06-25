'use server'

import { prisma } from "@/lib/prisma";

export type StudentResult = {
    success: boolean;
    error?: string;
    redirectUrl?: string;
    role?: string;
    studentNumber?: string;
}

export async function studentEmailExists(
    email: string,
    origin: string,
    studentNumber?: string // Add optional student number parameter
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

        console.log(`🔍 Checking if student exists: ${email} with role: ${origin}${studentNumber ? ` and student number: ${studentNumber}` : ''}`);        // Step 1: Check if the user exists in the database
        const user = await prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                email: true,
                role: true,
                student: {
                    select: {
                        studentNumber: true
                    }
                }
            }
        });

        // Step 2: If user does not exist, return error
        if (!user) {
            console.error('User not found');
            return { success: false, error: 'Invalid credentials.' };
        }

        // Step 3: If user exists but is not a student, return unauthorized error
        if (user.role !== 'student') {
            console.error(`Unauthorized login attempt for email: ${email}`);
            return { success: false, error: 'Access denied for this role' };
        }

        // Step 4: If student number is provided, validate it
        if (studentNumber) {
            if (!user.student || !user.student.studentNumber) {
                console.error('Student number not found in database');
                return {
                    success: false,
                    error: 'Student number not found in our records'
                };
            }

            // Compare student numbers (convert both to strings and trim whitespace)
            const providedNumber = String(studentNumber).trim();
            const databaseNumber = String(user.student.studentNumber).trim();

            if (providedNumber !== databaseNumber) {
                console.error(`Student number mismatch: provided ${providedNumber}, database ${databaseNumber}`);
                return {
                    success: false,
                    error: 'Student number and email do not match our records'
                };
            }

            console.log(`✅ Student number validated: ${providedNumber}`);
        }

        // Step 5: If user exists and is a student, return success
        console.log(`✅ Student user found: ${user.email} with role: ${user.role}${studentNumber ? ` and student number: ${studentNumber}` : ''}`);
        return {
            success: true,
            role: user.role.toLowerCase(),
            studentNumber: studentNumber
        }
    } catch (error) {
        // Log the error for debugging
        console.error('Internal server error in studentEmailExists:', error);
        return { success: false, error: 'Network error. Please try again.' };
    }
}