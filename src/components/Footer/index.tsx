'use client';

import { useI18n } from '@/components/providers/i18n-provider';

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="site py-16">
      <div className="wrap foot flex flex-wrap items-end justify-between gap-3 border-t border-hair px-7 pt-7 text-sm text-faint">
        <p className="sig font-serif text-base italic text-camel">
          {t.footer.sig}
        </p>
        <p className="copy font-mono">
          {t.footer.copy.replace('{{year}}', String(year))}
        </p>
      </div>
    </footer>
  );
}
