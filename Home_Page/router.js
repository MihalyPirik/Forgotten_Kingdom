import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Regisztracio from '/components/Regisztracio.vue'
import Not_Found_Page from './components/Not_Found_Page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'HomeRoot',
      component:Home
    },
    {
    path: '/home',
    name: 'Home',
    component: Home
    },
    {
      path: '/regisztracio',
      name: 'Regisztracio',
      component: Regisztracio
    },
    {
      path:'/:pathMatch(.*)*',
      name: 'Not found',
      component: Not_Found_Page
    }
  ]
})

export default router
