import type { RouteRecordRaw } from 'vue-router'

export const authRoutes: RouteRecordRaw = {
  path: '/auth',
  name: 'auth',
  meta: { protected: false },
  component: () => import('@/auth/views/LoginView.vue'),
}
