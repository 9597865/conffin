import Glo from '../GloData/Glo.js'
import pathParse from 'path-parse'
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
        path: '/product/details/:id',
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
  router.beforeEach((to, from, next) => {
    const pathObj = pathParse(to.fullPath)
    const id = pathObj.name || 0
    let defaultTitle = '郑氏工艺'
    if(to.fullPath.indexOf('/product/details/')!=-1){
      let title = defaultTitle+'-'+Glo.productSlidrList[id].title
      defaultTitle = title
    }
    document.title = defaultTitle
    next()
  })
  export default router
