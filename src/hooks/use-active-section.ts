'use client';

import { useEffect, useState } from 'react';

const sections = ['work', 'stack', 'experience', 'about', 'contact'];

export function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const handle = () => {
      const y = window.scrollY + 140;
      let current: string | null = null;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) {
          current = id;
        }
      }
      setActive(current);
    };

    handle();
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return active;
}
