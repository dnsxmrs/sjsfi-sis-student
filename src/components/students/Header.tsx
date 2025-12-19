"use client";

import React from "react";
import { Home, Calendar, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

const NAV_ITEMS = [
    { label: "Home", href: "/student/home", icon: Home },
    { label: "Schedule", href: "/student/schedule", icon: Calendar },
    { label: "Grades", href: "/student/grades", icon: GraduationCap },
] as const;

const USER_BUTTON_APPEARANCE = {
    elements: {
        userPreview: { display: "none" },
        userButtonPopoverFooter: { display: "none" },
        userPreviewAvatarBox: { display: "none" },
    },
} as const;

const USER_PROFILE_APPEARANCE = {
    elements: {
        profileSectionPrimaryButton__profile: { display: "none" },
        profileSection__connectedAccounts: { display: "none" },
        profileSectionPrimaryButton__emailAddresses: { display: "none" },
        profileSection__danger: { display: "none" },
        menuButtonEllipsis: { display: "none" },
    },
} as const;

const Header = () => {
    const pathname = usePathname();
    const isActivePath = (href: string) => pathname === href;

    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto flex justify-between items-center px-4 py-2 max-w-5xl">
                {/* Logo */}
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

                {/* Desktop Navigation */}
                <nav className="hidden md:flex">
                    <ul className="flex space-x-8">
                        {NAV_ITEMS.map(({ label, href }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`py-4 px-1 transition-colors ${
                                        isActivePath(href)
                                            ? "text-red-800 font-semibold border-b-2 border-red-800"
                                            : "text-gray-600 hover:text-red-800"
                                    }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* User Button */}
                <UserButton
                    appearance={USER_BUTTON_APPEARANCE}
                    userProfileProps={{ appearance: USER_PROFILE_APPEARANCE }}
                />
            </div>

            {/* Mobile Navigation */}
            <nav className="md:hidden bg-white border-t">
                <ul className="flex justify-around items-center">
                    {NAV_ITEMS.map(({ label, href, icon: Icon }) => (
                        <li key={href} className="flex-1">
                            <Link
                                href={href}
                                className={`flex flex-col items-center justify-center py-2 transition-colors duration-200 ${
                                    isActivePath(href) ? "text-red-800" : "text-gray-600 hover:text-red-800"
                                }`}
                            >
                                <Icon className={`w-6 h-6 mb-1 ${isActivePath(href) ? "stroke-[2.5]" : "stroke-[2]"}`} />
                                <span className={`text-xs ${isActivePath(href) ? "font-semibold" : "font-normal"}`}>
                                    {label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
