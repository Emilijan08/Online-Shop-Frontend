<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'

const faqs = [
  {
    question: 'How long does shipping normally take?',
    answer:
      'It normaly takes 3-5 business days, deppending on your location.If we ship outside of the Europe, it can take up to 10 business days or more.'
  },
  {
    question: 'Where do we ship?',
    answer: 'We ship worldwide.'
  },
  {
    question:
      'How can I contact customer service if I have questions or problems?',
    answer:
      'You can contact us via email at ... or via phone at +12-34-567-89-04.'
  },
  {
    question: 'Is there a return guarantee and how does it work?',
    answer:
      'if your Product was already damaged, when you bought it, you can return it within 14 days when you still have the receipt.If the product simply stops working or experiences any issues, you have a two-year warranty and can return it back, when you still have the receipt.'
  },
  {
    question: 'Why is this E-Commerce Store so great?',
    answer: 'Idk tbh lol'
  },
  {
    question: 'Can I change or cancel my order after it has been placed?',
    answer:
      'if you ordered a Product and want to cancel the Order, you have to cancel the order at max 45min after you placed your Order.If you want to change your Order, you have to cancel the Order and place a new one.'
  }

  // More questions...
]
</script>

<template>
  <div>
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2
            class="text-2xl font-bold leading-10 tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
            <Disclosure
              as="div"
              v-for="faq in faqs"
              :key="faq.question"
              class="pt-6"
              v-slot="{ open }"
            >
              <dt>
                <DisclosureButton
                  class="flex w-full items-start justify-between text-left text-gray-900"
                >
                  <span class="text-base font-semibold leading-7">{{
                    faq.question
                  }}</span>
                  <span class="ml-6 flex h-7 items-center">
                    <PlusSmallIcon
                      v-if="!open"
                      class="h-6 w-6"
                      aria-hidden="true"
                    />
                    <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p class="text-base leading-7 text-gray-600">
                  {{ faq.answer }}
                </p>
              </DisclosurePanel>
            </Disclosure>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#Square {
  width: 10px;
  height: 10px;
  border: 1px solid black;
}
</style>
