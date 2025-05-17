import React from "react";

export default function TermsOfUse() {
    return (
        <div className="min-h-screen w-full bg-white">
            <div className="container mx-auto max-w-5xl px-4 py-8">
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h1 className="text-3xl font-bold mb-8 text-center text-red-800">
                        Terms of Use
                    </h1>
                    
                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-red-800">Acceptance of Terms</h2>
                            <p className="text-gray-600 leading-relaxed">
                                By accessing or using our services, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you may not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-red-800">User Responsibilities</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                <li>You must provide accurate and complete information when using our services.</li>
                                <li>You are responsible for maintaining the confidentiality of your account information.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-red-800">Prohibited Activities</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                <li>Do not use our services for any unlawful purpose.</li>
                                <li>Do not attempt to gain unauthorized access to our systems.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-red-800">Limitation of Liability</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We are not liable for any damages or losses resulting from your use of our services. Our services are provided "as is" without warranties of any kind.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-red-800">Changes to Terms</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We reserve the right to update or modify these Terms of Use at any time. Changes will be effective upon posting to this page.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-red-800">Contact Us</h2>
                            <p className="text-gray-600 leading-relaxed">
                                If you have any questions about these Terms of Use, please contact us at{' '}
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