'use client'

import { getSchedule } from '@/app/_actions/schedule'
import ScheduleSkeleton from '@/components/skeleton/ScheduleSkeleton'
import { ScheduleItem, DayOfWeek } from '@/app/_actions/models/ScheduleItem'
import { toast } from 'react-hot-toast'
import { useState, useEffect } from 'react'
import { Clock, MapPin } from 'lucide-react'

export default function SchedulePage() {
    const [scheduleData, setScheduleData] = useState<ScheduleItem[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const days: DayOfWeek[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    const timeSlots = [
        '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
        '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
    ]

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

        const parseTime = (time: string) => {
            const [timeStr, period] = time.trim().split(' ')
            const [hour, minute = '0'] = timeStr.split(':')
            let hourNum = parseInt(hour)
            const minuteNum = parseInt(minute)

            if (period === 'PM' && hourNum !== 12) hourNum += 12
            if (period === 'AM' && hourNum === 12) hourNum = 0

            return { hour: hourNum, minute: minuteNum, totalMinutes: hourNum * 60 + minuteNum }
        }

        const start = parseTime(startTime)
        const end = parseTime(endTime)

        return {
            start: start.hour,
            end: end.hour,
            startMinutes: start.totalMinutes,
            endMinutes: end.totalMinutes,
            duration: end.totalMinutes - start.totalMinutes
        }
    }

    // Helper function to calculate position and height for calendar events
    const calculateEventPosition = (timeString: string) => {
        const timeRange = parseTimeRange(timeString)
        const startHour = 7 // 7:00 AM is our first slot
        const slotHeight = 80 // Height of each hour slot in pixels

        // Calculate top position (distance from start of day)
        const hoursFromStart = timeRange.start - startHour
        const top = hoursFromStart * slotHeight

        // Calculate height based on duration
        const durationHours = timeRange.duration / 60
        const height = durationHours * slotHeight

        return { top, height }
    }

    // Get current date info
    const today = new Date()
    const currentDay = today.toLocaleDateString('en-US', { weekday: 'long' }) as DayOfWeek

    // Group schedule by day
    const scheduleByDay = days.reduce((acc, day) => {
        acc[day] = scheduleData.filter(item => item.day === day)
        return acc
    }, {} as Record<DayOfWeek, ScheduleItem[]>)

    // Create a consistent color mapping for all unique subjects
    const uniqueSubjects = Array.from(new Set(scheduleData.map(item => item.subject)))
    const subjectColorMap = new Map<string, {
        bg: string
        border: string
        text: string
        textLight: string
    }>()

    // Assign colors to subjects in a round-robin fashion to avoid repetition
    uniqueSubjects.forEach((subject, index) => {
        const colors = [
            { bg: 'bg-red-100', border: 'border-red-500', text: 'text-red-900', textLight: 'text-red-700' },
            { bg: 'bg-blue-100', border: 'border-blue-500', text: 'text-blue-900', textLight: 'text-blue-700' },
            { bg: 'bg-green-100', border: 'border-green-500', text: 'text-green-900', textLight: 'text-green-700' },
            { bg: 'bg-purple-100', border: 'border-purple-500', text: 'text-purple-900', textLight: 'text-purple-700' },
            { bg: 'bg-yellow-100', border: 'border-yellow-500', text: 'text-yellow-900', textLight: 'text-yellow-700' },
            { bg: 'bg-indigo-100', border: 'border-indigo-500', text: 'text-indigo-900', textLight: 'text-indigo-700' },
            { bg: 'bg-pink-100', border: 'border-pink-500', text: 'text-pink-900', textLight: 'text-pink-700' },
            { bg: 'bg-teal-100', border: 'border-teal-500', text: 'text-teal-900', textLight: 'text-teal-700' },
            { bg: 'bg-orange-100', border: 'border-orange-500', text: 'text-orange-900', textLight: 'text-orange-700' },
            { bg: 'bg-cyan-100', border: 'border-cyan-500', text: 'text-cyan-900', textLight: 'text-cyan-700' },
            { bg: 'bg-lime-100', border: 'border-lime-500', text: 'text-lime-900', textLight: 'text-lime-700' },
            { bg: 'bg-amber-100', border: 'border-amber-500', text: 'text-amber-900', textLight: 'text-amber-700' },
            { bg: 'bg-emerald-100', border: 'border-emerald-500', text: 'text-emerald-900', textLight: 'text-emerald-700' },
            { bg: 'bg-fuchsia-100', border: 'border-fuchsia-500', text: 'text-fuchsia-900', textLight: 'text-fuchsia-700' },
            { bg: 'bg-rose-100', border: 'border-rose-500', text: 'text-rose-900', textLight: 'text-rose-700' },
        ]

        subjectColorMap.set(subject, colors[index % colors.length])
    })

    // Updated function to get subject color from the map
    const getSubjectColor = (subject: string) => {
        return subjectColorMap.get(subject) || {
            bg: 'bg-gray-100',
            border: 'border-gray-500',
            text: 'text-gray-900',
            textLight: 'text-gray-700'
        }
    }

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
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                        timeZone: "Asia/Manila",
                    })}
                </p>
            </div>

            {/* Calendar Grid - Desktop and Mobile Responsive */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Desktop Grid View - Hidden on mobile */}
                <div className="hidden lg:block">
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

                    {/* Time Slots and Schedule Items - Desktop */}
                    <div className="relative">
                        {/* Time grid background */}
                        {timeSlots.map((timeSlot) => (
                            <div key={timeSlot} className="grid grid-cols-6 border-b border-gray-100 h-20">
                                {/* Time Column */}
                                <div className="p-4 bg-gray-50 border-r border-gray-200 text-sm font-medium text-gray-600 flex items-start">
                                    {timeSlot}
                                </div>

                                {/* Day Columns - Empty for background grid */}
                                {days.map(day => (
                                    <div
                                        key={`${day}-${timeSlot}`}
                                        className={`border-r border-gray-200 last:border-r-0 ${day === currentDay ? 'bg-red-25' : ''
                                            }`}
                                    />
                                ))}
                            </div>
                        ))}

                        {/* Absolutely positioned schedule events - Desktop */}
                        {days.map((day, dayIndex) => {
                            const daySchedule = scheduleByDay[day] || []

                            return daySchedule.map(item => {
                                const colors = getSubjectColor(item.subject)
                                const { top, height } = calculateEventPosition(item.time)

                                // Calculate left position based on day column
                                const dayColumnWidth = `${100 / 6}%` // 6 columns total (time + 5 days)
                                const leftOffset = `${((dayIndex + 1) * 100) / 6}%` // +1 to skip time column

                                return (
                                    <div
                                        key={`${item.id}-${day}`}
                                        className={`absolute ${colors.bg} border-l-4 ${colors.border} rounded-r-md p-2 m-1 hover:opacity-80 transition-all shadow-sm z-10`}
                                        style={{
                                            top: `${top}px`,
                                            height: `${Math.max(height - 8, 60)}px`, // Subtract margin, minimum height
                                            left: leftOffset,
                                            width: `calc(${dayColumnWidth} - 8px)`, // Subtract margin
                                            marginLeft: '4px',
                                            marginRight: '4px'
                                        }}
                                    >
                                        <div className={`text-sm font-semibold ${colors.text} mb-1 truncate`}>
                                            {item.subject}
                                        </div>
                                        <div className={`text-xs ${colors.textLight} space-y-1`}>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-3 w-3 flex-shrink-0" />
                                                <span className="truncate">{item.time}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="h-3 w-3 flex-shrink-0" />
                                                <span className="truncate">{item.room}</span>
                                            </div>
                                            <div className="text-xs truncate">
                                                {item.instructor}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        })}
                    </div>
                </div>

                {/* Mobile List View - Hidden on desktop */}
                <div className="lg:hidden">
                    {/* Day Selector for Mobile */}
                    <div className="flex overflow-x-auto border-b border-gray-200 bg-gray-50">
                        {days.map(day => (
                            <button
                                key={day}
                                className={`flex-shrink-0 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 ${day === currentDay
                                        ? 'border-red-500 text-red-800 bg-red-50'
                                        : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                                    }`}
                                onClick={() => {
                                    // Scroll to day section
                                    const dayElement = document.getElementById(`mobile-day-${day}`)
                                    dayElement?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                }}
                            >
                                <div>{day.slice(0, 3)}</div>
                                {day === currentDay && <div className="text-xs mt-1">Today</div>}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Day Sections */}
                    <div className="divide-y divide-gray-200">
                        {days.map(day => {
                            const daySchedule = scheduleByDay[day] || []

                            return (
                                <div key={day} id={`mobile-day-${day}`} className="p-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className={`text-lg font-semibold ${day === currentDay ? 'text-red-800' : 'text-gray-900'
                                            }`}>
                                            {day}
                                        </h3>
                                        {day === currentDay && (
                                            <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                                                Today
                                            </span>
                                        )}
                                    </div>

                                    {daySchedule.length > 0 ? (
                                        <div className="space-y-3">
                                            {daySchedule.map(item => {
                                                const colors = getSubjectColor(item.subject)
                                                return (
                                                    <div
                                                        key={item.id}
                                                        className={`${colors.bg} border-l-4 ${colors.border} rounded-r-lg p-3 shadow-sm`}
                                                    >
                                                        <div className={`text-base font-semibold ${colors.text} mb-2`}>
                                                            {item.subject}
                                                        </div>
                                                        <div className={`text-sm ${colors.textLight} space-y-2`}>
                                                            <div className="flex items-center gap-2">
                                                                <Clock className="h-4 w-4 flex-shrink-0" />
                                                                <span>{item.time}</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <MapPin className="h-4 w-4 flex-shrink-0" />
                                                                <span>{item.room}</span>
                                                            </div>
                                                            <div className="text-sm font-medium">
                                                                {item.instructor}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    ) : (
                                        <div className="text-center py-8 text-gray-500">
                                            <div className="text-sm">No classes scheduled for {day}</div>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Summary Cards */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
            </div> */}
        </div>
    )
}
