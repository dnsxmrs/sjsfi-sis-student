import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { createClerkClient } from '@clerk/backend'

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY })

const isPublicRoute = createRouteMatcher([
    '/',
    '/student',
    '/student/forgot-password',
    '/faculty',
    '/faculty/forgot-password',
    '/terms-of-use',
    '/privacy-statement'
]);

export default clerkMiddleware(async (auth, req) => {
    // Get the current authentication state
    const { userId } = await auth();
    const isAuthenticated = !!userId;
    const url = new URL(req.url);

    // Debug authentication state
    // console.log('=== Authentication Debug Info ===');
    // console.log('URL:', url.pathname);
    // console.log('Is Authenticated:', isAuthenticated);
    // console.log('User ID:', userId || 'Not logged in');
    // console.log('Session ID:', sessionId || 'No active session');

    // If trying to access a protected route while not authenticated
    if (!isPublicRoute(req) && !isAuthenticated) {
        console.log('🚫 Unauthorized access to protected route');
        await auth.protect();
    }

    // If trying to access a public route while authenticated
    if (isPublicRoute(req) && isAuthenticated) {
        // Allow access to terms and privacy pages even when authenticated
        if (url.pathname === '/terms-of-use' || url.pathname === '/privacy-statement') {
            return NextResponse.next();
        }

        console.log('⚠️ Authenticated user attempting to access public route');

        // TODO: Replace logic with real fetching of user roles
        let redirectUrl = '/student/home'; // Default redirect

        // Check URL to determine if they're a faculty member
        if (url.pathname.startsWith('/faculty') || url.pathname === '/') {
            const user = await clerkClient.users.getUser(userId);
            console.log('User Role:', user?.publicMetadata?.role || 'No role defined');

            // If user is faculty, redirect to faculty home
            // You can adjust this logic based on how you store roles
            if (user?.publicMetadata?.role === 'faculty') {
                redirectUrl = '/faculty/home';
            }
        }

        // Redirect to appropriate home page
        console.log('🔄 Redirecting to:', redirectUrl);
        return NextResponse.redirect(new URL(redirectUrl, req.url));
    }
}, { debug: false });// change before pushing to production

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}