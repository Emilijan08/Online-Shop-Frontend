<script setup lang="ts">
import { useProductStore } from '@/stores/ProductsStore';
import { QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/vue/20/solid';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const store = useProductStore()
const total = ref(0)

onMounted(() => {
  store.loadCart()
  updateTotal()
})

function updateTotal() {
  total.value = store.productsOnCart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
}

async function increase(id: string) {
  const item = store.productsOnCart.find((element) => element.product._id === id)
  if (!item) return

  item.quantity++
  updateTotal()
  store.updateCartQuantity(id, item.quantity)
}

async function removeItem(id: string) {
  store.removeFromCart(id)
  updateTotal()
}

async function decrease(id: string) {
  const item = store.productsOnCart.find((element) => element.product._id === id)
  if (!item) return

  if (item.quantity > 1) {
    item.quantity--
    updateTotal()
    store.updateCartQuantity(id, item.quantity)
  }
}
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
      <form class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
        <section aria-labelledby="cart-heading" class="lg:col-span-7">
          <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>

          <ul role="list" class="divide-y divide-gray-200 border-b border-t border-gray-200">
            <li
              v-for="item in store.productsOnCart"
              :key="item.product._id"
              class="flex py-6 sm:py-10"
            >
              <div class="flex-shrink-0">
                <img
                  :src="item.product.image"
                  :alt="item.product.name"
                  class="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                />
              </div>

              <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                  <div>
                    <div class="flex justify-between">
                      <h3 class="text-sm">
                        <a
                          :href="item.product.image"
                          class="font-medium text-gray-700 hover:text-gray-800"
                          >{{ item.product.name }}</a
                        >
                      </h3>
                    </div>
                    <p class="mt-1 text-sm font-medium text-gray-900">
                      {{ item.product.price }}
                    </p>
                  </div>

                  <div class="mt-4 sm:mt-0 sm:pr-9">
                    <label :for="`quantity-${item.product._id}`" class="sr-only"
                      >Quantity, {{ item.product.name }}</label
                    >
                    <select
                      :id="`quantity-${item.product._id}`"
                      :name="`quantity-${item.product._id}`"
                      class="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                      v-model.number="item.quantity"
                      @change="store.updateCartQuantity(item.product._id, item.quantity); updateTotal()"
                    >
                      <option v-for="n in 8" :key="n" :value="n">{{ n }}</option>
                    </select>

                    <div class="absolute right-0 top-0">
                      <button
                        type="button"
                        class="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                        @click="removeItem(item.product._id)"
                      >
                        <span class="sr-only">Remove</span>
                        <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </li>
          </ul>
        </section>

        <!-- Order summary -->
        <section
          aria-labelledby="summary-heading"
          class="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
        >
          <h2 id="summary-heading" class="text-lg font-medium text-gray-900">Order summary</h2>

          <dl class="mt-6 space-y-4">
            <div class="flex items-center justify-between">
              <dt class="text-sm text-gray-600">Subtotal</dt>
              <dd class="text-sm font-medium text-gray-900">{{ total }}</dd>
            </div>
            <div class="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt class="flex items-center text-sm text-gray-600">
                <span>Shipping estimate</span>
                <a href="#" class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Learn more about how shipping is calculated</span>
                  <QuestionMarkCircleIcon class="h-5 w-5" aria-hidden="true" />
                </a>
              </dt>
              <dd class="text-sm font-medium text-gray-900">$5.00</dd>
            </div>
            <div class="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt class="flex text-sm text-gray-600">
                <span>Tax estimate</span>
                <a href="#" class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Learn more about how tax is calculated</span>
                  <QuestionMarkCircleIcon class="h-5 w-5" aria-hidden="true" />
                </a>
              </dt>
              <dd class="text-sm font-medium text-gray-900">$8.32</dd>
            </div>
            <div class="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt class="text-base font-medium text-gray-900">Order total</dt>
              <dd class="text-base font-medium text-gray-900">{{ total }}</dd>
            </div>
          </dl>

          <div class="mt-6">
            <router-link to="/order-summary">
              <button
                type="submit"
                class="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                @click="store.clearCart"
              >
                Checkout
              </button>
            </router-link>
          </div>
        </section>
      </form>
    </div>
  </div>
</template>
