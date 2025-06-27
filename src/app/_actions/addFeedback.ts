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

// Map frontend feedback types to database enum values
function mapFeedbackType(type: string): 'BUG_REPORT' | 'FEATURE_REQUEST' | 'COMPLIMENT' | 'COMPLAINT' | 'SUGGESTION' {
    const typeMap: { [key: string]: 'BUG_REPORT' | 'FEATURE_REQUEST' | 'COMPLIMENT' | 'COMPLAINT' | 'SUGGESTION' } = {
        'bug-report': 'BUG_REPORT',
        'feature-request': 'FEATURE_REQUEST',
        'comments': 'COMPLIMENT',
        'complaint': 'COMPLAINT',
        'suggestion': 'SUGGESTION'
    };

    return typeMap[type] || 'COMPLIMENT'; // Default fallback
}

export async function addFeedback(feedback: Feedback): Promise<FeedbackResponse> {
    try {
        console.log("Attempting to save feedback:", feedback);

        const mappedType = mapFeedbackType(feedback.type);
        console.log("Mapped feedback type:", mappedType);

        await prisma.feedback.create({
            data: {
                type: mappedType,
                message: feedback.message,
                suggestion: feedback.suggestion || null,
            },
        });

        console.log("Feedback saved successfully");
        return {
            success: true,
            message: "Feedback added successfully",
        };
    } catch (error) {
        console.error("Error adding feedback:", error);
        return {
            success: false,
            message: "Failed to add feedback. Please try again.",
            error: true,
        };
    }
}