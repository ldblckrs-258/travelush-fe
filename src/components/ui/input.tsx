import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border border-grape-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-grape-950 placeholder:text-grape-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-grape-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-grape-800 dark:file:text-grape-50 dark:placeholder:text-grape-400 dark:focus-visible:ring-grape-300 md:text-sm',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
