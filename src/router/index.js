
import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory()
const HomePage = () => import("../page/Home.vue");
const ProductPage = () => import("../page/Product.vue");
const ResumePage= () => import("../page/Resume.vue");
const ContactPage = () => import("../page/Contact.vue");
const Cooperate = () => import("../page/Cooperate.vue");

const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        component: HomePage
      },
      {
        path: '/product',
        component: ProductPage
      },
      {
        path: '/resume',
        component: ResumePage
      },
      {
        path: '/contact',
        component: ContactPage
      },
      {
        path: '/cooperate',
        component: Cooperate
      }
    ]
  })
  export default router
