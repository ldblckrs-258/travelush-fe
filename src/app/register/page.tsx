'use client';

import SimpleAlert from '@/components/common/simple-alert';
import { useFormik } from 'formik';
import { ChevronLeftIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import * as Yup from 'yup';

export default function SigninPage() {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, 'Full name must be at least 3 characters')
        .required('Full name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Password is not match')
        .required('Confirm Password is required'),
    }),
    onSubmit: () => {
      // Handle form submission
    },
    validateOnBlur: true,
    validateOnChange: false,
    isInitialValid: false,
  });

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
            Register
          </h1>
          <p className='mt-2 text-base font-medium text-neutral-500'>
            Sign up to access your trips, saved hotels, and more
          </p>

          <form className='mt-6' onSubmit={formik.handleSubmit}>
            <div className='space-y-3'>
              <div>
                <label
                  className='mb-3 block text-sm font-medium text-black'
                  htmlFor='full-name'
                >
                  Full Name
                </label>
                <input
                  className={`block h-12 w-full appearance-none rounded-xl px-4 py-2 text-grape-600 placeholder-kimberly-500 duration-200 focus:outline-none focus:ring-neutral-300 sm:text-sm ${
                    formik.touched.fullName && formik.errors.fullName
                      ? 'border border-cupid-500 bg-cupid-100/90'
                      : 'bg-white/80'
                  }`}
                  id='full-name'
                  placeholder='Type full name here...'
                  type='text'
                  {...formik.getFieldProps('fullName')}
                  onFocus={() => formik.setFieldError('fullName', '')}
                />
              </div>
              <div>
                <label
                  className='mb-3 block text-sm font-medium text-black'
                  htmlFor='email'
                >
                  Email
                </label>
                <input
                  className={`block h-12 w-full appearance-none rounded-xl px-4 py-2 text-grape-600 placeholder-kimberly-500 duration-200 focus:outline-none focus:ring-neutral-300 sm:text-sm ${
                    formik.touched.email && formik.errors.email
                      ? 'border border-cupid-500 bg-cupid-100/90'
                      : 'bg-white/80'
                  }`}
                  id='email'
                  placeholder='Type email here...'
                  type='email'
                  {...formik.getFieldProps('email')}
                  onFocus={() => formik.setFieldError('email', '')}
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
                  className={`block h-12 w-full appearance-none rounded-xl px-4 py-2 text-grape-600 placeholder-kimberly-500 duration-200 focus:outline-none focus:ring-neutral-300 sm:text-sm ${
                    formik.touched.password && formik.errors.password
                      ? 'border border-cupid-500 bg-cupid-100/90'
                      : 'bg-white/80'
                  }`}
                  id='password'
                  placeholder='Type password here...'
                  type='password'
                  {...formik.getFieldProps('password')}
                  onFocus={() => formik.setFieldError('password', '')}
                />
              </div>
              <div className='col-span-full'>
                <label
                  className='mb-3 block text-sm font-medium text-black'
                  htmlFor='confirm-password'
                >
                  Confirm Password
                </label>
                <input
                  className={`block h-12 w-full appearance-none rounded-xl px-4 py-2 text-grape-600 placeholder-kimberly-500 duration-200 focus:outline-none focus:ring-neutral-300 sm:text-sm ${
                    formik.touched.confirmPassword &&
                    formik.touched.password &&
                    formik.errors.confirmPassword
                      ? 'border border-cupid-500 bg-cupid-100/90'
                      : 'bg-white/80'
                  }`}
                  id='confirm-password'
                  placeholder='Confirm your password...'
                  type='password'
                  {...formik.getFieldProps('confirmPassword')}
                  onFocus={() => formik.setFieldError('confirmPassword', '')}
                />
              </div>
              <div className='col-span-full pt-2'>
                <button
                  className='inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-grape-900 px-5 py-3 font-medium text-white duration-200 focus:ring-2 focus:ring-grape-700 focus:ring-offset-2 enabled:hover:bg-grape-700 disabled:cursor-not-allowed disabled:opacity-70'
                  type='submit'
                  disabled={!formik.isValid}
                >
                  Register
                </button>
              </div>
            </div>
            <div className='mt-6'>
              <p className='mx-auto flex text-center text-sm font-medium leading-tight text-black'>
                Already have an account?{' '}
                <Link
                  className='hover:grape-700 ml-auto text-grape-600'
                  href='/login'
                >
                  Login now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </motion.div>
      <div className='absolute bottom-6 right-1/2 min-w-[280px] translate-x-1/2 space-y-1'>
        <AnimatePresence>
          {formik.touched.fullName && formik.errors.fullName ? (
            <motion.div className='' key='error-full-name' {...AlertMotion}>
              <SimpleAlert
                className='mt-2 bg-cupid-50/60 backdrop-blur-xl'
                title='Invalid full name'
                description={formik.errors.fullName}
              />
            </motion.div>
          ) : null}
          {formik.touched.email && formik.errors.email ? (
            <motion.div className='' key='error-email' {...AlertMotion}>
              <SimpleAlert
                className='mt-2 bg-cupid-50/60 backdrop-blur-xl'
                title='Invalid email'
                description={formik.errors.email}
              />
            </motion.div>
          ) : null}
          {formik.touched.password && formik.errors.password ? (
            <motion.div className='' key='error-password' {...AlertMotion}>
              <SimpleAlert
                className='mt-2 bg-cupid-50/60 backdrop-blur-xl'
                title='Invalid password'
                description={formik.errors.password}
              />
            </motion.div>
          ) : null}
          {formik.touched.confirmPassword &&
          formik.touched.password &&
          formik.errors.confirmPassword ? (
            <motion.div
              className=''
              key='error-confirm-password'
              {...AlertMotion}
            >
              <SimpleAlert
                className='mt-2 bg-cupid-50/60 backdrop-blur-xl'
                title='Invalid confirmation'
                description={formik.errors.confirmPassword}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}

const AlertMotion = {
  initial: { y: 10 },
  animate: { y: 0 },
  exit: { x: -20, opacity: 0 },
};
