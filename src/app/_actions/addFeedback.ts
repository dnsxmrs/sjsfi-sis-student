// add feedback to db
'use server'

import { prisma } from "@/lib/prisma";


interface FeedbackResponse {
    success: boolean;
    message: string;
    error?: boolean;
}

export interface Feedback {
    type: string;
    message: string;
    suggestion?: string;
}

export async function addFeedback(feedback: Feedback): Promise<FeedbackResponse> {
    try {
        await prisma.feedback.create({
            data: {
                type: feedback.type,
                message: feedback.message,
                suggestion: feedback.suggestion,
            },
        });

        return {
            success: true,
            message: "Feedback added successfully",
        };
    } catch (error) {
        console.error("Error adding feedback:", error);
        return {
            success: false,
            message: "Failed to add feedback: " + error,
            error: true,
        };
    }
}