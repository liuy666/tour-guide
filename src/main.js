import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import 'lib-flexible/flexible.js'
import VueAMap from 'vue-amap';
import QS from 'qs';

// 引入全局样式和基础样式
import '@/styles/baseStyle.css';
import '@/styles/globalStyle.css';

// 引入自定义字体 @font-face
import '@/assets/fonts/SourceHansans-Bold/SourceHanSans-Bold.css'; // font-family: "sBold";
import '@/assets/fonts/SourceHansans-Medium/SourceHanSans-Medium.css'; // font-family: "SMedium";
import '@/assets/fonts/SourceHansans-Normal/SourceHanSans-Normal.css'; // font-family: "SNormal";

// 引入工具类js
import utils from '@/libs/utils.js';

Vue.config.productionTip = false;
Vue.prototype.$tools = utils;
Vue.prototype.$baseURL = process.env.NODE_ENV === "production" ? '' : '/api';
Vue.prototype.$QS = QS;

// 引入高德SDK
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
    key: 'ca5544e477cab7e2aa4169d7fe0d4f41', // 和车无忌App用的是同一个key
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    v: '1.4.4',
    uiVersion: '1.0.11' // 版本号
});

new Vue({
    router,
    store,
    render: h => h(App),
    mounted() {

    }
}).$mount('#app')