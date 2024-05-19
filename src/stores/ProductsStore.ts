import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: ref([]),
    loading: false,
    comments: ref([{}]),
    productsOnCart: ref([]),
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
    async addToCart(id: number) {
      const product = this.products.find((element: any) => element._id === id)
      if (product && !this.productsOnCart.includes(product)) this.productsOnCart.push(product)
    },

    async clearCart() {
      this.productsOnCart = []
    },
    async addComment(_productId: number, _comment: string, _username: string) {
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
    async getComments(productId: number) {
      const URL = `http://localhost:3000/products/${productId}/comments`
      const response = await axios.get(URL)
      this.comments = await response.data.comments
      console.log(this.comments)
    }
  }
})
