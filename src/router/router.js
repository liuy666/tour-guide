export const mainRoutes = [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/Main.vue')
    }
]


export const routes = [
    ...mainRoutes
];