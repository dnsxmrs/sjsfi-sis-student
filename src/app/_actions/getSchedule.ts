'use server'

import { ScheduleItem } from '@/models/ScheduleItem'

export async function getSchedule(): Promise<ScheduleItem[]> {
    // TODO: IMPLEMENT ACTUAL SCHEDULE FETCHING

    return [
        {
            id: '1',
            subject: 'Web Development',
            time: '8:00 AM - 11:00 AM',
            room: 'Room 101',
            instructor: 'Prof. Smith',
            day: 'Monday'
        },
        {
            id: '2',
            subject: 'Database Management',
            time: '11:00 AM - 2:00 PM',
            room: 'Room 202',
            instructor: 'Prof. Johnson',
            day: 'Monday'
        },
        {
            id: '3',
            subject: 'Network Security',
            time: '1:00 PM - 4:00 PM',
            room: 'Room 303',
            instructor: 'Prof. Williams',
            day: 'Wednesday'
        },
        {
            id: '4',
            subject: 'Mobile App Development',
            time: '8:00 AM - 11:00 AM',
            room: 'Room 404',
            instructor: 'Prof. Brown',
            day: 'Tuesday'
        },
        {
            id: '5',
            subject: 'Cloud Computing',
            time: '2:00 PM - 5:00 PM',
            room: 'Room 505',
            instructor: 'Prof. Davis',
            day: 'Monday'
        },
        {
            id: '6',
            subject: 'Artificial Intelligence',
            time: '8:00 AM - 11:00 AM',
            room: 'Room 606',
            instructor: 'Prof. Wilson',
            day: 'Thursday'
        },
        {
            id: '7',
            subject: 'Software Engineering',
            time: '1:00 PM - 4:00 PM',
            room: 'Room 707',
            instructor: 'Prof. Taylor',
            day: 'Thursday'
        },
        {
            id: '8',
            subject: 'Data Structures',
            time: '8:00 AM - 11:00 AM',
            room: 'Room 808',
            instructor: 'Prof. Anderson',
            day: 'Friday'
        },
        {
            id: '9',
            subject: 'Operating Systems',
            time: '1:00 PM - 4:00 PM',
            room: 'Room 909',
            instructor: 'Prof. Martinez',
            day: 'Friday'
        }
    ]
}
