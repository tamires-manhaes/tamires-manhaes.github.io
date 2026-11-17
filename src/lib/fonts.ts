import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';

export const fraunces = Fraunces({
  variable: '--font-serif',
  subsets: ['latin'],
});

export const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
});
