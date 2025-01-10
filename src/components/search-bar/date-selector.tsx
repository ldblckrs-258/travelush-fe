'use client';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';

import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { DateRange } from 'react-day-picker';

interface DateSelectorProps {
  checkIn: Date | undefined;
  setCheckIn: Dispatch<SetStateAction<Date | undefined>>;
  checkOut: Date | undefined;
  setCheckOut: Dispatch<SetStateAction<Date | undefined>>;
}

export const DateSelector: React.FC<DateSelectorProps> = ({
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dateRange: DateRange = {
    from: checkIn,
    to: checkOut,
  };
  const handleSelect = (range: DateRange | undefined) => {
    if (range) {
      setCheckIn(range.from);
      setCheckOut(range.to);
    }
  };
  return (
    <Popover onOpenChange={setIsOpen}>
      <PopoverTrigger>
        <div
          className={`m-1 flex h-12 items-center rounded-lg border-2 hover:bg-white/50 ${isOpen ? 'border-grape-500/50 bg-white/50' : 'border-transparent'}`}
        >
          <div className='m-1 flex h-12 w-fit cursor-pointer items-center px-2'>
            <CalendarIcon
              className='mr-4 cursor-pointer text-grape-900'
              size={20}
              strokeWidth={2}
            />
            <div className='flex h-full flex-col gap-1 py-2'>
              <div className='cursor-pointer text-left font-mono text-xs leading-3 tracking-tight text-kimberly-500'>
                Check In
              </div>
              <span className='min-w-[90px] text-left text-sm font-semibold leading-4 tracking-wide text-slate-800'>
                {checkIn ? format(checkIn, 'MMM d, yyyy') : 'Select date'}
              </span>
            </div>
          </div>
          <Separator
            className='h-8 w-[1px] bg-grape-400/20'
            orientation='vertical'
          />
          <div className='m-1 flex h-12 w-fit cursor-pointer items-center px-2'>
            <div className='flex h-full flex-col gap-1 py-2'>
              <div className='cursor-pointer text-left font-mono text-xs leading-3 tracking-tight text-kimberly-500'>
                Check Out
              </div>
              <div className='min-w-[90px] text-left text-sm font-semibold leading-4 tracking-wide text-slate-800'>
                {checkOut ? format(checkOut, 'MMM d, yyyy') : 'Select date'}
              </div>
            </div>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar
          mode='range'
          selected={dateRange}
          onSelect={handleSelect}
          disabled={{ before: new Date() }}
          fromMonth={new Date()}
          defaultMonth={checkIn || new Date()}
        />
      </PopoverContent>
    </Popover>
  );
};
