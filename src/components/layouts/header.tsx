'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { UserIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
const ThemeButton = dynamic(() => import('@/components/theme-button'), {
  ssr: false,
});

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn('px-4', className)}>
      <div className='max-xs:mx-4 xs:max-w-[95%] mx-auto flex items-center justify-between py-0.5 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl'>
        <Link className='text-lg font-bold' href='/'>
          <Image
            className='dark:invert dark:filter'
            src='/png/banner.png'
            alt='Travelush'
            width={200}
            height={54}
          />
        </Link>
        <nav className='flex items-center'>
          <Link className='ml-2' href='/login'>
            <Button
              variant='outline'
              className='text-grape-900 h-8 font-semibold'
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
      </div>
    </header>
  );
};
