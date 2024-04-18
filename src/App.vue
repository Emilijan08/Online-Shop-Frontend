<script setup>
import { RouterView } from 'vue-router'
import { useProductStore } from './stores/ProductsStore'
import Navbar from './components/Navbar.vue'

const store = useProductStore()
store.getProducts()
</script>

<template>
  <Navbar class="flex flex-direction:col align-items:start" />
  <h1 v-if="store.loading">Loading...</h1>
  <RouterView v-else></RouterView>
</template>
