import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/main'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/Join.vue')
  },
  {
    path: '/members',
    component: () => import ('../views/MembersPage.vue')
  },
  {
    path: '/main',
    component: () => import ('../views/MainPage.vue')
  },
  {
    path: '/join',
    component: () => import ('../views/Join.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
