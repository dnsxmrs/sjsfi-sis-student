export default function NotificationSkeleton() {
    return (
        <div className="bg-white rounded-lg shadow-sm mb-6">
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <tbody>
                        {[...Array(10)].map((_, index) => (
                            <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-amber-50' : ''}`}>
                                <td className="py-3 px-4 w-1/3">
                                    <div className="h-4 bg-gray-200 rounded animate-pulse" />
                                </td>
                                <td className="py-3 px-4">
                                    <div className="h-4 bg-gray-200 rounded animate-pulse" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}