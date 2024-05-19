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
  selectedGender: string
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
  }
>('product', {
  state: (): ProductsState => ({
    products: [],
    loading: false,
    comments: [],
    productsOnCart: [],
    selectedBrand: 'All',
    selectedGender: 'All',
    selectedPrice: 'All',
    selectedType: 'All'
  }),
  actions: {
    async getProducts() {
      const URL = 'http://localhost:3000/products'
      this.loading = true
      const response = await axios.get(URL)
      this.products = await response.data
      this.loading = false
    },
    async addToCart(id: string) {
      const product = this.products.find((element) => element._id === id)
      if (product && !this.productsOnCart.includes(product)) this.productsOnCart.push(product)
    },
    async clearCart() {
      this.productsOnCart = []
    },
    async addComment(_productId: string, _comment: string, _username: string) {
      try {
        const URL = `http://localhost:3000/products/${_productId}/comments`
        const response = await axios.post(URL, {
          text: _comment,
          user: _username
        })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
    async getComments(productId: string) {
      const URL = `http://localhost:3000/products/${productId}/comments`
      const response = await axios.get(URL)
      this.comments = await response.data.comments
      console.log(this.comments)
    }
  }
})
