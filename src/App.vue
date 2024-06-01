<template>
  <header>
    <Navbar />
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <Footer v-if="showFooter" />
  </footer>
</template>

<script setup lang="ts">
import axios from 'axios'
import { computed, onMounted, ref } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
import { useProductStore } from './stores/ProductsStore'

const route = useRoute()
const store = useProductStore()
store.getProducts()

const showFooter = computed(() => {
  return !['/auth/login', '/auth/register', '/:catchall(.*)*'].includes(route.path)
})

const options = {
  method: 'POST',
  url: 'https://bestbuyraygorodskijv1.p.rapidapi.com/getAllCategories',
  headers: {
    'X-RapidAPI-Key': '877ca0311dmsh7f5a84515a0d71bp103480jsn05705318f71d',
    'X-RapidAPI-Host': 'BestBuyraygorodskijV1.p.rapidapi.com'
  }
}

const categories = ref([])

onMounted(async () => {
  try {
    const response = await axios.request(options)
    categories.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>
