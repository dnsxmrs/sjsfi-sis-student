'use server'

import { Notification } from '@/models/Notification'

export async function getNotifications(): Promise<Notification[]> {
    // delay for 3 seconds
    // await new Promise(resolve => setTimeout(resolve, 3000));
    // In a real application, this would fetch from a database
    return [
        {
            date: 'April 11, 2025',
            title: 'Class Suspension Notice',
            description: 'Due to inclement weather conditions, all classes are suspended tomorrow. Please stay safe and monitor official announcements for updates.'
        },
        {
            date: 'April 10, 2025',
            title: 'Final Grade Released for Araling Panlipunan',
            description: 'Your final grade for Araling Panlipunan has been posted. You can view your detailed grade breakdown in the Grades section.'
        },
        {
            date: 'April 09, 2025',
            title: 'Late Arrival Logged',
            description: 'You were marked late for your 8:00 AM class. Please ensure timely arrival to avoid further tardiness.'
        },
        {
            date: 'April 08, 2025',
            title: 'Reminder: Parent-Teacher Conference',
            description: 'The Parent-Teacher Conference is scheduled for next week. Please ensure your parents are available for the meeting.'
        },
        {
            date: 'April 07, 2025',
            title: 'Science Experiment Evaluation',
            description: 'Your science experiment project has been evaluated. You can view the feedback and grade in the Grades section.'
        },
        {
            date: 'April 04, 2025',
            title: 'Student Talent Showcase',
            description: 'The annual Student Talent Showcase is coming up. Registration is now open for interested participants.'
        },
        {
            date: 'April 02, 2025',
            title: 'Excused Absence Approved',
            description: 'Your absence request for April 1 has been approved. Please coordinate with your teachers for missed assignments.'
        },
        {
            date: 'April 01, 2025',
            title: 'Attendance Summary - March 2025',
            description: 'Your attendance summary for March 2025 is now available. You can view the detailed report in the Attendance section.'
        },
        {
            date: 'March 28, 2025',
            title: 'Math Quiz #4 Results',
            description: 'The results for Math Quiz #4 have been posted. You can view your score and the answer key in the Grades section.'
        }
    ]
}