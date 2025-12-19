'use client'

import { getGeneralPolicy } from '@/app/_actions/policy'
import QuillDisplay from '@/components/students/QuillDisplay'
import PolicySkeleton from '@/components/skeleton/PolicySkeleton'
import { GeneralPolicy } from '@/app/_actions/models/GeneralPolicy'
import { useState, useEffect } from 'react'

export default function PolicySection() {
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

    if (isLoading) {
        return <PolicySkeleton />
    }

    if (policy) {
        return (
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
        )
    }

    return (
        <div className="bg-white rounded-lg shadow-sm mb-4 sm:mb-6">
            <div className="p-3 sm:p-4 border-b">
                <h2 className="text-lg sm:text-xl font-medium text-[#000]">General Policy</h2>
            </div>
            <div className="p-3 sm:p-4 text-[#000]">
                <p className="text-sm text-gray-500 text-center">No general policy available at the moment.</p>
            </div>
        </div>
    )
}
