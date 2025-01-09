'use client';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { IGuestRoom } from '@/interfaces/guest-room.interface';
import { UsersIcon } from 'lucide-react';
import {
  Dispatch,
  Fragment,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Checkbox } from '../ui/checkbox';
import { NumberSelector } from './number-selector';

interface GuestRoomSelectorProps {
  value: IGuestRoom;
  setValue: Dispatch<SetStateAction<IGuestRoom>>;
}

export const GuestRoomSelector: React.FC<GuestRoomSelectorProps> = ({
  value,
  setValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const displayText = useMemo(() => {
    return `${value.adults + value.children} ${value.adults + value.children > 1 ? 'guests' : 'guest'}, ${value.rooms} ${
      value.rooms > 1 ? 'rooms' : 'room'
    }`;
  }, [value]);

  useEffect(() => {
    if (value.children === 0) {
      setValue((prev) => ({ ...prev, childrenAges: [] }));
    } else if (value.children < value.childrenAges.length) {
      setValue((prev) => ({
        ...prev,
        childrenAges: prev.childrenAges.slice(0, value.children),
      }));
    } else {
      setValue((prev) => ({
        ...prev,
        childrenAges: [
          ...prev.childrenAges,
          ...Array.from(
            { length: value.children - prev.childrenAges.length },
            () => 0,
          ),
        ],
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value.children]);

  return (
    <Popover onOpenChange={setIsOpen}>
      <PopoverTrigger>
        <div
          className={`m-1 flex h-12 items-center rounded-lg border-2 hover:bg-white/50 ${isOpen ? 'border-grape-500/50 bg-white/50' : 'border-transparent'}`}
        >
          <div className='m-1 flex h-12 w-fit cursor-pointer items-center px-2'>
            <UsersIcon
              className='mr-4 cursor-pointer text-grape-900'
              size={20}
              strokeWidth={2}
            />
            <div className='flex h-full flex-col gap-1 py-2'>
              <div className='cursor-pointer text-left font-mono text-xs leading-3 tracking-tight text-kimberly-500'>
                Guests & Rooms
              </div>
              <div className='text-sm font-semibold leading-4 tracking-wide text-slate-800'>
                {displayText}
              </div>
            </div>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <ScrollArea
          className={` ${value.children > 0 ? 'h-[280px]' : 'h-fit'}`}
        >
          <div className='grid w-fit grid-cols-[1fr,auto] items-center gap-x-8 gap-y-4 p-4 pr-6'>
            <span className='text-sm font-semibold'>Adults</span>
            <NumberSelector
              value={value.adults}
              setValue={(newValue) =>
                setValue((prev) => ({ ...prev, adults: newValue }))
              }
              min={1}
              max={32}
            />
            <span className='text-sm font-semibold'>Children</span>
            <NumberSelector
              value={value.children}
              setValue={(newValue) =>
                setValue((prev) => ({ ...prev, children: newValue }))
              }
              min={0}
              max={16}
            />

            {value.children > 0 && (
              <>
                <Separator
                  className='col-span-2 h-[1px] w-full bg-grape-400/30'
                  orientation='horizontal'
                />
                <span className='col-span-2 -mt-2 text-left text-base font-medium text-slate-900'>
                  Children&apos;s ages
                </span>
                {Array.from({ length: value.childrenAges.length }).map(
                  (_, index) => (
                    <Fragment key={index}>
                      <span className='text-sm font-semibold'>
                        Child {index + 1}
                      </span>
                      <NumberSelector
                        value={value.childrenAges[index]}
                        setValue={(newValue) =>
                          setValue((prev) => ({
                            ...prev,
                            childrenAges: prev.childrenAges.map((age, i) =>
                              i === index ? newValue : age,
                            ),
                          }))
                        }
                        min={0}
                        max={17}
                      />
                    </Fragment>
                  ),
                )}
              </>
            )}
            <Separator
              className='col-span-2 h-[1px] w-full bg-grape-400/30'
              orientation='horizontal'
            />
            <div className='col-span-2 -mt-2 flex w-full items-center justify-between'>
              <div>
                <span className='text-sm font-semibold'>Pet friendly</span>
                <p className='text-xs text-kimberly-700'>
                  Only show stays that allow pets
                </p>
              </div>
              <Checkbox
                className='size-5'
                checked={value.havePets}
                onCheckedChange={(checked) =>
                  setValue((prev) => ({ ...prev, havePets: !!checked }))
                }
              />
            </div>
          </div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
};
