'use client';

import { useI18n } from '@/components/providers/i18n-provider';

export default function Thread() {
  const { t } = useI18n();

  return (
    <div id="thread" className="band border-y border-hair bg-sink py-24">
      <div className="wrap px-7">
        <p className="kicker">{t.thread.kicker}</p>
        <h2
          className="max-w-[780px] font-serif text-[clamp(34px,4.4vw,46px)] font-medium leading-tight tracking-tight"
          dangerouslySetInnerHTML={{ __html: t.thread.title }}
        />
        <div className="timeline mt-12 grid grid-cols-1 border border-hair bg-hair md:grid-cols-2 lg:grid-cols-4">
          {t.thread.items.map((item, idx) => (
            <div
              key={idx}
              className="border-b border-r border-hair bg-sink p-6 last:border-r-0 md:border-b-0"
            >
              <p className="y font-mono text-xs text-faint">{item.year}</p>
              <p className="c mt-2 font-serif text-[22px]">{item.company}</p>
              <p className="d mt-1 text-[15px] text-soft">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
