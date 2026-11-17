'use client';

import { useI18n } from '@/components/providers/i18n-provider';

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-24">
      <div className="wrap about grid grid-cols-1 gap-14 px-7 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <p className="kicker">{t.about.kicker}</p>
          <h2
            className="font-serif text-[clamp(34px,4.4vw,46px)] font-medium leading-tight tracking-tight"
            dangerouslySetInnerHTML={{ __html: t.about.title }}
          />
          <p className="body mt-6 max-w-[520px] text-soft">{t.about.body}</p>
        </div>
        <div className="pillars grid grid-cols-2 gap-px self-start border border-hair bg-hair">
          {t.about.pillars.map((p, idx) => (
            <div key={idx} className="bg-background p-6">
              <p className="i font-serif italic text-gold">{p.i}</p>
              <p className="t mt-1 font-serif text-xl">{p.title}</p>
              <p className="d mt-1 text-sm text-soft">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
