<template>
  <header>
    <Navbar v-if="showNavbar" />
  </header>

  <main class="w-full min-h-full">
    <RouterView />
  </main>

  <footer>
    <MaxFooter v-if="showMaxFooter" />
    <MinFooter v-else />
  </footer>
</template>

<script setup lang="ts">
import MaxFooter from '@/components/MaxFooter.vue'
import MinFooter from '@/components/MinFooter.vue'
import Navbar from '@/components/Navbar.vue'
import { useProductStore } from '@/stores/ProductsStore'
import axios from 'axios'
import { computed, onMounted, ref } from 'vue'
import { RouterView, useRoute } from 'vue-router'

const route = useRoute()
const store = useProductStore()
store.getProducts()

const showMaxFooter = computed(() => {
  return route.meta.maxFooter ?? true
})

const showNavbar = computed(() => {
  return route.meta.navbar ?? true
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
