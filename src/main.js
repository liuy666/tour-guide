// 引入基础框架
import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/store';
import Cookies from 'js-cookie';
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
// const lodash  = require('lodash');
import $crypto from '@/libs/crypto.js';


Vue.config.productionTip = false;
Vue.prototype.$QS = QS;
Vue.prototype.$tool = utils;
Vue.prototype.$http = https;
// Vue.prototype.$lodash = lodash;
Vue.prototype.$base = process.env.NODE_ENV === "production" ? '' : '/api';
const VueTouch = require('vue-touch');
Vue.use(VueTouch, { name: 'v-touch' })

const vm = new Vue({
    router,
    store,
    render: h => h(App),
    async mounted() {
        this.$store.commit('INIT_CONTENT'); // 初始化设置消息详情内容
        console.log(wx);
        // 注入wx config
        if (!Cookies.get('ticket')) {
            const GET_JS_SDK = await this.$http.get(this.$base + '/hqyatu-navigator/app/getWxAccessToken');
            console.log(GET_JS_SDK);
            if (!GET_JS_SDK) {
                console.log('获取jsapi_ticket失败！');
            }
            Cookies.set('ticket', GET_JS_SDK.ticket, {expires: parseInt(GET_JS_SDK.expires_in) / 3600 / 24});
        }
        
        let jsapi_ticket = Cookies.get('ticket');
        let noncestr = 'liuy666comwhosyourdaddy';
        let timestamp = Date.now();
        let url = window.location.href;
        let newString = `jsapi_ticket=${jsapi_ticket}&noncestr=${noncestr}&timestamp=${timestamp}&url=${url}`
        let signature = $crypto.getSHA1String(newString);
        wx.config({
            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: 'wx32ec1b2c78c4270a', // 必填，公众号的唯一标识
            timestamp: timestamp, // 必填，生成签名的时间戳
            nonceStr: noncestr, // 必填，生成签名的随机串
            signature: signature,// 必填，签名
            jsApiList: [ // 必填，需要使用的JS接口列表
                'updateAppMessageShareData', // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容
                'updateTimelineShareData' // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
            ] 
        });
        wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
            wx.updateAppMessageShareData({ 
                title: '青川智能语音导游', // 分享标题
                desc: '聆听文化之妙，感受旅行之美，欢迎使用青川智能语音导游！', // 分享描述
                link: '/share.html', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: '/50x50.png', // 分享图标
                success: function () {
                  // 设置成功
                  console.log('设置成功')
                }
            });
        });
    }
}).$mount('#app');

export default vm;