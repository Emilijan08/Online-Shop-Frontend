<template>
  <div class="md:flex md:items-center md:justify-between m-6 md:m-10">
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Wishlist
      </h2>
    </div>
    <div class="mt-4 flex md:ml-4 md:mt-0">
      <button
        type="button"
        class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        @click="clearWishlist"
      >
        Clear Wishlist
      </button>
    </div>
  </div>

  <ul
    role="list"
    class="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl m-6 md:m-10"
  >
    <li
      v-for="(wishlistItem, index) in uniqueWishlist"
      :key="index"
      class="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
    >
      <div class="flex min-w-0 gap-x-4" v-if="wishlistItem.product">
        <img
          class="h-12 w-12 flex-none bg-gray-50"
          :src="wishlistItem.product.image"
          alt=""
        />
        <div class="min-w-0 flex-auto">
          <p class="text-sm font-semibold leading-6 text-gray-900">
            <router-link :to="`/products/${wishlistItem.product._id}`">
              <span class="absolute inset-x-0 -top-px bottom-0" />
              {{ wishlistItem.productId.name }}
            </router-link>
          </p>
          <p class="relative truncate hover:underline">
            {{ wishlistItem.product.price }}
          </p>
        </div>
      </div>
      <div class="flex shrink-0 items-center gap-x-4">
        <button
          type="button"
          class="inline-flex items-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 z-50"
          @click="removeFromWishlist(wishlistItem.product._id)"
        >
          Remove
        </button>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useWishlistStore } from '@/stores/WishlistStore';
import { computed, onMounted } from 'vue';

const wishlistStore = useWishlistStore()
wishlistStore.getWishlist()

const wishlistItems = wishlistStore.wishlist
console.log(wishlistItems)

const removeFromWishlist = (productId: string) => {
  wishlistStore.removeFromWishlist(productId)
}

const clearWishlist = () => {
  wishlistStore.clearWishlist()
}

const uniqueWishlist = computed(() => {
  const uniqueItems = wishlistStore.wishlist.reduce((acc, item) => {
    if (!acc.find(accItem => accItem.product._id === item.product._id)) {
      acc.push(item)
    }
    return acc;
  }, [] as typeof wishlistStore.wishlist)
  return uniqueItems;
})
</script>
