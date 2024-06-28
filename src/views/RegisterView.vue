<script setup lang="ts">
import { useAuthStore } from '@/stores/AuthStore';
import { ExclamationCircleIcon } from '@heroicons/vue/20/solid';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const store = useAuthStore()

const username = ref('')
const password = ref('')
const confirmPassword = ref('')
const errors = ref({
  username: '',
  password: '',
  confirmPassword: '',
  general: ''
})

const validateRegister = async () => {
  errors.value = {
    username: '',
    password: '',
    confirmPassword: '',
    general: ''
  }

  if (!username.value) errors.value.username = 'Username is required.'
  if (!password.value) errors.value.password = 'Password is required.'
  if (!confirmPassword.value) errors.value.confirmPassword = 'Confirm Password is required.'

  if (password.value && confirmPassword.value && password.value !== confirmPassword.value) {
    errors.value.confirmPassword = 'Passwords do not match.'
  }

  if (errors.value.username || errors.value.password || errors.value.confirmPassword) {
    return
  }

  try {
    await store.register(username.value, password.value, confirmPassword.value)
  } catch (err: any) {
    if (err.message.includes('Username')) {
      errors.value.username = 'Username already exists'
    } else {
      errors.value.general = err.message || 'Registration failed.'
    }
  }
}
</script>

<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 mb-64 background"
  >
    <div
      class="flex flex-col justify-center items-center panel shadow-xl w-full sm:w-3/4 md:w-4/6 lg:w-1/2 p-12 md:p-24"
    >
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register your account
        </h2>
      </div>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit.prevent="validateRegister">
          <div>
            <label for="register-username" class="block text-sm font-medium leading-6 text-gray-900"
              >Username</label
            >
            <div class="relative mt-2 rounded-md shadow-sm">
              <input
                id="register-username"
                name="username"
                type="text"
                v-model="username"
                autocomplete="username"
                :class="{
                  'text-red-900 ring-red-300 placeholder-red-300 focus:ring-red-500 focus:border-red-500 pr-10':
                    errors.username
                }"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                aria-invalid="true"
                aria-describedby="username-error"
              />
              <div
                v-if="errors.username"
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
            <div class="flex items-center justify-between">
              <label
                for="register-Password"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Password</label
              >
              <div class="text-sm">
                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500"
                  >Forgot password?</a
                >
              </div>
            </div>
            <div class="relative mt-2 rounded-md shadow-sm">
              <input
                id="register-Password"
                name="password"
                type="password"
                v-model="password"
                autocomplete="current-password"
                :class="{
                  'text-red-900 ring-red-300 placeholder-red-300 focus:ring-red-500 focus:border-red-500 pr-10':
                    errors.password
                }"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                aria-invalid="true"
                aria-describedby="password-error"
              />
              <div
                v-if="errors.password"
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <ExclamationCircleIcon class="h-5 w-5 text-red-500" aria-hidden="true" />
              </div>
            </div>
            <p v-if="errors.password" class="mt-2 text-sm text-red-600" id="password-error">
              {{ errors.password }}
            </p>
          </div>

          <div>
            <label
              for="register-confirmPassword"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Confirm Password</label
            >
            <div class="relative mt-2 rounded-md shadow-sm">
              <input
                id="register-confirmPassword"
                name="confirmPassword"
                type="password"
                v-model="confirmPassword"
                autocomplete="current-password"
                :class="{
                  'text-red-900 ring-red-300 placeholder-red-300 focus:ring-red-500 focus:border-red-500 pr-10':
                    errors.confirmPassword
                }"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                aria-invalid="true"
                aria-describedby="confirmPassword-error"
              />
              <div
                v-if="errors.confirmPassword"
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <ExclamationCircleIcon class="h-5 w-5 text-red-500" aria-hidden="true" />
              </div>
            </div>
            <p
              v-if="errors.confirmPassword"
              class="mt-2 text-sm text-red-600"
              id="confirmPassword-error"
            >
              {{ errors.confirmPassword }}
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
              Register
            </button>
          </div>
        </form>
      </div>

      <p class="mt-10 text-center text-sm text-gray-500">
        Already have an account?
        <RouterLink to="/auth/login">
          <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Sign in here</a>
        </RouterLink>
      </p>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url('https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
}

.panel {
  background-color: rgb(255 255 255);
  border-radius: 0.75rem;
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
    0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
</style>
