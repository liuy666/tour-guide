import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from '@/router/router.js';
import vuex from '@/store/store.js';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'hash',
    routes
});

export default router;

// 路由前置守卫
router.beforeEach((to, from, next) => {
    console.log(from, to);
    if ((!from.name || from.name === 'index') && to.name === 'main') {
        vuex.commit('SETFROMROUTENAME', 'root');
    }
    next();
});

// 路由后置守卫
router.afterEach((to,from) => {

});