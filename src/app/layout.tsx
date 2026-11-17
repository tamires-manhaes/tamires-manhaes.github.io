import type { Metadata, Viewport } from 'next';
import { fraunces, inter, jetbrainsMono } from '@/lib/fonts';
import './globals.css';
import { Providers } from '@/components/providers';

export const viewport: Viewport = {
  themeColor: '#211b16',
};

export const metadata: Metadata = {
  title: 'Tamires Manhães — Software Engineer',
  description:
    'Full stack, frontend-first software engineer. TypeScript, React, Node and AI.',
  openGraph: {
    title: 'Tamires Manhães — Software Engineer',
    description: 'Full stack, frontend-first software engineer.',
    type: 'website',
    url: 'https://tamires.dev',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
