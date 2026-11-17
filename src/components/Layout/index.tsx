'use client';

import Header from '../Header';
import Footer from '../Footer';
import { useI18n } from '@/components/providers/i18n-provider';

export default function Layout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const { t } = useI18n();

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <Header />
      <main id="main" className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
