'use client';

import Link from 'next/link';
import { useI18n } from '@/components/providers/i18n-provider';
import { useStackFilter } from '@/components/providers/stack-filter-provider';
import { cn } from '@/utils/cn';

export default function Work() {
  const { t } = useI18n();
  const { active } = useStackFilter();

  return (
    <section id="work" className="py-24">
      <div className="wrap px-7">
        <p className="kicker">{t.work.kicker}</p>
        <div className="section-head">
          <h2
            className="font-serif text-[clamp(34px,4.4vw,46px)] font-medium leading-tight tracking-tight"
            dangerouslySetInnerHTML={{ __html: t.work.title }}
          />
          <p className="section-note">
            <a
              href="https://github.com/tamires-manhaes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold"
            >
              {t.work.github}
            </a>
          </p>
        </div>
        <p className="intro mt-5 max-w-[620px] text-soft">{t.work.intro}</p>

        <div className="mt-12">
          {t.work.projects.map((project) => {
            const dim = active && !project.tech?.includes(active.tech);
            return (
              <article
                key={project.id}
                data-tech={project.tech}
                className={cn(
                  'project grid grid-cols-1 gap-5 border-b border-hair py-11 transition-opacity lg:grid-cols-[64px_1.5fr_1fr] lg:gap-10',
                  dim && 'opacity-35',
                )}
              >
                <p className="num font-serif text-[28px] italic text-gold">
                  {project.num}
                </p>
                <div>
                  <h3 className="font-serif text-[34px] font-medium tracking-tight">
                    {project.title}
                  </h3>
                  <p className="tag mt-1 font-serif text-lg italic text-camel">
                    {project.tag}
                  </p>
                  <p className="desc max-w-[560px] text-soft">{project.desc}</p>
                  <p className="stack mt-4 font-mono text-xs text-faint">
                    {project.stack}
                  </p>
                  <div className="links mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
                    {project.id === 'adopets' && (
                      <Link
                        href={`/work/${project.id}`}
                        className="primary border-b border-gold pb-1 font-medium text-gold"
                      >
                        {t.work.case}
                      </Link>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-soft hover:text-foreground"
                    >
                      {t.work.code}
                    </a>
                  </div>
                </div>
                <div
                  className="schema self-start rounded border border-hair bg-sink p-6 font-mono text-xs leading-7 text-soft"
                  aria-hidden="true"
                >
                  {project.schema.map((line, i) => {
                    const first = i === 0 || i === 2;
                    return (
                      <p
                        key={i}
                        className={cn(
                          'm-0',
                          first ? 'text-foreground' : 'pl-4 text-faint',
                        )}
                      >
                        {line}
                      </p>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
