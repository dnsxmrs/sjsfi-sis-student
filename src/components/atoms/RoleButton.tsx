// components/RoleButton.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import clsx from 'clsx';

interface RoleButtonProps {
    label: string;
    color: string; // example: 'bg-[#800000]'
    hoverClass?: string; // example: 'hover:bg-[#DAA520]'
    textColor?: string;
    href: string;
}

// Loading spinner component
function LoadingSpinner() {
    return (
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
    );
}

export default function RoleButton({
    label,
    color,
    hoverClass,
    textColor = 'text-white',
    href,
}: RoleButtonProps) {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        setIsLoading(true);
        try {
            await router.push(href);
        } finally {
            // Reset loading state after navigation
            // Note: This might not execute if navigation is successful
            setIsLoading(false);
        }
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            disabled={isLoading}
            className={clsx(
                color,
                textColor,
                'text-base font-medium rounded-sm px-4 py-3 w-full transition duration-200 ease-in-out flex items-center justify-center',
                hoverClass || 'hover:opacity-80',
                isLoading && 'opacity-70 cursor-not-allowed'
            )}
        >
            {isLoading && <LoadingSpinner />}
            {label}
        </button>
    );
}
