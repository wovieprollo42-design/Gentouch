import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '1.5rem', lg: '2rem', xl: '2.5rem' },
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        brand: {
          50: '#F2FBE6',
          100: '#E2F6C9',
          200: '#C6ED96',
          300: '#A3E05C',
          400: '#82D32C',
          500: '#63C800',
          600: '#4FA300',
          700: '#2F7D00',
          800: '#265F06',
          900: '#1D470A',
          950: '#0C2603',
        },
        accent: {
          50: '#FEF2F2',
          100: '#FDE3E2',
          200: '#FBC9C7',
          300: '#F79A97',
          400: '#F1615C',
          500: '#E51B16',
          600: '#C31410',
          700: '#A11310',
          800: '#821613',
          900: '#6B1815',
        },
        ink: {
          DEFAULT: '#101510',
          soft: '#2B342A',
          muted: '#5C6759',
          faint: '#8D968A',
        },
        canvas: '#F6F8F3',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        '8xl': ['6rem', { lineHeight: '0.98', letterSpacing: '-0.035em' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(16,21,16,0.04), 0 8px 24px -12px rgba(16,21,16,0.12)',
        lift: '0 2px 4px rgba(16,21,16,0.04), 0 24px 48px -24px rgba(16,21,16,0.22)',
        glow: '0 18px 44px -18px rgba(99,200,0,0.55)',
        'glow-accent': '0 18px 44px -18px rgba(229,27,22,0.5)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '900': '900ms',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translate3d(0, 24px, 0)' },
          to: { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        'slide-up-fade': {
          from: { opacity: '0', transform: 'translate3d(0, 16px, 0) scale(0.98)' },
          to: { opacity: '1', transform: 'translate3d(0, 0, 0) scale(1)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.55' },
          '70%': { transform: 'scale(1.7)', opacity: '0' },
          '100%': { transform: 'scale(1.7)', opacity: '0' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both',
        'slide-up-fade': 'slide-up-fade 0.45s cubic-bezier(0.22,1,0.36,1) both',
        'pulse-ring': 'pulse-ring 2.8s cubic-bezier(0.22,1,0.36,1) infinite',
        marquee: 'marquee 38s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
