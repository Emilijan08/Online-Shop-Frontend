<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/AuthStore'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <h1>WishList</h1>
    <a
      href="https://www.psdgraphics.com/wp-content/uploads/2022/01/perfect-heart-shape.png"
      id="Heart"
    >
      <img
        id="Heart"
        src="https://www.psdgraphics.com/wp-content/uploads/2022/01/perfect-heart-shape.png"
        alt="Heart"
      />
    </a>
  </div>
</template>

<style scoped>
#Heart {
  width: 150px;
  height: 115px;
  borderbox: 1px solid black;
}
</style>
