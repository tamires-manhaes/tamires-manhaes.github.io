import { Providers } from '@/components/providers';
import { fraunces, inter, jetbrainsMono } from '@/lib/fonts';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </div>
  );
}
