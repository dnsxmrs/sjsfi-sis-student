import '@/app/globals.css'
import Header from '@/components/students/Header'
import Footer from '@/components/students/Footer'
import BackToTop from '@/components/students/BackToTop'
import DispalyName from '@/components/students/DIsplayName'
import { ReactNode } from 'react'

export const metadata = {
    title: 'Student | SJSFI - SIS',
    description: 'SJSFI Student Information System',
}

export default async function StudentLayout({ children }: { children: ReactNode }) {
    // delay to test the loading screen
    // await new Promise(resolve => setTimeout(resolve, 3000));

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />
            <div className="flex-1 container mx-auto px-2 sm:px-4 py-4 sm:py-6 max-w-5xl">
                <DispalyName />
                {children}
            </div>
            <Footer />
            <BackToTop />
        </div>
    )
}
