'use client';

import { Terminal } from '@/components/Terminal';
import { useI18n } from '@/components/providers/i18n-provider';

export default function Hero() {
  const { t } = useI18n();
  const terminalRows = [
    { key: 'role', value: t.hero.terminal.role },
    { key: 'focus', value: t.hero.terminal.focus },
    { key: 'stack', value: t.hero.terminal.stack },
    { key: 'based', value: t.hero.terminal.based },
    { key: 'now', value: t.hero.terminal.now },
  ];

  return (
    <section id="top" className="hero pt-20 md:pt-24">
      <div className="wrap px-7">
        <div className="who mb-9 flex flex-wrap items-center gap-3 md:gap-4">
          <p className="name text-lg font-semibold">{t.hero.name}</p>
          <p className="badge rounded bg-gold px-2.5 py-1 font-mono text-xs text-on-gold">
            {t.hero.badge}
          </p>
          <p className="focus font-mono text-sm text-faint">{t.hero.focus}</p>
        </div>

        <div className="hero-grid grid grid-cols-1 items-end gap-11 pb-8 lg:grid-cols-[1.55fr_1fr]">
          <div>
            <h1
              className="font-serif text-[clamp(42px,6.4vw,84px)] font-medium leading-[1.03] tracking-tight"
              dangerouslySetInnerHTML={{ __html: t.hero.h1 }}
            />
            <p className="lede mt-8 max-w-[600px] text-lg text-soft">
              {t.hero.lede}
            </p>
            <div className="ctas mt-10 flex flex-wrap gap-3">
              <a href="#work" className="btn btn-gold">
                {t.hero.ctaWork}
              </a>
              <a href="#contact" className="btn btn-line">
                {t.hero.ctaTalk}
              </a>
            </div>
          </div>
          <Terminal prompt={t.hero.terminal.prompt} rows={terminalRows} />
        </div>

        <div className="stats mt-16 grid grid-cols-2 border border-hair bg-hair md:grid-cols-4">
          {t.hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="border-r border-b border-hair bg-background p-6 last:border-r-0 md:border-b-0"
            >
              <p className="font-serif text-4xl leading-none">{stat.value}</p>
              <p className="mt-2 font-mono text-xs text-faint">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
