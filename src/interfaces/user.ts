export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}
export interface IUser {
  _id: string
  name: string
  email: string
  avatar: string
  role: UserRole
  isVerified: boolean
}
