import AspectRatio from '@tailwindcss/aspect-ratio';
import ContainerQueries from '@tailwindcss/container-queries';
import Typography from '@tailwindcss/typography';
import fluid, { extract, fontSize, screens } from 'fluid-tailwind';
import type { Config } from 'tailwindcss';
import Animate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: {
    files: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    extract,
  },
  theme: {
    fontSize,
    screens,
    extend: {
      screens: {
        xs: '20rem',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        grape: {
          '50': '#fbf6fd',
          '100': '#f5ecfb',
          '200': '#ebd9f5',
          '300': '#dcbaed',
          '400': '#c791e1',
          '500': '#ae66cf',
          '600': '#9347b2',
          '700': '#7a3893',
          '800': '#652f79',
          '900': '#572b64',
          '950': '#441752',
        },
        kimberly: {
          '50': '#f8f7fb',
          '100': '#f2f1f6',
          '200': '#e6e5ef',
          '300': '#d1cfe3',
          '400': '#b8b4d1',
          '500': '#9d94be',
          '600': '#887bac',
          '700': '#8174a0',
          '800': '#635780',
          '900': '#534969',
          '950': '#352f46',
        },
        cupid: {
          '50': '#fdf3f6',
          '100': '#fbe8ee',
          '200': '#f6d5df',
          '300': '#efb6c8',
          '400': '#e488a7',
          '500': '#d65d89',
          '600': '#c13d73',
          '700': '#a22e61',
          '800': '#882955',
          '900': '#75264d',
          '950': '#401127',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        flex: 'var(--font-roboto-flex)',
        mono: 'var(--font-roboto-mono)',
      },
    },
  },
  plugins: [Typography, AspectRatio, ContainerQueries, fluid, Animate],
} satisfies Config;
