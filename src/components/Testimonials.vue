<template>
  <section class="bg-white px-6 py-24 sm:py-32 lg:px-8">
    <Splide :options="splideOptions">
      <SplideSlide v-for="testimonial in testimonials" :key="testimonial.id">
        <div class="m-16">
          <figure class="mx-auto max-w-2xl rounded-lg border-gray-300 border border-solid p-10">
            <p class="sr-only">5 out of 5 stars</p>
            <div class="flex gap-x-1 text-indigo-600">
              <StarIcon v-for="i in 5" :key="i" class="h-5 w-5 flex-none" aria-hidden="true" />
            </div>
            <blockquote
              class="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9"
            >
              <p>{{ testimonial.quote }}</p>
            </blockquote>
            <figcaption class="mt-10 flex items-center gap-x-6">
              <img class="h-12 w-12 rounded-full bg-gray-50" :src="testimonial.image" alt="" />
              <div class="text-sm leading-6">
                <div class="font-semibold text-gray-900">{{ testimonial.name }}</div>
                <div class="mt-0.5 text-gray-600">{{ testimonial.position }}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </SplideSlide>
    </Splide>
  </section>
</template>

<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/20/solid'
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import { ref } from 'vue'

const splideOptions = ref({
  type: 'loop',
  perPage: 1,
  autoplay: true,
  interval: 3000,
  pagination: true,
  arrows: true
})

const testimonials = ref([
  {
    id: 1,
    quote:
      '“I was amazed by the extensive selection of smartphones, laptops, and smartwatches available at this online store. Whether youre a tech enthusiast or just looking for reliable gadgets, they have everything you need. The websites user-friendly interface made my shopping experience seamless, and their customer service was exceptional. Highly recommended!”',
    name: 'Judith Black',
    position: 'CEO of Workcation',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80'
  },

  {
    id: 2,
    quote:
      '“Finding the perfect tech gadget is easy with this store. Their extensive collection of smartphones, laptops, and smartwatches covers all major brands, ensuring there is something for everyone. The website is user-friendly, and I received my order promptly. A fantastic experience overall!”',
    name: 'Alex Johnson',
    position: 'Tech Enthusiast',
    image:
      'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8MXwwfHx8MA%3D%3D'
  },
  {
    id: 3,
    quote:
      '“This website is a tech lover’s paradise! They offer an impressive selection of smartphones, laptops, and smartwatches from leading brands. Navigating through their catalog was seamless, and I found exactly what I needed at a great price. Definitely my go-to for tech shopping.”',
    name: 'Emily Brown',
    position: 'Gadget Guru',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    quote:
      '“I stumbled upon this gem of an online store while searching for a new smartphone. To my delight, they not only had a wide range of smartphones but also laptops and smartwatches from top brands. Their website is intuitive, making it easy to compare products and make informed choices. A fantastic resource for tech enthusiasts!”',
    name: 'Michael Smith',
    position: 'Tech Savvy Shopper',
    image:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
])
</script>

<style scoped>
.testimonial-carousel .splide__pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px; /* Adjust this value to move the dots further down */
}

.testimonial-carousel .splide__pagination__page {
  background-color: #4f46e5; /* Change color as needed */
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
}
</style>
