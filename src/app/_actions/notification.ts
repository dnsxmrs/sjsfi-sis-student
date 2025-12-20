'use server';

import { prisma } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';

export async function getNotifications() {
    try {
        // Get user's email from Clerk using currentUser() helper
        const user = await currentUser();

        if (!user?.emailAddresses?.[0]?.emailAddress) {
            return {
                success: false,
                message: 'User email not found',
                notifications: [],
            };
        }

        // Fetch userId from database using email
        const dbUser = await prisma.user.findUnique({
            where: { email: user.emailAddresses[0].emailAddress },
            select: { id: true },
        });

        if (!dbUser) {
            return {
                success: false,
                message: 'User not found in database',
                notifications: [],
            };
        }

        // Fetch notifications for this user:
        // 1. GENERAL scope (for everyone)
        // 2. User-specific notifications (via NotificationRecipient)
        const notifications = await prisma.notification.findMany({
            where: {
                OR: [
                    { scope: 'GENERAL' },
                    {
                        recipients: {
                            some: {
                                userId: dbUser.id
                            }
                        }
                    },
                ],
            },
            include: {
                recipients: {
                    where: {
                        userId: dbUser.id
                    },
                    select: {
                        isRead: true,
                        readAt: true,
                    }
                }
            },
            orderBy: {
                createdAt: 'desc',
            },
            take: 50,
        });

        const formattedNotifications = notifications.map((notif) => ({
            id: notif.id,
            title: notif.title,
            description: notif.description,
            type: notif.type,
            scope: notif.scope,
            createdAt: notif.createdAt,
            senderType: notif.senderType,
            isRead: notif.recipients[0]?.isRead ?? null,
            readAt: notif.recipients[0]?.readAt ?? null,
        }));

        return {
            success: true,
            notifications: formattedNotifications,
        };
    } catch (error) {
        console.error('Error fetching notifications:', error);
        return {
            success: false,
            message: 'Failed to fetch notifications',
            notifications: [],
        };
    }
}
