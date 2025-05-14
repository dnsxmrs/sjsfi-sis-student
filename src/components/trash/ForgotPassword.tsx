// components/ForgotPassword.tsx

import Link from "next/link";

export default function ForgotPassword() {
    return (
        <div className="flex items-center justify-center mb-4 w-full">
            <Link
                href="/student/forgot-password"
                className="font-medium text-sm text-[#800000] hover:underline hover:text-[#800000]/80 transition duration-200 ease-in-out"
            >
                I forgot my password
            </Link>
        </div>
    );
}
