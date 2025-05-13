import React from "react";

export default function TermsOfUse() {
    return (
        <main className="min-h-screen min-w-full flex flex-col p-10 bg-white text-black">
            <h1 className="text-3xl font-bold mb-6 flex justify-center items-center" style={{ color: '#800000' }}>
                Terms of Use
            </h1>
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2" style={{ color: '#800000' }}>Acceptance of Terms</h2>
                <p className="text-base text-muted-foreground">
                    By accessing or using our services, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you may not use our services.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2" style={{ color: '#800000' }}>User Responsibilities</h2>
                <ul className="list-disc list-inside text-base text-muted-foreground">
                    <li style={{ color: '#FFD700' }}>You must provide accurate and complete information when using our services.</li>
                    <li style={{ color: '#FFD700' }}>You are responsible for maintaining the confidentiality of your account information.</li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2" style={{ color: '#800000' }}>Prohibited Activities</h2>
                <ul className="list-disc list-inside text-base text-muted-foreground">
                    <li style={{ color: '#FFD700' }}>Do not use our services for any unlawful purpose.</li>
                    <li style={{ color: '#FFD700' }}>Do not attempt to gain unauthorized access to our systems.</li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2" style={{ color: '#800000' }}>Limitation of Liability</h2>
                <p className="text-base text-muted-foreground">
                    We are not liable for any damages or losses resulting from your use of our services. Our services are provided &quot;as is&quot; without warranties of any kind.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2" style={{ color: '#800000' }}>Changes to Terms</h2>
                <p className="text-base text-muted-foreground">
                    We reserve the right to update or modify these Terms of Use at any time. Changes will be effective upon posting to this page.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2" style={{ color: '#800000' }}>Contact Us</h2>
                <p className="text-base text-muted-foreground">
                    If you have any questions about these Terms of Use, please contact us at <a href="mailto:sjsfi96@gmail.com" className="underline" style={{ color: '#FFD700' }}>sjsfi96@gmail.com</a>.
                </p>
            </section>
        </main>
    );
}