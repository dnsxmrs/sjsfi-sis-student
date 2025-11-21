import LoginFooter from '@/components/auth/LoginFooter';
import StudentLoginForm from '@/components/auth/StudentLoginForm';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Login | SJSFI SIS',
  description: 'Sign in to your SJSFI Student Information System account. Access your grades, class schedules, notifications, and academic records securely.',
  keywords: [
    'SJSFI student login',
    'student portal access',
    'SIS login',
    'student information system',
    'academic portal',
    'grade access',
    'student dashboard login'
  ],
  openGraph: {
    title: 'SJSFI Student Login - Access Your Academic Portal',
    description: 'Sign in to your SJSFI Student Information System account. Access your grades, class schedules, notifications, and academic records securely.',
    type: 'website',
    images: [
      {
        url: '/assets/sjsfi_logo.svg',
        width: 200,
        height: 200,
        alt: 'SJSFI Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'SJSFI Student Login - Access Your Academic Portal',
    description: 'Sign in to your SJSFI Student Information System account. Access your grades, class schedules, and academic records.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <div className="flex h-screen w-screen bg-white min-w-[360px]">
      <div className="container">
        {/* Main Screen - BG IMAGE */}
        <div
          style={{ backgroundImage: "url('/assets/sis_bg.webp')" }}
          className=" h-screen w-screen bg-cover bg-center"
        >
          {/* LOGIN FORM BG */}
          <div className="absolute right-0 w-full md:w-1/3 min-h-screen min-w-[360px] pt-[10vh] overflow-hidden bg-white/70 backdrop-blur-[20px] backdrop-saturate-[168%] shadow-md m-0 rounded-none flex flex-col bg-clip-border border border-transparent break-words mb-4">

            {/* WRAPPER */}
            <div className="flex flex-col items-center h-full w-full">

              {/* HEADER */}
              <div className="flex flex-col items-center justify-center w-full mb-4">
                <Image
                  src="/assets/sjsfi_logo.svg"
                  alt="SJSFI Logo"
                  width={90}
                  height={90}
                  className="mb-2"
                />
                <h1 className="text-3xl text-center text-[#000] w-full mb-2 mx-1">
                  <span className='font-bold text-[#800000]'>SJSFI-SIS </span>Student Module
                </h1>
              </div>

              {/* BODY */}
              <div className="flex flex-col items-center justify-center w-full">
                <p className='text-center text-black text-sm mb-4'>
                  Sign in to start your session
                </p>
                {/* FORM */}
                <StudentLoginForm />
                <LoginFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}