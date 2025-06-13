"use client";

import Link from "next/link";
import InputField from "@/components/atoms/InputField";
import LoginFooter from "@/components/atoms/LoginFooter";
import ActionButton from "@/components/atoms/ActionButton";
import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { facultyEmailExists } from "../actions/handleFacultyLogin";
import { useRouter } from "next/navigation";
import { setUserRole, validateSetResult } from "@/app/_actions/setUserRole";

export default function FacultyLoginForm() {
    const [username, setUsername] = useState("");
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
            if (!username || !email_address || !password) {
                setError("Please fill in all fields");
                return;
            }

            // STEP 1: Start sign-in by identifying the user
            const signInAttempt = await signIn.create({
                identifier: email_address,
            });

            // STEP 2: Check if the faculty exists
            const facultyCheck = await facultyEmailExists(
                email_address,
                "faculty"
            );

            console.log("Faculty check result:", {
                success: facultyCheck.success,
                error: facultyCheck.error,
                role: facultyCheck.role,
            });

            if (!facultyCheck.success) {
                console.warn("Faculty check failed:", facultyCheck.error);
                setError(
                    facultyCheck.error
                        ? facultyCheck.error
                        : "Invalid credentials."
                );
                return;
            }

            const role = String(facultyCheck.role || "faculty");

            // STEP 3: Now try to complete with password
            const result = await signInAttempt.attemptFirstFactor({
                strategy: "password",
                password,
            });

            console.log("Role from faculty check:", role);
            console.log("Role type:", typeof role);            // STEP 4: If complete, activate session
            if (signInAttempt.status === "complete") {
                await setActive({ session: result.createdSessionId });

                // Wait for session to be fully established with retry mechanism
                const setRoleWithRetry = async (retries = 3) => {
                    for (let i = 0; i < retries; i++) {
                        try {
                            const rawResult = await setUserRole(
                                role,
                                "faculty"
                            );
                            const isSetRole = await validateSetResult(rawResult);

                            if (isSetRole && isSetRole.success) {
                                return isSetRole;
                            }

                            // If it failed due to "No user ID found", wait and retry
                            if (
                                isSetRole &&
                                isSetRole.error &&
                                isSetRole.error.includes("No user ID found") &&
                                i < retries - 1
                            ) {
                                console.log(
                                    `Retry ${i + 1
                                    }: Waiting for session to establish...`
                                );
                                await new Promise((resolve) =>
                                    setTimeout(resolve, 500)
                                );
                                continue;
                            }

                            return isSetRole;
                        } catch (error) {
                            console.error(`Retry ${i + 1} failed:`, error);
                            if (i === retries - 1) throw error;
                            await new Promise((resolve) =>
                                setTimeout(resolve, 500)
                            );
                        }
                    }

                    // Fallback return in case all retries fail
                    return {
                        success: false,
                        error: "Failed to set user role after retries",
                    };
                };

                // With this (add await and proper handling):
                const isSetRole = await setRoleWithRetry();
                console.log("🔍 setUserRole result:", isSetRole);

                if (!isSetRole || !isSetRole.success) {
                    console.warn("Set user role failed:", isSetRole?.error);
                    setError(isSetRole?.error || "Failed to set user role.");
                    return;
                }

                console.log('User role set successfully');
                router.push(`/${role}/home`);
            } else {
                console.log("Unexpected sign-in state:", result);
                setError("Invalid credentials.");
            }
        } catch (err: unknown) {
            console.error(err); // for debugging purposes

            if (err && typeof err === "object" && "message" in err) {
                setError((err as Error).message || "Login failed");
            } else {
                setError("Login failed");
            }
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
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                    href="/faculty/forgot-password"
                    className="font-medium text-sm text-[#800000] hover:underline hover:text-[#800000]/80 transition duration-200 ease-in-out"
                >
                    I forgot my password
                </Link>
            </div>
            <LoginFooter />
        </form>
    );
}
