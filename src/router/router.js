export const appRoutes = [
    {
        path: '/',
        name: 'index',
        component: () => import ('@/views/home.vue')
    }, 
    {
        path: '/main',
        name: 'main',
        component: () => import ('@/views/Main.vue'),
        children: [
            // 景点
            {
                path: 'scenic-spot',
                name: 'scenic-spot',
                component: () => import ('@/views/scenic-spot.vue')
            },
            // 路线
            {
                path: 'scenic-line',
                name: 'scenic-line',
                component: () => import ('@/views/scenic-line.vue')
            },
            // 其他景区资源
            {
                path: 'scenic-resource',
                name: 'scenic-resource',
                component: () => import ('@/views/scenic-resource.vue')
            },
        ]
    },
    {
        path: '/use-camera',
        name: 'use-camera',
        component: () => import ('@/views/use-camera.vue')
    },
    {
        path: '/scenic-point-detail',
        name: 'scenic-point-detail',
        component: () => import ('@/views/scenic-point-detail.vue')
    },
    {
        path: '/scenic-detail',
        name: 'scenic-detail',
        component: () => import ('@/views/scenic-detail.vue')
    },
    {
        path: '/feedback',
        name: 'feedback',
        component: () => import ('@/views/feedback.vue'),
        meta: {
            title: '反馈'
        }
    }
]

export const routes = [
    ...appRoutes
];