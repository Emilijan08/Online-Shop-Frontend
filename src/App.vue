<script setup>
import { RouterView } from 'vue-router'
import { useProductStore } from './stores/ProductsStore'
import Navbar from './components/Navbar.vue'
import StoreNavigationProductCategoriesCarousel from './components/StoreNavigationProductCategoriesCarousel.vue'

const store = useProductStore()
store.getProducts()
</script>

<template>
  <div>
    <Navbar class="flex flex-direction:col align-items:start" />

    <StoreNavigationProductCategoriesCarousel
      class="flex flex-direction:col align-items:start"
    />

    <h1 v-if="store.loading">Loading...</h1>
    <RouterView v-else></RouterView>
  </div>
</template>
