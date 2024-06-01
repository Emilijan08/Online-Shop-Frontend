import ProductDetails from '@/components/ProductDetails.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import FAQView from '@/views/FAQView.vue'
import HomeView from '@/views/HomeView.vue'
import OrderSummaryView from '@/views/OrderSummaryView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'
import ProductView from '@/views/ProductView.vue'
import RegisterView from '@/views/RegisterView.vue'
import ShopCartNewView from '@/views/ShopCartView.vue'
import SignInView from '@/views/SignInView.vue'
import WishListView from '@/views/WishListView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    {
      path: '/auth/login',
      name: 'Login',
      component: SignInView
    },
    {
      path: '/auth/register',
      name: 'Register',
      component: RegisterView
    },
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: ShopCartNewView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/products/:productId',
      name: 'Product',
      component: ProductView
    },
    {
      path: '/whishlist',
      name: 'Whishlist',
      component: WishListView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/order-summary',
      name: 'OrderSummary',
      component: OrderSummaryView
    },
    {
      path: '/aboutus',
      name: 'About Us',
      component: AboutUsView
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQView
    },

    {
      path: '/productdetails/:productId',
      name: 'ProductDetails',
      component: ProductDetails
    },
    {
      path: '/:catchall(.*)*',
      name: 'Not Found',
      component: PageNotFoundView
    }
  ]
})
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!token) {
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
