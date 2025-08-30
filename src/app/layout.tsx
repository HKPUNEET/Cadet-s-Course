import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '../lib/fontawesome';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
    title: "Cadet's Course - SSB Preparation with Free Refundable Program",
    description: '21-day online SSB preparation course with refundable fee. Join Cadet Course for expert SSB guidance from selected candidates.',
    keywords: 'SSB interview, SSB preparation, refundable SSB course, free SSB coaching, defence aspirants, Indian Armed Forces, officer training, OLQs, current affairs for SSB, cadet training, SSB success stories, SSB online course, Ayush Kumar Singh, Varadraj Patil',
    authors: [{ name: 'Cadet Course Team' }],
    metadataBase: new URL('https://cadet-s-course.vercel.app'),
    openGraph: {
        title: "Cadet's Course - Refundable SSB Preparation Program",
        description: 'Join our 21-day refundable SSB preparation course. Expert guidance from successful candidates.',
        url: 'https://cadet-s-course.vercel.app',
        siteName: "Cadet's Course",
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: "Cadet's Course - SSB Preparation with Refundable Fee",
        description: '21-day online SSB course with refund option.',
    },
    robots: {
        index: true,
        follow: true,
    },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
