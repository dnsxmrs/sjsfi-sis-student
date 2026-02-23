import type { Metadata } from 'next'
import {
  ClerkProvider
} from '@clerk/nextjs'
import { Poppins } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: 'SJSFI - Student Information System',
    template: '%s | SJSFI SIS'
  },
  description: 'Saint Joseph School of Fairview Inc. Student Information System. Access your grades, schedules, notifications, and academic records securely. Login to view your student dashboard and manage your academic information.',
  keywords: [
    'SJSFI',
    'Saint Joseph School of Fairview Inc.',
    'Student Information System',
    'SIS',
    'Student Portal',
    'Academic Records',
    'Grades',
    'Schedule',
    'Student Dashboard'
  ],
  authors: [{ name: 'SJSFI IT Department' }],
  creator: 'SJSFI IT Department',
  publisher: 'Saint Joseph School of Fairview Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sjsfi-sis.vercel.app'), // Update with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SJSFI - Student Information System',
    description: 'Saint Joseph School of Fairview Inc. Student Information System. Access your grades, schedules, and academic records securely.',
    type: 'website',
    locale: 'en_US',
    url: 'https://sjsfi-sis.vercel.app', // Update with your actual domain
    siteName: 'SJSFI SIS',
  },
  twitter: {
    card: 'summary',
    title: 'SJSFI - Student Information System',
    description: 'Saint Joseph School of Fairview Inc. Student Information System. Access your grades, schedules, and academic records securely.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#800000" />
          <link rel="icon" href="/favicon.ico" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebApplication",
                "name": "SJSFI Student Information System",
                "description": "Saint Joseph School of Fairview Inc. Student Information System for accessing grades, schedules, and academic records",
                "url": "https://sjsfi-sis.vercel.app",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Web",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                },
                "provider": {
                  "@type": "Organization",
                  "name": "Saint Joseph School of Fairview Inc.",
                  "url": "https://sjsfi-sis.vercel.app"
                }
              })
            }}
          />
        </head>
        <body className={`${poppins.variable} antialiased`}>
          <main id="main-content" role="main">
            {children}
          </main>
          <Toaster position="top-right" />
        </body>
      </html>
    </ClerkProvider>
  )
}