'use client'

import { getNotifications } from '@/app/_actions/notification'
import { Notification } from '@/app/_actions/models/Notification'
import NotificationSkeleton from '@/components/skeleton/NotificationSkeleton'
import { toast } from 'react-hot-toast'
import { useState, useEffect, useRef } from 'react'
import { BellIcon, SearchIcon, X, SearchX } from 'lucide-react'

export default function NotificationsTable() {
    const [filter, setFilter] = useState('')
    const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null)
    const [notifications, setNotifications] = useState<Notification[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const modalRef = useRef<HTMLDivElement>(null)

    const ITEMS_PER_PAGE = 10

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const data = await getNotifications()
                if (data.success) {
                    // Transform notifications to include formatted date
                    const transformedNotifications = data.notifications.map(notif => ({
                        ...notif,
                        date: new Date(notif.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })
                    }))
                    setNotifications(transformedNotifications)
                } else {
                    toast.error(data.message || 'Failed to load notifications')
                    setNotifications([])
                }
            } catch {
                toast.error('Failed to load notifications')
                setNotifications([])
                // console.error('Error fetching notifications:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchNotifications()
    }, [])

    // Handle modal animation and click outside
    useEffect(() => {
        if (selectedNotification) {
            setIsModalOpen(true)
        } else {
            setIsModalOpen(false)
        }
    }, [selectedNotification])

    // Handle click outside modal to close it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                closeModal()
            }
        }

        if (selectedNotification) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [selectedNotification])

    const filteredNotifications = filter
        ? notifications.filter((n) =>
            n.title.toLowerCase().includes(filter.toLowerCase())
        )
        : notifications

    // Sort notifications from latest to oldest (most recent first)
    const sortedNotifications = [...filteredNotifications].sort((a, b) => {
        // Convert date strings to Date objects for comparison
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return dateB.getTime() - dateA.getTime() // Latest first
    })

    // Pagination calculations
    const totalItems = sortedNotifications.length
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE)
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    const paginatedNotifications = sortedNotifications.slice(startIndex, endIndex)

    const handleRowClick = (notification: Notification) => {
        setSelectedNotification(notification)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        // Delay clearing the notification to allow exit animation
        setTimeout(() => {
            setSelectedNotification(null)
        }, 200)
    }

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value)
        setCurrentPage(1) // Reset to first page when filtering
        if (e.target.value) {
            // toast.success(`Filtering notifications for: ${e.target.value}`)
        }
    }

    const goToPage = (page: number) => {
        setCurrentPage(page)
    }

    const goToPreviousPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1))
    }

    const goToNextPage = () => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages))
    }

    return (
        <>
            <div className="bg-white rounded-lg shadow-sm mb-6">
                <div className="flex flex-col sm:flex-row items-center justify-between p-2 sm:p-4 border-b gap-2">
                    <div className="flex items-center space-x-2">
                        <BellIcon className="h-4 w-4 sm:h-5 sm:w-5 text-[#800000]" />
                        <span className="font-medium text-lg sm:text-xl text-[#800000]">Notifications</span>
                    </div>
                    <div className="relative w-full sm:w-auto">
                        <input
                            type="text"
                            placeholder="Search for notifications..."
                            value={filter}
                            onChange={handleFilterChange}
                            className="w-full pl-8 pr-4 py-1 border rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#800000] focus:border-transparent"
                            aria-label="Filter notifications"
                        />
                        <SearchIcon className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    {isLoading ? (
                        <NotificationSkeleton />
                    ) : paginatedNotifications.length > 0 ? (
                        <table className="min-w-full">
                            <tbody>
                                {paginatedNotifications.map((notification, index) => (
                                    <tr
                                        key={index}
                                        className={`border-b hover:bg-gray-50 cursor-pointer ${index % 2 === 0 ? 'bg-amber-50' : ''}`}
                                        onClick={() => handleRowClick(notification)}
                                    >
                                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-800 w-1/3">
                                            {notification.date}
                                        </td>
                                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-800">
                                            {notification.title}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-8 text-gray-500">
                            <SearchX className="h-12 w-12 mb-2" />
                            <p className="text-lg">
                                {filter ? `No results for "${filter}"` : 'No notifications available'}
                            </p>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-between px-2 sm:px-4 py-3 border-t bg-black/5">
                        <div className="flex items-center text-xs sm:text-sm text-gray-600">
                            <span>
                                Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of {totalItems} notifications
                            </span>
                        </div>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                            <button
                                onClick={goToPreviousPage}
                                disabled={currentPage === 1}
                                className="px-2 sm:px-3 py-1 text-xs sm:text-sm border border-black/20 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-black/10 transition-colors text-black"
                            >
                                Previous
                            </button>

                            {/* Page numbers */}
                            <div className="flex items-center space-x-1">
                                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                    let pageNumber;
                                    if (totalPages <= 5) {
                                        pageNumber = i + 1;
                                    } else if (currentPage <= 3) {
                                        pageNumber = i + 1;
                                    } else if (currentPage >= totalPages - 2) {
                                        pageNumber = totalPages - 4 + i;
                                    } else {
                                        pageNumber = currentPage - 2 + i;
                                    }

                                    return (
                                        <button
                                            key={pageNumber}
                                            onClick={() => goToPage(pageNumber)}
                                            className={`px-2 sm:px-3 py-1 text-xs sm:text-sm border rounded-md transition-colors ${currentPage === pageNumber
                                                ? 'bg-[#800000] text-white border-[#800000]'
                                                : 'hover:bg-black/10 border-black/20 text-black'
                                                }`}
                                        >
                                            {pageNumber}
                                        </button>
                                    );
                                })}
                            </div>

                            <button
                                onClick={goToNextPage}
                                disabled={currentPage === totalPages}
                                className="px-2 sm:px-3 py-1 text-xs sm:text-sm border border-black/20 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-black/10 transition-colors text-black"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Notification Modal */}
            {selectedNotification && (
                <div
                    className={`fixed inset-0 bg-black/50 flex items-center justify-center p-2 sm:p-4 z-50 transition-opacity duration-200 ease-out ${isModalOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div
                        ref={modalRef}
                        className={`bg-white rounded-lg shadow-xl w-full max-w-lg p-3 sm:p-6 transition-all duration-300 ease-out transform ${isModalOpen
                            ? 'opacity-100 scale-100 translate-y-0'
                            : 'opacity-0 scale-95 translate-y-2'
                            }`}
                    >
                        <div className="flex justify-between items-start mb-3 sm:mb-4">
                            <h3 className="text-lg sm:text-xl font-semibold text-[#800000]">
                                {selectedNotification.title}
                            </h3>
                            <button
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-700 transition-colors duration-150"
                            >
                                <X className="h-4 w-4 sm:h-5 sm:w-5" />
                            </button>
                        </div>
                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-center text-xs sm:text-sm text-gray-500">
                                <span>{selectedNotification.date}</span>
                            </div>
                            <div className="text-sm sm:text-base text-gray-700">
                                <p>{selectedNotification.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
