import type { WishlistItemType } from '@/types/Wishlist'
import axios from 'axios'
import { defineStore } from 'pinia'

interface WishlistState {
  wishlist: WishlistItemType[]
  loading: boolean
}

export const useWishlistStore = defineStore<
  'wishlist',
  WishlistState,
  {},
  {
    getWishlist: () => Promise<void>
    addToWishlist: (productId: string) => Promise<void>
    removeFromWishlist: (productId: string) => Promise<void>
    clearWishlist: () => Promise<void>
  }
>('wishlist', {
  state: (): WishlistState => ({
    wishlist: [],
    loading: false
  }),
  actions: {
    async getWishlist() {
      const URL = `${import.meta.env.VITE_BASE_URL}/wishlist`
      this.loading = true
      const response = await axios.get(URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      this.wishlist = await response.data
      this.loading = false
    },
    async addToWishlist(productId: string) {
      const URL = `${import.meta.env.VITE_BASE_URL}/wishlist`
      const response = await axios.post(
        URL,
        { productId },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        }
      )
      this.wishlist = await response.data
    },
    async removeFromWishlist(productId: string) {
      const URL = `${import.meta.env.VITE_BASE_URL}/wishlist`
      const response = await axios.delete(URL, {
        data: { productId },
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      this.wishlist = await response.data
    },
    async clearWishlist() {
      const URL = `${import.meta.env.VITE_BASE_URL}/wishlist/clear`
      const response = await axios.delete(URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      this.wishlist = await response.data
    }
  }
})
