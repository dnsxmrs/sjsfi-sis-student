'use client';

import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 p-4">
            <div className="w-full max-w-4xl flex rounded-2xl overflow-hidden shadow-2xl">
                {/* Left panel */}
                <div className="hidden md:flex md:w-1/2 bg-blue-500 p-12 flex-col justify-between">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6">Welcome Back</h2>
                        <p className="text-blue-100 text-lg">
                            Continue your journey with Magandang Buhay and discover new learning experiences.
                        </p>
                    </div>
                    <div className="mt-auto">
                        <svg className="w-full max-w-sm opacity-80" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#FFFFFF" d="M47.7,-57.2C59.9,-45.8,66.8,-28.6,68.8,-11.1C70.8,6.4,67.8,24.1,58,36.5C48.1,48.9,31.4,56,14.1,62.5C-3.3,69,-21.3,74.9,-34.7,69.4C-48,63.9,-56.7,47,-63.5,29.2C-70.3,11.4,-75.2,-7.3,-71.1,-24.4C-67,-41.5,-53.9,-57,-38.5,-67.8C-23.1,-78.7,-5.4,-84.9,11.4,-79.1C28.2,-73.3,35.5,-68.6,47.7,-57.2Z" transform="translate(100 100)" />
                        </svg>
                    </div>
                </div>

                {/* Right panel */}
                <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex items-center justify-center">
                    <SignIn
                        appearance={{
                        elements: {
                            formButtonPrimary: 'bg-blue-600 hover:bg-blue-700',
                            footer: 'hidden',
                        },
                        }}
                        redirectUrl="/signed-in"
                    />
                    </div>
            </div>
        </div>
    );
}
