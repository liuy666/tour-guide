// 引入基础框架
import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/store';
import VueAMap from 'vue-amap';

// 引入全局样式和基础样式
import '@/styles/baseStyle.css';
import '@/styles/globalStyle.css';

// 引入自定义字体 @font-face
import '@/assets/fonts/SourceHansans-Bold/SourceHanSans-Bold.css'; // font-family: "sBold";
import '@/assets/fonts/SourceHansans-Medium/SourceHanSans-Medium.css'; // font-family: "SMedium";
import '@/assets/fonts/SourceHansans-Normal/SourceHanSans-Normal.css'; // font-family: "SNormal";

// 引入工具类js
import QS from 'qs';
import utils from '@/libs/utils.js';
import https from '@/libs/http.js';

Vue.config.productionTip = false;
Vue.prototype.$QS = QS;
Vue.prototype.$tool = utils;
Vue.prototype.$http = https;

// 引入高德SDK
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
    key: '377c450c3f9d31957eef1fa3e55100d7', // 和车无忌App用的是同一个key
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
}).$mount('#app');