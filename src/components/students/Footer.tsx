'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MessageCircleMore, X } from 'lucide-react'
import { siFacebook } from 'simple-icons'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { addFeedback } from '@/app/_actions/feedback'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    const [showFeedbackModal, setShowFeedbackModal] = useState(false)
    const [feedbackType, setFeedbackType] = useState('')
    const [feedbackText, setFeedbackText] = useState('')
    const [suggestion, setSuggestion] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmitFeedback = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // validate feedback type and text
        if (!feedbackType || !feedbackText) {
            toast.error('Please fill in all required fields.')
            setIsSubmitting(false)
            return
        }

        try {
            // server action to save feedback
            const result = await addFeedback({
                type: feedbackType,
                message: feedbackText,
                suggestion: suggestion || undefined, // optional field
            })

            if (!result.success) {
                toast.error(result.message || 'Failed to submit feedback. Please try again later.')
                setIsSubmitting(false)
                return
            }

            // Reset form
            setFeedbackType('')
            setFeedbackText('')
            setSuggestion('')
            setShowFeedbackModal(false)

            // You could show a success toast here
            toast.success('Thank you for your feedback! We appreciate your input.')
        } catch {
            toast.error('Failed to submit feedback. Please try again later.')
            // alert('There was an error submitting your feedback. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <footer className="bg-white">
            <div className="container mx-auto max-w-5xl px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* School Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/assets/sjsfi_logo.svg"
                                alt="SJSFI-SIS Logo"
                                width={40}
                                height={40}
                                className="h-10 w-10"
                            />
                            <h2 className="text-xl font-bold text-red-800">SJSFI-SIS</h2>
                        </div>
                        <p className="text-gray-600 text-sm">
                            St. Joseph School of Fairview, Inc.
                            <br />
                            Providing quality education since 1996
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/student/home" className="text-gray-600 hover:text-red-800 text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/student/schedule" className="text-gray-600 hover:text-red-800 text-sm">
                                    Schedule
                                </Link>
                            </li>
                            <li>
                                <Link href="/student/grades" className="text-gray-600 hover:text-red-800 text-sm">
                                    Grades
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="/student/request" className="text-gray-600 hover:text-red-800 text-sm">
                                    Request
                                </Link>
                            </li> */}
                            <li>
                                <Link href="https://sjsfi.vercel.app/privacy-policy" target='_blank' className="text-gray-600 hover:text-red-800 text-sm">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="https://sjsfi.vercel.app/terms-of-service" target='_blank' className="text-gray-600 hover:text-red-800 text-sm">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="https://sjsfi.vercel.app/data-privacy" target='_blank' className="text-gray-600 hover:text-red-800 text-sm">
                                    Data Privacy Notice
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2 text-gray-600 text-sm">
                                <Phone className="h-4 w-4" />
                                <span>(02) 8-693-5661</span>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-600 text-sm">
                                <Mail className="h-4 w-4" />
                                <a
                                    href="mailto:sjsfi96@gmail.com"
                                    rel="noopener noreferrer"
                                    className="hover:text-red-800"
                                >
                                    sjsfi96@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-600 text-sm">
                                <svg
                                    className="h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d={siFacebook.path} />
                                </svg>
                                <a
                                    href="https://www.facebook.com/sjsfi96"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-red-800"
                                >
                                    SJSFI Official
                                </a>
                            </li>
                            <li>
                                <button
                                    onClick={() => setShowFeedbackModal(true)}
                                    className="text-gray-600 hover:text-red-800 text-sm flex items-center space-x-1"
                                >
                                    <MessageCircleMore className="h-4 w-4" />
                                    <span>Submit Feedback</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-6 border-t text-center text-gray-600 text-sm">
                    <p>© {currentYear} | St. Joseph School of Fairview, Inc. All rights reserved.</p>
                </div>
            </div>

            {/* Feedback Modal */}
            {showFeedbackModal && (
                <div className="fixed inset-0 bg-black/50 text-black bg-opacity-10 flex items-center justify-center p-4 z-50 ">
                    <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between p-6 border-b">
                            <h2 className="text-xl font-semibold text-black">Submit Feedback</h2>
                            <button
                                onClick={() => setShowFeedbackModal(false)}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmitFeedback} className="p-6 space-y-4">
                            {/* Feedback Type */}
                            <div>
                                <label className="block text-sm font-medium text-black mb-2">
                                    Feedback Type <span className='text-red-500'>*</span>
                                </label>
                                <select
                                    value={feedbackType}
                                    onChange={(e) => setFeedbackType(e.target.value)}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                >
                                    <option value="" disabled>Select feedback type</option>
                                    <option value="bug-report">Bug Report</option>
                                    <option value="feature-request">Feature Request</option>
                                    <option value="comments">Comments</option>
                                </select>
                            </div>

                            {/* Feedback Text */}
                            <div>
                                <label className="block text-sm font-medium text-black mb-2">
                                    Your Feedback <span className='text-red-500'>*</span>
                                </label>
                                <textarea
                                    value={feedbackText}
                                    onChange={(e) => setFeedbackText(e.target.value)}
                                    required
                                    rows={4}
                                    placeholder="Please describe your feedback in detail..."
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
                                />
                            </div>

                            {/* Suggestion */}
                            <div>
                                <label className="block text-sm font-medium text-black mb-2">
                                    Suggestion (Optional)
                                </label>
                                <textarea
                                    value={suggestion}
                                    onChange={(e) => setSuggestion(e.target.value)}
                                    rows={3}
                                    placeholder="Any suggestions for improvement..."
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-end space-x-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowFeedbackModal(false)}
                                    className="px-4 py-2 text-sm font-medium text-black bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </footer>
    )
}