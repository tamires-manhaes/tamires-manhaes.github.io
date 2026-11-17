'use client';

import { useI18n } from '@/components/providers/i18n-provider';

export default function Experience() {
  const { t, locale } = useI18n();

  const cvUrl =
    locale === 'pt'
      ? '/Tamires_Manhaes_CV_2026_pt.pdf'
      : '/Tamires_Manhaes_CV_2026_en.pdf';

  return (
    <section id="experience" className="py-24">
      <div className="wrap px-7">
        <p className="kicker">{t.experience.kicker}</p>
        <div className="section-head">
          <h2 className="font-serif text-[clamp(34px,4.4vw,46px)] font-medium leading-tight tracking-tight">
            {t.experience.title}
          </h2>
          <p className="section-note">
            <a href={cvUrl} download className="text-gold">
              {t.cv.full}
            </a>
          </p>
        </div>
        <ol className="exp mt-6 list-none p-0 text-base">
          {t.experience.items.map((item, idx) => (
            <li
              key={idx}
              className="grid grid-cols-1 gap-2 border-b border-hair py-5 md:grid-cols-[150px_minmax(0,1fr)_minmax(0,1.4fr)] md:gap-x-8"
            >
              <span className="when pt-1 font-mono text-[13px] text-faint">
                {item.period}
              </span>
              <span className="font-semibold">
                {item.company}
                {item.role && (
                  <>
                    {' '}
                    <span className="r font-normal text-faint">
                      {item.role}
                    </span>
                  </>
                )}
              </span>
              <span className="what text-soft">{item.desc}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
