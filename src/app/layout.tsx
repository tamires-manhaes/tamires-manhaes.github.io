import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'tamires.dev',
  description:
    "Explore the portfolio of p1ment4, a skilled frontend developer specializing in modern web development using React, Next.js, JavaScript, and CSS. Discover projects, case studies, and innovative solutions showcasing expertise in responsive design, performance optimization, and user-friendly interfaces. Let's build the web together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
