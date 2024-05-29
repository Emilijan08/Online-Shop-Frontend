<script setup>

</script>

<template>
  <div class="background">
    <h3 class="flex justify-center items-start z-10">Testimonials</h3>
    <div class="container flex justify-center">
      <div class="TestimonialsBox flex order-2 sm:">
        <div class="circleimage-container">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="John Doe" />
        </div>
        <div class="testimonial-content">
          <h4>John Doe</h4>
          <p>“I have been using this service for a few months now and I am very happy with the results. I have seen a significant increase in my website traffic and my sales have also increased. I would highly recommend this service to anyone who is looking to increase their online presence.”</p>
        </div>
        <div class="circles-container">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>
      <div id="Arrowright" class="flex order-3">
        <img src="https://e7.pngegg.com/pngimages/767/827/png-clipart-shory-s-outdoors-arrow-computer-icons-arrow-thumbnail.png" alt="right arrow" class="arrow-image" />
      </div>
      <div id="Arrowleft" class="flex order-1 arrow-image flip-vertical">
        <img src="https://e7.pngegg.com/pngimages/767/827/png-clipart-shory-s-outdoors-arrow-computer-icons-arrow-thumbnail.png" alt="left arrow" />
      </div>
    </div>
  </div>
</template>

<style scoped>

.background {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://images.pexels.com/photos/1420709/pexels-photo-1420709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  background-size: cover; /* Ändert auf 'cover' für vollständige Abdeckung */
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;
  min-height: 100vh; /* Stellt sicher, dass der Hintergrund die volle Höhe des Viewports einnimmt */
}

.container {
  display: flex;
  align-items: center;
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
  width: 50%;
  height: 70%;
   max-height: 400px; /* Ändere die maximale Höhe nach Bedarf */
}

#Arrows {
  margin-left: 20px;
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

.circles-container {
  display: flex;
  gap: 10px; /* Abstand zwischen den Kreisen */
  justify-content: center;
  margin-top: 20px;
}

.circle {
  width: 10px; /* Durchmesser des Kreises */
  height: 10px; /* Durchmesser des Kreises */
  border-radius: 50%; /* Runder Kreis */
  background-color: #333; /* Farbe des Kreises */
}

.circle-container img {
  width: 100%;
  height: auto;
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



