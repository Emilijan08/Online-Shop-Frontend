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
    token: localStorage.getItem('token') || '',
    user: JSON.parse(localStorage.getItem('user') || '{}')
  }),
  actions: {
    async login(temp_username: string, password: string) {
      const URL = `${import.meta.env.VITE_BASE_URL}/auth/login`
      try {
        const res = await axios.post(URL, {
          username: temp_username,
          password: password
        })

        const { token, username, role } = res.data
        this.token = token
        this.user = { username, role }

        localStorage.setItem('token', this.token)
        localStorage.setItem('user', JSON.stringify(this.user))

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
        this.user = { username, role }
        localStorage.setItem('token', this.token)
        localStorage.setItem('user', JSON.stringify(this.user))
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
      localStorage.removeItem('auth')
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      router.push('/auth/login')
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.token
  }
})
