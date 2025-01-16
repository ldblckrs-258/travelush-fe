import axios from 'axios'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { IServerError } from './interfaces/errors'
import { IUser, UserRole } from './interfaces/user'
import { InvalidLoginError } from './utils/errors'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let res

        try {
          res = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
            {
              email: credentials.email,
              password: credentials.password,
            },
          )
        } catch (error: any) {
          if (error?.response?.data?.statusCode) {
            const err = error.response.data as IServerError
            throw new InvalidLoginError(err.error, err.message)
          } else {
            throw new InvalidLoginError(
              'Server Error',
              'An error occurred while trying to login',
            )
          }
        }

        const data = res.data.data

        if (!data) {
          throw new InvalidLoginError(
            'Server Error',
            'An error occurred while trying to login',
          )
        }

        return data
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.user = user as IUser
      }
      return token
    },
    session({ session, token }) {
      ;(session.user as IUser) = token.user
      session.access_token = token.access_token
      return session
    },
  },
})
