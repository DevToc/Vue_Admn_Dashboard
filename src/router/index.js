import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'LoginTO',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/finance',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/finance',
    children: [
      {
        path: '/finance',
        name: 'Finance',
        redirect: '/finance/home',
      },
      {
        path: '/finance/home',
        name: 'Home',
        component: () => import('@/views/finance/Home.vue'),
      },
      {
        path: '/finance/loans',
        name: 'Loans',
        component: () => import('@/views/finance/Loans.vue'),
      },
      {
        path: '/finance/loans/:id',
        name: 'LoansDetail',
        component: () => import('@/views/finance/LoansDetail.vue'),
      },
      {
        path: '/finance/renters',
        name: 'Renters',
        component: () => import('@/views/finance/Renters.vue'),
      },
      {
        path: '/finance/Renters/:id',
        name: 'RentersDetail',
        component: () => import('@/views/finance/RentersDetail.vue'),
      },
      {
        path: '/finance/owners',
        name: 'Owners',
        component: () => import('@/views/finance/Owners.vue'),
      },
      {
        path: '/finance/Owners/:id',
        name: 'OwnersDetail',
        component: () => import('@/views/finance/OwnersDetail.vue'),
      },
      {
        path: '/finance/users',
        name: 'Users',
        component: () => import('@/views/finance/Users.vue'),
      },
      {
        path: '/finance/Users/:id',
        name: 'UsersDetail',
        component: () => import('@/views/finance/UsersDetail.vue'),
      },
      {
        path: '/finance/settings',
        name: 'Settings',
        component: () => import('@/views/finance/Settings.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
