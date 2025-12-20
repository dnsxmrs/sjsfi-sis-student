"use client";

import InputField from "@/components/auth/InputField";
import SelectField from "@/components/auth/SelectField";
import ActionButton from "@/components/auth/ActionButton";
import Link from "next/link";
import toast from "react-hot-toast";
import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { studentEmailExists } from "@/app/_actions/handleStudentLogin";

interface SetRoleResult {
    success: boolean;
    error?: string;
}

export default function StudentLoginForm() {
    const [birthMonth, setBirthMonth] = useState("");
    const [birthDay, setBirthDay] = useState("");
    const [birthYear, setBirthYear] = useState("");
    const [email_address, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { signIn, setActive, isLoaded } = useSignIn();

    const router = useRouter();
    const startYear = new Date().getFullYear() - 9; // Adjust this as needed for your application

    // Function to get the number of days in a month
    const getDaysInMonth = (month: string, year: string) => {
        if (!month) return 31; // Default to 31 if no month selected

        const monthNum = parseInt(month);
        const yearNum = year ? parseInt(year) : new Date().getFullYear(); // Use current year as default

        // Days in each month
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        // Check for leap year for February
        if (monthNum === 2) {
            const isLeapYear = (yearNum % 4 === 0 && yearNum % 100 !== 0) || (yearNum % 400 === 0);
            return isLeapYear ? 29 : 28;
        }

        return daysInMonth[monthNum - 1];
    };

    // Reset day if it's invalid for the selected month
    const handleMonthChange = (selectedMonth: string) => {
        setBirthMonth(selectedMonth);
        const maxDays = getDaysInMonth(selectedMonth, birthYear);
        if (birthDay && parseInt(birthDay) > maxDays) {
            setBirthDay(""); // Reset day if it's invalid for the new month
        }
    };

    // Reset day if it's invalid for the selected year (for leap year)
    const handleYearChange = (selectedYear: string) => {
        setBirthYear(selectedYear);
        if (birthMonth === "2" && birthDay) { // Only check February
            const maxDays = getDaysInMonth(birthMonth, selectedYear);
            if (parseInt(birthDay) > maxDays) {
                setBirthDay(""); // Reset day if it's invalid for the new year
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        // Prevent default form submission behavior
        e.preventDefault();
        // Reset error state and set loading state
        setError("");
        setIsLoading(true);

        if (!isLoaded) return;

        try {
            if (!email_address || !password || !birthMonth || !birthDay || !birthYear) {
                setError("Please fill in all fields");
                return;
            }

            // STEP 1: Start sign-in by identifying the user
            const signInAttempt = await signIn.create({
                identifier: email_address, // just the email
            });

            // STEP 2: Check if the student exists AND validate birthdate
            const birthdate = `${birthYear}-${birthMonth.padStart(2, '0')}-${birthDay.padStart(2, '0')}`;
            const studentCheck = await studentEmailExists(
                email_address,
                "student",
                birthdate // Pass the birthdate for validation instead of student number
            );

            if (!studentCheck.success) {
                setError(
                    studentCheck.error || "Invalid credentials."
                );
                return;
            }

            // STEP 3: Now try to complete with password
            const result = await signInAttempt.attemptFirstFactor({
                strategy: "password",
                password,
            });

            // STEP 4: If complete, activate session
            if (signInAttempt.status === "complete") {
                await setActive({ session: result.createdSessionId });

                // Frontend call
                const response = await fetch('/api/nr/set-role', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        role: 'student'
                    })
                });

                let setRoleResult: SetRoleResult = { success: false };
                try {
                    setRoleResult = await response.json();
                } catch {
                    setError("Failed to parse server response. Please try again.");
                    return;
                } if (!response.ok || !setRoleResult.success) {
                    setError(setRoleResult.error || "Failed to set user role. Please try again.");
                    return;
                }

                // Wait a short moment to ensure Clerk metadata is updated before redirect
                await new Promise((resolve) => setTimeout(resolve, 200));

                toast.success("Successfully logged in as student!");
                router.push(`/student/home`);
                return;
            } else {
                setError("Invalid credentials.");
            }
        } catch (err) {
            console.error('Login error:', err);
            setError("Invalid email, birthdate, or password");
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
            {/* Error Display */}
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
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={email_address}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                />
            </div>
            {/* Birthdate selection */}
            <div className="mb-4 w-full">
                <div className="grid grid-cols-3 gap-3">
                    {/* Month Dropdown */}
                    <div>
                        <label htmlFor="birthMonth" className="sr-only">
                            Birth Month
                        </label>
                        <SelectField
                            id="birthMonth"
                            name="birthMonth"
                            value={birthMonth}
                            onChange={(e) => handleMonthChange(e.target.value)}
                            disabled={isLoading}
                            aria-label="Birth Month"
                            className="text-black font-light"
                        >
                            <option value="">Birth Month</option>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </SelectField>
                    </div>

                    {/* Day Dropdown */}
                    <div>
                        <label htmlFor="birthDay" className="sr-only">
                            Birth Day
                        </label>
                        <SelectField
                            id="birthDay"
                            name="birthDay"
                            value={birthDay}
                            onChange={(e) => setBirthDay(e.target.value)}
                            disabled={isLoading}
                            aria-label="Birth Day"
                            className="text-black font-light"
                        >
                            <option value="">Birth Day</option>
                            {Array.from({ length: getDaysInMonth(birthMonth, birthYear) }, (_, i) => i + 1).map((day) => (
                                <option key={day} value={day.toString()}>
                                    {day}
                                </option>
                            ))}
                        </SelectField>
                    </div>

                    {/* Year Dropdown */}
                    <div>
                        <label htmlFor="birthYear" className="sr-only">
                            Birth Year
                        </label>
                        <SelectField
                            id="birthYear"
                            name="birthYear"
                            value={birthYear}
                            onChange={(e) => handleYearChange(e.target.value)}
                            disabled={isLoading}
                            aria-label="Birth Year"
                            className="text-black font-light"
                        >
                            <option value="">Birth Year</option>
                            {Array.from({ length: 27 }, (_, i) => startYear - i).map((year) => (
                                <option key={year} value={year.toString()}>
                                    {year}
                                </option>
                            ))}
                        </SelectField>
                    </div>
                </div>
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
                {/* <p className="text-sm text-black text-center italic">
                    <span className="text-[#800000]">Forgot your password?</span> Contact the system administrator for assistance.
                </p> */}
                <Link
                    href="/forgot-password"
                    className="text-sm text-[#800000] hover:underline hover:text-[#800000]/80 transition duration-200 ease-in-out"
                >
                    I forgot my password
                </Link>
            </div>
        </form>
    );
}
