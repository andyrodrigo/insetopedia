import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InsetoView from '../views/InsetoView.vue'
import LinhagemView from '../views/LinhagemView.vue'
import GaleriaView from '../views/GaleriaView.vue'

export const router = createRouter({
  // Mantém o prefixo configurado pelo Vite ("/insetopedia/" no GitHub Pages).
  history: createWebHistory(import.meta.env.BASE_URL),
  // Cada nova rota começa no cabeçalho; ao usar voltar/avançar, preserva a posição anterior.
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ?? { top: 0 }
  },
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
      path: '/linhagem/:id/galeria',
      name: 'galeria',
      component: GaleriaView,
    },
    {
      path: '/inseto/:id',
      name: 'inseto',
      component: InsetoView,
    },
  ],
})
