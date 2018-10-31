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
    next();
});

// 路由后置守卫
router.afterEach((to,from,next) => {
    console.log(document)
});