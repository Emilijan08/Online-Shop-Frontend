<script setup lang="ts"></script>

<template>
  <div class="bg-gray-50">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Shop by Category</h2>

        <router-link
          to="/products"
          class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
        >
          Browse all categories
          <span aria-hidden="true"> &rarr;</span>
        </router-link>
      </div>

      <div
        class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-8"
      >
        <div
          class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 lg:col-span-2"
        >
          <img
            src="https://images.unsplash.com/photo-1515248137880-45e105b710e0?q=80&w=3894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="A mac standing on a Desk next to a Smartphone and a mug on a table."
            class="object-cover object-center group-hover:opacity-75"
          />

          <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50" />
          <div class="flex items-end p-6">
            <div>
              <h3 class="font-semibold text-white">
                <router-link to="/products">
                  <span class="absolute inset-0" />
                  New Arrivals
                </router-link>
              </h3>
              <p aria-hidden="true" class="mt-1 text-sm text-white">Shop now</p>
            </div>
          </div>
        </div>
        <div
          class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1601225998165-be1f75bfc94b?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="A desk with a laptop, smartphone, and plant."
            class="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
          />
          <div
            aria-hidden="true"
            class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
          />
          <div class="flex items-end p-6 sm:absolute sm:inset-0">
            <div>
              <h3 class="font-semibold text-white">
                <a href="#">
                  <span class="absolute inset-0" />
                  Smartphones
                </a>
              </h3>
              <p aria-hidden="true" class="mt-1 text-sm text-white">Shop now</p>
            </div>
          </div>
        </div>
        <div
          class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1542541864-4abf21a55761?q=80&w=2577&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Smartwatch Image"
            class="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
          />
          <div
            aria-hidden="true"
            class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
          />
          <div class="flex items-end p-6 sm:absolute sm:inset-0">
            <div>
              <h3 class="font-semibold text-white">
                <a href="#">
                  <span class="absolute inset-0" />
                  Smartwatches and Fitness Trackers
                </a>
              </h3>
              <p aria-hidden="true" class="mt-1 text-sm text-white">Shop now</p>
            </div>
          </div>
        </div>

        <!-- extra item -->
        <div
          class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full col-span-1 sm:col-span-2 lg:col-span-3"
        >
          <div class="relative overflow-hidden rounded-lg lg:h-96">
            <div class="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1615750185825-fc85c6aba18d?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                class="h-full w-full object-cover object-center"
              />
            </div>
            <div aria-hidden="true" class="relative h-96 w-full lg:hidden" />
            <div aria-hidden="true" class="relative h-32 w-full lg:hidden" />
            <div
              class="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg"
            >
              <div>
                <h2 class="text-xl font-bold text-white">Workspace Collection</h2>
                <p class="mt-1 text-sm text-gray-300">
                  Upgrade your home office with these modern computer essentials
                </p>
              </div>
              <a
                href="#"
                class="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
                >View the collection</a
              >
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 sm:hidden">
        <a href="#" class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
          Browse all categories
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  </div>
</template>
