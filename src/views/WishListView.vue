<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/AuthStore'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <div>
      <h1 class="h1">WishList</h1>
    </div>
    <div class="WhishlistThing">
      <p id="ProductName">the Whislisted Products name</p>
      <div>
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
    </div>
  </div>
</template>

<style scoped>
#Heart {
  width: 60px;
  height: 46px;
  border: 1px solid rgb(13, 255, 0);
}

.h1 {
  font-size: 50px;
  text-align: center;
  color: rgb(94, 101, 102);
  font-weight: bold;
  font-family: Arial, sans-serif;
}

.WhishlistThing {
  border: 1px solid black;
  display: flex;
  justify-content: start;
}

#ProductName {
  order: 1;
  border: 1px solid black;
  font-size: 30px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  color: rgb(94, 101, 1 02);
  margin: 0;
  padding: 0;
}
</style>
