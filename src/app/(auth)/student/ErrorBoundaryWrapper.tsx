'use client'

import { ErrorBoundary } from 'react-error-boundary'
import { ReactNode } from 'react'
import { useEffect } from 'react';
import ErrorDisplay from '@/components/atoms/ErrorBubble';

function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
    useEffect(() => {
        
    }, [error]);

    return (
        <ErrorDisplay message={error.message} reset={resetErrorBoundary} />
    )
}

export default function ErrorBoundaryWrapper({ children }: { children: ReactNode }) {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            {children}
        </ErrorBoundary>
    )
}