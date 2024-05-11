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
      class="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">
        Shop by Collection
      </h2>
      <p class="mt-4 text-base text-gray-500">
        Each season, we collaborate with world-class designers to create a
        collection inspired by the natural world.
      </p>

      <div
        class="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0"
      >
        <a
          v-for="category in categories"
          :key="category.name"
          :href="category.href"
          class="group block"
        >
          <div
            aria-hidden="true"
            class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
          >
            <img
              :src="category.imageSrc"
              :alt="category.imageAlt"
              class="h-full w-full object-cover object-center"
            />
          </div>
          <h3 class="mt-4 text-base font-semibold text-gray-900">
            {{ category.name }}
          </h3>
          <p class="mt-2 text-sm text-gray-500">{{ category.description }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = [
  {
    name: 'iMacs and Laptops Collection',
    href: '#',
    imageSrc:
      'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt:
      'Close-up of a iMac and a Macbook on a desk with a white mouse and keyboard.',
    description: 'Discover our latest Collection of iMacs and Laptops.'
  },
  {
    name: 'Smartphone Collection',
    href: '#',
    imageSrc:
      'https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324_1280.jpg',
    imageAlt: 'Close up of a Person on a Bed on their phone.',
    description: 'Discover our latest Collection of Smartphones.'
  },
  {
    name: 'Smartwatch Collection',
    href: '#',
    imageSrc:
      'https://images.pexels.com/photos/1682821/pexels-photo-1682821.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Close up of a Smartwatch on a persons wrist.',
    description: 'Discover our latest Collection of Smartwatches.'
  }
]
</script>
