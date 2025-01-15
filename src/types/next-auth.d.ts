import { IUser, UserRole } from '@/interfaces/user'
import NextAuth, { DefaultSession } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth/jwt' {
  interface JWT {
    access_token: string
    refresh_token: string
    user: IUser
    access_expires: number
    error: string
  }
}

declare module 'next-auth' {
  interface Session {
    access_token: string
    refresh_token: string
    user: IUser
    access_expires: number
    error: string
  }
}
