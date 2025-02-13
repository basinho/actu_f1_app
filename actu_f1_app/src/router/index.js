import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
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
    component: () => import('../views/circuitPage.vue'),
    meta: { title: 'Circuit' }
  },
  {
    path: '/courses/:circuitName/classement',
    name: 'classement-direct',
    component: () => import('../views/directData.vue'),
    meta: { title: 'Direct' } 
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
  },
  {
    path: '/pilots/:pilotId',
    name: 'driverPage',
    component: () => import('../views/driverPage.vue'),
    meta: { title: 'Driver Page' }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;