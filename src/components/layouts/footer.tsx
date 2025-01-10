import { cn } from '@/lib/utils';
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ComponentProps } from 'react';
import { Button } from '../ui/button';

export function Footer({
  className,
  ...props
}: {
  className?: string;
} & ComponentProps<'div'>) {
  return (
    <div
      className={`relative h-[224px] w-full`}
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
      {...props}
    >
      <footer
        className={cn(
          `fixed bottom-0 h-fit w-full bg-kimberly-300 px-20`,
          className,
        )}
      >
        <div className='flex h-full w-full justify-between gap-20 py-8'>
          <div>
            <Image
              src='/png/banner.png'
              alt='Travelush'
              width={240}
              height={54}
              className='dark:invert dark:filter'
            />
            <p className='max-w-[240px] pl-4 text-sm leading-5 text-kimberly-700'>
              Travelush is a travel agency that provides a variety of services
              to help you plan your perfect trip.
            </p>
            <div className='mt-2 flex items-center gap-2 pl-4'>
              <Link href='https://facebook.com'>
                <Button className='size-7 rounded-full p-0'>
                  <FacebookIcon size={10} />
                </Button>
              </Link>
              <Link href='https://instagram.com'>
                <Button className='size-7 rounded-full p-0'>
                  <InstagramIcon size={10} />
                </Button>
              </Link>
              <Link href='https://twitter.com'>
                <Button className='size-7 rounded-full p-0'>
                  <TwitterIcon size={10} />
                </Button>
              </Link>
            </div>
          </div>
          <div className='mt-4 flex flex-1 justify-between gap-8 [&>div>a]:text-sm [&>div>a]:text-kimberly-900'>
            <div className='flex flex-1 flex-col gap-2'>
              <h3 className='mb-2 font-semibold uppercase text-grape-800'>
                Support
              </h3>
              <Link href='./'>Contact Us</Link>
              <Link href='./'>FAQs</Link>
              <Link href='./'>Help Center</Link>
              <Link href='./'>Cancellation Options</Link>
            </div>

            <div className='flex flex-1 flex-col gap-2'>
              <h3 className='mb-2 font-semibold uppercase text-grape-800'>
                Explore
              </h3>
              <Link href='./'>Destinations</Link>
              <Link href='./'>Hotels</Link>
              <Link href='./'>Special Offers</Link>
              <Link href='./'>Travel Guides</Link>
            </div>

            <div className='flex flex-1 flex-col gap-2'>
              <h3 className='mb-2 font-semibold uppercase text-grape-800'>
                Legal
              </h3>
              <Link href='./'>Privacy Policy</Link>
              <Link href='./'>Terms of Service</Link>
              <Link href='./'>Cookie Policy</Link>
              <Link href='./'>Security</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
