import { Button } from '@/components/ui/button';
import { MapPinIcon, XIcon } from 'lucide-react';
import { Dispatch, useRef, useState } from 'react';

interface DestinationInputProps {
  value: string;
  onChange: Dispatch<string>;
}

export const DestinationInput: React.FC<DestinationInputProps> = ({
  value,
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const clearInput = () => onChange('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`m-1 flex h-12 w-fit flex-1 items-center rounded-lg border-2 border-gray-700 pl-2 hover:bg-white/50 ${
        isFocused ? 'border-grape-500 bg-white/50' : 'border-transparent'
      }`}
    >
      <MapPinIcon
        className='cursor-pointer text-grape-900'
        size={20}
        strokeWidth={2}
        onClick={() => inputRef.current?.focus()}
      />
      <div className='ml-4 flex h-full flex-1 flex-col gap-1 py-2'>
        <label
          className='cursor-pointer font-mono text-xs leading-3 tracking-tight text-kimberly-500'
          htmlFor='search-place'
        >
          Destination
        </label>
        <input
          ref={inputRef}
          id='search-place'
          type='text'
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => {
            inputRef.current?.select();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          placeholder='Search for places'
          className='bg-transparent text-sm font-semibold leading-4 text-slate-800 focus:outline-none'
        />
      </div>
      <Button
        className='h-10 w-8 text-grape-800 opacity-80 hover:opacity-100'
        variant='ghost'
        onClick={clearInput}
      >
        <XIcon size={20} strokeWidth={3} />
      </Button>
    </div>
  );
};
