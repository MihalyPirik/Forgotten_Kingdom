import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Registration from "./components/Registration.vue";
import Not_Found_Page from "./components/Not_Found_Page.vue";
import Report from "./components/Report.vue";
import Gallery from "./components/Gallery.vue";
import AboutUs from "./components/AboutUs.vue";
import ForgetPassword from "./components/ForgetPassword.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/registration",
      component: Registration
    },
    {
      path: "/report",
      component: Report
    },
    {
      path: "/gallery",
      component: Gallery
    },
    {
      path: "/about-us",
      component: AboutUs
    },
    {
      path: "/forget-password",
      component: ForgetPassword
    },
    {
      path: "/:pathMatch(.*)*",
      component: Not_Found_Page
    }
  ]
})

export default router
