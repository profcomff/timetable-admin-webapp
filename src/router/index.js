import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/timetable',
    name: 'home',
    component: () => import(/* webpackChunkName: "auth" */ '../views/LecturerView.vue')
  },
  {
    path: '/timetable/auth',
    name: 'auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/AuthView.vue')
  },
  {
    path: '/timetable/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
