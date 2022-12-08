import { createRouter, createWebHistory } from "vue-router";
// import { store } from "../store";

import HomeView from "../pages/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Blank
    {
      path: "/",
      redirect: "home",
    },

    //Authentications
    {
      path: "/home",
      name: "home",
      component: HomeView,
      meta: {
        needAuth: false,
      },
    },
    // {
    //   path: "/login",
    //   name: "login",
    //   component: LoginView,
    //   meta: {
    //     needAuth: false,
    //   },
    // },
    // {
    //   path: "/test",
    //   name: "test",
    //   component: testVue,
    //   meta: {
    //     needAuth: false,
    //   },
    // },
    // {
    //   path: "/register",
    //   name: "register",
    //   component: RegisterView,
    //   meta: {
    //     needAuth: false,
    //   },
    // },
  ],
});

// router.beforeEach((to, from, next) => {
//   if (store.isAuthenticated && !to.meta.needAuth) {
//     next({ name: "login" });
//   } else if (!store.isAuthenticated && to.meta.needAuth) {
//     next({ name: "login" });
//   } else {
//     next();
//   }
// });

export default router;
