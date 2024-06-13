<template>
  <div class="bg-white">
    <div class="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Shop by Collection</h2>
      <p class="mt-4 text-base text-gray-500">
        Each season, we collaborate with world-class designers to create a collection inspired by
        the natural world.
      </p>

      <div class="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
        <a
          v-for="categoryObject in categoriesArray"
          :key="categoryObject.name"
          :href="categoryObject.href"
          class="group block"
        >
          <div
            aria-hidden="true"
            class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
            id="Card"
          >
            <img
              :src="categoryObject.imageSrc"
              :alt="categoryObject.imageAlt"
              class="h-full w-full object-cover object-center"
            />
          </div>
          <h3 class="mt-4 text-base font-semibold text-gray-900">
            {{ categoryObject.name }}
          </h3>
          <p class="mt-2 text-sm text-gray-500">{{ categoryObject.description }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const categoriesArray = [
  {
    class: 'iMacsandLaptopsCollection',
    name: 'iMacs and Laptops Collection',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1549399905-5d1bad747576?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Close-up of a iMac and a Macbook on a desk with a white mouse and keyboard.',
    description: 'Discover our latest Collection of iMacs and Laptops.'
  },
  {
    class: 'SmartphoneCollection',
    name: 'Smartphone Collection',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1587212559341-1fe6a88023b6?q=80&w=3640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Close up of a Person on a Bed on their phone.',
    description: 'Discover our latest Collection of Smartphones.'
  },
  {
    class: 'SmartwatchCollection',
    name: 'Smartwatch Collection',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=3376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  ',
    imageAlt: 'Close up of a Smartwatch on a persons wrist.',
    description: 'Discover our latest Collection of Smartwatches.'
  }
]
</script>

<style scoped>
#Card {
  height: 415.87px;
}
.iMacsandLaptopsCollection {
  background-color: #f7f7f7;
}
.SmartphoneCollection {
  background-color: #f7f7f7;
}
.SmartwatchCollection {
  background-color: #f7f7f7;
}

/* Zuschneiden von unten */
.bottom-clip {
  clip-path: inset(auto 0 0 0); /* Von unten zuschneiden */
}

/* Zuschneiden von oben */
.top-clip {
  clip-path: inset(0 0 auto 0); /* Von oben zuschneiden */
}
</style>
