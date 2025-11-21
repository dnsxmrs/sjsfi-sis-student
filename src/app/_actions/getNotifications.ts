'use server'

import { Notification } from '@/models/Notification'

export async function getNotifications(): Promise<Notification[]> {
    // TODO: IMPLEMENT ACTUAL NOTIFICATION FETCHING
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
        },
        // Added weekly notifications from April 18 to Sept 26
        {
            date: 'April 18, 2025',
            title: 'English Essay Results',
            description: 'Your essay on Philippine Literature has been graded. Check the Grades section for detailed feedback.'
        },
        {
            date: 'April 25, 2025',
            title: 'Upcoming Midterm Exams',
            description: 'Midterm exams will begin next week. Please review the exam schedule posted in the Announcements section.'
        },
        {
            date: 'May 02, 2025',
            title: 'Library Overdue Reminder',
            description: 'You have overdue books from the library. Please return them to avoid additional penalties.'
        },
        {
            date: 'May 09, 2025',
            title: 'Field Trip Announcement',
            description: 'A field trip to the National Museum is scheduled for May 20. Please submit your consent form to your class adviser.'
        },
        {
            date: 'May 16, 2025',
            title: 'Math Midterm Exam Results',
            description: 'The results of your Math Midterm Exam are now available in the Grades section.'
        },
        {
            date: 'May 23, 2025',
            title: 'School Clean-Up Drive',
            description: 'Join the community clean-up drive this Saturday. Participation will be credited as part of your community service hours.'
        },
        {
            date: 'May 30, 2025',
            title: 'Computer Science Project Deadline',
            description: 'The deadline for submitting your group project in Computer Science is on June 2. Please finalize your submissions.'
        },
        {
            date: 'June 06, 2025',
            title: 'First Semester Enrollment Reminder',
            description: 'Enrollment for the First Semester of SY 2025–2026 is now open. Visit the Registrar’s Office or enroll online.'
        },
        {
            date: 'June 13, 2025',
            title: 'Independence Day Program',
            description: 'Join us in celebrating Philippine Independence Day on June 14 with special performances and exhibits.'
        },
        {
            date: 'June 20, 2025',
            title: 'Final Exam Schedule Released',
            description: 'The schedule for Final Examinations is now posted. Please check the Exams section for your assigned dates.'
        },
        {
            date: 'June 27, 2025',
            title: 'Community Service Certificate Released',
            description: 'Certificates for completed community service hours are now available at the Guidance Office.'
        },
        {
            date: 'July 04, 2025',
            title: 'Final Exam Results – English',
            description: 'Your English Final Exam results are now posted. Please check the Grades section for your score.'
        },
        {
            date: 'July 11, 2025',
            title: 'Start of Semester Break',
            description: 'Classes are officially on break starting today. The next semester will begin on July 21.'
        },
        {
            date: 'July 18, 2025',
            title: 'Orientation for New Semester',
            description: 'Orientation for the new semester will be held on July 21. Attendance is required for all students.'
        },
        {
            date: 'July 25, 2025',
            title: 'First Day of Classes – 1st Semester',
            description: 'Welcome back! Classes for the 1st Semester of SY 2025–2026 officially start today.'
        },
        {
            date: 'August 01, 2025',
            title: 'Updated Class Schedule',
            description: 'Revised class schedules are now available in the Student Portal. Please check for any changes to your subjects.'
        },
        {
            date: 'August 08, 2025',
            title: 'Laboratory Safety Seminar',
            description: 'Attendance in the upcoming Laboratory Safety Seminar on August 12 is mandatory for all Science students.'
        },
        {
            date: 'August 15, 2025',
            title: 'Midterm Exam Coverage Released',
            description: 'The list of topics covered in the Midterm Exams is now available. Please use it as a guide for your review.'
        },
        {
            date: 'August 22, 2025',
            title: 'Student Council Elections',
            description: 'Student Council elections will be held on August 25. Campaign guidelines are posted on the bulletin board.'
        },
        {
            date: 'August 29, 2025',
            title: 'Math Midterm Results',
            description: 'Your Math Midterm Exam results are now posted in the Grades section.'
        },
        {
            date: 'September 05, 2025',
            title: 'Intramurals 2025',
            description: 'Intramurals will kick off on September 8. All students are encouraged to participate in sports and cultural activities.'
        },
        {
            date: 'September 12, 2025',
            title: 'Library System Maintenance',
            description: 'The online library system will be under maintenance this weekend. Please access resources beforehand.'
        },
        {
            date: 'September 19, 2025',
            title: 'Pre-Finals Review Week',
            description: 'Review sessions for Pre-Finals begin next week. Please check the schedule posted by your instructors.'
        },
        {
            date: 'September 26, 2025',
            title: 'Final Exam Schedule – 1st Semester',
            description: 'The Final Exam schedule for the 1st Semester is now available. Please check the Exams section for details.'
        }
    ]
}