'use client'
import { useCookie } from '@/hooks/use-cookies'
import { cn } from '@/lib/utils'
import { CookieIcon } from 'lucide-react'
import { AnimatePresence, motion, type HTMLMotionProps } from 'motion/react'
import { useEffect, useState, type ReactNode } from 'react'
import { Button } from '../ui/button'
export function SimpleCookieBanner({
  children,
  className,
  ...props
}: {
  children?: ReactNode
  className?: string
} & HTMLMotionProps<'dialog'>) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const defaultConsent = { consent: false, marketing: false, declined: false }

  const [consentCookieValue, setConsentCookieValue] = useCookie(
    'consent_cookie',
    defaultConsent,
    {
      days: 365,
      sameSite: 'lax',
      secure: true,
    },
  )

  if (!isClient) return null

  return (
    <>
      {/* {consentCookieValue.consent === true && (
        <button
          type='button'
          onClick={() => removeCookieConsent()}
          className='mt-2 rounded-md bg-neutral-400/20 px-4 py-2 text-neutral-800 hover:bg-neutral-400/40 dark:text-neutral-50'
        >
          Reset cookie consent (by removing the cookie)
        </button>
      )} */}

      <AnimatePresence>
        {!consentCookieValue.consent && !consentCookieValue.declined && (
          <motion.dialog
            initial={{ opacity: 0, y: 20, scale: 0.9, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            aria-describedby='cookie-banner-description'
            aria-labelledby='cookie-banner-title'
            className={cn(
              'shadow-3xl z-50 flex flex-col gap-y-3 rounded-2xl border border-neutral-100 bg-white p-4 pb-2 text-sm text-neutral-500 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-500 md:max-w-80',
              className,
            )}
            {...props}
          >
            <div className='flex items-center gap-3 text-grape-950 dark:text-grape-400'>
              <CookieIcon size={24} />
              <p id='cookie-banner-description'>{children}</p>
            </div>

            <div className='flex flex-row items-center'>
              <Button
                className='text-grape-600'
                variant='ghost'
                onClick={() => {
                  setConsentCookieValue({
                    consent: true,
                    marketing: true,
                    declined: false,
                  })
                }}
              >
                Accept
              </Button>
              <Button
                className=''
                variant='ghost'
                onClick={() => {
                  setConsentCookieValue({
                    consent: true,
                    marketing: false,
                    declined: false,
                  })
                }}
              >
                Necessary Only
              </Button>
              <Button
                className='hover:bg-transparent hover:text-cupid-600 dark:hover:bg-transparent dark:hover:text-cupid-500'
                variant='ghost'
                onClick={() => {
                  setConsentCookieValue({
                    consent: false,
                    marketing: false,
                    declined: true,
                  })
                }}
              >
                Decline
              </Button>
            </div>
          </motion.dialog>
        )}
      </AnimatePresence>
    </>
  )
}

export default SimpleCookieBanner
