import NotificationsTable from '@/app/(auth)/student/home/NotificationsTable'
import PolicySection from '@/app/(auth)/student/home/PolicySection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Home | Student SIS',
    description: 'Welcome to your SJSFI Student Dashboard. View your latest notifications, announcements, and important academic policies. Stay updated with your academic journey.',
    keywords: [
        'SJSFI student dashboard',
        'student home',
        'academic notifications',
        'student announcements',
        'academic policies',
        'student portal home',
        'SJSFI notifications'
    ],
    openGraph: {
        title: 'SJSFI Student Dashboard',
        description: 'Access your personalized student dashboard with notifications, announcements, and important academic policies from SJSFI.',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'SJSFI Student Dashboard',
        description: 'Access your personalized student dashboard with notifications, announcements, and important academic policies.',
    },
    robots: {
        index: false, // Private student area
        follow: false,
    },
}

export default function HomePage() {
    return (
        <>
            <NotificationsTable />
            <PolicySection />
        </>
    )
}
