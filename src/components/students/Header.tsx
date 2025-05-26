'use client'

import React, { useState } from 'react'
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { toast } from 'react-hot-toast'
import { UserButton, useClerk } from '@clerk/nextjs'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()
    const { signOut } = useClerk()

    // const handleNavClick = (item: string) => {
    //     toast.success(`Navigated to ${item}`)
    // }

    const handleSignOut = async () => {
        try {
            await signOut()
            toast.success('Signed out successfully')
        } catch (error) {
            toast.error('Failed to sign out: ' + error)
        }
    }

    const handleNavClick = () => {
        setIsMenuOpen(false)
    }

    const navItems = [
        { label: 'Home', href: '/student/home' },
        { label: 'Schedule', href: '/student/schedule' },
        { label: 'Grades', href: '/student/grades' },
        { label: 'Request', href: '/student/request' },
    ]

    // Function to determine if the current path matches a nav item
    const isActivePath = (href: string) => {
        return pathname === href
    }

    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto flex justify-between items-center px-4 py-2 max-w-5xl">
                {/* Logo Section */}
                <div className="flex items-center space-x-3">
                    <Image
                        src="/assets/sjsfi_logo.svg"
                        alt="SJSFI-SIS Logo"
                        width={40}
                        height={40}
                        className="h-10 w-10"
                    />
                    <h1 className="text-xl font-bold text-red-800">SJSFI-SIS</h1>
                </div>

                {/* Navigation Section */}
                <nav className="hidden md:flex">
                    <ul className="flex space-x-8">
                        {navItems.map(({ label, href }) => (
                            <li key={label}>
                                <Link
                                    href={href}
                                    className={`py-4 px-1 transition-colors ${isActivePath(href)
                                        ? 'text-red-800 border-b-2 border-red-800'
                                        : 'text-gray-600 hover:text-red-800'
                                        }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* User Button Section */}
                <div className="hidden md:block">
                    <UserButton />
                </div>

                {/* make the div flex */}
                <div className="flex justify-end">
                    {/* Mobile Menu Button */}
                    <div className="py-3 px-4 flex justify-end md:hidden">
                        <UserButton />
                    </div>
                    <button
                        // if button is clicked, it will turn to #800000
                        className="md:hidden text-black hover:text-red-800 "
                        onClick={() => {
                            setIsMenuOpen(!isMenuOpen)
                        }}
                    >
                        <MenuIcon />
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <ul className="flex flex-col">

                        {navItems.map(({ label, href }) => (
                            <li key={label}>
                                <Link
                                    href={href}
                                    onClick={handleNavClick}
                                    className={`block py-3 px-4 w-full text-left transition-colors ${isActivePath(href)
                                        ? 'text-red-800 font-medium'
                                        : 'text-gray-600 hover:text-red-800'
                                        }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                        <li className="border-t">
                            <Link
                                href="/user-profile"
                                onClick={handleNavClick}
                                className="block py-3 px-4 w-full text-left text-gray-600 hover:text-red-800 transition-colors"
                            >
                                Manage Account
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={handleSignOut}
                                className="block py-3 px-4 w-full text-left text-gray-600 hover:text-red-800 transition-colors"
                            >
                                Sign Out
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header
