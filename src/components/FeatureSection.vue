<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-indigo-600">Shop with Confidence</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Your Trusted Source for Tech
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          At our store, we prioritize your satisfaction and security. With SSL certificates
          protecting your data and a commitment to excellent customer service, you can shop with
          peace of mind. Discover a seamless and secure shopping experience with us.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
              <component
                :is="feature.icon"
                class="h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              {{ feature.name }}
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <p class="flex-auto">{{ feature.description }}</p>
              <p class="mt-6">
                <a :href="feature.href" class="text-sm font-semibold leading-6 text-indigo-600"
                  >Learn more <span aria-hidden="true">→</span></a
                >
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowPathIcon, CheckBadgeIcon, TruckIcon } from '@heroicons/vue/20/solid'

const features = [
  {
    name: 'Fast, Free, and Safe Delivery',
    description:
      'Enjoy fast, free, and contactless shipping on all orders. We ensure that your purchases are delivered safely to your doorstep without any extra charges. Experience hassle-free delivery with every order you place.',
    href: '#',
    icon: TruckIcon
  },
  {
    name: 'Easy Returns, No Questions Asked',
    description:
      'We stand by the quality of our products, but if you are not completely satisfied, our no-questions-asked returns policy has you covered. Return any item within the return window with ease and receive a full refund.',
    href: '#',
    icon: ArrowPathIcon
  },
  {
    name: 'Comprehensive 2-Year Warranty',
    description:
      'Shop with the assurance of our 2-year warranty on all products. Whether its a smartwatch, smartphone, laptop, computer or something else, we have got you covered. Enjoy worry-free ownership with our comprehensive warranty.',
    href: '#',
    icon: CheckBadgeIcon
  }
]
</script>
