'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Moon, Menu } from 'lucide-react';
import { useI18n } from '@/components/providers/i18n-provider';
import { useTheme } from '@/components/providers/theme-provider';
import { useActiveSection } from '@/hooks/use-active-section';
import { cn } from '@/utils/cn';

const spectrum = [
  '#1a150f',
  '#7a4f34',
  '#c79a5b',
  '#8f9055',
  '#c2683d',
  '#e7ddc9',
];

export default function Header() {
  const { t, locale, setLocale } = useI18n();
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const navLinks = [
    { href: '#work', label: t.nav.work },
    { href: '#stack', label: t.nav.stack },
    { href: '#experience', label: t.nav.exp },
    { href: '#about', label: t.nav.about },
    { href: '#contact', label: t.nav.contact },
  ];

  const cvUrl =
    locale === 'pt'
      ? '/Tamires_Manhaes_CV_2026_pt.pdf'
      : '/Tamires_Manhaes_CV_2026_en.pdf';

  return (
    <header className="site-header sticky top-0 z-50 border-b border-hair bg-background/92 backdrop-blur">
      <div className="spectrum flex h-1" aria-hidden="true">
        {spectrum.map((c, i) => (
          <span key={i} className="flex-1" style={{ background: c }} />
        ))}
      </div>
      <div className="wrap flex items-center justify-between gap-4 px-7 py-4">
        <Link
          href="/"
          className="flex items-baseline whitespace-nowrap font-serif text-2xl font-medium tracking-tight"
          aria-label={`${t.brand}, home`}
        >
          tamires
          <span className="font-mono text-sm text-gold">.dev</span>
          <span className="ml-3 hidden border-l border-hair pl-3 font-sans text-sm font-medium text-soft md:inline">
            {t.role}
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav
            id="nav-links"
            className={cn(
              'nav-links md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0',
              menuOpen
                ? 'fixed left-0 right-0 top-[73px] flex flex-col gap-0 border-b border-hair bg-background px-7 py-2'
                : 'hidden',
            )}
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'relative py-2 text-[15px] text-soft transition-colors hover:text-foreground md:py-3',
                    isActive && 'text-foreground',
                  )}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-0 right-0 hidden h-px bg-gold md:block" />
                  )}
                </a>
              );
            })}
            <a
              href={cvUrl}
              download
              className="btn btn-small mt-3 text-center md:ml-2 md:mt-0"
            >
              {t.cv.btn}
            </a>
          </nav>

          <button
            type="button"
            className="icon-btn lang font-mono text-sm text-soft"
            onClick={() => setLocale(locale === 'en' ? 'pt' : 'en')}
            aria-label={locale === 'en' ? t.lang.toPT : t.lang.toEN}
          >
            {locale === 'en' ? (
              <>
                <b>EN</b>&nbsp;/&nbsp;PT
              </>
            ) : (
              <>
                EN&nbsp;/&nbsp;<b>PT</b>
              </>
            )}
          </button>

          <button
            type="button"
            className="icon-btn text-soft"
            onClick={toggle}
            aria-label={theme === 'dark' ? t.theme.toLight : t.theme.toDark}
          >
            {theme === 'dark' ? (
              <Sun className="h-[18px] w-[18px]" />
            ) : (
              <Moon className="h-[18px] w-[18px]" />
            )}
          </button>

          <button
            type="button"
            className="icon-btn menu-btn text-soft md:hidden"
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            aria-label={menuOpen ? t.menu.close : t.menu.open}
            onClick={() => setMenuOpen((s) => !s)}
          >
            <Menu className="h-[18px] w-[18px]" />
          </button>
        </div>
      </div>
    </header>
  );
}
