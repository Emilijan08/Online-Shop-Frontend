import router from '@/router'
import type { UserType } from '@/types/User'
import axios from 'axios'
import { defineStore } from 'pinia'

interface AuthState {
  error: boolean
  message: string
  token: string
  user: Partial<UserType>
}

export const useAuthStore = defineStore<
  'auth',
  AuthState,
  {},
  {
    login: (temp_username: string, password: string) => Promise<void>
    register: (temp_username: string, password: string, confirmPassword: string) => Promise<void>
    logout: () => Promise<void>
  }
>('auth', {
  state: (): AuthState => ({
    error: false,
    message: '',
    token: '',
    user: {
      username: '',
      role: ''
    }
  }),
  actions: {
    async login(temp_username: string, password: string) {
      const URL = `${import.meta.env.VITE_BASE_URL}/auth/login`
      try {
        const res = await axios.post(URL, {
          username: temp_username,
          password: password
        })

        const { message, username, role } = res.data
        this.token = message
        this.user.username = username
        this.user.role = role

        localStorage.setItem('token', this.token)

        router.push('/')
      } catch (err) {
        throw new Error('Username or password is incorrect.')
      }
    },
    async register(temp_username: string, password: string, confirmPassword: string) {
      const URL = `${import.meta.env.VITE_BASE_URL}/auth/register`
      try {
        const res = await axios.post(URL, {
          username: temp_username,
          password: password,
          confirmPassword: confirmPassword
        })
        const { token, username, role } = res.data
        this.token = token
        this.user.username = username
        this.user.role = role
        localStorage.setItem('token', this.token)
        router.push('/')
      } catch (err: any) {
        if (err.response && err.response.status === 409) {
          throw new Error('Username already exists')
        } else {
          throw new Error('Registration failed.')
        }
      }
    },
    async logout() {
      await router.push('/auth/login')
      localStorage.removeItem('auth')
      localStorage.removeItem('token')
    }
  }
})
