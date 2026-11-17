'use client';

import { createContext, useContext, useState } from 'react';

type FilterValue = {
  tech: string;
  label: string;
} | null;

type StackFilterContextType = {
  active: FilterValue;
  select: (tech: string, label: string) => void;
  clear: () => void;
};

const StackFilterContext = createContext<StackFilterContextType | null>(null);

export function StackFilterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [active, setActive] = useState<FilterValue>(null);

  const select = (tech: string, label: string) => {
    setActive((prev) => (prev?.tech === tech ? null : { tech, label }));
  };

  const clear = () => setActive(null);

  return (
    <StackFilterContext.Provider value={{ active, select, clear }}>
      {children}
    </StackFilterContext.Provider>
  );
}

export function useStackFilter() {
  const context = useContext(StackFilterContext);
  if (!context) {
    throw new Error('useStackFilter must be used within StackFilterProvider');
  }
  return context;
}
