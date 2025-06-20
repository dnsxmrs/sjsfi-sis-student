export default function RegistrarHome() {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    Welcome to Registrar Dashboard
                </h1>
                <p className="text-gray-600 mb-4">
                    Manage student records, academic transcripts, and enrollment data.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h3 className="font-semibold text-red-800 mb-2">Student Records</h3>
                        <p className="text-sm text-red-600">Manage and view student information</p>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h3 className="font-semibold text-blue-800 mb-2">Enrollment</h3>
                        <p className="text-sm text-blue-600">Process student enrollment and transfers</p>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h3 className="font-semibold text-green-800 mb-2">Transcripts</h3>
                        <p className="text-sm text-green-600">Generate and manage academic transcripts</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h2>
                <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">System ready for registrar operations</span>
                        <span className="text-xs text-gray-400">Just now</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
