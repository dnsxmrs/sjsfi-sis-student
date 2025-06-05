'use server'

import { prisma } from "@/lib/prisma";

export type StudentResult = {
    success: boolean;
    error?: string;
    redirectUrl?: string;
}

export async function studentEmailExists(email: string, origin: string): Promise<StudentResult> {
    try {
        // only allow requests with email and origin
        if (!email || !origin) {
            console.error('Validation error: Missing email or origin');
            return { success: false, error: 'Missing email or origin' };
            // return { success: false, error: 'Invalid credentials. sl' };
        }

        // only allow requests from 'student' origin
        if (origin !== 'student') {
            console.error(`Invalid origin attempt: ${origin}`);
            return { success: false, error: 'Invalid origin attempt.' };
            // return { success: false, error: 'Invalid credentials. sl' };
        }

        // Step 1: Check if the user exists in the database
        const user = await prisma.user.findUnique({
            where: { email },
            select: { id: true, email: true, role: true }
        });

        // Step 2: If user does not exist, return error
        if (!user) {
            console.error('User not found');
            return { success: false, error: 'User not found' };
            // return { success: false, error: 'Invalid credentials. sl' };
        }

        // Step 3: If user exists but is not a student, return unauthorized error
        if (user.role !== 'Student') {
            console.error(`Unauthorized login attempt for email: ${email}`);
            return { success: false, error: 'Unauthorized login attempt' };
            // return { success: false, error: 'Invalid credentials. sl' };
        }

        // Step 4: If user exists and is a student, return success
        console.error(`User found: ${user.email} with role: ${user.role}`);
        return { success: true }
    } catch (error) {
        // Log the error for debugging
        console.error('Internal server error in studentEmailExists:', error);
        return { success: false, error: 'Internal server error in studentEmailExists:' };
        // return { success: false, error: 'An unexpected error occurred. Please try again later. sl' };
    }
}