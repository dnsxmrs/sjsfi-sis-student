'use server'

import { ScheduleItem, DayOfWeek } from '@/app/_actions/models/ScheduleItem'
import { prisma } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs/server'

// Type guard to check if a string is a valid DayOfWeek
function isValidDayOfWeek(day: string): day is DayOfWeek {
    const validDays: DayOfWeek[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return validDays.includes(day as DayOfWeek);
}

export async function getSchedule(): Promise<ScheduleItem[]> {
    try {
        // Get user's email from Clerk using currentUser() helper
        const user = await currentUser();

        if (!user?.emailAddresses?.[0]?.emailAddress) {
            console.error('User email not found');
            return [];
        }

        const email = user.emailAddresses[0].emailAddress;

        // Fetch user from database using email
        const dbUser = await prisma.user.findUnique({
            where: { email },
            select: { id: true },
        });

        if (!dbUser) {
            console.error('User not found in database');
            return [];
        }

        // Fetch the student's application using the email
        const studentApplication = await prisma.studentApplication.findFirst({
            where: {
                emailAddress: email,
                status: 'APPROVED', // Only get approved applications
                deletedAt: null,
            },
            select: {
                sectionId: true,
                academicYearId: true,
                yearLevelId: true,
            },
        });

        if (!studentApplication || !studentApplication.sectionId) {
            console.error('Student application or section not found');
            return [];
        }

        // Fetch schedules for the student's section
        const schedules = await prisma.schedule.findMany({
            where: {
                sectionId: studentApplication.sectionId,
                deletedAt: null,
            },
            include: {
                termSubject: {
                    include: {
                        subject: true,
                    },
                },
            },
            orderBy: [
                { day: 'asc' },
                { startTime: 'asc' },
            ],
        });

        // Format schedules to match ScheduleItem interface
        const formattedSchedules: ScheduleItem[] = schedules
            .filter(schedule => isValidDayOfWeek(schedule.day)) // Filter out invalid days
            .map((schedule) => ({
                id: schedule.id.toString(),
                subject: schedule.termSubject.subject.name,
                time: `${schedule.startTime} - ${schedule.endTime}`,
                room: schedule.room,
                instructor: schedule.teacherName || 'TBA',
                day: schedule.day as DayOfWeek,
            }));

        return formattedSchedules;
    } catch (error) {
        console.error('Error fetching schedule:', error);
        return [];
    }
}
