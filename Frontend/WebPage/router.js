import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Regisztracio from "/components/Regisztracio.vue";
import Not_Found_Page from "./components/Not_Found_Page.vue";
import Report from "./components/Report.vue";
import Galeria from "./components/Galeria.vue";
import Rolunk from "./components/Rolunk.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/regisztracio",
      name: "Regisztracio",
      component: Regisztracio
    },
    {
      path: "/report",
      name: "Report",
      component: Report
    },
    {
      path: "/galeria",
      name: "Galeria",
      component: Galeria
    },
    {
      path: "/rolunk",
      name: "Rolunk",
      component: Rolunk
    },
    {
      path: "/:pathMatch(.*)*",
      name: "Not found",
      component: Not_Found_Page
    }
  ]
})

export default router
