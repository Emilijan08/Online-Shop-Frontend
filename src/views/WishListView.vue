<template>
  <div class="md:flex md:items-center md:justify-between m-6 md:m-10">
    <div class="min-w-0 flex-1">
      <h2
        class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
      >
        Wishlist
      </h2>
    </div>
    <div class="mt-4 flex md:ml-4 md:mt-0">
      <button
        type="button"
        class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Edit
      </button>
      <button
        type="button"
        class="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Publish
      </button>
    </div>
  </div>

  <ul
    role="list"
    class="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl m-6 md:m-10"
  >
    <!-- <li
      v-for="(productOnWishlist, index) in store.products.ProductsOnWishlist"
      :key="index"
      class="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
    >
      <div class="flex min-w-0 gap-x-4">
        <img class="h-12 w-12 flex-none bg-gray-50" :src="productOnWishlist.productImage" alt="" />
        <div class="min-w-0 flex-auto">
          <p class="text-sm font-semibold leading-6 text-gray-900">
            <router-link :to="`/products/${productOnWishlist._id}`">
              <span class="absolute inset-x-0 -top-px bottom-0" />
              {{ productOnWishlist.productName }}
            </router-link>
          </p>
          <p class="mt-1 flex text-xs leading-5 text-gray-500"></p>
          <p class="relative truncate hover:underline">
            {{ productOnWishlist.productDescription }}
          </p>
        </div>
      </div> -->
    <!-- <div class="flex shrink-0 items-center gap-x-4">
        <div class="hidden sm:flex sm:flex-col sm:items-end">
          <p class="text-sm leading-6 text-gray-900">{{ person.role }}</p>
          <p v-if="person.lastSeen" class="mt-1 text-xs leading-5 text-gray-500">
            Last seen <time :datetime="person.lastSeenDateTime">{{ person.lastSeen }}</time>
          </p>
          <div v-else class="mt-1 flex items-center gap-x-1.5">
            <div class="flex-none rounded-full bg-emerald-500/20 p-1">
              <div class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div>
            <p class="text-xs leading-5 text-gray-500">Online</p>
          </div>
        </div>
        <ChevronRightIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
      </div> -->
    <!-- </li> -->
  </ul>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/ProductsStore'
import { useRoute } from 'vue-router'

const store = useProductStore()
const route = useRoute()
</script>
