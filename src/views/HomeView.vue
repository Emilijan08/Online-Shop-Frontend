<script setup lang="ts">
import Carousel from '../components/Carousel.vue'
import ProductCategories from '../components/ProductCategories.vue'
import ProductsPageTailwind from '../components/ProductsPageTailwind.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
</script>

<template>
  <div>
    <ProductCategories class="flex flex-direction:col align-items:start" />
    <TestimonialsSection/>
    <Carousel />
    <ProductsPageTailwind />
  </div>
</template>

<style scoped></style>
