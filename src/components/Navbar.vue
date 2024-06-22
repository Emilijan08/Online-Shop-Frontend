<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center"></div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <RouterLink
              v-for="(item, index) in navItems"
              :key="index"
              :to="item.path"
              :class="[
                'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
                item.selected
                  ? 'border-indigo-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              ]"
            >
              {{ item.name }}
            </RouterLink>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-2"
        >
          <div class="flex gap-3">
            <RouterLink
              to="/wishlist"
              class="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="absolute -inset-1.5" />
              <span class="sr-only">View wishlist</span>
              <HeartIcon class="h-6 w-6" aria-hidden="true" />
            </RouterLink>

            <RouterLink
              to="/cart"
              class="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="absolute -inset-1.5" />
              <span class="sr-only">View cart</span>
              <ShoppingBagIcon class="h-6 w-6" aria-hidden="true" />
            </RouterLink>
          </div>

          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton
                class="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
              >
                <span class="absolute -inset-1.5" />
                <span class="sr-only">Open user menu</span>
                <div class="flex items-center gap-2">
                  <UserCircleIcon class="h-8 w-8 rounded-full" aria-hidden="true" />
                  <!-- Show username here -->
                  <span v-if="auth.user.username">{{ auth.user.username }}</span>
                </div>
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
                <MenuItem v-if="auth.user.username">
                  <div class="bg-gray-100 block px-4 py-2 text-sm text-gray-700">
                    Signed in as <strong>{{ auth.user.username }}</strong>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div
                    class="bg-gray-100 block px-4 py-2 text-sm text-gray-700"
                    @click="auth.logout()"
                  >
                    Sign out
                  </div>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 pb-4 pt-2">
        <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
        <DisclosureButton
          as="a"
          v-for="(item, index) in navItems"
          :key="index"
          :href="item.path"
          :class="[
            'block border-l-4 py-2 pl-3 pr-4 text-base font-medium',
            item.selected
              ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
              : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
          ]"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/AuthStore'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/vue'
import { Bars3Icon, HeartIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { UserCircleIcon } from '@heroicons/vue/24/solid'
import { reactive, watchEffect } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const navItems = reactive([
  { name: 'Home', path: '/', selected: false },
  { name: 'About us', path: '/about', selected: false }
])

const auth = useAuthStore()
const route = useRoute()

watchEffect(() => {
  navItems.forEach((item) => {
    item.selected = item.path === route.path
  })
})
</script>
