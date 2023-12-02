import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TechnologiesView from '@/views/TechnologiesView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import AboutView from '../views/AboutView.vue'
import ContactsView from '@/views/ContactsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/technologies',
    name: 'technologies',
    component: TechnologiesView,
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'nav-header__link--current',
  routes,
})

export default router
