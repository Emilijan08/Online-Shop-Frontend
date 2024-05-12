<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '../stores/AuthStore'

let username = ref('')
let password = ref('')

const store = useAuthStore()

let loginError = ref(false)
let isLoggedIn = ref(false)
let displayUsername = ref('')

const loginUser = async () => {
  const success = await store.login(username, password)
  if (success) {
    isLoggedIn.value = true
    loginError.value = false
    displayUsername.value = store.user.username
  } else {
    isLoggedIn.value = false
    loginError.value = true
    console.error('Login failed. Please check your credentials.')
  }
}

const logoutUser = () => {
  isLoggedIn.value = false
  store.logout()
}
</script>

<template>
  <div>
    <!-- Login-Status anzeigen -->
    <div v-if="isLoggedIn" class="absolute top-0 right-0 m-4">
      <span
        @click="logoutUser"
        class="cursor-pointer rounded-full bg-blue-500 text-white px-2 py-1"
        >{{ displayUsername }}</span
      >
    </div>

    <!-- Sign-in Formular -->
    <div class="flex min-h-full flex-1 border border-red mt-24 mb-72">
      <div
        class="flex flex-col justify-center px-4 py-12 sm:px-6 lg: flex-none lg:px-20 xl:px-24"
      >
        <div class="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img
              class="h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2
              class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900"
            >
              Sign in to your account
            </h2>
            <p class="mt-2 text-sm leading-6 text-gray-500">
              Dont have an account?
              {{ ' ' }}
              <RouterLink to="/register">
                <a
                  href="#"
                  class="font-semibold text-indigo-600 hover:text-indigo-500"
                  >Register here</a
                >
              </RouterLink>
            </p>
          </div>

          <div class="mt-10">
            <div>
              <form @submit.prevent="loginUser" class="space-y-6">
                <div>
                  <label
                    for="login-username"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Username</label
                  >
                  <div class="mt-2">
                    <input
                      id="login-username"
                      name="username"
                      type="text"
                      v-model="username"
                      autocomplete="username"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="login-Password"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Password</label
                  >
                  <div class="mt-2">
                    <input
                      id="login-Password"
                      name="password"
                      type="password"
                      v-model="password"
                      autocomplete="current-password"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input
                      id="login-remember-me"
                      name="remember-me"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />

                    <label
                      for="login-remember-me"
                      class="ml-3 block text-sm leading-6 text-gray-700"
                      >Remember me</label
                    >
                  </div>
                </div>

                <div>
                  <button
                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="relative w-full flex-1 lg:block">
          <img
            class="absolute inset-0 h-full w-full object-cover z-50"
            src="https://cdn.pixabay.com/photo/2017/08/01/22/15/imac-2568270_1280.jpg"
            alt="your Company"
          />
        </div>
      </div>
    </div>
    <!-- Anzeige für Login-Fehler -->
    <div v-if="loginError" class="text-red-500 mt-2 ml-4">
      Invalid username or password!
    </div>
  </div>
</template>
