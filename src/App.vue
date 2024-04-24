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

    <h1 v-if="store.loading">Loading...</h1>
    <RouterView v-else></RouterView>

    <Footer class="flex flex-direction:col align-items: flex-end" />
  </div>
</template>
