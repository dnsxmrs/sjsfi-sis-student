'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Bell, UserCircle, Menu, X, SquareStack, PencilLine, BookMarked, Newspaper, ScrollText, Ellipsis, Settings } from 'lucide-react';
import Image from 'next/image';
import UserIDModal from '@/components/admin/UserIDModal';
import LogoutModal from '@/components/admin/LogoutModal';

export default function AdminHomeLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [profilePopupOpen, setProfilePopupOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedDateTime = `${currentDateTime.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).replace(',', '')} - ${currentDateTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  })}`;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.relative')) {
        setProfileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getPageTitle = (path: string) => {
    switch (path) {
      case '/registrar/home':
        return 'Dashboard';
      case '/registrar/register-student':
        return 'Register in Courses'; 
      case '/registrar/student-info':
        return 'Student Information';
      case '/registrar/generate-reports':
        return 'Generate Reports';
      case '/registrar/withdraw-request':
        return 'Withdraw Requests';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Mobile Top Bar */}
      <div className="md:hidden flex justify-between items-center bg-red-900 text-white px-4 py-3">
        <Image src="/assets/sjsfi_logo.svg" alt="SJSFI Logo" width={40} height={40} className="mb-2" />
        <div className="text-lg font-bold">SJSFI-SIS</div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle Menu">
          {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`fixed z-20 top-0 left-0 h-full w-64 bg-red-900 text-white transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:static md:translate-x-0 md:flex md:flex-col md:w-64 md:h-auto`}>
        <div className="flex flex-col h-full justify-between">
          {/* Navigation */}
          <div>
            <div className="flex flex-col items-center justify-center py-6 text-xl font-bold">
              <Image src="/assets/sjsfi_logo.svg" alt="SJSFI Logo" width={90} height={90} />
              <span>SJSFI-SIS</span>
            </div>
            <nav className="space-y-4 text-sm px-6 pt-4 md:pt-0">
              <Link href="/register/home" className={`flex items-center space-x-5 py-2 rounded hover:bg-red-700 ${pathname === '/admin/home' ? 'text-yellow-400' : ''}`}>
                <SquareStack className="w-8 h-8" />
                <span>Dashboard</span>
              </Link>
              <Link href="/register/register-student" className={`flex items-center space-x-5 py-2 rounded hover:bg-red-700 ${pathname === '/admin/system-logs' ? 'text-yellow-400' : ''}`}>
                <PencilLine className="w-8 h-8" />
                <span>Register in Courses</span>
              </Link>
              <Link href="/register/student-info" className={`flex items-center space-x-5 py-2 rounded hover:bg-red-700 ${pathname === '/admin/policies' ? 'text-yellow-400' : ''}`}>
                <BookMarked className="w-8 h-8" />
                <span>Student Information</span>
              </Link>
              <Link href="/register/generate-reports" className={`flex items-center space-x-5 py-2 rounded hover:bg-red-700 ${pathname === '/admin/settings' ? 'text-yellow-400' : ''}`}>
                <Newspaper className="w-8 h-8" />
                <span>Generate Reports</span>
              </Link>
              <Link href="/register/withdraw-requests" className={`flex items-center space-x-5 py-2 rounded hover:bg-red-700 ${pathname === '/admin/settings' ? 'text-yellow-400' : ''}`}>
                <ScrollText className="w-8 h-8" />
                <span>Withdraw Requests</span>
              </Link>
            </nav>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile menu */}
      {sidebarOpen && <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 z-10 bg-black opacity-30 md:hidden" />}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="flex items-center justify-between bg-white shadow px-4 py-3 md:px-6">
          <div>
            <h1 className="text-xl font-semibold text-red-700">{getPageTitle(pathname)}</h1>
            <p className="text-sm text-gray-500">{formattedDateTime}</p>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="text-gray-600" />
            <div className="flex items-center space-x-4 cursor-pointer" onClick={() => setProfilePopupOpen(true)}>
              <UserCircle className="text-gray-600" />
              <div className="text-right hidden md:block">
                <div className="font-medium text-red-700 text-sm">Regina Gail Federez</div>
                <div className="text-xs text-gray-500">2022-00000-11</div>
              </div>
            </div>

            {/* Menu Button (View Profile, Change Pass, LogOut) */}
            <div className="relative">
              <Ellipsis
                className="text-gray-600 cursor-pointer" 
                onClick={() => setProfileMenuOpen(prev => !prev)} 
              />

              {profileMenuOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-lg z-50 p-4 space-y-4 text-gray-800">
                  <div className="flex items-center gap-2 hover:text-red-700 cursor-pointer">
                    <UserCircle className="w-5 h-5" />
                    <span>View Profile</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-red-700 cursor-pointer">
                    <Settings className="w-5 h-5 shrink-0" />
                    <span className="whitespace-nowrap">Change Password</span>
                  </div>
                  <div 
                    className="flex items-center gap-2 hover:text-red-700 cursor-pointer"
                    onClick={() => {
                      setProfileMenuOpen(false);
                      setLogoutModalOpen(true);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 16l4-4m0 0l-4-4m4 4H3m13 4v1a2 2 0 002 2h1a2 2 0 002-2V7a2 2 0 00-2-2h-1a2 2 0 00-2 2v1" />
                    </svg>
                    <span>Log Out</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-6">{children}</main>
      </div>

      {/* Profile Modal */}
      <UserIDModal isOpen={profilePopupOpen} onClose={() => setProfilePopupOpen(false)}>
        <div className="bg-red-800 h-20 rounded-t-xl flex items-center justify-center">
          <div className="bg-white rounded-full p-2">
            <UserCircle className="text-black w-10 h-10" />
          </div>
        </div>
        <div className="p-4 text-center">
          <div className="text-red-700 font-semibold">Regina Gail Federez</div>
          <div className="text-sm text-gray-600 mb-3">2022-00000-11</div>
          <div className="space-y-1 text-sm text-gray-800">
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
