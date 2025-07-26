import React from 'react';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

import { AppLayout } from "@/components/AppLayout";
import '@/styles/globals.scss';

const spaceGrotest = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Hugo Kat',
  description: 'Hey! I\'m Hugo Kat. A software engineer and game developer. Learn more about me on this page.',
  generator: 'Next.js',
  keywords: ['Portfolio', 'Software Engineer'],
  authors: [{name: 'Hugo Kat', url: 'https://hugokat.dev'}],
  openGraph: {
    title: 'Hugo Kat',
    description: 'Hey! I\'m Hugo Kat. A software engineer and game developer. Learn more about me on this page.',
    url: 'https://hugokat.dev',
    siteName: 'Hugo Kat',
    images: [
      {
        url: '/hugo.png',
        width: 843,
        height: 1124
      }
    ],
    locale: 'en_GB',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hugo Kat',
    description: 'Hey! I\'m Hugo Kat. A software engineer and game developer. Learn more about me on this page.',
    images: ['/hugo.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>

const RootLayout = ({children}: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={`${spaceGrotest.variable}`}>
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}

export default RootLayout;
