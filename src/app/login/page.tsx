'use client'

import GoogleIcon from '@/components/common/google-icon'
import { authenticate } from '@/utils/server-actions'
import { useFormik } from 'formik'
import { ChevronLeftIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import * as Yup from 'yup'

export default function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (credentials) => {
      await authenticate(credentials.email, credentials.password)
    },
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: false,
  })

  return (
    <section className="relative flex size-full h-dvh items-center justify-center overflow-hidden bg-[url('/png/login-bg.avif')] bg-cover px-2 py-6 md:px-12 lg:justify-end lg:p-0">
      <motion.div
        className='absolute left-6 top-6 flex items-center gap-3 rounded-xl bg-white/60 py-2.5 pl-3 pr-5 backdrop-blur-xl transition-all hover:text-grape-800'
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <ChevronLeftIcon size={24} />
        <Link href='/'>Back to home page</Link>
      </motion.div>
      <motion.div
        className='z-10 flex h-fit flex-1 flex-col rounded-3xl border-t border-white/50 bg-white/60 px-4 py-6 backdrop-blur-2xl sm:justify-center md:flex-none md:px-16 lg:rounded-r-none lg:border-l lg:border-t-0 lg:py-16'
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <div className='mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0'>
          <h1 className='text-3xl font-semibold tracking-tighter text-neutral-900'>
            Welcome back !
          </h1>
          <p className='mt-2 text-base font-medium text-neutral-500'>
            Sign in to continue your plan & trip
          </p>

          <div className='mt-8'>
            <button
              aria-label='Sign in with Google'
              className='inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-3 font-medium duration-200 hover:bg-white/50 focus:ring-2 focus:ring-grape-500 focus:ring-offset-2'
              type='button'
            >
              <GoogleIcon className='size-6' />
              <span>Sign in with Google</span>
            </button>
            <div className='relative py-3'>
              <div className='relative flex justify-center'>
                <span className='px-2 text-sm text-neutral-500 before:absolute before:left-0 before:top-1/2 before:h-px before:w-4/12 before:-translate-y-1/2 after:absolute after:right-0 after:top-1/2 after:h-px after:w-4/12 after:-translate-y-1/2 sm:before:bg-neutral-300 sm:after:bg-neutral-300'>
                  Or continue with
                </span>
              </div>
            </div>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className='space-y-3'>
              <div>
                <label
                  className='mb-3 block text-sm font-medium text-black'
                  htmlFor='email'
                >
                  Email
                </label>
                <input
                  className='block h-12 w-full appearance-none rounded-xl bg-white px-4 py-2 text-grape-500 placeholder-neutral-300 duration-200 focus:outline-none focus:ring-neutral-300 sm:text-sm'
                  id='email'
                  placeholder='Type email here...'
                  type='email'
                  {...formik.getFieldProps('email')}
                  autoFocus
                  autoComplete='email'
                />
              </div>
              <div className='col-span-full'>
                <label
                  className='mb-3 block text-sm font-medium text-black'
                  htmlFor='password'
                >
                  Password
                </label>
                <input
                  className='block h-12 w-full appearance-none rounded-xl bg-white px-4 py-2 text-grape-500 placeholder-neutral-300 duration-200 focus:outline-none focus:ring-neutral-300 sm:text-sm'
                  id='password'
                  placeholder='Type password here...'
                  type='password'
                  {...formik.getFieldProps('password')}
                  autoComplete='current-password'
                />
              </div>
              <div className='col-span-full pt-2'>
                <button
                  className='inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-grape-900 px-5 py-3 font-medium text-white duration-200 focus:ring-2 focus:ring-grape-700 focus:ring-offset-2 enabled:hover:bg-grape-700 disabled:opacity-70'
                  type='submit'
                  disabled={!formik.isValid}
                >
                  Sign in
                </button>
              </div>
            </div>
            <div className='mt-6'>
              <p className='mx-auto flex text-center text-sm font-medium leading-tight text-black'>
                Don&apos;t have an account?
                <Link
                  className='hover:grape-700 ml-auto text-grape-600'
                  href='/register'
                >
                  Sign up now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  )
}
