<template>
  <div>
    <!-- Product details content here -->

    <div class="bg-white mt-10">
      <div
        class="mx-auto max-w-2xl px-4 py-96 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 border-y-1 border-y-2"
        id="ContentBox"
      >
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">You might also like</h2>

        <div
          class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          <div v-for="product in randomProducts" :key="product._id" class="group relative">
            <div
              class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
            >
              <RouterLink
                :to="`/products/${product._id}`"
                @click="reloadPage(`/products/${product._id}`)"
              >
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </RouterLink>
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <RouterLink
                    :to="`/products/${product._id}`"
                    @click="reloadPage(`/products/${product._id}`)"
                  >
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.name }}
                  </RouterLink>
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ product.brand }}</p>
              </div>
              <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/ProductsStore'
import type { ProductType } from '@/types/Product' // Assuming ProductType is defined in '@/types/ProductType'
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const store = useProductStore()

const randomProducts = ref<ProductType[]>([])

function reloadPage(url: string) {
  window.location.href = url
}

function getRandomProducts(products: ProductType[], count: number): ProductType[] {
  const shuffled = products.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

onMounted(() => {
  randomProducts.value = getRandomProducts(store.products, 4)
})
</script>

<style scoped>
#ContentBox {
  border-color: rgb(rgb(57, 55, 55), rgb(100, 100, 100), rgb(62, 62, 62));
}
</style>
