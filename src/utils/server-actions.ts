'use server'

import { signIn } from '@/auth'
import { redirect } from 'next/navigation'

export async function authenticate(email: string, password: string) {
  try {
    await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    console.log('Authenticated successfully')

    redirect('/')
  } catch (error: any) {
    return { message: error.message, name: error.name, type: error.type }
  }
}
