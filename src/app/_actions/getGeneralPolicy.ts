'use server'

import { GeneralPolicy } from '@/models/GeneralPolicy'
import { prisma } from '@/lib/prisma'

export async function getGeneralPolicy(): Promise<GeneralPolicy | null> {
    try {
        console.log("Fetching general policy from database...")

        // Fetch the most recent non-deleted general policy
        const policy = await prisma.generalPolicy.findFirst({
            where: {
                deletedAt: null
            },
            orderBy: {
                updatedAt: 'desc'
            }
        })

        if (!policy) {
            console.log("No general policy found in database")
            return null
        }

        console.log("General policy fetched successfully:", policy.title)

        // Map database fields to the interface
        return {
            title: policy.title,
            description: policy.content, // Map 'content' field to 'description'
            lastUpdated: policy.updatedAt.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
        }

    } catch (error) {
        console.error("Error fetching general policy:", error)
        return null
    }
}
