import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "../views/ProductView.vue";
import RegisterView from "../views/RegisterView.vue";
import ShopCartNewView from "../views/ShopCartNewView.vue";
import WishListView from "../views/WishListView.vue";
import OrderSummaryView from "../views/OrderSummaryView.vue";
import AboutUsView from "../views/AboutUsView.vue";
import FAQView from "../views/FAQView.vue";
import LoginSignInView from "../views/LoginSignInView.vue";
import PageNotFoundView from "../views/PageNotFoundView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: LoginSignInView,
    },
    {
      path: "/register",
      name: "Register",
      component: RegisterView,
    },
    {
      path: "/",
      name: "Home",
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/cart",
      name: "Cart",
      component: ShopCartNewView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/products/:productId",
      name: "Product",
      component: ProductView,
    },
    {
      path: "/whishlist",
      name: "Whishlist",
      component: WishListView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/order-summary",
      name: "OrderSummary",
      component: OrderSummaryView,
    },
    {
      path: "/aboutus",
      name: "About Us",
      component: AboutUsView,
    },
    {
      path: "/faq",
      name: "FAQ",
      component: FAQView,
    },
    {
      path: "/:catchall(.*)*",
      name: "Not Found",
      component: PageNotFoundView,
    },
  ],
});
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    if (!token) {
      // no token, redirect to login page
      next({ name: "Login" });
    } else {
      // token exists, allow access to the route
      next();
    }
  } else {
    // this route does not require auth, allow access to all
    next();
  }
});

export default router;
