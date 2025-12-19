export function GradesTableSkeleton() {
    return (
        <div className="mb-8 grades-container animate-pulse">
            {/* Header Skeleton */}
            <div className="bg-gray-300 h-10 rounded-t-md"></div>

            {/* Academic Excellence Award Skeleton */}
            <div className="bg-gray-100 border-l-4 border-gray-300 px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <div className="h-4 bg-gray-300 rounded w-48 mb-2"></div>
                        <div className="h-3 bg-gray-300 rounded w-64"></div>
                    </div>
                    <div className="ml-4">
                        <div className="h-8 bg-gray-300 rounded-full w-32"></div>
                    </div>
                </div>
            </div>

            {/* Table Skeleton */}
            <div className="bg-white p-4">
                <div className="overflow-x-auto border rounded-b-md">
                    <table className="min-w-[900px] w-full text-base text-left">
                        <thead className="bg-gray-100">
                            <tr>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300">
                                    <span className="sr-only">Subject Code</span>
                                    <div className="h-4 bg-gray-300 rounded w-20" aria-hidden="true"></div>
                                </th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300">
                                    <span className="sr-only">Subject</span>
                                    <div className="h-4 bg-gray-300 rounded w-24" aria-hidden="true"></div>
                                </th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300">
                                    <span className="sr-only">Faculty</span>
                                    <div className="h-4 bg-gray-300 rounded w-20" aria-hidden="true"></div>
                                </th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300">
                                    <span className="sr-only">School Year</span>
                                    <div className="h-4 bg-gray-300 rounded w-24" aria-hidden="true"></div>
                                </th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300">
                                    <span className="sr-only">1st Grading</span>
                                    <div className="h-4 bg-gray-300 rounded w-20 ml-auto" aria-hidden="true"></div>
                                </th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300">
                                    <span className="sr-only">2nd Grading</span>
                                    <div className="h-4 bg-gray-300 rounded w-20 ml-auto" aria-hidden="true"></div>
                                </th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300">
                                    <span className="sr-only">3rd Grading</span>
                                    <div className="h-4 bg-gray-300 rounded w-20 ml-auto" aria-hidden="true"></div>
                                </th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300">
                                    <span className="sr-only">4th Grading</span>
                                    <div className="h-4 bg-gray-300 rounded w-20 ml-auto" aria-hidden="true"></div>
                                </th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300">
                                    <span className="sr-only">Final Grade</span>
                                    <div className="h-4 bg-gray-300 rounded w-20 ml-auto" aria-hidden="true"></div>
                                </th>
                                <th scope="col" className="px-2 py-2 border-[0.5px] border-gray-300">
                                    <span className="sr-only">Grade Status</span>
                                    <div className="h-4 bg-gray-300 rounded w-24" aria-hidden="true"></div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(5)].map((_, idx) => (
                                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-2 py-2 border-[0.5px] border-gray-300">
                                        <div className="h-3 bg-gray-300 rounded w-16"></div>
                                    </td>
                                    <td className="px-2 py-2 border-[0.5px] border-gray-300">
                                        <div className="h-3 bg-gray-300 rounded w-32"></div>
                                    </td>
                                    <td className="px-2 py-2 border-[0.5px] border-gray-300">
                                        <div className="h-3 bg-gray-300 rounded w-28"></div>
                                    </td>
                                    <td className="px-2 py-2 border-[0.5px] border-gray-300">
                                        <div className="h-3 bg-gray-300 rounded w-20"></div>
                                    </td>
                                    <td className="px-2 py-2 border-[0.5px] border-gray-300 text-right">
                                        <div className="h-3 bg-gray-300 rounded w-8 ml-auto"></div>
                                    </td>
                                    <td className="px-2 py-2 border-[0.5px] border-gray-300 text-right">
                                        <div className="h-3 bg-gray-300 rounded w-8 ml-auto"></div>
                                    </td>
                                    <td className="px-2 py-2 border-[0.5px] border-gray-300 text-right">
                                        <div className="h-3 bg-gray-300 rounded w-8 ml-auto"></div>
                                    </td>
                                    <td className="px-2 py-2 border-[0.5px] border-gray-300 text-right">
                                        <div className="h-3 bg-gray-300 rounded w-8 ml-auto"></div>
                                    </td>
                                    <td className="px-2 py-2 border-[0.5px] border-gray-300 text-right">
                                        <div className="h-3 bg-gray-300 rounded w-8 ml-auto"></div>
                                    </td>
                                    <td className="px-2 py-2 border-[0.5px] border-gray-300">
                                        <div className="h-6 bg-gray-300 rounded-full w-20"></div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
