'use server'

import { signIn } from '@/auth'

export interface AuthResult {
  success: boolean
  errorType?: string
  message?: string
}

export async function authenticate(
  email: string,
  password: string,
): Promise<AuthResult> {
  try {
    await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    return { success: true }
  } catch (error: any) {
    return {
      success: false,
      errorType: error.type,
      message: error?.message || 'An error occurred',
    }
  }
}
