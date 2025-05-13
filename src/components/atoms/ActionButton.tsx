// components/ActionButton.tsx

import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    bgColor?: string;
    hoverColor?: string;
    textColor?: string;
}

export default function ActionButton({
    label,
    bgColor = 'bg-[#800000]',
    hoverColor = 'hover:bg-[#800000]/80',
    textColor = 'text-white',
    type = 'submit',
    ...props
}: ActionButtonProps) {
    return (
        <button
            type={type}
            {...props}
            className={clsx(
                bgColor,
                hoverColor,
                textColor,
                'text-sm rounded-sm px-4 py-2 w-full transition duration-200 ease-in-out'
            )}
        >
            {label}
        </button>
    );
}
