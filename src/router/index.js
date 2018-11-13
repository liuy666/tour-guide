import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from '@/router/router.js';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'hash',
    routes
});

export default router;

// 路由前置守卫
router.beforeEach((to, from, next) => {
    // console.log(to, from);
    next();
    // if (from.name === 'scenic-point-detail') {
    //     next({
    //         name: 'main',
    //         params: {
    //             xxx: 'ddd'
    //         }
    //     });
    // } else {
    //     next();
    // }
});

// 路由后置守卫
router.afterEach((to,from) => {
    // console.log(document)
});