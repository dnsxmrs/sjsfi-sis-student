'use client'

import { useState, useEffect } from 'react'
import { BellIcon, FilterIcon, X, SearchX } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { getNotifications } from '@/app/_actions/getNotifications'
import NotificationSkeleton from '@/components/skeleton/NotificationSkeleton'
import { Notification } from '@/models/Notification'

export default function NotificationsTable() {
    const [filter, setFilter] = useState('')
    const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null)
    const [notifications, setNotifications] = useState<Notification[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const data = await getNotifications()
                setNotifications(data)
            } catch (error) {
                toast.error('Failed to load notifications')
                console.error('Error fetching notifications:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchNotifications()
    }, [])

    const filteredNotifications = filter
        ? notifications.filter((n) =>
            n.title.toLowerCase().includes(filter.toLowerCase())
        )
        : notifications

    const handleRowClick = (notification: Notification) => {
        setSelectedNotification(notification)
    }

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value)
        if (e.target.value) {
            toast.success(`Filtering notifications for: ${e.target.value}`)
        }
    }

    if (isLoading) {
        return <NotificationSkeleton />
    }

    return (
        <>
            <div className="bg-white rounded-lg shadow-sm mb-6">
                <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center space-x-2">
                        <BellIcon className="h-5 w-5 text-[#000]" />
                        <span className="font-medium text-xl text-[#000]">Notifications</span>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Filter by..."
                            value={filter}
                            onChange={handleFilterChange}
                            className="pl-8 pr-4 py-1 border rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#DAA520] focus:border-transparent"
                            aria-label="Filter notifications"
                        />
                        <FilterIcon className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    {filteredNotifications.length > 0 ? (
                        <table className="min-w-full">
                            <tbody>
                                {filteredNotifications.map((notification, index) => (
                                    <tr
                                        key={index}
                                        className={`border-b hover:bg-gray-50 cursor-pointer ${index % 2 === 0 ? 'bg-amber-50' : ''}`}
                                        onClick={() => handleRowClick(notification)}
                                    >
                                        <td className="py-3 px-4 text-sm text-gray-800 w-1/3">
                                            {notification.date}
                                        </td>
                                        <td className="py-3 px-4 text-sm text-gray-800">
                                            {notification.title}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-8 text-gray-500">
                            <SearchX className="h-12 w-12 mb-2" />
                            <p className="text-lg font-medium">No notifications found</p>
                            <p className="text-sm">
                                {filter ? `No results for "${filter}"` : 'No notifications available'}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Notification Modal */}
            {selectedNotification && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-semibold text-gray-900">
                                {selectedNotification.title}
                            </h3>
                            <button
                                onClick={() => setSelectedNotification(null)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center text-sm text-gray-500">
                                <span>{selectedNotification.date}</span>
                            </div>
                            <div className="text-gray-700">
                                <p>{selectedNotification.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
