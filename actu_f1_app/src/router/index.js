import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    // Routers for the navigation bar
    {
      path: '/recents' ,
      name: 'recents' ,
      component: () => import('../views/recents.vue'),
      meta:{title: 'Récents'}  
    },
    {
      path: '/suivis' ,
      name: 'suivis' ,
      component: () => import('../views/suivis.vue'),
      meta:{title: 'Suivis'} 
    },
    {
      path: '/courses' ,
      name: 'courses' ,
      component: () => import('../views/courses.vue'),
      meta:{title: 'Courses'} 
    },
    {
      path: '/classements' ,
      name: 'classements' ,
      component: () => import('../views/classements.vue'),
      meta:{title: 'Classements'} 
    },
    {
      path: '/plus' ,
      name: 'plus' ,
      component: () => import('../views/plus.vue'),
      meta:{title: 'Plus '} 
    },
  ],
})

export default router
