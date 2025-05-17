'use client';

export default function TestErrorPage() {
    throw new Error("This is a test error. (app/test/error/page.tsx)");
    return <div>Home</div>;
}
