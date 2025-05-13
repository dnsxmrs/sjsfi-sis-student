// components/RoleButton.tsx
'use client';

import { useRouter } from 'next/navigation';
import clsx from 'clsx';

interface RoleButtonProps {
    label: string;
    color: string; // example: 'bg-[#800000]'
    hoverClass?: string; // example: 'hover:bg-[#DAA520]'
    textColor?: string;
    href: string;
}

export default function RoleButton({
    label,
    color,
    hoverClass,
    textColor = 'text-white',
    href,
}: RoleButtonProps) {
    const router = useRouter();

    return (
        <button
            type="button"
            onClick={() => router.push(href)}
            className={clsx(
                color,
                textColor,
                'text-base font-medium rounded-sm px-4 py-3 w-full transition duration-200 ease-in-out',
                hoverClass || 'hover:opacity-80'
            )}
        >
            {label}
        </button>
    );
}
