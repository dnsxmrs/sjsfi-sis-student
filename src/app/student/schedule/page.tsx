'use client'

import { useState, useEffect } from 'react'
import { Calendar, Clock, MapPin } from 'lucide-react'
import { getSchedule } from '@/app/_actions/getSchedule'
import { toast } from 'react-hot-toast'
import { ScheduleItem, DayOfWeek } from '@/models/ScheduleItem'
import ScheduleSkeleton from '@/components/skeleton/ScheduleSkeleton'
const days: DayOfWeek[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

export default function SchedulePage() {
    const today = new Date()
    let day = today.toLocaleDateString('en-US', { weekday: 'long' }) as DayOfWeek
    if (day === 'Saturday' || day === 'Sunday') {
        day = 'Monday'
    }
    const [selectedDay, setSelectedDay] = useState<DayOfWeek>(day)
    const [scheduleData, setScheduleData] = useState<ScheduleItem[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const data = await getSchedule()
                setScheduleData(data)
            } catch (error) {
                toast.error('Failed to load schedule')
                console.error('Error fetching schedule:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchSchedule()
    }, [])

    const filteredSchedule = scheduleData.filter(item => item.day === selectedDay)

    return (
        <>
            <div className="space-y-6">
                {/* Day Selector */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                    {days.map(day => (
                        <button
                            key={day}
                            onClick={() => setSelectedDay(day)}
                            className={`px-4 py-2 rounded-md whitespace-nowrap transition-colors ${
                                selectedDay === day
                                    ? 'bg-red-800 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-50'
                            }`}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                {/* Schedule List */}
                {isLoading ? (
                    <ScheduleSkeleton />
                ) : filteredSchedule.length > 0 ? (
                    <div className="space-y-4">
                        {filteredSchedule.map(item => (
                            <div
                                key={item.id}
                                className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {item.subject}
                                    </h3>
                                    <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">
                                        {item.day}
                                    </span>
                                </div>

                                <div className="space-y-2 text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        <span>{item.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4" />
                                        <span>{item.room}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        <span>{item.instructor}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-8 bg-white rounded-lg shadow-sm">
                        <p className="text-gray-500">No classes scheduled for {selectedDay}</p>
                    </div>
                )}
            </div>
        </>
    )
}
