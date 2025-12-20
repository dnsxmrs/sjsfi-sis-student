'use client'

import { getGeneralPolicy } from '@/app/_actions/policy'
import QuillDisplay from '@/components/students/QuillDisplay'
import PolicySkeleton from '@/components/skeleton/PolicySkeleton'
import { GeneralPolicy } from '@/app/_actions/models/GeneralPolicy'
import { useState, useEffect } from 'react'
import { Newspaper } from 'lucide-react'

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
                <div className="flex items-center space-x-2 p-3 sm:p-4 border-b">
                    <Newspaper className="h-4 w-4 sm:h-5 sm:w-5 text-[#800000]" />
                    <span className="font-medium text-lg sm:text-xl text-[#800000]">{policy.title}</span>
                </div>
                <div className="p-3 sm:p-4 text-black">
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
            <div className="flex items-center space-x-2 p-3 sm:p-4 border-b">
                <Newspaper className="h-4 w-4 sm:h-5 sm:w-5 text-[#800000]" />
                <span className="font-medium text-lg sm:text-xl text-[#800000]">General Policy</span>
            </div>
            <div className="p-3 sm:p-4 text-black">
                <p className="text-sm text-gray-500 text-center">No general policy available at the moment.</p>
            </div>
        </div>
    )
}
