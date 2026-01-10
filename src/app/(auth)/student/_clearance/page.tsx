import React from 'react';

export default function ClearancePage() {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Clearance Status</h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Track your clearance requirements and completion status
                    </p>
                </div>

                {/* Overall Status Card */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">Overall Status</h2>
                            <p className="text-sm text-gray-500 mt-1">4 of 6 requirements completed</p>
                        </div>
                        <div className="text-right">
                            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                                Pending
                            </span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '66%' }}></div>
                        </div>
                    </div>
                </div>

                {/* Clearance Requirements */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">Requirements Checklist</h2>
                    </div>

                    <div className="divide-y divide-gray-200">
                        {/* Library Clearance */}
                        <div className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                            <div className="flex items-center space-x-4">
                                <div className="shrink-0">
                                    <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900">Library Clearance</h3>
                                    <p className="text-xs text-gray-500">No pending books or fees</p>
                                </div>
                            </div>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Cleared
                            </span>
                        </div>

                        {/* Tuition Payment */}
                        <div className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                            <div className="flex items-center space-x-4">
                                <div className="shrink-0">
                                    <svg className="h-6 w-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900">Tuition Payment</h3>
                                    <p className="text-xs text-gray-500">Balance: ₱5,000.00</p>
                                </div>
                            </div>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                Pending
                            </span>
                        </div>

                        {/* ID Return */}
                        <div className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                            <div className="flex items-center space-x-4">
                                <div className="shrink-0">
                                    <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900">ID Return</h3>
                                    <p className="text-xs text-gray-500">Student ID submitted</p>
                                </div>
                            </div>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Cleared
                            </span>
                        </div>

                        {/* Guidance Office */}
                        <div className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                            <div className="flex items-center space-x-4">
                                <div className="shrink-0">
                                    <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900">Guidance Office</h3>
                                    <p className="text-xs text-gray-500">No violations on record</p>
                                </div>
                            </div>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Cleared
                            </span>
                        </div>

                        {/* Subject Clearance */}
                        <div className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                            <div className="flex items-center space-x-4">
                                <div className="shrink-0">
                                    <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900">Subject Clearance</h3>
                                    <p className="text-xs text-gray-500">All grades submitted</p>
                                </div>
                            </div>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Cleared
                            </span>
                        </div>

                        {/* Document Submission */}
                        <div className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                            <div className="flex items-center space-x-4">
                                <div className="shrink-0">
                                    <svg className="h-6 w-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900">Document Submission</h3>
                                    <p className="text-xs text-gray-500">Missing: Exit Interview Form</p>
                                </div>
                            </div>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                Pending
                            </span>
                        </div>
                    </div>
                </div>

                {/* Notes */}
                <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <div className="flex">
                        <div className="shrink-0">
                            <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-blue-700">
                                Please settle all pending requirements before the end of the semester. Contact the respective offices for assistance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}