'use client'

import { useEffect, useState } from 'react';

interface GradeAccessLog {
    timestamp: string;
    action: string;
    userAgent: string;
    ip?: string;
}

export function useGradeAccessLogger() {
    const [accessLogs, setAccessLogs] = useState<GradeAccessLog[]>([]);

    const logAccess = (action: string) => {
        const log: GradeAccessLog = {
            timestamp: new Date().toISOString(),
            action,
            userAgent: navigator.userAgent,
        };
        
        setAccessLogs(prev => [...prev, log]);
        
        // In a real application, you would send this to your backend
        console.warn('Grade access attempt:', log);
        
        // You could also send this to your API
        fetch('/api/grade-access-log', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(log),
        }).catch(console.error);
    };

    useEffect(() => {
        // Log initial access
        logAccess('PAGE_VIEW');

        // Monitor for suspicious activities
        const handleFocus = () => logAccess('WINDOW_FOCUS');
        const handleBlur = () => logAccess('WINDOW_BLUR');
        const handleResize = () => logAccess('WINDOW_RESIZE');
        
        window.addEventListener('focus', handleFocus);
        window.addEventListener('blur', handleBlur);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('focus', handleFocus);
            window.removeEventListener('blur', handleBlur);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { logAccess, accessLogs };
}

// Custom hook for detecting screenshot attempts
export function useScreenshotDetection() {
    const [screenshotAttempts, setScreenshotAttempts] = useState(0);

    useEffect(() => {
        let isHidden = false;

        const handleVisibilityChange = () => {
            if (document.hidden && !isHidden) {
                isHidden = true;
                setScreenshotAttempts(prev => prev + 1);
                
                // Blur the entire page temporarily
                document.body.style.filter = 'blur(20px)';
                
                setTimeout(() => {
                    document.body.style.filter = 'none';
                    isHidden = false;
                }, 2000);
            }
        };

        // Detect when user switches tabs or minimizes window
        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Detect PrintScreen key
        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.key === 'PrintScreen') {
                setScreenshotAttempts(prev => prev + 1);
                
                // Show warning
                const warning = document.createElement('div');
                warning.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: rgba(239, 68, 68, 0.95);
                    color: white;
                    padding: 20px;
                    border-radius: 10px;
                    z-index: 10000;
                    font-size: 18px;
                    font-weight: bold;
                    text-align: center;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                `;
                warning.innerHTML = `
                    <div>🚫 Screenshot Blocked!</div>
                    <div style="font-size: 14px; margin-top: 10px;">
                        Visit the registrar for official documents
                    </div>
                `;
                
                document.body.appendChild(warning);
                
                setTimeout(() => {
                    document.body.removeChild(warning);
                }, 3000);
            }
        };

        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return screenshotAttempts;
}
