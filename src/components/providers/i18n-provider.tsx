'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { dictionaries, type Dictionary } from '@/lib/i18n/dictionaries';
import { Locale, defaultLocale } from '@/lib/i18n/config';

type I18nContextType = {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const saved = localStorage.getItem('td-lang') as Locale | null;
    if (saved === 'en' || saved === 'pt') {
      setLocale(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
    localStorage.setItem('td-lang', locale);
  }, [locale]);

  return (
    <I18nContext.Provider
      value={{ locale, t: dictionaries[locale], setLocale }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}
