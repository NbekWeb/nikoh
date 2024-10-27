import MainView from "@/views/MainView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import LoginView from "@/views/LoginView.vue";
import FormView from "@/views/FormView.vue";
import DashboardView from "@/views/DashboardView.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/enter",
      name: "home",
      component: MainView,
    },
    {
      path: "/",
      name: "dashboard",
      component: DashboardView,
    },
    {
      path: "/regis",
      name: "regis",
      component: RegistrationView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/form",
      name: "form",
      component: FormView,
    },
  ],
});

export default router;
