<script setup lang="ts">
import { useAuthStore } from '@/stores/AuthStore'
import { ExclamationCircleIcon } from '@heroicons/vue/20/solid'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

let username = ref('')
let password = ref('')
let errors = ref({
  username: '',
  password: '',
  general: ''
})

const store = useAuthStore()

const validateLogin = async () => {
  errors.value = {
    username: '',
    password: '',
    general: ''
  }

  if (!username.value) errors.value.username = 'Username is required.'
  if (!password.value) errors.value.password = 'Password is required.'

  if (errors.value.username || errors.value.password) {
    return
  }

  try {
    await store.login(username.value, password.value)
  } catch {
    errors.value.general = 'Username or password is incorrect.'
  }
}
</script>

<template>
  <div class="flex min-h-full flex-1">
    <div
      class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
    >
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p class="mt-2 text-sm leading-6 text-gray-500">
            Don't have an account?
            {{ ' ' }}
            <RouterLink
              to="/auth/register"
              class="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Register here
            </RouterLink>
          </p>
        </div>

        <div class="mt-10">
          <div>
            <form @submit.prevent="validateLogin" class="space-y-6">
              <div>
                <label for="username" class="block text-sm font-medium leading-6 text-gray-900"
                  >Username</label
                >
                <div class="relative mt-2 rounded-md shadow-sm">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autocomplete="username"
                    v-model="username"
                    :class="{
                      'text-red-900 ring-red-300 placeholder-red-300 focus:ring-red-500 focus:border-red-500 pr-10':
                        errors.username || errors.general
                    }"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                    aria-invalid="true"
                    aria-describedby="username-error"
                  />
                  <div
                    v-if="errors.username || errors.general"
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    <ExclamationCircleIcon class="h-5 w-5 text-red-500" aria-hidden="true" />
                  </div>
                </div>
                <p v-if="errors.username" class="mt-2 text-sm text-red-600" id="username-error">
                  {{ errors.username }}
                </p>
              </div>

              <div>
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
                  >Password</label
                >
                <div class="relative mt-2 rounded-md shadow-sm">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    v-model="password"
                    :class="{
                      'text-red-900 ring-red-300 placeholder-red-300 focus:ring-red-500 focus:border-red-500 pr-10':
                        errors.password || errors.general
                    }"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                    aria-invalid="true"
                    aria-describedby="password-error"
                  />
                  <div
                    v-if="errors.password || errors.general"
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    <ExclamationCircleIcon class="h-5 w-5 text-red-500" aria-hidden="true" />
                  </div>
                </div>
                <p v-if="errors.password" class="mt-2 text-sm text-red-600" id="password-error">
                  {{ errors.password }}
                </p>
              </div>

              <div v-if="errors.general" class="text-red-600 text-sm">
                {{ errors.general }}
              </div>

              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="relative hidden w-0 flex-1 lg:block">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1494173853739-c21f58b16055?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3277q=80"
        alt=""
      />
    </div>
  </div>
</template>
