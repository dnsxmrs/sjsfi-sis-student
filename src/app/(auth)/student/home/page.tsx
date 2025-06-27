// app/student/home/page.tsx
'use client'

import { useState, useEffect } from 'react'
import NotificationsTable from '@/components/students/NotificationsTable'
import { getGeneralPolicy } from '@/app/_actions/getGeneralPolicy'
import PolicySkeleton from '@/components/skeleton/PolicySkeleton'
import { GeneralPolicy } from '@/models/GeneralPolicy'
import QuillDisplay from '@/components/QuillDisplay'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

export default function HomePage() {
    const [policy, setPolicy] = useState<GeneralPolicy | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchPolicy = async () => {
            try {
                const data = await getGeneralPolicy()
                setPolicy(data)
            } catch {
                setPolicy(null)
            } finally {
                setIsLoading(false)
            }
        }

        fetchPolicy()
    }, [])

    return (
        <>
            <NotificationsTable />

            {isLoading ? (
                <PolicySkeleton />
            ) : policy ? (
                <div className="bg-white rounded-lg shadow-sm mb-4 sm:mb-6">
                    <div className="p-3 sm:p-4 border-b">
                        <h2 className="text-lg sm:text-xl font-medium text-[#000]">{policy.title}</h2>
                    </div>
                    <div className="p-3 sm:p-4 text-[#000]">
                        <p className="text-xs sm:text-sm text-gray-500 text-justify mb-2">Last updated: {policy.lastUpdated}</p>
                        <QuillDisplay
                            content={policy.description}
                            className="text-sm sm:text-base text-black text-justify"
                        />
                    </div>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow-sm mb-4 sm:mb-6">
                    <div className="p-3 sm:p-4 border-b">
                        <h2 className="text-lg sm:text-xl font-medium text-[#000]">General Policy</h2>
                    </div>
                    <div className="p-3 sm:p-4 text-[#000]">
                        <p className="text-sm text-gray-500 text-center">No general policy available at the moment.</p>
                    </div>
                </div>
            )}
        </>
    )
}
