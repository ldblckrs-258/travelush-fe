'use client'

import { ChevronLeftIcon, Loader2Icon } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export default function LoginPage() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [countdown, setCountdown] = useState(0)
  const [pending, setPending] = useState(false)
  const searchParams = useSearchParams()

  const [email, setEmail] = useState(searchParams.get('email') || '')

  const isJustSent = searchParams.get('sent') === 'true'

  const resendConfirmationMail = async () => {
    setIsButtonDisabled(true)
    setPending(true)
    await new Promise((resolve) => setTimeout(resolve, 3000))
    toast.success('Confirmation mail sent successfully')
    setPending(false)
    setCountdown(60)
  }

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      setIsButtonDisabled(false)
    }
  }, [countdown])

  useEffect(() => {
    if (isJustSent) {
      setIsButtonDisabled(true)
      setCountdown(60)
    }
  }, [isJustSent, email])

  return (
    <section className="relative flex size-full h-dvh items-center justify-center overflow-hidden bg-[url('/png/login-bg.avif')] bg-cover px-2 py-6 md:px-12 lg:p-0">
      <motion.div
        className='absolute left-6 top-6 flex items-center gap-3 rounded-xl bg-white/60 py-2.5 pl-3 pr-5 backdrop-blur-xl transition-all hover:text-grape-800'
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <ChevronLeftIcon size={24} />
        <Link href='/'>Back to home page</Link>
      </motion.div>
      <motion.div
        className='flex h-fit flex-1 flex-col items-center justify-center rounded-3xl border-t border-white/50 bg-white/60 px-4 py-6 backdrop-blur-2xl md:flex-none md:px-12 lg:border-l lg:border-t-0 lg:py-12'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className='mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0'>
          <h1 className='text-center text-3xl font-semibold tracking-tighter text-neutral-900'>
            Your account is not activated
          </h1>
          <p className='mt-2 text-center text-base font-medium text-neutral-500'>
            Please check your email for the activation link.
          </p>
          <div className='mt-8'>
            <input
              className='mb-4 block h-12 w-full appearance-none rounded-xl bg-white px-4 py-2 text-grape-500 placeholder-neutral-300 duration-200 focus:outline-none focus:ring-neutral-300 sm:text-sm'
              id='email'
              placeholder='Enter your email'
              type='email'
              autoFocus
              autoComplete='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className='flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-grape-900 px-5 py-3 font-medium text-white duration-200 focus:ring-2 focus:ring-grape-700 focus:ring-offset-2 enabled:hover:bg-grape-700 disabled:opacity-70'
              type='button'
              onClick={resendConfirmationMail}
              disabled={isButtonDisabled}
            >
              {pending ? (
                <Loader2Icon
                  size={26}
                  strokeWidth={2.5}
                  className='animate-spin'
                />
              ) : (
                <span>Resend confirmation mail</span>
              )}
            </button>
            <div className='relative py-3'>
              <div className='relative flex justify-center'>
                <span className='px-2 text-sm text-neutral-500 before:absolute before:left-0 before:top-1/2 before:h-px before:w-1/4 before:-translate-y-1/2 after:absolute after:right-0 after:top-1/2 after:h-px after:w-1/4 after:-translate-y-1/2 sm:before:bg-neutral-300 sm:after:bg-neutral-300'>
                  {isButtonDisabled && !pending
                    ? `Try again after ${countdown}s`
                    : 'Link will expire in 5 minutes'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
