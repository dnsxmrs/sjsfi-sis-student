import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { createClerkClient } from "@clerk/backend";

const clerkClient = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
});

// Helper function to check if user role is allowed for a specific route
function checkRoleForRoute(pathname: string, userRole: string): boolean {
    const role = userRole.toLowerCase();

    if (pathname.startsWith("/student/")) return role === "student";
    if (pathname.startsWith("/faculty/")) return role === "faculty";
    if (pathname.startsWith("/admin/")) return role === "admin";
    if (pathname.startsWith("/cashier/")) return role === "cashier";
    if (pathname.startsWith("/registrar/")) return role === "registrar";

    return false;
}

// Helper function to get the correct home page for a role
function getRoleHomePage(userRole: string): string {
    const role = userRole.toLowerCase();

    switch (role) {
        case "student":
            return "/student/home";
        case "faculty":
            return "/faculty/home";
        case "admin":
            return "/admin/home";
        case "cashier":
            return "/cashier/home";
        case "registrar":
            return "/registrar/home";
        default:
            return "/workaround/sign-out";
    }
}

const isPublicRoute = createRouteMatcher([
    "/",
    "/auth/(.*)",
    "/terms-of-use",
    "/privacy-statement",
    "/workaround/sign-out"
    // ,
    // '/test/setUserRole'
]);

// Define protected routes (require authentication)
const isProtectedRoute = createRouteMatcher([
    "/student/home",
    "/student/(.*)",
    "/faculty/home",
    "/faculty/(.*)",
    "/admin/home",
    "/admin/(.*)",
    "/cashier/home",
    "/cashier/(.*)",
    "/registrar/home",
    "/registrar/(.*)"
]);

export default clerkMiddleware(
    async (auth, req) => {
        const { userId } = await auth();
        const isAuthenticated = !!userId;
        const url = new URL(req.url);

        // Case 1: Not authenticated and trying to access protected route
        if (!isAuthenticated && isProtectedRoute(req)) {
            console.log(
                "⚠️ M Unauthenticated user trying to access protected route:",
                url.pathname
            );
            await auth.protect();
            return;
        }

        // Case 2: Authenticated user trying to access public routes (redirect to their dashboard)
        else if (isAuthenticated && isPublicRoute(req)) {
            // Allow access to terms and privacy pages even when authenticated
            if (
                url.pathname === "/terms-of-use" ||
                url.pathname === "/privacy-statement" ||
                url.pathname === "/workaround/sign-out"
            ) {
                console.log(
                    "✅ M Authenticated user accessing terms or privacy page or sign-out"
                );
                return NextResponse.next();
            }

            console.log(
                "⚠️ M Authenticated user attempting to access public route"
            );

            try {
                // Get user with private metadata (where role is stored)
                const user = await clerkClient.users.getUser(userId);
                const userRole = user?.privateMetadata?.role as string;
                console.log("M User Role from privateMetadata:", userRole);

                let redirectUrl = "/student/home"; // Default fallback

                // Determine redirect based on role
                if (userRole) {
                    switch (userRole) {
                        case "student":
                            redirectUrl = "/student/home";
                            break;
                        case "faculty":
                            redirectUrl = "/faculty/home";
                            break;
                        case "admin":
                            redirectUrl = "/admin/home";
                            break;
                        case "cashier":
                            redirectUrl = "/cashier/home";
                            break;
                        case "registrar":
                            redirectUrl = "/registrar/home";
                            break;
                        default:
                            redirectUrl = "/workaround/sign-out";
                    }
                } else {
                    // call a signout function if no role is found
                    console.warn(
                        "❌ M No role found for user, redirecting to default"
                    );
                    return NextResponse.redirect(
                        new URL("/workaround/sign-out", req.url)
                    );
                }

                console.log("🔄 M Redirecting to:", redirectUrl);
                return NextResponse.redirect(new URL(redirectUrl, req.url));
            } catch (error) {
                console.error("Error checking user role:", error);
                // If we can't check the role, redirect to sign-in for security
                console.log(
                    "⚠️ M Error checking role, redirecting to sign-in for security..."
                );
                return NextResponse.redirect(new URL("/workaround/sign-out", req.url));
            }
        }

        // Case 3: Authenticated user trying to access protected routes (validate role permissions)
        else if (isAuthenticated && isProtectedRoute(req)) {
            console.log(
                "🔍 M Checking role for protected route access:",
                url.pathname
            );

            try {
                // Get user with private metadata (where role is stored)
                const user = await clerkClient.users.getUser(userId);
                const userRole = user?.privateMetadata?.role as string;

                console.log(
                    "M User Role from privateMetadata for protected route:",
                    userRole
                );

                if (!userRole) {
                    // If no role is defined, redirect to sign-in
                    console.log(
                        "⚠️ M No role defined for user accessing protected route, redirecting to sign-in..."
                    );
                    return NextResponse.redirect(
                        new URL("/workaround/sign-out", req.url)
                    );
                }

                // Check if user has the correct role for the route they're trying to access
                const allowedForRoute = checkRoleForRoute(
                    url.pathname,
                    userRole
                );

                if (!allowedForRoute) {
                    console.log(
                        "❌ M User does not have permission for this route:",
                        url.pathname,
                        "Role:",
                        userRole
                    );
                    // Redirect to their appropriate home page
                    const correctRoute = getRoleHomePage(userRole);
                    return NextResponse.redirect(
                        new URL(correctRoute, req.url)
                    );
                }

                console.log(
                    "✅ M Allowing access to protected route:",
                    url.pathname,
                    "for role:",
                    userRole
                );
                return NextResponse.next();
            } catch (error) {
                console.error(
                    "Error checking user role for protected route:",
                    error
                );
                // If we can't check the role, redirect to sign-in for security
                console.log(
                    "⚠️ M Error checking role, redirecting to sign-in for security..."
                );
                return NextResponse.redirect(new URL("/workaround/sign-out", req.url));
            }
        }

        // Case 4: Default fallback for all other scenarios (not authenticated + public routes)
        // This includes unauthenticated users accessing public routes - allow them through
        console.log("✅ M Allowing request to continue:", url.pathname);
        return NextResponse.next();
    },
    { debug: false }
); // change before pushing to production

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        // Always run for API routes
        "/(api|trpc)(.*)",
    ],
};

// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";
// import { createClerkClient } from '@clerk/backend'

// const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY })

// const isPublicRoute = createRouteMatcher([
//     "/",
//     "/auth/(.*)",
//     "/terms-of-use",
//     "/privacy-statement",
//     "/workaround/sign-out"
// ]);

// export default clerkMiddleware(async (auth, req) => {
//     const { userId } = await auth();
//     const isAuthenticated = !!userId;
//     const url = new URL(req.url);

//     if (!isPublicRoute(req) && !isAuthenticated) {
//         await auth.protect();
//     }

//     if (isPublicRoute(req) && isAuthenticated) {
//         if (url.pathname === '/terms-of-use' || url.pathname === '/privacy-statement') {
//             return NextResponse.next();
//         }

//         // Check URL to determine if they're a faculty member
//         if (url.pathname.startsWith('/faculty')) {
//             const user = await clerkClient.users.getUser(userId);
//             // console.log('User Role:', user?.publicMetadata?.role || 'No role defined');

//             // If user is faculty, redirect to faculty home
//             // You can adjust this logic based on how you store roles
//             // if (user?.publicMetadata?.role === 'faculty') {
//             //     redirectUrl = '/faculty/home';
//             // }
//         }

//         // Redirect to appropriate home page
//         // console.log('🔄 Redirecting to:', redirectUrl);
//         // return NextResponse.redirect(new URL(redirectUrl, req.url));
//         return NextResponse.next();
//     }
// }, { debug: false });// change before pushing to production

// export const config = {
//     matcher: [
//         // Skip Next.js internals and all static files, unless found in search params
//         '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//         // Always run for API routes
//         '/(api|trpc)(.*)',
//     ],
// }