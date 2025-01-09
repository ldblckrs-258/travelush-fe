'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { UserIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { SearchBar } from '../search-bar';
const ThemeButton = dynamic(() => import('@/components/theme-button'), {
  ssr: false,
});

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        'flex w-full items-center justify-between shadow ~gap-2/4 ~px-4/12',
        className,
      )}
    >
      <Link className='text-lg font-bold' href='/'>
        <Image
          className='dark:invert dark:filter'
          src='/png/banner.png'
          alt='Travelush'
          width={220}
          height={54}
        />
      </Link>
      <SearchBar className='flex-1 lg:max-w-[800px]' />
      <nav className='flex items-center'>
        <Link className='ml-2' href='/login'>
          <Button
            variant='outline'
            className='h-8 font-semibold text-grape-900'
          >
            <UserIcon size={18} strokeWidth={2.5} />
            Log in
          </Button>
        </Link>
        <Link className='ml-2' href='/register'>
          <Button variant='secondary' className='h-8 font-semibold'>
            Register
          </Button>
        </Link>
        <ThemeButton className='ml-2' size='sm' expand={false} />
      </nav>
    </header>
  );
};
