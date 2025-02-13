import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/', 
      name: 'home', 
      component: HomeView 
    },
 
    { 
      path: '/suivis', 
      name: 'suivis', 
      component: () => import('../views/mainFollow.vue'), 
      meta: { title: 'Suivis' } 
    },
    { 
      path: '/courses', 
      name: 'courses', 
      component: () => import('../views/racePage.vue'), 
      meta: { title: 'Courses' } 
    },
    {
      path: '/courses/:circuitName/circuit',
      name: 'circuit',
      component: () => import('../components/presCircuitBlock.vue'),
      meta: { title: ':circuitName' }
    },
    { 
      path: '/classements/pilotes', 
      name: 'classement-pilotes', 
      component: () => import('../views/driverStanding.vue'),
      meta: { title: 'Classements' },
    },
    {
      path: '/classements/constructeurs',
      name: 'classement-constructeurs',
      component: () => import('../views/constructorStanding.vue'),
      meta: { title: 'Classements'}
    }
  ]
})

export default router
