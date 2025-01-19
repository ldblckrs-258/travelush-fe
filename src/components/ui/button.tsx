import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-slate-300',
  {
    variants: {
      variant: {
        default:
          'bg-grape-900 text-grape-50 shadow hover:bg-grape-900/90 dark:bg-grape-300 dark:text-grape-900 dark:hover:bg-grape-300/90',
        destructive:
          'bg-red-500 text-grape-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-grape-50 dark:hover:bg-red-900/90',
        outline:
          'border border-grape-400/80 bg-white shadow-sm hover:bg-grape-100 hover:text-grape-800 dark:border-grape-400 dark:text-grape-300 dark:bg-grape-300/10 dark:hover:bg-grape-500/30 dark:hover:text-grape-50',
        secondary:
          'bg-cupid-200 text-cupid-800 shadow-sm hover:bg-cupid-200/80 dark:bg-cupid-800 dark:text-cupid-50 dark:hover:bg-cupid-800/80',
        ghost:
          'hover:bg-grape-100 hover:text-grape-900 dark:hover:bg-grape-950 dark:hover:text-grape-50',
        link: 'text-grape-900 underline-offset-4 hover:underline dark:text-grape-50',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
