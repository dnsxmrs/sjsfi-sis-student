// app/student/layout.tsx

import '@/app/globals.css'
import Header from '@/components/students/Header'
import Footer from '@/components/students/Footer'
import { ReactNode } from 'react'
import { getCurrentUser } from '../../_actions/getCurrentUser'
import DynamicTitle from '@/components/students/DynamicTitle'

export const metadata = {
    title: 'Student | SJSFI - SIS',
    description: 'SJSFI Student Information System',
}

export default async function StudentLayout({ children }: { children: ReactNode }) {
    // delay to test the loading screen
    // await new Promise(resolve => setTimeout(resolve, 3000));
    const currentUser = await getCurrentUser();
    const { firstName, lastName, studentNo } = currentUser || { firstName: 'Guest', lastName: 'User', studentNo: 'N/A' };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />
            <div className="flex-1 container mx-auto px-2 sm:px-4 py-4 sm:py-6 max-w-5xl">
                <DynamicTitle />
                <div className="bg-white rounded-lg shadow-sm mb-4 sm:mb-6">
                    <div className="p-3 sm:p-4">
                        <h2 className="text-base sm:text-lg font-medium text-red-800">
                            {firstName} {lastName} <span className="text-gray-700">({studentNo})</span>
                        </h2>
                    </div>
                </div>
                {children}
            </div>
            <Footer />
        </div>
    )
}
