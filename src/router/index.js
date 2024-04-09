import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import HomeView from "../views/HomeView.vue";
import ShopCartView from "../views/ShopCartView.vue";
import ProductView from "../views/ProductView.vue";
import WishList from "../views/WishList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: LoginView,
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
      component: ShopCartView,
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
      component: WishList,
      meta: {
        requiresAuth: true,
      },
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
