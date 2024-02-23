import { createRouter, createWebHistory } from "vue-router";
import FirstPage from "../views/FirstPage.vue";
import SuccessPage from "../views/SuccessPage.vue";
import CancelPage from "../views/CancelPage.vue";
import StripePage from "../views/StripePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "FirstPage",
      component: FirstPage,
    },
    {
      path: "/success",
      name: "Success",
      component: SuccessPage,
    },
    {
      path: "/cancel",
      name: "Cancel",
      component: CancelPage,
    },
    {
      path: "/stripe",
      name: "Stripe",
      component: StripePage,
    },
  ],
});

export default router;
