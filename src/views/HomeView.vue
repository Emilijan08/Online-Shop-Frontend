<script setup>
import Carousel from '../components/Carousel.vue'
import Filter from '../components/Filter.vue'
import Navbar from '../components/Navbar.vue'
import ProductPage from '../components/ProductsPageTailwind.vue'
import ProductCategoriesCarousel from '../components/ProductCategoriesCarousel.vue'
</script>

<template>
  <div>
    <ProductCategoriesCarousel
      class="flex flex-direction:col align-items:start"
    />
    <Carousel />
    <Filter />
    <ProductPage />
  </div>
</template>

<style scoped></style>
