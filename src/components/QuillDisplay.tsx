'use client'

import { useEffect, useState } from 'react'

interface QuillDisplayProps {
    content: string
    className?: string
}

export default function QuillDisplay({ content, className = '' }: QuillDisplayProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="animate-pulse bg-gray-200 h-32 rounded"></div>
    }

    // Try to parse as Delta format first (if content is from Quill editor)
    let displayContent = content
    try {
        const deltaContent = JSON.parse(content)
        // If it's a Delta format, extract text content for now
        if (deltaContent.ops && Array.isArray(deltaContent.ops)) {
            displayContent = deltaContent.ops
                .map((op: { insert?: string }) => op.insert || '')
                .join('')
        }
    } catch {
        // Content is not JSON, use as is
    }

    return (
        <div className={`${className}`}>
            <div
                className="prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: displayContent.replace(/\n/g, '<br>') }}
            />
        </div>
    )
}
