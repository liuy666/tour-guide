export const appRoutes = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/views/Main.vue'),
        children: [
            {
                path: 'scenic-spot',
                name: 'scenic-spot',
                component: () => import('@/views/scenic-spot.vue')
            },
            {
                path: 'scenic-line',
                name: 'scenic-line',
                component: () => import('@/views/scenic-line.vue')
            }
        ]
    }
]

export const routes = [
    ...appRoutes
];