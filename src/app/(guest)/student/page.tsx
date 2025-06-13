'use client';

import Image from 'next/image';
import { useState } from 'react';
import InputField from '@/components/atoms/InputField';
import LoginFooter from '@/components/atoms/LoginFooter';
import ActionButton from '@/components/atoms/ActionButton';
import Link from 'next/link';
import { useSignIn } from '@clerk/nextjs';

export default function Student() {
    const { signIn, setActive, isLoaded } = useSignIn();
    const [studentNumber, setStudentNumber] = useState('');
    const [email_address, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // console log the student number, email, and password
        console.log('Student Number:', studentNumber);
        console.log('Email:', email_address);
        console.log('Password:', password);

        if (!isLoaded) return;

        try {
            // STEP 1: Start sign-in by identifying the user
            const signInAttempt = await signIn.create({
                identifier: email_address, // just the email
            });
            console.log('Sign In:', signIn);

            // STEP 2: Now try to complete with password
            const result = await signInAttempt.attemptFirstFactor({
                strategy: 'password',
                password,
            });
            console.log('Sign In Attempt:', signInAttempt);

            // STEP 3: If complete, activate session
            if (result.status === 'complete') {
                await setActive({ session: result.createdSessionId });
                window.location.href = '/student/home'; //TEMPORARY PLEASE CHANGE BACK TO /student/home
            } else {
                console.log('Unexpected sign-in state:', result);
                setError('Sign-in not complete. Additional steps required.');
            }
        } catch (err: unknown) {
            console.error(err);
            if (err && typeof err === 'object' && 'message' in err) {
                setError((err as Error).message || 'Login failed');
            } else {
                setError('Login failed');
            }
        }
    };

    return (
        <div className="flex h-screen w-screen bg-white min-w-[360px]">
            <div className="container">
                {/* Main Screen - BG IMAGE */}
                <div
                    style={{ backgroundImage: "url('/assets/sis_bg.webp')" }}
                    className=" h-screen w-screen bg-cover bg-center"
                >
                    {/* LOGIN FORM BG */}
                    <div className="absolute right-0 w-full md:w-1/3 min-h-screen min-w-[360px] pt-[10vh] overflow-hidden bg-white/70 backdrop-blur-[20px] backdrop-saturate-[168%] shadow-md m-0 rounded-none flex flex-col bg-clip-border border border-transparent break-words mb-4">

                        {/* WRAPPER */}
                        <div className="flex flex-col items-center h-full w-full">

                            {/* HEADER */}
                            <div className="flex flex-col items-center justify-center w-full mb-4">
                                <Image
                                    src="/assets/sjsfi_logo.svg"
                                    alt="SJSFI Logo"
                                    width={90}
                                    height={90}
                                    className="mb-2"
                                />
                                <h1 className="text-3xl text-center text-[#000] w-full mb-2 mx-1">
                                    <span className='font-bold text-[#800000]'>SJSFI-SIS </span>Student Module
                                </h1>
                            </div>

                            {/* BODY */}
                            <div className="flex flex-col items-center justify-center w-full">
                                <p className='text-center text-black text-sm mb-4'>
                                    Sign in to start your session
                                </p>

                                {/* FORM */}
                                <form className="w-full px-4" autoComplete="off" onSubmit={handleSubmit}>
                                    <div className="mb-4 w-full">
                                        <InputField
                                            name="student_number"
                                            type="text"
                                            placeholder="Student Number"
                                            value={studentNumber}
                                            onChange={(e) => setStudentNumber(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4 w-full">
                                        <InputField
                                            name="email"
                                            type="email"
                                            placeholder="Email Address"
                                            value={email_address}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4 w-full">
                                        <InputField
                                            name="password"
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    {error && (
                                        <p className="text-red-600 text-sm mb-2 text-center">{error}</p>
                                    )}
                                    <div className="mb-4 w-full">
                                        <ActionButton label='Sign In' />
                                    </div>
                                    <div className="flex items-center justify-center mb-4 w-full">
                                        <Link
                                            href="/student/forgot-password"
                                            className="font-medium text-sm text-[#800000] hover:underline hover:text-[#800000]/80 transition duration-200 ease-in-out"
                                        >
                                            I forgot my password
                                        </Link>
                                    </div>
                                    <LoginFooter />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}