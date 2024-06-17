<template>
  <section class="bg-white px-6 py-24 sm:py-32 lg:px-8">
    <Splide :options="{ type: 'loop', perPage: 1, autoplay: true, interval: 3000 }">
      <SplideSlide v-for="testimonial in testimonials" :key="testimonial.id">
        <figure class="mx-auto max-w-2xl rounded-lg border-gray-300 border border-solid p-10">
          <p class="sr-only">5 out of 5 stars</p>
          <div class="flex gap-x-1 text-indigo-600">
            <StarIcon v-for="i in 5" :key="i" class="h-5 w-5 flex-none" aria-hidden="true" />
          </div>
          <blockquote class="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
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
      </SplideSlide>
    </Splide>
  </section>
</template>

<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/20/solid';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import { ref } from 'vue';

const testimonials = ref([
  {
    id: 1,
    quote: 'Hello 1',
    name: 'Judith Black',
    position: 'CEO of Workcation',
    image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80'
  },
  {
    id: 2,
    quote: 'Hello 2',
    name: 'Judith Black',
    position: 'CEO of Workcation',
    image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80'
  },
  {
    id: 3,
    quote: 'Hello 3',
    name: 'Judith Black',
    position: 'CEO of Workcation',
    image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80'
  },
  {
    id: 4,
    quote: 'Hello 4',
    name: 'Judith Black',
    position: 'CEO of Workcation',
    image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80'
  },
]);
</script>
