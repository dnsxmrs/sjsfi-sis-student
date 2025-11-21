export default function ScheduleSkeleton() {
    return (
        <div className="space-y-6">
            {/* Header Skeleton */}
            <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="h-4 w-72 bg-gray-200 rounded animate-pulse" />
            </div>

            {/* Calendar Grid Skeleton */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Desktop Grid View - Hidden on mobile */}
                <div className="hidden lg:block">
                    {/* Day Headers Skeleton */}
                    <div className="grid grid-cols-6 border-b border-gray-200">
                        <div className="p-4 bg-gray-50 border-r border-gray-200">
                            <div className="h-5 w-12 bg-gray-200 rounded animate-pulse" />
                        </div>
                        {[...Array(5)].map((_, index) => (
                            <div
                                key={index}
                                className="p-4 bg-gray-50 border-r border-gray-200 last:border-r-0"
                            >
                                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse mx-auto mb-1" />
                                <div className="h-3 w-10 bg-gray-200 rounded animate-pulse mx-auto" />
                            </div>
                        ))}
                    </div>

                    {/* Time Slots Skeleton */}
                    <div className="relative">
                        {[...Array(6)].map((_, timeIndex) => (
                            <div key={timeIndex} className="grid grid-cols-6 border-b border-gray-100 h-20">
                                {/* Time Column */}
                                <div className="p-4 bg-gray-50 border-r border-gray-200 flex items-start">
                                    <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                                </div>

                                {/* Day Columns with Schedule Item Skeletons */}
                                {[...Array(5)].map((_, dayIndex) => (
                                    <div
                                        key={dayIndex}
                                        className="border-r border-gray-200 last:border-r-0 relative p-2"
                                    >
                                        {/* Randomly show skeleton schedule items */}
                                        {Math.random() > 0.6 && (
                                            <div className="bg-gray-100 border-l-4 border-gray-300 rounded-r-md p-2 h-16">
                                                <div className="h-3 w-20 bg-gray-200 rounded animate-pulse mb-1" />
                                                <div className="h-2 w-16 bg-gray-200 rounded animate-pulse mb-1" />
                                                <div className="h-2 w-12 bg-gray-200 rounded animate-pulse" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile List View Skeleton - Hidden on desktop */}
                <div className="lg:hidden">
                    {/* Day Selector Skeleton */}
                    <div className="flex overflow-x-auto border-b border-gray-200 bg-gray-50 p-2">
                        {[...Array(5)].map((_, index) => (
                            <div key={index} className="flex-shrink-0 px-4 py-3 mx-1">
                                <div className="h-4 w-8 bg-gray-200 rounded animate-pulse mb-1" />
                                <div className="h-3 w-12 bg-gray-200 rounded animate-pulse" />
                            </div>
                        ))}
                    </div>

                    {/* Mobile Day Sections Skeleton */}
                    <div className="divide-y divide-gray-200">
                        {[...Array(3)].map((_, dayIndex) => (
                            <div key={dayIndex} className="p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
                                    <div className="h-5 w-16 bg-gray-200 rounded-full animate-pulse" />
                                </div>

                                {/* Schedule Items Skeleton */}
                                <div className="space-y-3">
                                    {[...Array(Math.floor(Math.random() * 3) + 1)].map((_, itemIndex) => (
                                        <div
                                            key={itemIndex}
                                            className="bg-gray-100 border-l-4 border-gray-300 rounded-r-lg p-3"
                                        >
                                            <div className="h-5 w-32 bg-gray-200 rounded animate-pulse mb-2" />
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
                                                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
                                                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                                                </div>
                                                <div className="h-4 w-28 bg-gray-200 rounded animate-pulse" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Summary Cards Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[...Array(3)].map((_, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm p-4">
                        <div className="h-5 w-24 bg-gray-200 rounded animate-pulse mb-2" />
                        <div className="h-8 w-8 bg-gray-200 rounded animate-pulse mb-1" />
                        <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                    </div>
                ))}
            </div>
        </div>
    )
}