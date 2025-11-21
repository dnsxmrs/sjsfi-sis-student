// components/atoms/SelectField.tsx
import React from "react";

interface SelectFieldProps {
    id: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    disabled?: boolean;
    "aria-label": string;
    children: React.ReactNode;
    className?: string;
}

export default function SelectField({
    id,
    name,
    value,
    onChange,
    disabled = false,
    "aria-label": ariaLabel,
    children,
    className = "",
}: SelectFieldProps) {
    const baseClasses = "bg-white border text-black text-sm border-gray-300 rounded-sm px-4 py-2 w-full focus:outline-0 focus:ring-1 focus:ring-[#800000] focus:border-transparent pr-8 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60 appearance-none";

    return (
        <div className="relative">
            <select
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
                aria-label={ariaLabel}
                className={`${baseClasses} ${className}`}
            >
                {children}
            </select>
            {/* Custom dropdown arrow */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    );
}
