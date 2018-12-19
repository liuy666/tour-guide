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
    console.log('***from***')
    console.log(from);
    console.log('***to***')
    console.log(to);

    // 从home页进入main页或在main页刷新
    if ((!from.name || from.name === 'index') && to.name === 'main') {
        console.log('SET_FROM_ROUTE_NAME => root')
        vuex.commit('SET_FROM_ROUTE_NAME', 'root');
    }

    // 在反馈页刷新
    if (to.name === 'feedback') {
        vuex.commit('SET_SCENIC_ID', JSON.parse(sessionStorage.getItem('currentScenic')).scenery_id);
    }

    // 在main页的子路由上刷新
    if (!from.name && (to.name === 'scenic-spot' || to.name === 'scenic-line' || to.name === 'scenic-resource')) {
        console.log('在main页的子路由上刷新,跳转回main页');
        next({
            path: '/main',
            replace: true
        });
    }

    // 从首页前进跳转到main的子页面
    if (from.name === 'index' && (to.name === 'scenic-spot' || to.name === 'scenic-line' || to.name === 'scenic-resource')) {
        console.log('从首页前进跳转到main的子页面');
        next({
            path: '/main'
        });
    }

    if ((from.name === 'scenic-spot' || from.name === 'scenic-line' || from.name === 'scenic-resource' || from.name === 'main') && (to.name === 'scenic-spot' || to.name === 'scenic-line' || to.name === 'scenic-resource')) {
        console.log('main页及子页间的跳转');
        if (!sessionStorage.getItem('currentResource') && to.name === 'scenic-resource') {
            console.log(1)
            next({
                path: '/',
                replace: true
            });
        } else {
            console.log(2)
            vuex.commit('SET_FROM_ROUTE_NAME', from.name);
        }
    }

    if (from.name === 'recognize' && (to.name === 'scenic-spot' || to.name === 'scenic-line' || to.name === 'scenic-resource')) {
        next({
            path: '/main',
            replace: true
        })
    }

    next();
});

// 路由后置守卫
router.afterEach((to, from) => {

});