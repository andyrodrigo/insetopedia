import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InsetoView from '../views/InsetoView.vue'
import LinhagemView from '../views/LinhagemView.vue'

export const router = createRouter({
  // Mantém o prefixo configurado pelo Vite ("/insetopedia/" no GitHub Pages).
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/linhagem/:id',
      name: 'linhagem',
      component: LinhagemView,
    },
    {
      path: '/inseto/:id',
      name: 'inseto',
      component: InsetoView,
    },
  ],
})
