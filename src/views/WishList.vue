<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/AuthStore'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <h1>WishList</h1>
    <a href="../assets/Herz Umriss.png" id="Heart">
      <img src="../assets/Herz Umriss.png" alt="Heart" />
    </a>
  </div>
</template>

<style scoped>
#Heart {
  width: 10px;
  height: 10px;
  borderbox: 1px solid black;
}
</style>
