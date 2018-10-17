import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import 'lib-flexible/flexible.js'
import VueAMap from 'vue-amap'
import '@/style/baseStyle.css'
import '@/style/globalStyle.css'

//import { lazyAMapApiLoaderInstance } from 'vue-amap'

Vue.use(VueAMap);
Vue.config.productionTip = false;
VueAMap.initAMapApiLoader({
    key: '1e401a2e97826bca1fac0591ce3e3aee',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    v: '1.4.4',
    uiVersion: '1.0.11' // 版本号
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')