# Grade Protection System

## Overview
This system implements comprehensive protection measures to prevent unauthorized capture, printing, or distribution of student grades. The system enforces the policy that official transcripts and grade documents can only be obtained through the registrar's office after proper payment and request procedures.

## Protection Features

### 1. Print Protection
- **Complete Print Blocking**: CSS `@media print` rules hide all grade content when printing
- **Custom Print Message**: Shows official message directing users to the registrar's office
- **Print Shortcut Blocking**: Disables Ctrl+P keyboard shortcut

### 2. Screenshot Protection
- **PrintScreen Key Blocking**: Detects and blocks PrintScreen key usage
- **Window Focus Detection**: Temporarily blurs content when window loses focus (potential screenshot)
- **Visibility Change Detection**: Monitors tab switching and minimizing
- **Dynamic Content Blurring**: Applies temporary blur effects during suspicious activities

### 3. Copy/Paste Protection
- **Text Selection Disabled**: Prevents text selection using CSS and JavaScript
- **Copy Shortcut Blocking**: Disables Ctrl+C, Ctrl+A shortcuts
- **Drag and Drop Prevention**: Blocks dragging of images and content
- **Clipboard Override**: Replaces clipboard content with warning message

### 4. Developer Tools Protection
- **DevTools Detection**: Monitors window dimensions to detect opened developer tools
- **Access Restriction**: Completely blocks grade view when developer tools are detected
- **F12 Key Blocking**: Prevents opening developer tools via keyboard
- **Inspect Element Blocking**: Disables right-click context menu and Ctrl+Shift+I

### 5. Right-Click Protection
- **Context Menu Disabled**: Prevents right-click context menu
- **Warning System**: Shows immediate feedback when blocked actions are attempted
- **Access Logging**: Records all attempted unauthorized actions

### 6. Visual Protection
- **Watermark Overlay**: Subtle "CONFIDENTIAL" watermarks across the content
- **Dynamic Blurring**: Applies blur effects during suspicious activities
- **Selection Prevention**: Disables text highlighting and selection
- **Anti-Screenshot Overlays**: Invisible overlays that interfere with screenshot tools

### 7. Access Logging
- **Comprehensive Tracking**: Logs all access attempts and blocked actions
- **IP Address Recording**: Captures user IP for security auditing
- **User Agent Detection**: Records browser and device information
- **Timestamp Logging**: Tracks exact times of all activities
- **API Endpoint**: Dedicated `/api/grade-access-log` for logging

## Technical Implementation

### Components
- **GradeProtection.tsx**: Main protection wrapper component
- **GradesTable.tsx**: Enhanced table component with additional protections
- **hooks.ts**: Custom React hooks for logging and detection
- **protection.css**: CSS-based protection rules
- **API Route**: Server-side logging endpoint

### Protection Layers
1. **Browser-level**: CSS and JavaScript based protections
2. **Application-level**: React component and hook-based monitoring
3. **Server-level**: API logging and tracking
4. **UI/UX-level**: Visual deterrents and user warnings

## Files Modified/Created
- `GradeProtection.tsx` - Main protection component
- `GradesTable.tsx` - Enhanced with protection features
- `page.tsx` - Updated to use protection wrapper
- `hooks.ts` - Custom protection hooks
- `protection.css` - Protection CSS rules
- `route.ts` - API logging endpoint

## Security Measures

### User Education
- Clear warning messages about protection policies
- Instructions to visit registrar's office for official documents
- Real-time feedback for blocked actions

### Technical Deterrents
- Multiple layers of protection that work together
- Dynamic responses to user behavior
- Logging for security auditing

### Legal Compliance
- Clear notices about authorized use only
- Official channels for legitimate document requests
- Audit trail for security compliance

## Important Notes

### Limitations
- **Client-side Protection**: These measures primarily work on the client-side and can be bypassed by determined users with technical knowledge
- **Browser Compatibility**: Some features may work differently across browsers
- **Mobile Devices**: Additional considerations needed for mobile screenshot gestures

### Recommendations for Enhanced Security
1. **Server-side Rendering**: Consider server-side PDF generation with watermarks
2. **Session Monitoring**: Implement session-based access controls
3. **Rate Limiting**: Limit access frequency per user
4. **Two-Factor Authentication**: Require additional authentication for grade access
5. **Audit Trails**: Maintain comprehensive access logs
6. **Legal Notices**: Display clear terms of use and consequences

### Best Practices
- Regularly update protection measures as new bypass techniques emerge
- Monitor access logs for suspicious activity
- Educate users about proper channels for official documents
- Maintain clear policies about grade access and distribution

## Usage

```tsx
import { GradeProtection } from './GradeProtection';

export default function GradesPage() {
    return (
        <GradeProtection>
            {/* Your grade content here */}
        </GradeProtection>
    );
}
```

## Maintenance
- Monitor access logs regularly
- Update protection measures based on new threats
- Test protection effectiveness across different browsers and devices
- Keep documentation updated with any changes
