<script setup>
import { RouterView } from 'vue-router'
import { useProductStore } from './stores/ProductsStore'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = useProductStore()
store.getProducts()

const showFooter = computed(() => {
  return !['/login', '/register', '/:catchall(.*)*'].includes(route.path)
})
</script>

<template>
  <div>
    <Navbar class="flex flex-direction:col align-items: flex-start" />

    <h1 v-if="store.loading">Loading...</h1>
    <RouterView v-else></RouterView>

    <!--<Footer class="flex flex-direction:col align-items: flex-end" />-->

    <div>
      <router-view></router-view>
      <div v-if="showFooter">
        <!-- Hier sind die Komponenten, die nicht auf den spezifischen Seiten angezeigt werden sollen -->
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>
