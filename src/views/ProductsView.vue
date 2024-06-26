<template>
  <div class="bg-white">
    <div>
      <!-- Mobile filter dialog -->
      <TransitionRoot as="template" :show="mobileFiltersOpen">
        <Dialog class="relative z-40 lg:hidden" @close="mobileFiltersOpen = false">
          <TransitionChild
            as="template"
            enter="transition-opacity ease-linear duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div class="fixed inset-0 z-40 flex">
            <TransitionChild
              as="template"
              enter="transition ease-in-out duration-300 transform"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel
                class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl"
              >
                <div class="flex items-center justify-between px-4">
                  <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    class="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                    @click="mobileFiltersOpen = false"
                  >
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <!-- Filters -->
                <form class="mt-4">
                  <Disclosure
                    as="div"
                    v-for="section in filters"
                    :key="section.name"
                    class="border-t border-gray-200 pb-4 pt-4"
                    v-slot="{ open }"
                  >
                    <fieldset>
                      <legend class="w-full px-2">
                        <DisclosureButton
                          class="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span class="text-sm font-medium text-gray-900">{{ section.name }}</span>
                          <span class="ml-6 flex h-7 items-center">
                            <ChevronDownIcon
                              :class="[open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform']"
                              aria-hidden="true"
                            />
                          </span>
                        </DisclosureButton>
                      </legend>
                      <DisclosurePanel class="px-4 pb-2 pt-4">
                        <div class="space-y-6">
                          <div
                            v-for="(option, optionIdx) in section.options"
                            :key="option.value"
                            class="flex items-center"
                          >
                            <input
                              :id="`${section.id}-${optionIdx}-mobile`"
                              :name="`${section.id}[]`"
                              :value="option.value"
                              type="checkbox"
                              v-model="selectedFilters[section.id as keyof SelectedFiltersType]"
                              class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              :for="`${section.id}-${optionIdx}-mobile`"
                              class="ml-3 text-sm text-gray-500"
                              >{{ option.label }}</label
                            >
                          </div>
                        </div>
                      </DisclosurePanel>
                    </fieldset>
                  </Disclosure>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>

      <main class="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div class="border-b border-gray-200 pb-10">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
          <p class="mt-4 text-base text-gray-500">
            Check out the latest products from our collection
          </p>
        </div>

        <div class="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          <aside>
            <h2 class="sr-only">Filters</h2>

            <button
              type="button"
              class="inline-flex items-center lg:hidden"
              @click="mobileFiltersOpen = true"
            >
              <span class="text-sm font-medium text-gray-700">Filters</span>
              <PlusIcon class="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            </button>

            <div class="hidden lg:block">
              <form class="space-y-10 divide-y divide-gray-200">
                <div
                  v-for="(section, sectionIdx) in filters"
                  :key="section.name"
                  :class="sectionIdx === 0 ? null : 'pt-10'"
                >
                  <fieldset>
                    <legend class="block text-sm font-medium text-gray-900">
                      {{ section.name }}
                    </legend>
                    <div class="space-y-3 pt-6">
                      <div
                        v-for="(option, optionIdx) in section.options"
                        :key="option.value"
                        class="flex items-center"
                      >
                        <input
                          :id="`${section.id}-${optionIdx}`"
                          :name="`${section.id}[]`"
                          :value="option.value"
                          type="checkbox"
                          v-model="selectedFilters[section.id as keyof SelectedFiltersType]"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          :for="`${section.id}-${optionIdx}`"
                          class="ml-3 text-sm text-gray-600"
                          >{{ option.label }}</label
                        >
                      </div>
                    </div>
                  </fieldset>
                </div>
              </form>
            </div>
          </aside>

          <!-- Product grid -->
          <div class="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
            <ProductsList :products="filteredProducts" />
            <!-- Your content -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductsList from '@/components/ProductsList.vue'
import { useProductStore } from '@/stores/ProductsStore'
import {
Dialog,
DialogPanel,
Disclosure,
DisclosureButton,
DisclosurePanel,
TransitionChild,
TransitionRoot
} from '@headlessui/vue'
import { ChevronDownIcon, PlusIcon } from '@heroicons/vue/20/solid'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { computed, ref } from 'vue'

const store = useProductStore()

type SelectedFiltersType = {
  brands: string[]
  category: string[]
  price: string[]
}

const selectedFilters = ref<SelectedFiltersType>({
  brands: [],
  category: [],
  price: []
})

const filteredProducts = computed(() => {
  let products = store.products

  if (selectedFilters.value.brands.length) {
    products = products.filter((product) => selectedFilters.value.brands.includes(product.brand))
  }

  if (selectedFilters.value.category.length) {
    products = products.filter((product) =>
      selectedFilters.value.category.includes(product.category)
    )
  }

  if (selectedFilters.value.price.length) {
    products = products.filter((product) => {
      return selectedFilters.value.price.some((priceRange) => {
        const [min, max] = priceRange.split('-').map(Number)
        if (min === 0) {
          return product.price <= max
        } else if (max === 0) {
          return product.price >= min
        } else {
          return product.price >= min && product.price <= max
        }
      })
    })
  }

  return products
})

const filters = [
  {
    id: 'brands',
    name: 'Brands',
    options: [
      { value: 'Apple', label: 'Apple' },
      { value: 'Samsung', label: 'Samsung' },
      { value: 'Xiaomi', label: 'Xiaomi' },
      { value: 'Google', label: 'Google' },
      { value: 'Huawei', label: 'Huawei' },
      { value: 'Lenovo', label: 'Lenovo' },
      { value: 'Microsoft', label: 'Microsoft' },
      { value: 'Other', label: 'Other' }
    ]
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'Laptops', label: 'Laptops' },
      { value: 'Smartwatches', label: 'Smartwatches' },
      { value: 'Computers', label: 'Computers' },
      { value: 'Smartphones', label: 'Smartphones' },
      { value: 'Other', label: 'Other' }
    ]
  },
  {
    id: 'price',
    name: 'Price',
    options: [
      { value: '0-300', label: 'Up to 300' },
      { value: '300-500', label: '300 to 500' },
      { value: '500-1000', label: '500 to 1000' },
      { value: '1000-1500', label: '1000 to 1500' },
      { value: '1500-0', label: '1500 and above' }
    ]
  }
]

const mobileFiltersOpen = ref(false)
</script>
