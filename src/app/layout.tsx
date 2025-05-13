import type { Metadata } from 'next'
import {
  ClerkProvider
} from '@clerk/nextjs'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'SJSFI - SIS',
  description: 'SJSFI Student Information System',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.variable} antialiased`}>
          {children}
          <Toaster position="top-center" />
        </body>
      </html>
    </ClerkProvider>
  )
}