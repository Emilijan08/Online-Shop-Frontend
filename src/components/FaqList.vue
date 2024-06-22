<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const faqs = [
  {
    question: 'How long does shipping normally take?',
    answer:
      'Shipping times may vary depending on factors such as your location, shipping method selected, and any potential customs processes. Typically, orders are processed and shipped within 5-20 days, and standard shipping times range from 4-14 days. For expedited shipping options or specific inquiries about your orders shipping status, please reach out to our customer service team for personalized assistance.',
    id: 1
  },
  {
    question: 'Where do we ship?',
    answer:
      'We ship worldwide! We are proud to offer international shipping to our customers in over 100 countries. For more information on shipping rates and delivery times to your specific location, please refer to our shipping policy or contact our customer service team for assistance.',
    id: 2
  },
  {
    question: 'How can I contact customer service if I have questions or problems?',
    answer:
      'Our customer service team is available to assist you with any questions or issues you may have. You can contact us via email at theOnlineShop@gmail.com or via phone at +12 34 567 89 01, and our representatives will be happy to help you. We strive to provide timely and helpful assistance to ensure your shopping experience is smooth and enjoyable.',
    id: 3
  },
  {
    question: 'Is there a return guarantee and how does it work?',
    answer:
      'Yes, we offer a return guarantee to ensure your satisfaction with your purchase. If you are not completely satisfied with your order, you can return it within 14 days of receipt for a refund or exchange. To initiate a return, simply [insert return process instructions]. Please review our return policy for more details on eligibility and terms',
    id: 4
  },
  {
    question: 'Why is this E-Commerce Store so great?',
    answer: 'Idk tbh lol',
    id: 5
  },
  {
    question: 'Can I change or cancel my order after it has been placed?',
    answer:
      'Yes, you may be able to change or cancel your order, depending on its current status and our policies. We recommend contacting our customer service team as soon as possible with your order details to request any changes or cancellations. Please note that orders that have already been processed or shipped may not be eligible for changes or cancellations.',
    id: 6
  },
  {
    question: 'are your Payment methods secure?',
    answer:
      'Yes, our payment methods are secure. We prioritize the security of our customers financial information and use industry-standard encryption technologies to ensure the confidentiality of all transactions. Additionally, we employ secure payment gateways that adhere to strict security protocols to safeguard your personal and financial data.',
    id: 7
  }
]
const route = useRoute()
const openFAQId = ref<number | null>(null)

onMounted(() => {
  const id = route.query.id ? parseInt(route.query.id as string) : null
  if (id !== null) {
    openFAQId.value = id
    scrollToQuestionInFAQ(id)
  }
})

const scrollToQuestionInFAQ = (id: number) => {
  const element = document.getElementById(id.toString())
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
      <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Frequently asked questions
        </h2>
        <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
          <div v-for="faq in faqs" :key="faq.id" :id="faq.id.toString()" class="pt-6">
            <Disclosure :default-open="faq.id === openFAQId.value">
              <dt>
                <DisclosureButton
                  class="flex w-full items-start justify-between text-left text-gray-900"
                >
                  <span class="text-base font-semibold leading-7">{{ faq.question }}</span>
                  <span class="ml-6 flex h-7 items-center">
                    <PlusSmallIcon class="h-6 w-6" aria-hidden="true" />
                    <MinusSmallIcon class="hidden h-6 w-6" aria-hidden="true" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p class="text-base leading-7 text-gray-600">{{ faq.answer }}</p>
              </DisclosurePanel>
            </Disclosure>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
