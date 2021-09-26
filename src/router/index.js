
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
const routerHistory = createWebHistory()
const routerHashHistory = createWebHashHistory()
const HomePage = () => import("../page/Home.vue");
const ProductPage = () => import("../page/Product.vue");
const ProductDetailsPage = () => import("../page/product/details.vue");
const ResumePage= () => import("../page/Resume.vue");
const ContactPage = () => import("../page/Contact.vue");
const Cooperate = () => import("../page/Cooperate.vue");

const router = createRouter({
    history: routerHashHistory,
    routes: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        component: HomePage
      },
      {
        path: '/product',
        component: ProductPage,
      },
      {
        path: '/product/details/0',
        component: ProductDetailsPage,
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
