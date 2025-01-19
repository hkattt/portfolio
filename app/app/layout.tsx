import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Hugo Kat",
  description: "Hugo Kat is a software engineer and computer science student",
  generator: "Next.js",
  keywords: ["Portfolio", "Software Engineer"],
  authors: [{name: "Hugo Kat", url: "https://hugokat.dev"}],
  openGraph: {
    title: "Hugo Kat",
    description: "Hugo Kat is a software engineer and computer science student",
    url: "https://hugokat.dev",
    siteName: "Hugo Kat",
    images: [
      {
        url: "/hugo.png",
        width: 843,
        height: 1124
      }
    ],
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Hugo Kat",
    description: "Hugo Kat is a software engineer and computer science student",
    images: ["/hugo.png"]
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
