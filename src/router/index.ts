import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import OrderSummaryView from '@/views/OrderSummaryView.vue'
import ProductDetailsView from '@/views/ProductDetailsView.vue'
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
      component: SignInView,
      meta: {
        maxFooter: false
      }
    },
    {
      path: '/auth/register',
      name: 'Register',
      component: RegisterView,
      meta: {
        maxFooter: false
      }
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
      component: ProductDetailsView
    },
    {
      path: '/wishlist',
      name: 'Wishlist',
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
      path: '/about',
      name: 'About Us',
      component: AboutView
    },
    {
      path: '/:catchall(.*)*',
      name: 'Not Found',
      component: NotFoundView,
      meta: {
        navbar: false,
        maxFooter: false
      }
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
