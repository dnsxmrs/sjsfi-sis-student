'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import { siFacebook } from 'simple-icons'

export default function Footer() {
    const currentYear = new Date().getFullYear()

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
                            <li>
                                <Link href="/student/request" className="text-gray-600 hover:text-red-800 text-sm">
                                    Request
                                </Link>
                            </li>
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
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-6 border-t text-center text-gray-600 text-sm">
                    <p>© {currentYear} | St. Joseph School of Fairview, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
} 