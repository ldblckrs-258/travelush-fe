import { AuthError } from 'next-auth'

export class InvalidLoginError extends AuthError {
  static type: string
  static message: string
  constructor(type?: any, message?: any) {
    super()
    this.type = type || 'invalid-credentials'
    this.message = message || 'Invalid credentials'
  }
}
