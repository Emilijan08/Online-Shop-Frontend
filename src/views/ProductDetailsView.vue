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
            {{ product?.name }}
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
            <p class="text-base text-gray-500">{{ product?.description }}</p>
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
            :src="product?.image"
            :alt="product?.name"
            class="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <!-- Product form -->
      <div class="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
        <section aria-labelledby="options-heading">
          <h2 id="options-heading" class="sr-only">Product options</h2>

          <div>
            <div class="mt-10">
              <button
                type="submit"
                :class="[
                  'flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white  focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-gray-50',
                  addProduct
                    ? 'bg-green-600 hover:bg-green-700 focus:ring-green-500 disabled-link'
                    : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
                ]"
                @click="productStore.addToCart(productId), (addProduct = !addProduct)"
              >
                {{ addProduct ? 'Added to Cart!' : 'Add to Cart' }}
              </button>
            </div>
            <!-- <div class="mt-6 text-center">
              <a href="#" class="group inline-flex text-base font-medium">
                <ShieldCheckIcon
                  class="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span class="text-gray-500 hover:text-gray-700">Lifetime Guarantee</span>
              </a>
            </div> -->
          </div>

          <div class="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
            <TabGroup as="div">
              <div class="border-b border-gray-200">
                <TabList class="-mb-px flex space-x-8">
                  <Tab as="template" v-slot="{ selected }">
                    <button
                      :class="[
                        selected
                          ? 'border-indigo-600 text-indigo-600'
                          : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800',
                        'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                      ]"
                    >
                      Customer Reviews
                    </button>
                  </Tab>
                </TabList>
              </div>
              <TabPanels as="template">
                <TabPanel class="-mb-10">
                  <h3 class="sr-only">Customer Reviews</h3>

                  <div
                    v-for="(comment, index) in productStore.comments"
                    :key="comment.id"
                    class="flex space-x-4 text-sm text-gray-500"
                  >
                    <div class="flex-none py-10">
                      <UserCircleIcon
                        class="h-10 w-10 rounded-full bg-gray-100"
                        aria-hidden="true"
                      />
                    </div>
                    <div :class="[index === 0 ? '' : 'border-t border-gray-200', 'py-10']">
                      <h3 class="font-medium text-gray-900">{{ comment.user }}</h3>
                      <p>
                        <time :datetime="comment.createdAt.toString()">{{
                          new Date(comment.createdAt).toLocaleDateString('de-CH')
                        }}</time>
                      </p>

                      <div class="mt-4 flex items-center">
                        <StarIcon
                          v-for="rating in [0, 1, 2, 3, 4]"
                          :key="rating"
                          :class="[
                            comment.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                            'h-5 w-5 flex-shrink-0'
                          ]"
                          aria-hidden="true"
                        />
                      </div>
                      <p class="sr-only">{{ comment.rating }} out of 5 stars</p>

                      <div
                        class="prose prose-sm mt-4 max-w-none text-gray-500"
                        v-html="comment.text"
                      />
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </section>
      </div>
    </div>
    <Recommendations />
  </div>
</template>

<script setup lang="ts">
import Recommendations from '@/components/Recommendations.vue'
import { useAuthStore } from '@/stores/AuthStore'
import { useProductStore } from '@/stores/ProductsStore'
import { useWishlistStore } from '@/stores/WishlistStore'
import type { ProductType } from '@/types/Product'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue'
import {
CheckIcon,
ChevronLeftIcon,
HeartIcon,
StarIcon,
UserCircleIcon
} from '@heroicons/vue/20/solid'
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

productStore.getComments(productId)
async function addComment() {
  try {
    if (product.value) {
      const URL = `https://marketserver.onrender.com/products/${product.value._id}/comments`
      const response = await axios.post(URL, {
        comment: comment.value,
        username: authStore.user.username
      })
    }
  } catch (err) {
    console.error(err)
  } finally {
    comment.value = ''
    if (product.value) {
      await productStore.getComments(product.value._id)
    }
  }
}

const reviews = {
  average: 4,
  totalCount: 1624
}
</script>
