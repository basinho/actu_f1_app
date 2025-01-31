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
      path: '/about', 
      name: 'about', 
      component: () => import('../views/AboutView.vue') 
    },
    { 
      path: '/recents', 
      name: 'recents', 
      component: () => import('../views/recents.vue'), 
      meta: { title: 'Récents' } 
    },
    { 
      path: '/suivis', 
      name: 'suivis', 
      component: () => import('../views/suivis.vue'), 
      meta: { title: 'Suivis' } 
    },
    { 
      path: '/courses', 
      name: 'courses', 
      component: () => import('../views/courses.vue'), 
      meta: { title: 'Courses' } 
    },
    { 
      path: '/classements/pilotes', 
      name: 'classement-pilotes', 
      component: () => import('../views/classementPilotes.vue'),
      meta: { title: 'Classements' },
    },
    {
      path: '/classements/constructeurs',
      name: 'classement-constructeurs',
      component: () => import('../views/classementConstructeurs.vue'),
      meta: { title: 'Classements'}
    }
  ]
})

export default router
