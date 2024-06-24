<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Products</h2>

      <div
        class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <router-link
          v-for="(product, index) in filteredProducts"
          :key="index"
          :to="`/products/${product._id}`"
        >
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }}</p>
        </router-link>
      </div>
      <h1 v-show="filteredProducts.length === 0">There are no products in this category..</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/ProductsStore'
import { computed } from 'vue'
const store = useProductStore()

const filteredProducts = computed(() => {
  let products = store.products

  if (store.selectedBrand && store.selectedBrand !== 'All') {
    products = products.filter((product) => product.brand === store.selectedBrand)
  }

  if (store.selectedCategory && store.selectedCategory !== 'All') {
    products = products.filter((product) => product.category === store.selectedCategory)
  }

  if (store.selectedPrice && store.selectedPrice !== 'All') {
    const price = store.selectedPrice
    switch (price) {
      case '0-50':
        products = products.filter((product) => product.price >= 0 && product.price <= 50)
        break
      case '50-100':
        products = products.filter((product) => product.price >= 50 && product.price <= 100)
        break
      case '100-150':
        products = products.filter((product) => product.price >= 100 && product.price <= 150)
        break
      default:
        break
    }
  }

  return products
})
</script>
