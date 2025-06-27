'use client'

import { useEffect, useRef } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

interface QuillDisplayProps {
    content: string
    className?: string
}

export default function QuillDisplay({ content, className = '' }: QuillDisplayProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const quillRef = useRef<Quill | null>(null)

    useEffect(() => {
        if (!containerRef.current) return

        // Initialize Quill in read-only mode
        quillRef.current = new Quill(containerRef.current, {
            theme: 'snow',
            readOnly: true,
            modules: {
                toolbar: false
            }
        })

        // Set content
        try {
            // Try to parse as Delta format first (if content is from Quill editor)
            const deltaContent = JSON.parse(content)
            quillRef.current.setContents(deltaContent)
        } catch {
            // Fallback to HTML or plain text
            quillRef.current.root.innerHTML = content
        }

        // Hide the editor toolbar completely
        const toolbar = containerRef.current.querySelector('.ql-toolbar')
        if (toolbar) {
            toolbar.remove()
        }

        return () => {
            if (quillRef.current) {
                quillRef.current = null
            }
        }
    }, [content])

    return (
        <div className={`quill-display ${className}`}>
            <div ref={containerRef} />
            <style jsx global>{`
                .quill-display .ql-container {
                    border: none !important;
                    font-family: inherit;
                }
                .quill-display .ql-editor {
                    padding: 0 !important;
                    color: inherit;
                    font-size: inherit;
                    line-height: inherit;
                }
                .quill-display .ql-editor p {
                    margin-bottom: 1rem;
                }
                .quill-display .ql-editor:focus {
                    outline: none;
                }
            `}</style>
        </div>
    )
}
