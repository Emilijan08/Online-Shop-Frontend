<script setup>
import Carousel from '../components/Carousel.vue'
import Navbar from '../components/Navbar.vue'
import ProductCategoriesCarousel from '../components/ProductCategoriesCarousel.vue'
import ProductsPageTailwind from '../components/ProductsPageTailwind.vue'
</script>

<template>
  <div>
    <ProductCategoriesCarousel
      class="flex flex-direction:col align-items:start"
    />
    <Carousel />
    <ProductsPageTailwind />
  </div>
</template>

<style scoped></style>
