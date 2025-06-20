'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { UserCircle } from 'lucide-react';
import UserIDModal from '@/components/admin/UserIDModal';
import LogoutModal from '@/components/admin/LogoutModal';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';

export default function RegistrarLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const [profilePopupOpen, setProfilePopupOpen] = useState(false);
    const [logoutModalOpen, setLogoutModalOpen] = useState(false);
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!(event.target as HTMLElement).closest('.relative')) {
                setProfileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
            <AdminSidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <AdminHeader
                    currentDateTime={currentDateTime}
                    profileMenuOpen={profileMenuOpen}
                    setProfileMenuOpen={setProfileMenuOpen}
                    setProfilePopupOpen={setProfilePopupOpen}
                    setLogoutModalOpen={setLogoutModalOpen}
                />

                {/* Page Content */}
                <main className="p-3 sm:p-4 md:p-6 lg:p-8 flex-1 overflow-auto">{children}</main>
            </div>

            {/* Profile Modal */}
            <UserIDModal isOpen={profilePopupOpen} onClose={() => setProfilePopupOpen(false)}>
                <div className="bg-red-800 h-16 sm:h-20 lg:h-24 rounded-t-xl flex items-center justify-center">
                    <div className="bg-white rounded-full p-1.5 sm:p-2">
                        <UserCircle className="text-black w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                    </div>
                </div>
                <div className="p-3 sm:p-4 lg:p-6 text-center">
                    <div className="text-red-700 font-semibold text-sm sm:text-base lg:text-lg">Regina Gail Federez</div>
                    <div className="text-xs sm:text-sm lg:text-base text-gray-600 mb-2 sm:mb-3">2022-00000-11</div>
                    <div className="space-y-0.5 sm:space-y-1 text-xs sm:text-sm lg:text-base text-gray-800">
                        <div>Info 1</div>
                        <div>Info 2</div>
                        <div>Info 3</div>
                        <div>Info 4</div>
                        <div>Info 5</div>
                    </div>
                </div>
            </UserIDModal>

            <LogoutModal
                isOpen={logoutModalOpen}
                onCancel={() => setLogoutModalOpen(false)}
                onConfirm={() => {
                    setLogoutModalOpen(false);
                    router.push('/');
                }}
            />
        </div>
    );
}
