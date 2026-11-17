'use client';

import { useEffect, useState } from 'react';

const REDUCE =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

export function Terminal({
  prompt,
  rows,
}: {
  prompt: string;
  rows: { key: string; value: string }[];
}) {
  const [cmd, setCmd] = useState(REDUCE ? prompt : '');
  const [showRows, setShowRows] = useState(
    REDUCE ? rows.map(() => true) : rows.map(() => false),
  );
  const [done, setDone] = useState(REDUCE);

  useEffect(() => {
    if (REDUCE) return;
    let i = 0;
    const typeTimer = setInterval(() => {
      i += 1;
      setCmd(prompt.slice(0, i));
      if (i >= prompt.length) {
        clearInterval(typeTimer);
        rows.forEach((_, idx) => {
          setTimeout(
            () => {
              setShowRows((prev) => {
                const next = [...prev];
                next[idx] = true;
                return next;
              });
              if (idx === rows.length - 1) {
                setTimeout(() => setDone(true), 180 + idx * 140);
              }
            },
            180 + idx * 140,
          );
        });
      }
    }, 90);
    return () => clearInterval(typeTimer);
  }, [prompt, rows]);

  return (
    <aside
      className="term overflow-hidden rounded border border-hair bg-sink font-mono text-sm leading-relaxed"
      aria-label="Profile summary"
    >
      <div
        className="term-bar flex items-center gap-2 border-b border-hair bg-raise px-4 py-3"
        aria-hidden="true"
      >
        <i
          className="block h-2.5 w-2.5 rounded-full"
          style={{ background: '#c2683d' }}
        />
        <i
          className="block h-2.5 w-2.5 rounded-full"
          style={{ background: '#c79a5b' }}
        />
        <i
          className="block h-2.5 w-2.5 rounded-full"
          style={{ background: '#8f9055' }}
        />
        <span className="ml-2 text-xs text-faint">~/tamires</span>
      </div>
      <div className="term-body min-h-[260px] p-5 pb-6">
        <p className="prompt mb-3 text-soft">
          <b className="text-gold">$</b> <span>{cmd}</span>
          {!done && (
            <span className="caret ml-0.5 inline-block w-2 text-gold animate-blink">
              ▍
            </span>
          )}
        </p>
        <dl className="grid grid-cols-[72px_minmax(0,1fr)] gap-x-3 gap-y-1.5">
          {rows.map((row, idx) => (
            <div
              key={row.key}
              className={`row contents ${showRows[idx] ? '' : 'invisible'}`}
            >
              <dt className="text-faint">{row.key}</dt>
              <dd className="text-foreground">{row.value}</dd>
            </div>
          ))}
        </dl>
        {done && (
          <p className="prompt mt-4 text-soft">
            <b className="text-gold">$</b>{' '}
            <span className="caret inline-block w-2 text-gold animate-blink">
              ▍
            </span>
          </p>
        )}
      </div>
    </aside>
  );
}
