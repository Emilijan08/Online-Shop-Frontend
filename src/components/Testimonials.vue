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
      '“Qui dolor enim consectetur do et non ex amet culpa sint in ea non dolore. Enim minim magna anim id minim eu cillum sunt dolore aliquip. Amet elit laborum culpa irure incididunt adipisicing culpa amet officia exercitation. Eu non aute velit id velit Lorem elit anim pariatur.”',
    name: 'Judith Black',
    position: 'CEO of Workcation',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80'
  },
  {
    id: 2,
    quote:
      '“Qui dolor enim consectetur do et non ex amet culpa sint in ea non dolore. Enim minim magna anim id minim eu cillum sunt dolore aliquip. Amet elit laborum culpa irure incididunt adipisicing culpa amet officia exercitation. Eu non aute velit id velit Lorem elit anim pariatur.”',
    name: 'Judith Black',
    position: 'CEO of Workcation',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80'
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
