export const appRoutes = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/views/home.vue')
    }, 
    {
        path: '/main',
        name: 'main',
        component: () => import('@/views/Main.vue'),
        children: [
            // 景点资源
            {
                path: 'scenic-spot',
                name: 'scenic-spot',
                component: () => import('@/views/scenic-spot.vue')
            },
            // 路线资源
            {
                path: 'scenic-line',
                name: 'scenic-line',
                component: () => import('@/views/scenic-line.vue')
            },
            // 其他景区资源
            {
                path: 'scenic-resource/:type',
                name: 'scenic-resource',
                component: () => import('@/views/scenic-resource.vue')
            },
        ]
    },
    // 智能识别
    {
        path: '/recognize',
        name: 'recognize',
        component: () => import('@/views/recognize.vue')
    },
    // 景点详情
    {
        path: '/scenic-point-detail',
        name: 'scenic-point-detail',
        component: () => import('@/views/scenic-point-detail.vue')
    },
    // 新增反馈
    {
        path: '/feedback',
        name: 'feedback',
        component: () => import('@/views/feedback.vue'),
        meta: {
            title: '反馈'
        }
    },
    // 花草识别详情
    {
        path: '/recognize-detail',
        name: 'recognize-detail',
        component: () => import('@/views/recognize-detail.vue'),
        meta: {
            title: '识别详情'
        }
    },
    // 查看景区全景图
    {
        path: '/full-view',
        name: 'full-view',
        component: () => import('@/views/full-view.vue'),
        meta: {
            title: '全景图'
        }
    }
]

export const routes = [
    ...appRoutes
];