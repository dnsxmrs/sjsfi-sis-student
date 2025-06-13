"use server";

export type FacultyResult = {
    success: boolean;
    error?: string;
    role?: string;
};

export type UserAccessResult = {
    success: boolean;
    role?: string;
    error?: string;
    source?: "app" | "hrms"; // indicates if error is from local app or external HRMS
};

export async function facultyEmailExists(
    email: string,
    origin: string
): Promise<FacultyResult> {
    try {
        // only allow requests with email and origin
        if (!email || !origin) {
            console.warn("Validation error: Missing email or origin");
            return { success: false, error: "Missing email or origin" };
        } // only allow requests from 'faculty' origin
        if (origin !== "faculty") {
            console.warn(`Invalid origin attempt: ${origin}`);
            return { success: false, error: "Invalid origin attempt." };
        }

        // Step 1: Check if the user exists by looking up their role from external system
        const userAccessResult = await lookupUserAccess(email);

        // Step 2: Handle different error scenarios
        if (!userAccessResult.success) {
            if (userAccessResult.source === "hrms") {
                console.warn("HRMS lookup failed:", userAccessResult.error);
                return {
                    success: false,
                    error: "Unable to verify user credentials with external system",
                };
            } else {
                console.warn("App lookup failed:", userAccessResult.error);
                return {
                    success: false,
                    error: userAccessResult.error || "User verification failed",
                };
            }
        }

        // Step 3: If user exists but is not faculty (or admin/cashier/registrar), return unauthorized error
        const allowedRoles = ["Faculty", "Admin", "Cashier", "Registrar"];
        if (
            !userAccessResult.role ||
            !allowedRoles.includes(userAccessResult.role)
        ) {
            console.warn(
                `Unauthorized login attempt for email: ${email}, role: ${userAccessResult.role}`
            );
            return { success: false, error: "Access denied for this role" };
        }

        // make role lowercase
        const normalizedRole = userAccessResult.role.toLowerCase();

        // Step 4: If user exists and has an allowed role, return success
        console.info(
            `✅ Faculty user found: ${email} with role: ${normalizedRole}`
        );

        // IMPORTANT: Return the role here!
        return {
            success: true,
            role: normalizedRole  // Make sure this is included
        };
    } catch (error) {
        // Log the error for debugging
        console.error("Internal server error in facultyEmailExists:", error);
        return { success: false, error: "Internal server error occurred" };
    }
}

export async function lookupUserAccess(
    email: string
): Promise<UserAccessResult> {
    try {
        // Step 2: Validate required field (email)
        if (!email) {
            console.warn("Missing email field in request body");
            return {
                success: false,
                error: "Email is required",
                source: "app",
            };
        }

        // Step 3: Prepare rawBody and timestamp
        const rawBody = JSON.stringify({ email });
        const timestamp = Date.now().toString();

        // Step 4: Check environment variables
        const secret = process.env.SJSFI_SHARED_SECRET;
        const apiKey = process.env.SJSFI_SIS_API_KEY;
        const baseUrl = process.env.BASE_URL;

        if (!secret || !apiKey || !baseUrl) {
            console.error(
                "Missing required environment variables: SJSFI_SHARED_SECRET, SJSFI_SIS_API_KEY, BASE_URL"
            );
            return {
                success: false,
                error: "Server misconfiguration",
                source: "app",
            };
        }

        // Step 5: Import key for HMAC SHA-256
        const encoder = new TextEncoder();
        const keyData = encoder.encode(secret);

        const cryptoKey = await crypto.subtle.importKey(
            "raw",
            keyData,
            { name: "HMAC", hash: "SHA-256" },
            false,
            ["sign"]
        );

        // Step 6: Generate HMAC signature (body + timestamp)
        const signatureBuffer = await crypto.subtle.sign(
            "HMAC",
            cryptoKey,
            encoder.encode(rawBody + timestamp)
        );

        // Step 7: Convert signature to hex string
        const signature = Array.from(new Uint8Array(signatureBuffer))
            .map((b) => b.toString(16).padStart(2, "0"))
            .join("");

        // Step 8: Make the upstream fetch request with headers
        const upstreamUrl = `${process.env.BASE_URL}/api/xr/user-access-lookup`;

        const res = await fetch(upstreamUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
                "x-timestamp": timestamp,
                "x-signature": signature,
            },
            body: rawBody,
        });

        // Step 9: Read and parse upstream response body safely
        const text = await res.text();
        console.log("Upstream response body (text):", text);

        let data;
        try {
            data = JSON.parse(text);
            console.log("Upstream response parsed JSON:", data);

            const role = data.Role[0];

            if (data.Email && data.Role) {
                // Return the role for further validation by the calling function
                return { success: true, role: role, source: "hrms" };
            } else {
                console.warn("User not found in HRMS");
                return {
                    success: false,
                    error: "User not found",
                    source: "hrms",
                };
            }
        } catch {
            console.warn("Upstream response was not valid JSON");
            return {
                success: false,
                error: "Invalid response from external system",
                source: "hrms",
            };
        }
    } catch (error) {
        console.error("HRMS lookup error:", error);
        return {
            success: false,
            error: "External system unavailable",
            source: "hrms",
        };
    }
}

// const { signIn, setActive, isLoaded } = useSignIn();
// const [studentNumber, setStudentNumber] = useState('');
// const [email_address, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [error, setError] = useState('');

// const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');

//     // console log the student number, email, and password
//     // console.log('Student Number:', studentNumber);
//     // console.log('Email:', email_address);
//     // console.log('Password:', password);

//     if (!isLoaded) return;

//     try {
//         // STEP 1: Start sign-in by identifying the user
//         const signInAttempt = await signIn.create({
//             identifier: email_address, // just the email
//         });
//         // console.log('Sign In:', signIn);

//         // STEP 2: Now try to complete with password
//         const result = await signInAttempt.attemptFirstFactor({
//             strategy: 'password',
//             password,
//         });
//         // console.log('Sign In Attempt:', signInAttempt);

//         // STEP 3: If complete, activate session
//         if (result.status === 'complete') {
//             await setActive({ session: result.createdSessionId });
//             window.location.href = '/student/home';
//         } else {
//             // console.log('Unexpected sign-in state:', result);
//             setError('Sign-in not complete. Additional steps required.');
//         }
//     } catch (err: unknown) {
//         // console.error(err);
//         if (err && typeof err === 'object' && 'message' in err) {
//             setError((err as Error).message || 'Login failed');
//         } else {
//             setError('Login failed');
//         }
//     }
// };
