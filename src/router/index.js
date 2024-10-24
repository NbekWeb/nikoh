import MainView from "@/views/MainView.vue";
import RegistrationView from "@/views/RegistrationView.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainView,
    },
    {
      path: "/regis",
      name: "regis",
      component: RegistrationView,
    },
    {
      path: "/login",
      name: "login",
      component: RegistrationView,
    },
  ],
});

export default router;
