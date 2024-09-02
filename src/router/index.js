import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import ContactView from '@/views/ContactView.vue';
import ActivitiesView from '@/views/ActivitiesView.vue';
import RoomsView from '@/views/RoomsView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/rooms',
    name: 'rooms',
    component: RoomsView
  },
  {
    path: '/activities',
    name: 'activities',
    component: ActivitiesView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
