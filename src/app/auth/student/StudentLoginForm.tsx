"use client";

import Link from "next/link";
import InputField from "@/components/atoms/InputField";
import LoginFooter from "@/components/atoms/LoginFooter";
import ActionButton from "@/components/atoms/ActionButton";
import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { studentEmailExists } from "../actions/handleStudentLogin";
import { setUserRole, validateSetResult } from "@/app/_actions/setUserRole";
import { useRouter } from "next/navigation";

export default function StudentLoginForm() {
    const [student_number, setStudentNumber] = useState("");
    const [email_address, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { signIn, setActive, isLoaded } = useSignIn();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        // Prevent default form submission behavior
        e.preventDefault();
        // Reset error state and set loading state
        setError("");
        setIsLoading(true);

        if (!isLoaded) return;

        try {
            if (!student_number || !email_address || !password) {
                setError("Please fill in all fields");
                return;
            }

            // STEP 1: Start sign-in by identifying the user
            const signInAttempt = await signIn.create({
                identifier: email_address, // just the email
            });

            // STEP 2: Check if the student exists
            const studentCheck = await studentEmailExists(email_address, 'student');
            if (!studentCheck.success) {
                console.log('Student check failed:', studentCheck.error);
                setError(studentCheck.error ? studentCheck.error : 'Invalid credentials.');
                return;
            }

            // STEP 3: Now try to complete with password
            const result = await signInAttempt.attemptFirstFactor({
                strategy: 'password',
                password,
            });

            // STEP 4: If complete, activate session
            if (signInAttempt.status === "complete") {
                console.log('Sign-in completed successfully');

                await setActive({ session: result.createdSessionId });
                console.log('Session activated');

                const rawResponse = await setUserRole('student', 'student');
                const response = await validateSetResult(rawResponse);
                console.log('🔍 setUserRole result:', response);

                if (!response.success) {
                    console.log('Set user role failed:', response.error);
                    setError(response.error ? response.error : 'Failed to set user role.');
                    return;
                }
                console.log('User role set successfully');

                console.log('SL Redirecting to /student/home');
                router.push('/student/home');
                return;
            } else {
                console.log('Unexpected sign-in state:', result);
                setError('Invalid credentials.');
            }
            // - } catch (err: unknown) { - use this for error catching
        } catch {
            // console.error(err); // for debugging purposes

            // use this instead for prod
            setError('Invalid student number, email, or password');

            // use this if really needed
            // if (err && typeof err === 'object' && 'message' in err) {
            // setError((err as Error).message || 'Login failed');
            // } else {
            //     setError('Login failed');
            // }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form
            className="w-full px-4"
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            {error && (
                <div className="mb-4 w-full bg-amber-50 border border-amber-200 rounded-md p-3 sm:p-4">
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <p className="text-amber-800 text-sm sm:text-base font-medium leading-relaxed">
                            {error}
                        </p>
                    </div>
                </div>
            )}
            <div className="mb-4 w-full">
                <InputField
                    name="student_number"
                    type="text"
                    placeholder="Student Number"
                    value={student_number}
                    onChange={(e) => setStudentNumber(e.target.value)}
                    disabled={isLoading}
                />
            </div>
            <div className="mb-4 w-full">
                <InputField
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={email_address}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                />
            </div>
            <div className="mb-4 w-full">
                <InputField
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                />
            </div>
            <div className="mb-4 w-full">
                <ActionButton
                    label="Sign In"
                    isLoading={isLoading}
                    loadingText="Signing In..."
                />
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
    );
}
