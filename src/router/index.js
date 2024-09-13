import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import ContactView from '@/views/ContactView.vue';
import EventsView from '@/views/EventsView.vue';
import RoomsView from '@/views/RoomsView.vue';
import RoomView from '@/views/RoomView.vue';
import BookRoomView from '@/views/BookRoomView.vue';
import LoginView from '@/views/LoginView.vue';
import AdminView from "@/views/AdminView.vue";
import UserProfileView from '@/views/UserProfileView.vue';

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
    path: '/room/:id',
    name: 'room',
    component: RoomView
  },
  {
    path: '/bookRoom',
    name: 'bookRoom',
    component: BookRoomView
  },
  {
    path: '/events',
    name: 'events',
    component: EventsView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/profile',
    name: 'profile',
    component: UserProfileView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
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
