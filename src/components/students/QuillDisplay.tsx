'use client'

import { useEffect, useState } from 'react'

interface QuillDisplayProps {
    content: string
    className?: string
}

// Convert Quill Delta to HTML
function deltaToHtml(deltaOps: Array<{
    insert?: string
    attributes?: {
        bold?: boolean
        italic?: boolean
        underline?: boolean
        strike?: boolean
        link?: string
        color?: string
        background?: string
    }
}>): string {
    return deltaOps.map(op => {
        if (!op.insert) return ''

        let text = op.insert

        // Handle line breaks and paragraphs
        if (text === '\n') {
            return '</p><p>'
        }

        // Apply formatting attributes
        if (op.attributes) {
            if (op.attributes.bold) text = `<strong>${text}</strong>`
            if (op.attributes.italic) text = `<em>${text}</em>`
            if (op.attributes.underline) text = `<u>${text}</u>`
            if (op.attributes.strike) text = `<s>${text}</s>`
            if (op.attributes.link) text = `<a href="${op.attributes.link}" target="_blank" rel="noopener noreferrer">${text}</a>`
            if (op.attributes.color) text = `<span style="color: ${op.attributes.color}">${text}</span>`
            if (op.attributes.background) text = `<span style="background-color: ${op.attributes.background}">${text}</span>`
        }

        return text
    }).join('')
}

// Detect content type and process accordingly
function processContent(content: string): string {
    if (!content) return ''

    // Check if content is already HTML (Quill format)
    if (content.includes('<') && content.includes('>')) {
        // Clean up Quill-specific HTML artifacts
        const cleanedContent = content
            // Remove Quill UI elements
            .replace(/<span class="ql-ui"[^>]*><\/span>/g, '')
            // Clean up list formatting - convert Quill lists to proper HTML lists
            .replace(/<ol><li data-list="bullet">/g, '<ul class="list-disc list-inside mb-4 ml-4 space-y-2"><li>')
            .replace(/<\/li><li data-list="bullet">/g, '</li><li>')
            .replace(/<\/li><\/ol>/g, '</li></ul>')
            // Style headings
            .replace(/<h3>/g, '<h3 class="text-lg font-semibold text-gray-800 mt-6 mb-3">')
            // Style paragraphs
            .replace(/<p>/g, '<p class="mb-4 text-gray-700 leading-relaxed">')
            // Style strong tags
            .replace(/<strong>/g, '<span class="font-semibold text-gray-900">')
            .replace(/<\/strong>/g, '</span>')
            // Style list items
            .replace(/<li>/g, '<li class="mb-1">')

        // Add main title and last updated info if not present
        const hasTitle = cleanedContent.includes('<h1') || cleanedContent.includes('General Policy')

        if (!hasTitle) {
            const titleAndContent = `
                <div class="mb-6">
                    <!-- <h1 class="text-2xl font-bold text-gray-900 mb-2">General Policy and Guidelines</h1>
                    <p class="text-sm text-gray-500 italic">Last updated: June 28, 2025</p>
                    -->
                </div>
                ${cleanedContent}
            `
            return titleAndContent
        }

        return cleanedContent
    }

    // Try to parse as Quill Delta format
    try {
        const deltaContent = JSON.parse(content)
        if (deltaContent.ops && Array.isArray(deltaContent.ops)) {
            const htmlContent = deltaToHtml(deltaContent.ops)
            return htmlContent ? `<p>${htmlContent}</p>` : ''
        }
    } catch {
        // Not JSON, continue to plain text processing
    }

    // Process as plain text with enhanced formatting for policy documents
    const lines = content.split('\n').map(line => line.trim()).filter(line => line.length > 0)
    let htmlContent = ''

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i]

        // Handle main titles (like "General Policy and Guidelines")
        if (i === 0 && !line.match(/^\d+\./)) {
            htmlContent += `<h1 class="text-2xl font-bold text-gray-900 mb-6">${line}</h1>`
        }
        // Handle "Last updated" info
        else if (line.toLowerCase().includes('last updated')) {
            htmlContent += `<p class="text-sm text-gray-500 mb-6 italic">${line}</p>`
        }
        // Handle numbered sections (1. Purpose, 2. Scope, etc.)
        else if (line.match(/^\d+\.\s+[A-Z]/)) {
            htmlContent += `<h2 class="text-lg font-semibold text-gray-800 mt-6 mb-3">${line}</h2>`
        }
        // Handle subsections (Eligibility:, Credentials:, etc.)
        else if (line.match(/^[A-Z][a-zA-Z\s]+:/)) {
            htmlContent += `<h3 class="text-base font-medium text-gray-700 mt-4 mb-2">${line}</h3>`
        }
        // Handle list items or regular content
        else {
            // Check if it's a list item (starts with description or similar pattern)
            if (line.startsWith('Viewing ') || line.startsWith('Enrolling ') ||
                line.startsWith('Submitting ') || line.startsWith('Monitoring ') ||
                line.startsWith('Accessing ') || line.startsWith('Tampering ') ||
                line.startsWith('Using ')) {
                htmlContent += `<li class="mb-1">${line}</li>`
            } else {
                htmlContent += `<p class="mb-3 text-gray-700 leading-relaxed">${line}</p>`
            }
        }
    }

    // Wrap standalone list items in ul tags
    htmlContent = htmlContent.replace(/(<li[^>]*>.*?<\/li>)(?:\s*<li[^>]*>.*?<\/li>)*/g, (match) => {
        return `<ul class="list-disc list-inside mb-4 ml-4 space-y-1">${match}</ul>`
    })

    return htmlContent
}

export default function QuillDisplay({ content, className = '' }: QuillDisplayProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="animate-pulse bg-gray-200 h-32 rounded"></div>
    }

    const processedContent = processContent(content)

    return (
        <div className={`${className}`}>
            <div
                className="max-w-none"
                dangerouslySetInnerHTML={{ __html: processedContent }}
            />
        </div>
    )
}
