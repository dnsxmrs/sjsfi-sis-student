'use client'

import { useEffect, useRef, useState } from 'react';
import { useGradeAccessLogger, useScreenshotDetection } from './hooks';
import './protection.css';

interface GradeProtectionProps {
    children: React.ReactNode;
}

export function GradeProtection({ children }: GradeProtectionProps) {
    const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    
    // Use custom hooks for logging and detection
    const { logAccess } = useGradeAccessLogger();
    const screenshotAttempts = useScreenshotDetection();

    useEffect(() => {        // Disable right-click context menu
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
            logAccess('RIGHT_CLICK_BLOCKED');
            setShowWarning(true);
            setTimeout(() => setShowWarning(false), 3000);
            return false;
        };

        // Disable common keyboard shortcuts
        const handleKeyDown = (e: KeyboardEvent) => {
            // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S, Ctrl+P
            if (
                e.key === 'F12' ||
                (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
                (e.ctrlKey && (e.key === 'u' || e.key === 'U')) ||
                (e.ctrlKey && (e.key === 's' || e.key === 'S')) ||
                (e.ctrlKey && (e.key === 'p' || e.key === 'P')) ||
                (e.ctrlKey && (e.key === 'a' || e.key === 'A')) || // Select all
                e.key === 'PrintScreen'
            ) {
                e.preventDefault();
                logAccess(`KEYBOARD_SHORTCUT_BLOCKED: ${e.key}`);
                setShowWarning(true);
                setTimeout(() => setShowWarning(false), 3000);
                return false;
            }
        };

        // Detect DevTools
        const detectDevTools = () => {
            const threshold = 160;
            const widthThreshold = window.outerWidth - window.innerWidth > threshold;
            const heightThreshold = window.outerHeight - window.innerHeight > threshold;
            
            if (widthThreshold || heightThreshold) {
                if (!isDevToolsOpen) {
                    setIsDevToolsOpen(true);
                }
            } else {
                if (isDevToolsOpen) {
                    setIsDevToolsOpen(false);
                }
            }
        };

        // Disable drag and drop
        const handleDragStart = (e: DragEvent) => {
            e.preventDefault();
            return false;
        };

        // Disable text selection on double click
        const handleSelectStart = (e: Event) => {
            e.preventDefault();
            return false;
        };

        // Add event listeners
        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('dragstart', handleDragStart);
        document.addEventListener('selectstart', handleSelectStart);
        
        // DevTools detection interval
        const devToolsInterval = setInterval(detectDevTools, 1000);

        // Blur content when window loses focus (potential screenshot)
        const handleVisibilityChange = () => {
            if (document.hidden && contentRef.current) {
                contentRef.current.style.filter = 'blur(20px)';
                setTimeout(() => {
                    if (contentRef.current) {
                        contentRef.current.style.filter = 'none';
                    }
                }, 2000);
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Cleanup
        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('dragstart', handleDragStart);
            document.removeEventListener('selectstart', handleSelectStart);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            clearInterval(devToolsInterval);
        };
    }, [isDevToolsOpen, logAccess]);

    // Add CSS for print protection
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            @media print {
                body * {
                    visibility: hidden !important;
                }
                body::before {
                    content: "GRADES CANNOT BE PRINTED. Visit the registrar to obtain official transcripts." !important;
                    visibility: visible !important;
                    display: block !important;
                    position: fixed !important;
                    top: 50% !important;
                    left: 50% !important;
                    transform: translate(-50%, -50%) !important;
                    font-size: 24px !important;
                    color: red !important;
                    font-weight: bold !important;
                    text-align: center !important;
                    z-index: 9999 !important;
                }
            }
            
            /* Disable text selection */
            .grade-content {
                -webkit-user-select: none !important;
                -moz-user-select: none !important;
                -ms-user-select: none !important;
                user-select: none !important;
                -webkit-touch-callout: none !important;
                -webkit-tap-highlight-color: transparent !important;
            }
            
            /* Additional protection against copying */
            .grade-content * {
                -webkit-user-select: none !important;
                -moz-user-select: none !important;
                -ms-user-select: none !important;
                user-select: none !important;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    if (isDevToolsOpen) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-red-50">
                <div className="text-center p-8 bg-white rounded-lg shadow-lg border-2 border-red-200">
                    <div className="text-6xl mb-4">🚫</div>
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Access Restricted</h2>
                    <p className="text-gray-700 mb-4">
                        Developer tools are not allowed when viewing grades.
                    </p>                    <p className="text-sm text-gray-500">
                        For official transcripts, please visit the registrar&apos;s office.
                    </p>
                </div>
            </div>
        );
    }    return (
        <div className="relative grade-protection-active grade-watermark">
            {/* Warning Toast */}
            {showWarning && (
                <div className="fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-pulse">
                    <div className="flex items-center space-x-2">
                        <span className="text-xl">⚠️</span>
                        <span className="font-medium">Action Blocked!</span>
                    </div>                    <p className="text-sm mt-1">
                        Screenshots, printing, and copying are not allowed. Visit the registrar for official documents.
                        {screenshotAttempts > 0 && ` (${screenshotAttempts} attempts detected)`}
                    </p>
                </div>
            )}

            {/* Watermark overlay */}
            <div className="fixed inset-0 pointer-events-none z-10 opacity-5">
                <div className="absolute inset-0 bg-repeat" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.35em' font-size='16' fill='%23000' transform='rotate(-45 100 100)'%3ECONFIDENTIAL - NOT FOR PRINTING%3C/text%3E%3C/svg%3E")`,
                    backgroundSize: '200px 200px'
                }} />
            </div>

            {/* Protected content */}
            <div ref={contentRef} className="grade-content relative z-0">
                {children}
            </div>

            {/* Invisible overlay to prevent interactions */}
            <div 
                className="absolute inset-0 z-20 pointer-events-none"
                style={{ 
                    background: 'transparent',
                    mixBlendMode: 'multiply'
                }}
            />
        </div>
    );
}
