<script setup lang="ts">
import Splide from '@splidejs/splide'
import '@splidejs/splide/css/skyblue'
import { onMounted } from 'vue'

onMounted(() => {
  new Splide('.splide', {
    type: 'loop',
    perPage: 1,
    gap: '1rem',
    arrows: true,
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
  <div class="background">
    <h3 class="flex justify-center items-start z-10">Testimonials</h3>
    <div class="container flex justify-center">
      <div class="splide w-full">
        <div class="splide__track">
          <div class="splide__list">
            <div class="splide__slide">
              <div class="TestimonialsBox">
                <div class="circleimage-container">
                  <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="John Doe" />
                </div>
                <div class="testimonial-content">
                  <h4>John Doe</h4>
                  <p>“I have been using this service for a few months now and I am very happy with the results. I have seen a significant increase in my website traffic and my sales have also increased. I would highly recommend this service to anyone who is looking to increase their online presence.”</p>
                </div>
              </div>
            </div>
            <div class="splide__slide">
              <div class="TestimonialsBox">
                <div class="circleimage-container">
                  <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Jane Doe" />
                </div>
                <div class="testimonial-content">
                  <h4>Jane Doe</h4>
                  <p>“This service has transformed my online business. The team is highly professional and the results speak for themselves. My website traffic has doubled and my sales have skyrocketed.”</p>
                </div>
              </div>
            </div>
            <!-- Weitere Slides hier -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.h3 {
  font-size: 100px;
  color: #ffffff;
  margin-top: 20px;
}
.background {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('https://images.pexels.com/photos/1420709/pexels-photo-1420709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
}

.container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

.splide__slide, .splide__list, .splide__track, .splide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.splide {
  width: 70%; /* Passe die Breite nach Bedarf an */
}

.TestimonialsBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  margin: 20px;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 1.2em;
  color: #333;
  height: 100%; /* Höhe der Box */
  max-height: 400px; /* Maximale Höhe der Box */
}

.circleimage-container {
  width: 100px;
  height: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: circle(50%);
  margin-bottom: 20px;
}

.testimonial-content h4 {
  margin-bottom: 10px;
}

.arrow-image {
  width: 50px; /* Breite des Pfeilbildes */
  height: auto; /* Beibehaltung des Seitenverhältnisses */
}

.flip-vertical {
  transform: scaleX(-1); /* Bild entlang der Y-Achse spiegeln */
}
</style>
