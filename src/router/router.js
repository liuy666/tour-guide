export const appRoutes = [{
        path: '/',
        name: 'index',
        component: () =>
            import ('@/views/home.vue')
    }, {
        path: '/main',
        name: 'main',
        component: () =>
            import ('@/views/Main.vue'),
        children: [{
                path: 'scenic-spot',
                name: 'scenic-spot',
                component: () =>
                    import ('@/views/scenic-spot.vue')
            },
            {
                path: 'scenic-line',
                name: 'scenic-line',
                component: () =>
                    import ('@/views/scenic-line.vue')
            }
        ]
    },
    {
        path: '/use-camera',
        name: 'use-camera',
        component: () =>
            import ('@/views/use-camera.vue')
    },
    {
        path: '/scenic-point-detail',
        name: 'scenic-point-detail',
        component: () =>
            import ('@/views/scenic-point-detail.vue')
    },
    {
        path: '/scenic-detail',
        name: 'scenic-detail',
        component: () =>
            import ('@/views/scenic-detail.vue')
    },
    {
        path: '/feedback',
        name: 'feedback',
        component: () =>
            import ('@/views/feedback.vue'),
        meta: {
            title: '反馈'
        }
    }
]

export const routes = [
    ...appRoutes
];