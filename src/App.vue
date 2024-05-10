<script setup>
import { RouterView } from 'vue-router'
import { useProductStore } from './stores/ProductsStore'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const store = useProductStore()
store.getProducts()

const showFooter = computed(() => {
  return !['/login', '/register', '/:catchall(.*)*'].includes(route.path)
})

// Importiere das axios-Paket, um HTTP-Anfragen zu senden
const axios = require('axios')

// Definiere die Optionen für die HTTP-Anfrage
const options = {
  method: 'POST',
  url: 'https://bestbuyraygorodskijv1.p.rapidapi.com/getAllCategories',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY', // Ersetze 'SIGN-UP-FOR-KEY' durch deinen eigenen RapidAPI-Schlüssel
    'X-RapidAPI-Host': 'BestBuyraygorodskijV1.p.rapidapi.com'
  }
}

// Versuche, die Anfrage an die API zu senden
try {
  const response = await axios.request(options) // Führe die Anfrage aus
  console.log(response.data) // Gib die Antwortdaten in der Konsole aus
} catch (error) {
  console.error(error) // Bei einem Fehler, gib den Fehler in der Konsole aus
}

export default {
  setup() {
    const categories = ref([])
    onMounted(async () => {
      categories.value = await getAllCategories()
    })
    return { categories }
  }
}
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
