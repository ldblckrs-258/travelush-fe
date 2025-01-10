import { cn } from '@/lib/utils';
import type { ComponentProps, ReactNode } from 'react';

export function ModernGradientContainerRoot({
  children,
  className,
  animationDurationInSeconds = 10,
  ...props
}: {
  children?: ReactNode;
  animationDurationInSeconds?: number;
} & ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'group relative rounded-[12px] bg-neutral-200 p-px dark:bg-neutral-800',
        className,
      )}
      {...props}
    >
      <span
        className='absolute inset-0 overflow-hidden rounded-[12px]'
        style={{ transform: 'translateZ(0)' }}
      >
        <span
          className='pointer-events-none absolute inset-0 select-none'
          style={{
            animationDuration: `${animationDurationInSeconds}s`,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationDirection: 'alternate',
            animationName: 'border-translate',
          }}
        >
          <span
            className='block size-24 -translate-x-1/2 -translate-y-1/3 blur-xl'
            style={{
              background: 'linear-gradient(135deg, #7A69F9, #F26378, #F5833F)',
            }}
          />
        </span>
      </span>
      <span
        className='pointer-events-none absolute inset-0 select-none'
        style={{
          animationDuration: `${animationDurationInSeconds}s`,
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
          animationDirection: 'alternate',
          animationName: 'border-glow-translate',
        }}
      >
        <span
          className='z-0 block h-full w-12 -translate-x-1/2 rounded-full blur-xl'
          style={{
            animationDuration: `${animationDurationInSeconds}s`,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationDirection: 'alternate',
            animationName: 'border-glow-scale',
            background: 'linear-gradient(135deg, #7A69F9, #F26378, #F5833F)',
          }}
        />
      </span>

      {children}
    </div>
  );
}

export function ModernGradientContainerContent({
  children,
  ...props
}: ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        'relative z-[1] flex w-full items-center justify-center gap-1 rounded-[11px] bg-neutral-50/90 dark:bg-neutral-950/90',
        props.className,
      )}
    >
      {children}
    </span>
  );
}
