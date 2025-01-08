'use client';

import { cn } from '@/lib/utils';
import { Moon, Sun, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { ButtonHTMLAttributes, forwardRef } from 'react';

enum Theme {
  light = 'light',
  dark = 'dark',
  system = 'system',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  expand?: boolean;
  size?: 'sm' | 'md';
}

const ThemeButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = 'md', expand = true, ...props }, ref) => {
    const { theme, setTheme } = useTheme();
    const handleClick = () => {
      if (theme === Theme.light) {
        setTheme(Theme.dark);
      } else if (theme === Theme.dark) {
        setTheme(Theme.system);
      } else {
        setTheme(Theme.light);
      }
    };
    return (
      <button
        ref={ref}
        className={cn(
          'flex items-center justify-center rounded-full border transition-all',
          size === 'sm' ? 'h-7 min-w-7' : 'h-8 min-w-8',
          expand ? '~min-w-[5.5rem]/[5.75rem] ~px-2/3' : '',
          theme === Theme.light &&
            'bg-grape-50 text-grape-800 border-grape-500/50 hover:border-grape-500 hover:bg-grape-100',
          theme === Theme.system &&
            'border-sky-600/50 bg-sky-50 text-sky-800 hover:border-sky-600 hover:bg-sky-100',
          theme === Theme.dark &&
            'bg-cupid-700 border-cupid-200 text-cupid-200 hover:bg-cupid-600',
          className,
        )}
        onClick={handleClick}
        title={`Switch to ${theme} mode`}
        {...props}
      >
        <div className='ml-[1px] mt-[1px]'>
          {theme === Theme.light && <Sun size={size === 'sm' ? 16 : 18} />}
          {theme === Theme.dark && <Moon size={size === 'sm' ? 16 : 18} />}
          {theme === Theme.system && <SunMoon size={size === 'sm' ? 16 : 18} />}
        </div>

        {expand && (
          <span className='ml-2 text-xs font-medium capitalize'>{theme}</span>
        )}
      </button>
    );
  },
);

ThemeButton.displayName = 'ThemeButton';

export default ThemeButton;
