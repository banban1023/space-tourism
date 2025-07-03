import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: '/destination',
        name: 'DestinationPage',
        component: () => import('../views/Destination.vue')
      },
      {
        path: '/crew',
        name: 'CrewPage',
        component: () => import('../views/Crew.vue')
      },
      {
        path: '/technology',
        name: 'TechnolotyPage',
        component: () => import('../views/Technology.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
