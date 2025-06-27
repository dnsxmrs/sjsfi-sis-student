'use client'

import { useState, useEffect } from 'react'
import { Clock, MapPin } from 'lucide-react'
import { getSchedule } from '@/app/_actions/getSchedule'
import { toast } from 'react-hot-toast'
import { ScheduleItem, DayOfWeek } from '@/models/ScheduleItem'
import ScheduleSkeleton from '@/components/skeleton/ScheduleSkeleton'

const days: DayOfWeek[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
const timeSlots = [
    '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
]

export default function SchedulePage() {
    const [scheduleData, setScheduleData] = useState<ScheduleItem[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const data = await getSchedule()
                setScheduleData(data)
            } catch {
                toast.error('Failed to load schedule')
            } finally {
                setIsLoading(false)
            }
        }

        fetchSchedule()
    }, [])

    // Helper function to parse time and get start/end hours
    const parseTimeRange = (timeString: string) => {
        const [startTime, endTime] = timeString.split(' - ')

        const parseHour = (time: string) => {
            const [timeStr, period] = time.trim().split(' ')
            const [hour] = timeStr.split(':')
            let hourNum = parseInt(hour)
            if (period === 'PM' && hourNum !== 12) hourNum += 12
            if (period === 'AM' && hourNum === 12) hourNum = 0
            return hourNum
        }

        return {
            start: parseHour(startTime),
            end: parseHour(endTime)
        }
    }

    // Helper function to check if this is the starting slot for a class
    const isStartingSlot = (classTime: string, slotTime: string) => {
        const classRange = parseTimeRange(classTime)
        const slotHour = parseTimeRange(slotTime + ' - ' + slotTime).start

        return slotHour === classRange.start
    }

    // Generate colors for subjects
    const getSubjectColor = (subject: string) => {
        const colors = [
            { bg: 'bg-red-100', border: 'border-red-500', text: 'text-red-900', textLight: 'text-red-700' },
            { bg: 'bg-blue-100', border: 'border-blue-500', text: 'text-blue-900', textLight: 'text-blue-700' },
            { bg: 'bg-green-100', border: 'border-green-500', text: 'text-green-900', textLight: 'text-green-700' },
            { bg: 'bg-purple-100', border: 'border-purple-500', text: 'text-purple-900', textLight: 'text-purple-700' },
            { bg: 'bg-yellow-100', border: 'border-yellow-500', text: 'text-yellow-900', textLight: 'text-yellow-700' },
            { bg: 'bg-indigo-100', border: 'border-indigo-500', text: 'text-indigo-900', textLight: 'text-indigo-700' },
            { bg: 'bg-pink-100', border: 'border-pink-500', text: 'text-pink-900', textLight: 'text-pink-700' },
            { bg: 'bg-teal-100', border: 'border-teal-500', text: 'text-teal-900', textLight: 'text-teal-700' },
        ]

        // Create a simple hash from subject name
        let hash = 0
        for (let i = 0; i < subject.length; i++) {
            hash = subject.charCodeAt(i) + ((hash << 5) - hash)
        }

        return colors[Math.abs(hash) % colors.length]
    }

    // Get current date info
    const today = new Date()
    const currentDay = today.toLocaleDateString('en-US', { weekday: 'long' }) as DayOfWeek

    // Group schedule by day
    const scheduleByDay = days.reduce((acc, day) => {
        acc[day] = scheduleData.filter(item => item.day === day)
        return acc
    }, {} as Record<DayOfWeek, ScheduleItem[]>)

    if (isLoading) {
        return <ScheduleSkeleton />
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-sm p-4">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Weekly Schedule</h1>
                <p className="text-gray-600">
                    {today.toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </p>
            </div>

            {/* Calendar Grid */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Day Headers */}
                <div className="grid grid-cols-6 border-b border-gray-200">
                    <div className="p-4 bg-gray-50 font-medium text-gray-900 border-r border-gray-200">
                        Time
                    </div>
                    {days.map(day => (
                        <div
                            key={day}
                            className={`p-4 text-center font-medium border-r border-gray-200 last:border-r-0 ${day === currentDay
                                ? 'bg-red-50 text-red-800'
                                : 'bg-gray-50 text-gray-900'
                                }`}
                        >
                            <div className="text-sm">{day}</div>
                            {day === currentDay && (
                                <div className="text-xs mt-1 font-normal">Today</div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Time Slots and Schedule Items */}
                <div className="relative">
                    {timeSlots.map((timeSlot) => (
                        <div key={timeSlot} className="grid grid-cols-6 border-b border-gray-100 min-h-[80px]">
                            {/* Time Column */}
                            <div className="p-4 bg-gray-50 border-r border-gray-200 text-sm font-medium text-gray-600">
                                {timeSlot}
                            </div>

                            {/* Day Columns */}
                            {days.map(day => {
                                const daySchedule = scheduleByDay[day] || []
                                const slotsForThisHour = daySchedule.filter(item =>
                                    isStartingSlot(item.time, timeSlot)
                                )

                                return (
                                    <div
                                        key={`${day}-${timeSlot}`}
                                        className={`p-2 border-r border-gray-200 last:border-r-0 relative ${day === currentDay ? 'bg-red-25' : ''
                                            }`}
                                    >
                                        {slotsForThisHour.map(item => {
                                            const colors = getSubjectColor(item.subject)
                                            const timeRange = parseTimeRange(item.time)
                                            const duration = timeRange.end - timeRange.start

                                            return (
                                                <div
                                                    key={item.id}
                                                    className={`${colors.bg} border-l-4 ${colors.border} rounded-r-md p-3 mb-2 hover:opacity-80 transition-all cursor-pointer`}
                                                    style={{
                                                        minHeight: duration > 1 ? `${duration * 80}px` : '60px'
                                                    }}
                                                >
                                                    <div className={`text-sm font-semibold ${colors.text} mb-1`}>
                                                        {item.subject}
                                                    </div>
                                                    <div className={`text-xs ${colors.textLight} space-y-1`}>
                                                        <div className="flex items-center gap-1">
                                                            <Clock className="h-3 w-3" />
                                                            <span>{item.time}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <MapPin className="h-3 w-3" />
                                                            <span>{item.room}</span>
                                                        </div>
                                                        <div className="text-xs">
                                                            {item.instructor}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    ))}
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Today&apos;s Classes</h3>
                    <div className="text-2xl font-bold text-red-600">
                        {scheduleByDay[currentDay]?.length || 0}
                    </div>
                    <p className="text-sm text-gray-600">scheduled for today</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Total Classes</h3>
                    <div className="text-2xl font-bold text-blue-600">
                        {scheduleData.length}
                    </div>
                    <p className="text-sm text-gray-600">this week</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Next Class</h3>
                    {(() => {
                        const nextClass = scheduleByDay[currentDay]?.[0]
                        return nextClass ? (
                            <div>
                                <div className="text-lg font-bold text-green-600">
                                    {nextClass.subject}
                                </div>
                                <p className="text-sm text-gray-600">{nextClass.time}</p>
                            </div>
                        ) : (
                            <div className="text-sm text-gray-500">No more classes today</div>
                        )
                    })()}
                </div>
            </div>
        </div>
    )
}
