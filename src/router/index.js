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
    if (to.path === '/') {  
        console.log('E')
        sessionStorage.clear();
    }
    // 从home页进入下一路由或在main页刷新路由
    if ((!from.name || from.name === 'index') && to.name === 'main' && sessionStorage.getItem('currentScenic')) {
        console.log('A')
        vuex.commit('SETFROMROUTENAME', 'root');
    }
    // 在main页的子路由上刷新
    if (!from.name && (to.name === 'scenic-spot' || to.name === 'scenic-line' || to.name === 'scenic-resource')) { 
        console.log('C');
        next('/main');
    }
    if (from.name && (to.name === 'scenic-spot' || to.name === 'scenic-line' || to.name === 'scenic-resource')) {
        console.log('B');
        // if (vuex.state.app.fromRouteName === 'root') {
        //     next('/');
        // } else {
        //     vuex.commit('SETFROMROUTENAME', from.name);
        // }
    }
    next();
});

// 路由后置守卫
router.afterEach((to,from) => {

});