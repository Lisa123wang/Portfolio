import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import ProjectsPage from './pages/ProjectsPage.vue'
import ExperiencePage from './pages/ExperiencePage.vue'
import ContactPage from './pages/ContactPage.vue'
import AcademicsPage from './pages/AcademicsPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/about', name: 'about', component: AboutPage },
  { path: '/projects', name: 'projects', component: ProjectsPage },
  { path: '/experience', name: 'experience', component: ExperiencePage },
  { path: '/academics', name: 'academics', component: AcademicsPage },
  { path: '/contact', name: 'contact', component: ContactPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router

