<scriptsetup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/AuthStore'
import { RouterLink } from 'vue-router'
import {ProductList.vue} from '../components/ProductList.vue'
import {Product.vue} from '../components/Product.vue'

</script>

<template> 
    <div>
        <h1>WishList</h1>
        <a href="Herz Umriss.png" id="Heart">
            <img src="Herz Umriss.png" alt="Herz Umriss">
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