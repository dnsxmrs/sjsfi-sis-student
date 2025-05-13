// components/InputField.tsx
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; // Or use any icon lib like Heroicons, FontAwesome

interface InputFieldProps {
    name: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
    name,
    type,
    placeholder,
    value,
    onChange,
}: InputFieldProps) {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';

    return (
        <div className="relative w-full">
            <input
                autoComplete="off"
                name={name}
                type={isPassword ? (showPassword ? 'text' : 'password') : type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="bg-white border text-black text-sm border-gray-300 rounded-sm px-4 py-2 w-full focus:outline-0 focus:ring-1 focus:ring-[#800000] focus:border-transparent pr-10"
            />
            {isPassword && (
                <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black focus:outline-none"
                >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            )}
        </div>
    );
}
