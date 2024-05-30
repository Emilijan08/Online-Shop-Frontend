<script setup lang="ts">
import CarouselComponent from '../components/CarouselComponent.vue'
import ProductCategories from '../components/ProductCategories.vue'
import ProductsPageTailwind from '../components/ProductsPageTailwind.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
</script>

<template>
  <div>
    <ProductCategories class="flex flex-direction:col align-items:start" />
    <TestimonialsSection/>
    <CarouselComponent />
    <ProductsPageTailwind />
  </div>
</template>

<style scoped></style>
