<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '../stores/AuthStore'
import { useProductStore } from '../stores/ProductsStore'
import { UserCircleIcon } from '@heroicons/vue/20/solid'
import { MenuButton, MenuItem, MenuItems, Menu } from '@headlessui/vue'

const auth = useAuthStore()
const store = useProductStore()

const cartItem = computed(() => {
  return store.productsOnCart.length > 0 ? true : false
})

let mobileMenu = ref(false)
</script>

<template>
  <nav>
    <!-- Navigationselemente hier -->
    <div class="bg-gray-900 w-full">
      <nav
        class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center text-white"
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="text-xl font-bold text-white md:text-2xl hover:text-blue-400"
            >Shoe Market
          </router-link>
          <!-- Mobile menu button -->
          <div @click="mobileMenu = !mobileMenu" class="flex md:hidden">
            <button
              type="button"
              class="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="mobileMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
        >
          <li class="text-sm font-bold text-white hover:text-blue-400">
            <RouterLink to="/">Home</RouterLink>
          </li>

          <li class="text-sm font-bold text-white hover:text-blue-400">
            <RouterLink to="/aboutus">About us </RouterLink>
          </li>

          <li class="text-sm font-bold text-white hover:text-blue-400">
            <RouterLink to="/faq">FAQ</RouterLink>
          </li>

          <!-- Hier wird die Verlinkung zur SignIn-Seite entfernt -->
          <!-- <RouterLink to="/signin" class="text-sm font-bold text-white hover:text-blue-400">Sign In</RouterLink> -->

          <RouterLink to="/cart" class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 mt-1 h-6 w-6 flex items-center"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span v-if="cartItem" class="flex absolute -mt-1 ml-4">
              <span
                class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"
              >
              </span>
            </span>
          </RouterLink>

          <RouterLink to="/whishlist" class="hover:text-gray-200 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 mt-1 h-6 w-6 flex items-center"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </RouterLink>

          <!-- Profile dropdown -->
          <li v-if="auth.user.username" class="flex items-center">
            {{ auth.user.username }}
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton
                  class="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span class="absolute -inset-1.5" />
                  <span class="sr-only">Open user menu</span>
                  <UserCircleIcon class="h-8 w-8" aria-hidden="true" />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem v-slot="{ active }">
                    <div
                      @click="auth.logout()"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      ]"
                    >
                      Sign out
                    </div>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </li>
        </ul>
      </nav>
    </div>
  </nav>
</template>
