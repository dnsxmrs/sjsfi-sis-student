import React from "react";

export default function PrivacyStatement() {
    return (
        <div className="min-h-screen w-full bg-white">
            <div className="container mx-auto max-w-5xl px-4 py-8">
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h1 className="text-3xl font-bold mb-8 text-center text-red-800">
                        Privacy Statement
                    </h1>
                    
                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-red-800">Introduction</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We value your privacy. This Privacy Statement explains how we collect, use, and protect your personal information when you use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-red-800">Information We Collect</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                <li>Personal identification information (Name, email address, etc.)</li>
                                <li>Usage data and cookies</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-red-800">How We Use Your Information</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                <li>To provide and maintain our service</li>
                                <li>To notify you about changes to our service</li>
                                <li>To improve our services</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-red-800">Data Security</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We implement appropriate security measures to protect your data. However, no method of transmission over the Internet is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-red-800">Contact Us</h2>
                            <p className="text-gray-600 leading-relaxed">
                                If you have any questions about this Privacy Statement, please contact us at{' '}
                                <a 
                                    href="mailto:sjsfi96@gmail.com" 
                                    className="text-red-800 hover:text-red-600 underline"
                                >
                                    sjsfi96@gmail.com
                                </a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}