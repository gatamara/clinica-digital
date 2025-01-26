import { authRoutes } from '@/auth/routes'
import { useClinicaStore } from '@/stores/useClinicaStore'
import { createRouter, createWebHashHistory } from 'vue-router'
import { storeToRefs } from 'pinia'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/dashboard',
    },
    authRoutes,
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: { protected: true },
      component: () => import('@/views/DashboardView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          meta: { protected: true },
          component: () => import('@/views/HomeView.vue'),
        },
        {
          path: 'agenda',
          name: 'agenda',
          meta: { protected: true },
          component: () => import('@/views/AgendaView.vue'),
        },
        {
          path: 'historico',
          name: 'historico',
          meta: { protected: true },
          component: () => import('@/views/HistoricoView.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/auth/views/LoginView.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const store = useClinicaStore()
  const { isAuth } = storeToRefs(store)

  console.log('RUTA A LA QUE INTENTA ACCEDER:', to.path)
  console.log('ESTADO DE isAuth:', isAuth.value)

  if (to.meta.protected && !isAuth.value) {
    next('/login')
  } else if (to.path === '/login' && isAuth.value) {
    next('/dashboard')
  } else {
    next()
  }
})

export default router
