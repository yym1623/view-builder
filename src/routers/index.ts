import { createWebHistory, createRouter } from 'vue-router'


import View from "@/view/index.vue"


const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: '/', component: View, name: 'View' }
  ],

  // scrollBehavior(to, from, savedPosition) {
  //   return { top : 0, behavior: 'smooth' }
  // },
})

export default router