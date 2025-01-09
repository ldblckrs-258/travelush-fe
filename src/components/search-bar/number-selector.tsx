'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { MinusIcon, PlusIcon } from 'lucide-react';

interface NumberSelectorProps {
  className?: string;
  value: number;
  setValue: (value: number) => void;
  max?: number;
  min?: number;
}

export const NumberSelector: React.FC<NumberSelectorProps> = ({
  className,
  value,
  setValue,
  max,
  min,
}) => {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <Button
        className='size-8 bg-grape-100'
        variant='outline'
        onClick={() =>
          min ? setValue(Math.max(value - 1, min)) : setValue(value - 1)
        }
        disabled={value === min}
      >
        <MinusIcon size={20} strokeWidth={2} />
      </Button>
      <Input
        className='h-8 w-8 px-1 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
        type='number'
        value={value}
        onChange={(e) => {
          const newValue = parseInt(e.target.value) || 0;
          if (min && newValue < min) {
            setValue(min);
          }
          if (max && newValue > max) {
            setValue(max);
          } else {
            setValue(newValue);
          }
        }}
        min={min}
        max={max}
      />
      <Button
        className='size-8 bg-grape-100'
        variant='outline'
        onClick={() =>
          max ? setValue(Math.min(value + 1, max)) : setValue(value + 1)
        }
        disabled={value === max}
      >
        <PlusIcon size={20} strokeWidth={2} />
      </Button>
    </div>
  );
};
