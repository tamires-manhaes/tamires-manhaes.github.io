import { colors } from './src/theme/index';
import type { Config } from 'tailwindcss';
import tailwindcssTypography from '@tailwindcss/typography';

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        sink: 'var(--sink)',
        raise: 'var(--raise)',
        soft: 'var(--soft)',
        faint: 'var(--faint)',
        hair: 'var(--hair)',
        gold: 'var(--gold)',
        camel: 'var(--camel)',
        'on-gold': 'var(--on-gold)',
        terra: 'var(--terra)',
        olive: 'var(--olive)',
        muted: 'var(--muted)',
        grey: {
          default: colors.grey.dark.default,
          '50': colors.grey.dark['50'],
          '100': colors.grey.dark['100'],
          '200': colors.grey.dark['200'],
          '300': colors.grey.dark['300'],
          '400': colors.grey.dark['400'],
          '500': colors.grey.dark['500'],
          '600': colors.grey.dark['600'],
          '700': colors.grey.dark['700'],
          '800': colors.grey.dark['800'],
          '900': colors.grey.dark['900'],
          '950': colors.grey.dark['950'],
        },
        emerald: {
          '500': colors.emerald['500'],
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
        rise: 'rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both',
      },
      keyframes: {
        blink: {
          '50%': { opacity: '0' },
        },
        rise: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
    },
  },
  plugins: [tailwindcssTypography],
} satisfies Config;
