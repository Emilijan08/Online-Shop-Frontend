<template>
  <div class="bg-white">
    <!--go-back-Arrow-->
    <div class="flex justify-start items-start ml-7" id="goBackArrow">
      <RouterLink to="/products">
        <ChevronLeftIcon />
      </RouterLink>
    </div>
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
    >
      <!-- Product details -->
      <div class="lg:max-w-lg lg:self-end">
        <div class="mt-4 flex justify-between">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {{ product?.productName }}
          </h1>
          <button @click="toggleWishlist" :class="wishlistButtonClass">
            <HeartIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <section aria-labelledby="information-heading" class="mt-4">
          <h2 id="information-heading" class="sr-only">Product information</h2>

          <div class="flex items-center">
            <p class="text-lg text-gray-900 sm:text-xl">{{ product?.price }}</p>

            <div class="ml-4 border-l border-gray-300 pl-4">
              <h2 class="sr-only">Reviews</h2>
              <div class="flex items-center">
                <div>
                  <div class="flex items-center">
                    <StarIcon
                      v-for="rating in [0, 1, 2, 3, 4]"
                      :key="rating"
                      :class="[
                        reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0'
                      ]"
                      aria-hidden="true"
                    />
                  </div>
                  <p class="sr-only">{{ reviews.average }} out of 5 stars</p>
                </div>
                <p class="ml-2 text-sm text-gray-500">{{ reviews.totalCount }} reviews</p>
              </div>
            </div>
          </div>

          <div class="mt-4 space-y-6">
            <p class="text-base text-gray-500">{{ product?.productDescription }}</p>
          </div>

          <div class="mt-6 flex items-center">
            <CheckIcon class="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
            <p class="ml-2 text-sm text-gray-500">In stock and ready to ship</p>
          </div>
        </section>
      </div>

      <!-- Product image -->
      <div class="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
        <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
          <img
            :src="product?.productImage"
            :alt="product?.productName"
            class="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <!-- Product form -->
      <div class="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
        <section aria-labelledby="options-heading">
          <h2 id="options-heading" class="sr-only">Product options</h2>

          <form>
            <div class="mt-10">
              <button
                type="submit"
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Add to bag
              </button>
            </div>
            <div class="mt-6 text-center">
              <a href="#" class="group inline-flex text-base font-medium">
                <ShieldCheckIcon
                  class="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span class="text-gray-500 hover:text-gray-700">Lifetime Guarantee</span>
              </a>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/AuthStore'
import { useProductStore } from '@/stores/ProductsStore'
import { useWishlistStore } from '@/stores/WishlistStore'
import type { ProductType } from '@/types/Product'
import { CheckIcon, ChevronLeftIcon, HeartIcon, StarIcon } from '@heroicons/vue/20/solid'
import { ShieldCheckIcon } from '@heroicons/vue/24/outline'
import axios from 'axios'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const productId = route.params.productId as string

const productStore = useProductStore()
const authStore = useAuthStore()
const wishlistStore = useWishlistStore()

const product = ref<ProductType | null>(null)
const addProduct = ref(false)
const comment = ref('')
const reviews = { average: 4, totalCount: 1624 }

onMounted(async () => {
  if (!product.value) {
    await productStore.getProducts()
    product.value = productStore.products.find((element) => element._id === productId) || null
  }
  await wishlistStore.getWishlist()
})

const toggleWishlist = async () => {
  if (product.value) {
    if (isInWishlist.value) {
      await wishlistStore.removeFromWishlist(product.value._id)
    } else {
      await wishlistStore.addToWishlist(product.value._id)
    }
  }
}

const isInWishlist = computed(() =>
  wishlistStore.wishlist.some((item) => item.productId === product?.value?._id)
)

const wishlistButtonClass = computed(() => [
  'p-2 rounded-full focus:outline-none',
  isInWishlist.value ? 'text-red-500' : 'text-gray-400 hover:text-gray-500'
])

async function addComment() {
  try {
    if (product.value) {
      const URL = `https://marketserver.onrender.com/products/${product.value._id}/comments`
      const response = await axios.post(URL, {
        comment: comment.value,
        username: authStore.user.username
      })
      console.log(response)
    }
  } catch (err) {
    console.log(err)
  } finally {
    comment.value = ''
    if (product.value) {
      await productStore.getComments(product.value._id)
    }
  }
}
</script>
