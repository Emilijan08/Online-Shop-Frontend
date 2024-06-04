<script setup lang="ts">
import { onMounted } from 'vue'
import Splide from '@splidejs/splide';

const images = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=3820&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Macbook in the Dark'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Macbook on Desk'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1542541864-4abf21a55761?q=80&w=2577&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Smartwatch Inside on Desk'
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1517502474097-f9b30659dadb?q=80&w=3376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Smartwatch Outside'
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1550029402-226115b7c579?q=80&w=3013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Products Inside'
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1537589376225-5405c60a5bd8?q=80&w=3928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Smartphone Inside'
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=2913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dx',
    alt: 'Smartphone and Airpods Inside on wooden table'
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1605457212378-968478b57218?q=80&w=3649&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Smartphone Inside with a Laptop and Airpods on wooden table'
  }
]

onMounted(() => {
  new Splide('.splide', {
    type: 'loop',
    perPage: 2,
    gap: '1rem',
    arrows: false,
    autoplay: true,
    interval: 2500,
    pagination: false,
    breakpoints: {
      640: {
        perPage: 1
      },
      768: {
        perPage: 2
      },
      1024: {
        perPage: 3
      }
    }
  }).mount()
})
</script>

<template>
  <section class="text-black py-20 bg-gray-100 h-auto">
    <div class="container mx-auto px-4">
      <div class="flex justify-center items-center">
        <div class="splide w-full md:w-1/3">
          <div class="splide__track">
            <div class="splide__list">
              <div v-for="image in images" :key="image.id" class="splide__slide">
                <img class="object-cover w-full h-auto" :src="image.src" :alt="image.alt" />
              </div>
            </div>
          </div>
          <h1 class="text-4xl font-bold mb-6">Find your perfect Device here</h1>
          <p class="text-lg mb-10">
            Discover our latest collection of Tech Products that combine usefulness, style and
            quality
          </p>
          <a
            href="#"
            class="bg-gray-900 text-gray-100 py-2 px-4 rounded-md font-bold text-lg hover:bg-gray-800"
            >Go to new arrivals</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

