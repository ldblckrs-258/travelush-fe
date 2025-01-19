'use client'

import { Button } from '@/components/ui/button'
import useRequest from '@/hooks/use-request'
import { CheckIcon, ChevronLeftIcon, Loader2Icon, XIcon } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function LoginPage() {
  const [status, setStatus] = useState<'pending' | 'success' | 'error'>(
    'pending',
  )
  const [title, setTitle] = useState('We are activating your account...')
  const searchParams = useSearchParams()

  const id = searchParams.get('id')
  const code = searchParams.get('code')

  const { request } = useRequest({
    url: '/auth/active',
    method: 'post',
    body: { id, code },
    onSuccess: (res) => {
      setStatus('success')
      setTitle(res.data.message)
    },
    onError: (error) => {
      setStatus('error')
      setTitle(error?.response?.data?.message || error.message)
    },
  })

  useEffect(() => {
    if (id && code) {
      request()
    } else {
      setTitle('Invalid activation link')
      setStatus('error')
    }
  }, [id, code])

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
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.15 }}
      >
        <div className='mx-auto flex w-full max-w-md flex-col items-center sm:px-4 md:w-96 md:max-w-sm md:px-0'>
          <h1 className='mb-4 text-center text-2xl font-semibold tracking-tighter text-neutral-900'>
            {title}
          </h1>
          {status === 'pending' && (
            <Loader2Icon
              className='mx-auto animate-spin text-grape-700'
              size={48}
            />
          )}
          {status === 'success' && (
            <>
              <CheckIcon className='mx-auto text-green-600' size={48} />
              <Link className='' href='/login'>
                <Button className='mx-auto mt-4 h-9 font-semibold'>
                  Log in now
                </Button>
              </Link>
            </>
          )}
          {status === 'error' && (
            <XIcon className='mx-auto text-red-600' size={48} />
          )}
        </div>
      </motion.div>
    </section>
  )
}
