<template>
  <div class="bg-white flex">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
    >
      <!---- <div class="flex items-start justify-start" id="goBackArrow">
        <RouterLink to="/products">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </RouterLink>
      </div>-->
      <!-- Product details -->
      <div class="lg:max-w-lg lg:self-end">
        <!-- <nav aria-label="Breadcrumb">
          <ol role="list" class="flex items-center space-x-2">
            <li v-for="(breadcrumb, breadcrumbIdx) in product.breadcrumbs" :key="breadcrumb.id">
              <div class="flex items-center text-sm">
                <a :href="breadcrumb.href" class="font-medium text-gray-500 hover:text-gray-900">{{
                  breadcrumb.name
                }}</a>
                <svg
                  v-if="breadcrumbIdx !== product.breadcrumbs.length - 1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  class="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
              </div>
            </li>
          </ol>
        </nav> -->

        <div class="mt-4">
          <div
            class="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex justify-end items-start"
          >
            <span class="absolute -inset-1.5" />
            <span class="sr-only">View wishlist</span>
            <HeartIcon class="h-6 w-6" aria-hidden="true" />
          </div>
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {{ product[0].productName }}
          </h1>
        </div>

        <section aria-labelledby="information-heading" class="mt-4">
          <h2 id="information-heading" class="sr-only">Product information</h2>

          <div class="flex items-center">
            <p class="text-lg text-gray-900 sm:text-xl">{{ product[0].price }}</p>

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
            <p class="text-base text-gray-500">{{ product[0].productDescription }}</p>
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
            :src="product[0].productImage"
            :alt="product[0].productName"
            class="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <!-- Product form -->
      <div class="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
        <section aria-labelledby="options-heading">
          <h2 id="options-heading" class="sr-only">Product options</h2>

          <form>
            <div class="sm:flex sm:justify-between">
              <!-- Size selector -->
              <!-- <fieldset>
                <legend class="block text-sm font-medium text-gray-700">Size</legend>
                <RadioGroup
                  v-model="selectedSize"
                  class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2"
                >
                  <RadioGroupOption
                    as="template"
                    v-for="size in product.sizes"
                    :key="size.name"
                    :value="size"
                    :aria-label="size.name"
                    :aria-description="size.description"
                    v-slot="{ active, checked }"
                  >
                    <div
                      :class="[
                        active ? 'ring-2 ring-indigo-500' : '',
                        'relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none'
                      ]"
                    >
                      <p class="text-base font-medium text-gray-900">{{ size.name }}</p>
                      <p class="mt-1 text-sm text-gray-500">{{ size.description }}</p>
                      <div
                        :class="[
                          active ? 'border' : 'border-2',
                          checked ? 'border-indigo-500' : 'border-transparent',
                          'pointer-events-none absolute -inset-px rounded-lg'
                        ]"
                        aria-hidden="true"
                      />
                    </div>
                  </RadioGroupOption>
                </RadioGroup>
              </fieldset> -->
            </div>
            <div class="mt-4">
              <a href="#" class="group inline-flex text-sm text-gray-500 hover:text-gray-700">
                <span>What size should I buy?</span>
                <QuestionMarkCircleIcon
                  class="ml-2 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </a>
            </div>
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
import { CheckIcon, QuestionMarkCircleIcon, StarIcon } from '@heroicons/vue/20/solid'
import { HeartIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline'
import axios from 'axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const store = useProductStore()
const authStore = useAuthStore()
const route = useRoute()

const addProduct = ref(false)
const comment = ref('')

const productId = route.params.productId
const product = store.products.filter((element) => element._id === productId)

console.log(productId)
store.getComments(productId as string)

async function addComment() {
  try {
    const URL = `https://marketserver.onrender.com/products/${productId}/comments`
    const response = await axios.post(URL, {
      comment: comment.value,
      username: authStore.user.username
    })

    console.log(response)
  } catch (err) {
    console.log(err)
  } finally {
    comment.value = ''
    await store.getComments(productId as string)
  }
}

const reviews = { average: 4, totalCount: 1624 }

// const selectedSize = ref(product.sizes[0])
</script>
