'use client';

import Link from 'next/link';
import Layout from '@/components/Layout';
import { useI18n } from '@/components/providers/i18n-provider';

export default function AdopetsCasePage() {
  const { t } = useI18n();
  const c = t.case.adopets;
  const specs = [
    c.specs.role,
    c.specs.scope,
    c.specs.stack,
    {
      label: c.specs.code.label,
      value: (
        <a
          href="https://github.com/tamires-manhaes/adopets-monorepo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold"
        >
          {c.specs.code.value}
        </a>
      ),
    },
  ];

  return (
    <Layout>
      <section className="case-hero pt-16">
        <div className="wrap px-7">
          <Link
            href="/#work"
            className="back inline-flex items-center gap-2 py-2 text-[15px] text-soft hover:text-foreground"
          >
            {t.case.back}
          </Link>
          <p className="kicker mt-7">{t.case.kicker}</p>
          <h1 className="mt-6 font-serif text-[clamp(56px,8vw,104px)] font-medium leading-[0.98] tracking-tight">
            {c.title}
          </h1>
          <p className="sub mt-5 max-w-[760px] font-serif text-[clamp(22px,2.4vw,30px)] italic leading-snug text-camel">
            {c.sub}
          </p>
          <dl className="specs mt-14 grid grid-cols-1 border border-hair bg-hair md:grid-cols-2 lg:grid-cols-4">
            {specs.map((s, idx) => (
              <div
                key={idx}
                className="border-b border-r border-hair bg-background p-6 last:border-r-0 md:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r [&:nth-child(3)]:lg:border-b-0"
              >
                <dt className="font-mono text-xs text-faint">{s.label}</dt>
                <dd className="mt-1 text-[15px]">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-10">
        <div className="wrap split grid grid-cols-1 gap-3 px-7 lg:grid-cols-[1fr_2fr]">
          <h2 className="font-serif text-[clamp(26px,3vw,34px)] font-medium">
            {c.why.title}
          </h2>
          <div className="txt text-soft">
            <p className="mb-4">{c.why.p1}</p>
            <p className="mb-4">{c.why.p2}</p>
          </div>
        </div>
      </section>

      <div className="band border-y border-hair bg-sink py-20">
        <div className="wrap px-7">
          <p className="kicker">{c.arch.kicker}</p>
          <h2 className="mb-10 font-serif text-[clamp(34px,4.4vw,46px)] font-medium leading-tight tracking-tight">
            {c.arch.title}
          </h2>
          <div className="boxes grid grid-cols-1 gap-3 font-mono text-[13px] md:grid-cols-3">
            {c.arch.boxes.map((b) => (
              <div
                key={b.label}
                className="border border-hair bg-background p-5"
              >
                <p className="lb mb-1 text-faint">{b.label}</p>
                <p className="bd text-foreground">{b.value}</p>
              </div>
            ))}
          </div>
          <p className="arrow my-3 text-center font-mono text-sm text-gold">
            {c.arch.arrow}
          </p>
          <div className="boxes shared grid grid-cols-1 gap-3 font-mono text-[13px] md:grid-cols-3">
            {c.arch.shared.map((b) => (
              <div
                key={b.label}
                className="border border-dashed border-gold bg-transparent p-5"
              >
                <p className="lb mb-1 text-gold">{b.label}</p>
                <p className="bd text-foreground">{b.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="wrap px-7">
          <p className="kicker">{c.access.kicker}</p>
          <h2 className="mb-8 font-serif text-[clamp(34px,4.4vw,46px)] font-medium leading-tight tracking-tight">
            {c.access.title}
          </h2>
          <div className="access flex flex-wrap items-center gap-3 font-mono text-[13px]">
            {c.access.chain.flatMap((item, idx) => {
              const isKey = idx === c.access.chain.length - 1;
              const nodes: React.ReactNode[] = [];
              if (idx > 0) {
                nodes.push(
                  <span
                    key={`arrow-${idx}`}
                    className="text-gold"
                    aria-hidden="true"
                  >
                    →
                  </span>,
                );
              }
              nodes.push(
                <div
                  key={item.label}
                  className={`flex-1 basis-[170px] border p-5 ${
                    isKey
                      ? 'border-gold bg-transparent'
                      : 'border-hair bg-raise'
                  }`}
                >
                  <p
                    className={`lb mb-1 ${isKey ? 'text-gold' : 'text-faint'}`}
                  >
                    {item.label}
                  </p>
                  <p className="bd text-foreground">{item.value}</p>
                </div>,
              );
              return nodes;
            })}
          </div>
          <p className="mt-5 max-w-[720px] text-soft">{c.access.body}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="wrap px-7">
          <p className="kicker">{c.decisions.kicker}</p>
          <h2 className="mb-2 font-serif text-[clamp(34px,4.4vw,46px)] font-medium leading-tight tracking-tight">
            {c.decisions.title}
          </h2>
          {c.decisions.items.map((d, idx) => (
            <article
              key={idx}
              className="decision split grid grid-cols-1 gap-3 border-b border-hair py-8 lg:grid-cols-[1fr_2fr]"
            >
              <h3 className="font-serif text-[22px] font-medium">{d.title}</h3>
              <div className="txt text-soft">
                <p className="mb-4">{d.body}</p>
                {d.trade && (
                  <p className="trade font-mono text-sm text-faint">
                    {d.trade}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-6 pt-2">
        <div className="wrap px-7">
          <div className="callout rounded border border-hair bg-raise p-7">
            <p className="kicker">{c.next.kicker}</p>
            <p className="max-w-[760px] text-soft">{c.next.body}</p>
          </div>
          <blockquote className="mt-14 max-w-[820px] font-serif text-[clamp(21px,2.4vw,26px)] italic leading-snug">
            “{c.quote}”
          </blockquote>
        </div>
      </section>

      <section className="py-10">
        <div className="next wrap flex flex-wrap items-center justify-between gap-5 border-t border-dashed border-gold px-7 pt-10">
          <Link
            href="/#work"
            className="back py-2 text-[15px] text-soft hover:text-foreground"
          >
            {t.case.back}
          </Link>
          <a
            href={c.nextUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="to font-serif text-[22px]"
            dangerouslySetInnerHTML={{ __html: c.nextProject }}
          />
        </div>
      </section>
    </Layout>
  );
}
