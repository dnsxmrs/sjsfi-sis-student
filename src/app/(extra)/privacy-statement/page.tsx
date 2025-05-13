import React from "react";

export default function PrivacyStatement() {
    return (
        <main className="min-h-screen min-w-full flex flex-col p-10 bg-white text-black">
            <h1 className="text-3xl font-bold mb-6 flex justify-center items-center" style={{ color: '#800000' }}>
                Privacy Statement
            </h1>
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2" style={{ color: '#800000' }}>Introduction</h2>
                <p className="text-base text-muted-foreground">
                    We value your privacy. This Privacy Statement explains how we collect, use, and protect your personal information when you use our services.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2" style={{ color: '#800000' }}>Information We Collect</h2>
                <ul className="list-disc list-inside text-base text-muted-foreground">
                    <li style={{ color: '#FFD700' }}>Personal identification information (Name, email address, etc.)</li>
                    <li style={{ color: '#FFD700' }}>Usage data and cookies</li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2" style={{ color: '#800000' }}>How We Use Your Information</h2>
                <ul className="list-disc list-inside text-base text-muted-foreground">
                    <li style={{ color: '#FFD700' }}>To provide and maintain our service</li>
                    <li style={{ color: '#FFD700' }}>To notify you about changes to our service</li>
                    <li style={{ color: '#FFD700' }}>To improve our services</li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2" style={{ color: '#800000' }}>Data Security</h2>
                <p className="text-base text-muted-foreground">
                    We implement appropriate security measures to protect your data. However, no method of transmission over the Internet is 100% secure.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2" style={{ color: '#800000' }}>Contact Us</h2>
                <p className="text-base text-muted-foreground">
                    If you have any questions about this Privacy Statement, please contact us at <a href="mailto:sjsfi96@gmail.com" className="underline" style={{ color: '#FFD700' }}>sjsfi96@gmail.com</a>.
                </p>
            </section>
        </main>
    );
}