'use client';

import { usePathname } from 'next/navigation'

export default function DynamicTitle() {
    const pathname = usePathname()

    // replace logic to know what path is being used 'student/thisPath'
    const pathParts = pathname.split('/')
    const currentPath = pathParts[pathParts.length - 1]
    // capitalize the first letter of the currentPath
    const capitalizedPath = currentPath.charAt(0).toUpperCase() + currentPath.slice(1)

    return (
        <h1 className="text-2xl text-[#000] font-bold mb-6">{capitalizedPath}</h1>
    )
}