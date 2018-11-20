// 引入基础框架
import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/store';
// import hammer from 'hammerjs';

// 引入全局样式和基础样式
import '@/styles/baseStyle.css';
import '@/styles/globalStyle.less';

// 引入自定义字体 @font-face
// import '@/assets/fonts/SourceHansans-Bold/SourceHanSans-Bold.css'; 
// import '@/assets/fonts/SourceHansans-Medium/SourceHanSans-Medium.css'; 
// import '@/assets/fonts/SourceHansans-Normal/SourceHanSans-Normal.css'; 

// 引入工具类js
import QS from 'qs';
import utils from '@/libs/utils.js';
import https from '@/libs/http.js';


Vue.config.productionTip = false;
Vue.prototype.$QS = QS;
Vue.prototype.$tool = utils;
Vue.prototype.$http = https;
Vue.prototype.$base = process.env.NODE_ENV === "production" ? '' : '/api';
const VueTouch = require('vue-touch');
Vue.use(VueTouch, { name: 'v-touch' })

const vm = new Vue({
    router,
    store,
    render: h => h(App),
    mounted() {
        this.$store.commit('INITCONTENT');
    }
}).$mount('#app');

export default vm;