import { cn } from '@/lib/utils';
import { AlertCircleIcon, XIcon } from 'lucide-react';

interface SimpleAlertProps {
  className?: string;
  title: string;
  description: string;
  onClose?: () => void;
}

export default function SimpleAlert({
  className,
  title,
  description,
  onClose,
}: SimpleAlertProps) {
  return (
    <div className='group z-50 flex flex-col gap-2'>
      <div
        className={cn(
          'flex transform-gpu items-center justify-between gap-2 rounded-lg border border-neutral-500/10 bg-white px-3 py-1.5 transition-all dark:bg-neutral-800 dark:hover:bg-neutral-800/70 sm:py-2.5',
          className,
        )}
      >
        <div className='flex items-center gap-2'>
          <div className='inline-flex items-center justify-center rounded-lg border border-neutral-500/10 p-1 text-cupid-500 dark:bg-neutral-400/10'>
            <AlertCircleIcon className='size-5' />
          </div>
          <div>
            <p className='text-xs font-semibold tracking-tight text-cupid-900 dark:text-neutral-300 sm:text-sm'>
              {title}
            </p>
            <p className='text-xs text-kimberly-700 dark:text-neutral-500'>
              {description}
            </p>
          </div>
        </div>
        {onClose && (
          <button
            className='rounded-md p-1 text-neutral-400 transition-colors ease-linear hover:bg-neutral-500/10 hover:text-cupid-600 dark:text-neutral-600'
            type='button'
            onClick={onClose}
          >
            <XIcon className='size-5' />
          </button>
        )}
      </div>
    </div>
  );
}
