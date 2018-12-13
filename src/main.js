// 引入基础框架
import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/store';
import Cookies from 'js-cookie';

// 引入全局样式和基础样式
import '@/styles/baseStyle.css';
import '@/styles/globalStyle.less';


// 引入工具类js
import QS from 'qs';
import utils from '@/libs/utils.js';
import https from '@/libs/http.js';
import $crypto from '@/libs/crypto.js';


Vue.config.productionTip = false;
Vue.prototype.$QS = QS;
Vue.prototype.$tool = utils;
Vue.prototype.$http = https;
Vue.prototype.$base = process.env.NODE_ENV === "production" ? '/qcx-navigator' : '/api/qcx-navigator';
const VueTouch = require('vue-touch');
Vue.use(VueTouch, { name: 'v-touch' })

const vm = new Vue({
    router,
    store,
    render: h => h(App),
    async mounted() {
        this.$store.commit('INIT_CONTENT'); // 初始化设置消息详情内容

        if (!localStorage.getItem('initState')) {
            this.$store.commit('SAVE_STATE');
        }

        // 注入wx config
        if (!Cookies.get('ticket')) {
            const GET_JS_SDK = await this.$http.get(this.$base + '/app/getWxAccessToken');
            if (!GET_JS_SDK) {
                alert('获取jsapi_ticket失败！');
            }
            Cookies.set('ticket', GET_JS_SDK.ticket, {expires: parseInt(GET_JS_SDK.expires_in) / 3600 / 24});
        }
        
        let jsapi_ticket = Cookies.get('ticket');
        let noncestr = 'liuy666comwhosyourdaddy';
        let timestamp = 1544077236;
        let url = location.href.split('#')[0];
        let newString = `jsapi_ticket=${jsapi_ticket}&noncestr=${noncestr}&timestamp=${timestamp}&url=${url}`
        let signature = $crypto.getSHA1String(newString);
        console.log(wx)
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: 'wx32ec1b2c78c4270a', // 必填，公众号的唯一标识
            timestamp: timestamp, // 必填，生成签名的时间戳
            nonceStr: noncestr, // 必填，生成签名的随机串
            signature: signature,// 必填，签名
            jsApiList: [ // 必填，需要使用的JS接口列表
                'updateAppMessageShareData', // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容
                'updateTimelineShareData' // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
            ] 
        });
        wx.ready(function () { //需在用户可能点击分享按钮前就先调用 
            console.log('ready')
            wx.updateAppMessageShareData({ 
                title: '青川智能语音导游', // 分享标题
                desc: '聆听文化之妙，感受旅行之美，欢迎使用青川智能语音导游！', // 分享描述
                link: 'https://www.rtzhisheng.com/webchat/share.html', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: 'https://www.rtzhisheng.com/qcx-navigator/img/50x50.png', // 分享图标
                success: function () {
                    console.log('分享到QQ或朋友设置成功')
                },
                fail: function (e) {
                    console.log('分享到QQ设置失败')
                }
            });  
            wx.updateTimelineShareData({ 
                title: '青川智能语音导游', // 分享标题
                link: 'https://www.rtzhisheng.com/webchat/share.html', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: 'https://www.rtzhisheng.com/qcx-navigator/img/50x50.png', // 分享图标
                success: function () {
                    console.log('分享到QQ空间或朋友圈设置成功')
                },
                fail: function (e) {
                    console.log('分享到QQ空间设置失败')
                }
            });
        });
        wx.error(function () {
            console.log('error')
        });
    }
}).$mount('#app');

export default vm;