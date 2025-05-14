// components/TermsNotice.tsx
import Link from 'next/link';

export default function LoginFooter() {
    return (
        <div className="flex items-center justify-center mb-4 w-full">
            <p className="text-sm text-black text-center">
                By using this service, you understood and agree to the
                <span className="font-medium text-[#DAA520]"> SJSFI Online Services </span>
                <Link
                    href="/terms-of-use"
                    className="text-[#800000] hover:text-[#800000]/80 transition duration-200 ease-in-out underline"
                >
                    Terms of Use
                </Link>
                {' '}and{' '}
                <Link
                    href="/privacy-statement"
                    className="text-[#800000] hover:text-[#800000]/80 transition duration-200 ease-in-out underline"
                >
                    Privacy Statement
                </Link>
                .
            </p>
        </div>
    );
}
