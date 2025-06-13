'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Bell, UserCircle, Menu, Settings } from 'lucide-react';

interface AdminHeaderProps {
    currentDateTime: Date;
    profileMenuOpen: boolean;
    setProfileMenuOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
    setProfilePopupOpen: (open: boolean) => void;
    setLogoutModalOpen: (open: boolean) => void;
}

export default function AdminHeader({
    currentDateTime,
    profileMenuOpen,
    setProfileMenuOpen,
    setProfilePopupOpen,
    setLogoutModalOpen
}: AdminHeaderProps) {
    const pathname = usePathname();

    const formattedDateTime = `${currentDateTime.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }).replace(',', '')} - ${currentDateTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    })}`;

    const getPageTitle = (path: string) => {
        switch (path) {
            case '/admin/home':
                return 'Dashboard';
            case '/admin/system-logs':
                return 'System Logs';
            case '/admin/policies':
                return 'School Policies';
            case '/admin/settings':
                return 'Settings';
            default:
                return '';
        }
    };

    return (
        <header className="flex items-center justify-between bg-white shadow px-3 sm:px-4 md:px-6 py-2 sm:py-3 lg:py-4">
            <div className="flex-1 min-w-0">
                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-red-700 truncate">{getPageTitle(pathname)}</h1>
                <p className="text-xs sm:text-sm lg:text-base text-gray-500 truncate">{formattedDateTime}</p>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 flex-shrink-0">
                <Bell className="text-gray-600 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 cursor-pointer" onClick={() => setProfilePopupOpen(true)}>
                    <UserCircle className="text-gray-600 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                    <div className="text-right hidden sm:block">
                        <div className="font-medium text-red-700 text-xs sm:text-sm lg:text-base truncate max-w-32 lg:max-w-48">Regina Gail Federez</div>
                        <div className="text-xs lg:text-sm text-gray-500">2022-00000-11</div>
                    </div>
                </div>

                {/* Menu Button (View Profile, Change Pass, LogOut) */}
                <div className="relative">
                    <Menu
                        className="text-gray-600 cursor-pointer w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                        onClick={() => setProfileMenuOpen(prev => !prev)}
                    />

                    {profileMenuOpen && (
                        <div className="absolute right-0 mt-2 w-44 sm:w-48 lg:w-52 bg-white rounded-xl shadow-lg z-50 p-3 sm:p-4 space-y-3 sm:space-y-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                            <div className="flex items-center gap-2 hover:text-red-700 cursor-pointer transition-colors">
                                <UserCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                                <span>View Profile</span>
                            </div>
                            <div className="flex items-center gap-2 hover:text-red-700 cursor-pointer transition-colors">
                                <Settings className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                                <span className="whitespace-nowrap">Change Password</span>
                            </div>
                            <div
                                className="flex items-center gap-2 hover:text-red-700 cursor-pointer transition-colors"
                                onClick={() => {
                                    setProfileMenuOpen(false);
                                    setLogoutModalOpen(true);
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 16l4-4m0 0l-4-4m4 4H3m13 4v1a2 2 0 002 2h1a2 2 0 002-2V7a2 2 0 00-2-2h-1a2 2 0 00-2 2v1" />
                                </svg>
                                <span>Log Out</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
