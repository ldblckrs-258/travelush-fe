'use client';

import { Button } from '@/components/ui/button';
import {
  IGuestRoom,
  initialGuestRoom,
} from '@/interfaces/guest-room.interface';
import { cn } from '@/lib/utils';
import { Separator } from '@radix-ui/react-separator';
import { addDays } from 'date-fns';
import { SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { DateSelector } from './date-selector';
import { DestinationInput } from './destination-input';
import { GuestRoomSelector } from './guest-room-selector';

interface SearchBarProps {
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  const [searchValue, setSearchValue] = useState('');
  const [checkIn, setCheckIn] = useState<Date | undefined>(
    addDays(new Date(), 14),
  );
  const [checkOut, setCheckOut] = useState<Date | undefined>(
    addDays(new Date(), 21),
  );
  const [guestRoom, setGuestRoom] = useState<IGuestRoom>(initialGuestRoom);

  return (
    <div
      className={cn(
        'mx-6 my-1 flex h-14 items-center rounded-lg bg-grape-500/10',
        className,
      )}
    >
      <DestinationInput value={searchValue} onChange={setSearchValue} />{' '}
      <Separator
        className='h-full w-[1px] bg-grape-400/30'
        orientation='vertical'
      />
      <DateSelector
        checkIn={checkIn}
        setCheckIn={setCheckIn}
        checkOut={checkOut}
        setCheckOut={setCheckOut}
      />
      <Separator
        className='h-full w-[1px] bg-grape-400/30'
        orientation='vertical'
      />
      <GuestRoomSelector value={guestRoom} setValue={setGuestRoom} />
      <Button className='ml-2 mr-2 h-10 w-10'>
        <SearchIcon size={20} strokeWidth={2.5} />
      </Button>
    </div>
  );
};
