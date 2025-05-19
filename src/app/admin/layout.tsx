'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bell, UserCircle, Menu, X } from 'lucide-react';
import UserIDModal from '@/components/admin/UserIDModal';

export default function AdminHomeLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profilePopupOpen, setProfilePopupOpen] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDateTime = `${currentDateTime.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).replace(',', '')} - ${currentDateTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })}`;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Mobile Top Bar */}
      <div className="md:hidden flex justify-between items-center bg-red-900 text-white px-4 py-3">
        <div className="text-lg font-bold">SJSFI-SIS</div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle Menu">
          {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed z-20 top-0 left-0 h-full w-64 bg-red-900 text-white transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:static md:translate-x-0 md:flex md:flex-col md:w-64 md:h-auto`}
      >
        <div className="hidden md:flex items-center justify-center py-6 text-xl font-bold">SJSFI-SIS</div>
        <nav className="space-y-4 text-sm px-6 pt-4 md:pt-0">
          <Link href="/admin/home" className="block py-2 hover:bg-red-700 rounded">Dashboard</Link>
          <Link href="/admin/system-logs" className="block py-2 hover:bg-red-700 rounded">System Logs</Link>
          <Link href="/admin/policies" className="block py-2 hover:bg-red-700 rounded">School Policies</Link>
          <Link href="/admin/settings" className="block py-2 hover:bg-red-700 rounded">Settings</Link>
        </nav>
      </aside>

      {/* Overlay for mobile menu */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-10 bg-black opacity-30 md:hidden"
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="flex items-center justify-between bg-white shadow px-4 py-3 md:px-6">
          <div>
            <h1 className="text-xl font-semibold text-red-700">Dashboard</h1>
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
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-6">{children}</main>
      </div>

      {/* Reusable Profile Modal */}
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
    </div>
  );
}