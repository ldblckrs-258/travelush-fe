import { auth, signOut } from '@/auth'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { UserIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SearchBar } from '../search-bar'
import ThemeButton from '../theme-button'

interface HeaderProps {
  className?: string
}

export const Header: React.FC<HeaderProps> = async ({ className }) => {
  const session = await auth()

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
        {session?.user ? (
          <>
            <Button
              variant='ghost'
              className='mr-2 size-8 overflow-hidden rounded-full p-0'
              title={session?.user?.name ?? 'User avatar'}
            >
              <Image
                src={session?.user?.avatar ?? '/png/avatar.png'}
                alt={session?.user?.name ?? 'User avatar'}
                width={32}
                height={32}
              />
            </Button>
            <Button
              variant='outline'
              className='h-8 font-semibold text-grape-900'
              onClick={async () => {
                'use server'
                await signOut()
              }}
            >
              Sign out
            </Button>
          </>
        ) : (
          <>
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
          </>
        )}
        <ThemeButton className='ml-2' size='sm' expand={false} />
      </nav>
    </header>
  )
}
