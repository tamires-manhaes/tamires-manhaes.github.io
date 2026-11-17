'use client';

import { useI18n } from '@/components/providers/i18n-provider';
import { useStackFilter } from '@/components/providers/stack-filter-provider';
import { cn } from '@/utils/cn';

export default function Stack() {
  const { t } = useI18n();
  const { active, select, clear } = useStackFilter();

  const filtered = active
    ? t.work.projects.filter((p) => p.tech?.includes(active.tech))
    : t.work.projects;
  const count = filtered.length;

  return (
    <section id="stack" className="py-24">
      <div className="wrap px-7">
        <p className="kicker">{t.stack.kicker}</p>
        <div className="section-head">
          <h2 className="font-serif text-[clamp(34px,4.4vw,46px)] font-medium leading-tight tracking-tight">
            {t.stack.title}
          </h2>
          <p className="section-note">{t.stack.note}</p>
        </div>

        <div className="stack-grid mt-9 grid grid-cols-1 border border-hair bg-hair md:grid-cols-2 lg:grid-cols-5">
          {t.stack.columns.map((col) => (
            <div
              key={col.title}
              className="stack-col border-b border-r border-hair bg-background p-6 last:border-r-0 md:border-b-0"
            >
              <h3 className="mb-3 font-mono text-xs font-normal uppercase tracking-widest text-gold">
                {col.title}
              </h3>
              <ul className="list-none p-0 text-[15px]">
                {col.items.map((item, idx) => {
                  if (!item.tech) {
                    return (
                      <li key={idx} className="py-1">
                        {item.label}
                      </li>
                    );
                  }
                  const isActive = active?.tech === item.tech;
                  return (
                    <li key={idx} className="py-1">
                      <button
                        type="button"
                        className={cn(
                          'border-b border-dotted border-transparent pb-px text-left transition-colors',
                          isActive
                            ? 'border-gold text-gold'
                            : 'text-foreground hover:border-gold',
                        )}
                        aria-pressed={isActive}
                        onClick={() => select(item.tech!, item.label)}
                      >
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {active && (
          <p
            className="filter-note mt-4 min-h-[1.7em] font-mono text-sm text-faint"
            aria-live="polite"
          >
            {count === 1
              ? t.stack.filter.single
                  .replace('{{count}}', String(count))
                  .replace('{{tech}}', active.label)
              : count > 1
                ? t.stack.filter.multiple
                    .replace('{{count}}', String(count))
                    .replace('{{tech}}', active.label)
                : t.stack.filter.none.replace('{{tech}}', active.label)}{' '}
            <button
              type="button"
              className="ml-1 text-gold underline underline-offset-4"
              onClick={clear}
            >
              {t.stack.filter.clear}
            </button>
            {count > 0 && (
              <a href="#work" className="ml-1 text-gold">
                · {t.work.title.toLowerCase()}
              </a>
            )}
          </p>
        )}
      </div>
    </section>
  );
}
