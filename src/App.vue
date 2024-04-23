<script setup>
import { RouterView } from 'vue-router'
import { useProductStore } from './stores/ProductsStore'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const store = useProductStore()
store.getProducts()
</script>

<template>
  <div>
    <Navbar class="flex flex-direction:col align-items: flex-start" />
    <Footer class="flex flex-direction:col align-items: flex-end" />

    <h1 v-if="store.loading">Loading...</h1>
    <RouterView v-else></RouterView>
  </div>
</template>
