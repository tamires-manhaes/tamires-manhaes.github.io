import en from './en.json';
import pt from './pt.json';

export const dictionaries = { en, pt } as const;
export type Dictionary = typeof en;
