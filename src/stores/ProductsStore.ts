import type { CommentType } from '@/types/Comment'
import type { ProductType } from '@/types/Product'
import axios from 'axios'
import { defineStore } from 'pinia'

interface ProductsState {
  products: ProductType[]
  loading: boolean
  comments: CommentType[]
  productsOnCart: ProductType[]
  selectedBrand: string
  selectedCategory: string
  selectedPrice: string
  selectedType: string
}

export const useProductStore = defineStore<
  'product',
  ProductsState,
  {},
  {
    getProducts: () => Promise<void>
    addToCart: (id: string) => void
    clearCart: () => void
    addComment: (_productId: string, _comment: string, _username: string) => Promise<void>
    getComments: (productId: string) => Promise<void>
    loadCart: () => void
    saveCart: () => void
  }
>('product', {
  state: (): ProductsState => ({
    products: [],
    loading: false,
    comments: [],
    productsOnCart: [],
    selectedBrand: 'All',
    selectedCategory: 'All',
    selectedPrice: 'All',
    selectedType: 'All'
  }),
  actions: {
    async getProducts() {
      const URL = `${import.meta.env.VITE_BASE_URL}/products`
      this.loading = true
      const response = await axios.get(URL)
      this.products = await response.data
      this.loading = false
    },
    addToCart(id: string) {
      const product = this.products.find((element) => element._id === id)
      if (product && !this.productsOnCart.includes(product)) {
        this.productsOnCart.push(product)
        this.saveCart()
      }
    },
    clearCart() {
      this.productsOnCart = []
      this.saveCart()
    },
    async addComment(_productId: string, _comment: string, _username: string) {
      try {
        const URL = `${import.meta.env.VITE_BASE_URL}/products/${_productId}/comments`
        axios.post(URL, {
          text: _comment,
          user: _username
        })
      } catch (err) {
        console.error(err)
      }
    },
    async getComments(productId: string) {
      const URL = `${import.meta.env.VITE_BASE_URL}/products/${productId}/comments`
      const response = await axios.get(URL)
      this.comments = await response.data.comments
    },
    loadCart() {
      const cart = localStorage.getItem('cart')
      if (cart) {
        this.productsOnCart = JSON.parse(cart)
      }
    },
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.productsOnCart))
    }
  }
})
