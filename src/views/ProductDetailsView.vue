<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
    >
      <!-- Product details -->
      <div class="lg:max-w-lg lg:self-end">
        <nav aria-label="Breadcrumb">
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
        </nav>

        <div class="mt-4">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {{ product.name }}
          </h1>
        </div>

        <section aria-labelledby="information-heading" class="mt-4">
          <h2 id="information-heading" class="sr-only">Product information</h2>

          <div class="flex items-center">
            <p class="text-lg text-gray-900 sm:text-xl">{{ store.products.price }}</p>

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
            <p class="text-base text-gray-500">{{ product.description }}</p>
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
            v-for="(products, index) in store.products"
            :key="index"
            :src="store.products.productImage"
            :alt="store.products.productName"
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
              <fieldset>
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
              </fieldset>
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
          </form>

          <div class="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
            <TabGroup as="div">
              <div class="border-b border-gray-200">
                <TabList class="-mb-px flex justify-center">
                  <Tab as="template" v-slot="{ selected }">
                    <div
                      :class="[
                        selected
                          ? ' text-indigo-600'
                          : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800',
                        'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                      ]"
                    >
                      Customer Reviews
                    </div>
                  </Tab>
                </TabList>
              </div>
              <TabPanels as="template">
                <TabPanel class="-mb-10">
                  <h3 class="sr-only">Customer Reviews</h3>

                  <div
                    v-for="(review, reviewIdx) in reviews.featured"
                    :key="review.id"
                    class="flex space-x-4 text-sm text-gray-500"
                  >
                    <div class="flex-none py-10">
                      <img
                        :src="review.avatarSrc"
                        alt=""
                        class="h-10 w-10 rounded-full bg-gray-100"
                      />
                    </div>
                    <div :class="[reviewIdx === 0 ? '' : 'border-t border-gray-200', 'py-10']">
                      <h3 class="font-medium text-gray-900">{{ review.author }}</h3>
                      <p>
                        <time :datetime="review.datetime">{{ review.date }}</time>
                      </p>

                      <div class="mt-4 flex items-center">
                        <StarIcon
                          v-for="rating in [0, 1, 2, 3, 4]"
                          :key="rating"
                          :class="[
                            review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                            'h-5 w-5 flex-shrink-0'
                          ]"
                          aria-hidden="true"
                        />
                      </div>
                      <p class="sr-only">{{ review.rating }} out of 5 stars</p>

                      <div
                        class="prose prose-sm mt-4 max-w-none text-gray-500"
                        v-html="review.content"
                      />
                    </div>
                  </div>
                </TabPanel>

                <TabPanel class="text-sm text-gray-500">
                  <h3 class="sr-only">Frequently Asked Questions</h3>

                  <dl>
                    <template v-for="faq in faqs" :key="faq.question">
                      <dt class="mt-10 font-medium text-gray-900">{{ faq.question }}</dt>
                      <dd class="prose prose-sm mt-2 max-w-none text-gray-500">
                        <p>{{ faq.answer }}</p>
                      </dd>
                    </template>
                  </dl>
                </TabPanel>

                <TabPanel class="pt-10">
                  <h3 class="sr-only">License</h3>

                  <div class="prose prose-sm max-w-none text-gray-500" v-html="license.content" />
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import { useAuthStore } from '../stores/AuthStore'
import { useProductStore } from '../stores/ProductsStore'
import {
  RadioGroup,
  RadioGroupOption,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels
} from '@headlessui/vue'
import { CheckIcon, QuestionMarkCircleIcon, StarIcon } from '@heroicons/vue/20/solid'

// Reactive variables and setup
let addProduct = ref(false)
let comment = ref('')

const store = useProductStore()
const route = useRoute()
const productId = route.params.productId
const authStore = useAuthStore()

// Filter to find the selected product
const selectedProduct = store.products.filter(
  element => element._id === productId
)

// Fetch comments for the selected product
store.getComments(productId)

// Function to add a comment
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
    await store.getComments(productId)
  }
}

// Scroll to top on mount
onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

// Product and review data
const product = {
  name: 'Everyday Ruck Snack',
  href: '#',
  price: '$220',
  description:
    "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg',
  imageAlt: 'Model wearing light green backpack with black canvas straps and front zipper pouch.',
  breadcrumbs: [
    { id: 1, name: 'Travel', href: '#' },
    { id: 2, name: 'Bags', href: '#' }
  ],
  sizes: [
    { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
    { name: '20L', description: 'Enough room for a serious amount of snacks.' }
  ]
}
const selectedSize = ref(product.sizes[0])

const reviews = {
  average: 4,
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
      date: 'July 16, 2021',
      datetime: '2021-07-16',
      author: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80'
    },
    {
      id: 2,
      rating: 5,
      content: `
        <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
      `,
      date: 'July 12, 2021',
      datetime: '2021-07-12',
      author: 'Hector Gibbons',
      avatarSrc:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80'
    }
  ]
}

const faqs = [
  {
    question: 'What format are these icons?',
    answer:
      'The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in code.'
  },
  {
    question: 'Can I use the icons at different sizes?',
    answer:
      "Yes. The icons are drawn on a 24 x 24 pixel grid, but the icons can be scaled to different sizes as needed. We don't recommend going smaller than 20 x 20 or larger than 64 x 64 to retain legibility and visual balance."
  }
]

const license = {}
</script>

import { useProductStore } from '@/stores/ProductsStore'
import {
  RadioGroup,
  RadioGroupOption,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels
} from '@headlessui/vue'
import { CheckIcon, QuestionMarkCircleIcon, StarIcon } from '@heroicons/vue/20/solid'
import { ref } from 'vue'
const store = useProductStore()

const product = {
  name: 'Everyday Ruck Snack',
  href: '#',
  price: '$220',
  description:
    "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg',
  imageAlt: 'Model wearing light green backpack with black canvas straps and front zipper pouch.',
  breadcrumbs: [
    { id: 1, name: 'Travel', href: '#' },
    { id: 2, name: 'Bags', href: '#' }
  ],
  sizes: [
    { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
    { name: '20L', description: 'Enough room for a serious amount of snacks.' }
  ]
}
const selectedSize = ref(product.sizes[0])

const reviews = {
  average: 4,
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
      date: 'July 16, 2021',
      datetime: '2021-07-16',
      author: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80'
    },
    {
      id: 2,
      rating: 5,
      content: `
        <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
      `,
      date: 'July 12, 2021',
      datetime: '2021-07-12',
      author: 'Hector Gibbons',
      avatarSrc:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80'
    }
    // More reviews...
  ]
}
const faqs = [
  {
    question: 'What format are these icons?',
    answer:
      'The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in code.'
  },
  {
    question: 'Can I use the icons at different sizes?',
    answer:
      "Yes. The icons are drawn on a 24 x 24 pixel grid, but the icons can be scaled to different sizes as needed. We don't recommend going smaller than 20 x 20 or larger than 64 x 64 to retain legibility and visual balance."
  }
  // More FAQs...
]
const license = {}
</script>
