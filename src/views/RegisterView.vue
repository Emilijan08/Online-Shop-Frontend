<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import { useAuthStore } from '../stores/AuthStore'

const store = useAuthStore()

let username = ref('')
let password = ref('')
let confirmPassword = ref('')

const register = () => {
  if (arePasswordsEqual()) {
    // Benutzerobjekt erstellen
    const newUser = {
      username: username.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
      userId: Math.floor(Math.random() * 1000000) // Generiere eine zufällige userId
    }
    // Benutzer zum users-Array hinzufügen
    users.push(newUser)
    console.log('User added:', newUser)
    // Weitere Logik hier ...
    // Optional: Formularfelder zurücksetzen
    username.value = ''
    password.value = ''
    confirmPassword.value = ''
  }
}

let users = []

const arePasswordsEqual = () => {
  if (password === confirmPassword) {
    console.log('Passwords are equal')

    return true
  } else {
    console.log('Passwords are not equal')

    return false
  }
}
</script>

<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mb-64"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Register your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form
        class="space-y-6"
        action="#"
        method="POST"
        @submit.prevent="
          store.register(username, password, confirmPassword, arePasswordsEqual)
        "
      >
        <div>
          <label
            for="register-username"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Username</label
          >
          <div class="mt-2">
            <input
              id="register-username"
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
          <div class="flex items-center justify-between">
            <label
              for="register-Password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
            <div class="text-sm">
              <a
                href="#"
                class="font-semibold text-indigo-600 hover:text-indigo-500"
                >Forgot password?</a
              >
            </div>
          </div>
          <div class="mt-2">
            <input
              id="register-Password"
              name="password"
              type="password"
              v-model="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div class="mt-7">
            <label
              for="register-confirmpassword"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Confirm Password</label
            >

            <input
              id="register-confirmPassword"
              name="confirmpassword"
              type="password"
              v-model="confirmPassword"
              autocomplete="current-password"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
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

      <p class="mt-10 text-center text-sm text-gray-500">
        Already have an account?
        <RouterLink to="/login">
          <a
            href="#"
            class="font-semibold text-indigo-600 hover:text-indigo-500"
            >Sign in here</a
          >
        </RouterLink>
      </p>
    </div>
  </div>
</template>
