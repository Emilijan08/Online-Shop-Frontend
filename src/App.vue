<template>
  <div>
    <Navbar />
    <RouterView />
    <Footer v-if="showFooter" />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { useProductStore } from './stores/ProductsStore'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios' // Import Axios here

const route = useRoute()
const store = useProductStore()
store.getProducts()

const showFooter = computed(() => {
  return !['/login', '/register', '/:catchall(.*)*'].includes(route.path)
})

// Define the options for the HTTP request
const options = {
  method: 'POST',
  url: 'https://bestbuyraygorodskijv1.p.rapidapi.com/getAllCategories',
  headers: {
    'X-RapidAPI-Key': '877ca0311dmsh7f5a84515a0d71bp103480jsn05705318f71d',
    'X-RapidAPI-Host': 'BestBuyraygorodskijV1.p.rapidapi.com'
  }
}

// Define reactive variables
const categories = ref([])

// Fetch categories on component mount
onMounted(async () => {
  try {
    const response = await axios.request(options) // Execute the request
    categories.value = response.data // Assign response data to categories
  } catch (error) {
    console.error(error) // In case of an error, log the error to the console
  }
})
</script>
