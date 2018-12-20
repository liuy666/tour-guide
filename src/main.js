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
        let _store = this.$store;

        // 注入wx config
        if (!Cookies.get('ticket')) {
            const GET_JS_SDK = await this.$http.get(this.$base + '/app/getWxAccessToken');
            if (!GET_JS_SDK) {
                alert('获取jsapi_ticket失败！');
            }
            Cookies.set('ticket', GET_JS_SDK.ticket, { expires: parseInt(GET_JS_SDK.expires_in) / 3600 / 24 });
        }

        let jsapi_ticket = Cookies.get('ticket');
        let noncestr = 'liuy666comwhosyourdaddy';
        let timestamp = 1544077236;
        let url = location.href.split('#')[0];
        let newString = `jsapi_ticket=${jsapi_ticket}&noncestr=${noncestr}&timestamp=${timestamp}&url=${url}`
        let signature = $crypto.getSHA1String(newString);
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: 'wx32ec1b2c78c4270a', // 必填，公众号的唯一标识
            timestamp: timestamp, // 必填，生成签名的时间戳
            nonceStr: noncestr, // 必填，生成签名的随机串
            signature: signature, // 必填，签名
            jsApiList: [ // 必填，需要使用的JS接口列表
                'checkJsApi',
                'updateAppMessageShareData', // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容(新接口)
                'updateTimelineShareData', // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容(新接口)
                'onMenuShareTimeline', // 分享到朋友圈(旧接口-即将废弃)
                'onMenuShareAppMessage', // 分享给朋友(旧接口-即将废弃)
                'onMenuShareQQ', // 分享到QQ(旧接口-即将废弃)
                'onMenuShareQZone' // 分享到QQ空间(旧接口-即将废弃)
            ]
        });
        const shareData = {
            title: '青川智能语音导游', // 分享标题
            link: 'https://www.rtzhisheng.com/webchat/share.html', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: 'https://www.rtzhisheng.com/qcx-navigator/img/50x50.png' // 分享图标
        }
        wx.ready(function() { //需在用户可能点击分享按钮前就先调用 
            wx.checkJsApi({
                jsApiList: [ // 需要检测的JS接口列表
                    'updateAppMessageShareData',
                    'updateTimelineShareData',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareQZone'
                ],
                success: function(res) {
                    // 以键值对的形式返回，可用的api值true，不可用为false
                    // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
                    if (wx.onMenuShareAppMessage) { // 如果旧版接口仍可用
                        if (res.checkResult.onMenuShareTimeline) { // 如果当前微信客户端版本支持此接口
                            wx.onMenuShareTimeline({
                                ...shareData,
                                success: function () {
                                    // 用户点击了分享后执行的回调函数
                                }
                            });
                        }
                        if (res.checkResult.onMenuShareAppMessage) { // 如果当前微信客户端版本支持此接口
                            wx.onMenuShareAppMessage({
                                ...shareData,
                                desc: '聆听文化之妙，感受旅行之美，欢迎使用青川智能语音导游！',
                                type: 'link',
                                dataUrl: '',
                                success: function () {
                                    // 用户点击了分享后执行的回调函数
                                }
                            });
                        }
                        if (res.checkResult.onMenuShareQQ) { // 如果当前微信客户端版本支持此接口
                            wx.onMenuShareQQ({
                                ...shareData,
                                desc: '聆听文化之妙，感受旅行之美，欢迎使用青川智能语音导游！',
                                success: function () {
                                    // 用户确认分享后执行的回调函数
                                }
                            });
                        }
                        if (res.checkResult.onMenuShareQZone) { // 如果当前微信客户端版本支持此接口
                            wx.onMenuShareQZone({
                                ...shareData,
                                desc: '聆听文化之妙，感受旅行之美，欢迎使用青川智能语音导游！',
                                success: function () {
                                    // 用户确认分享后执行的回调函数
                                }
                            });
                        }
                    } else { // 如果旧版接口已废弃
                        if (res.checkResult.updateAppMessageShareData) {
                            wx.updateAppMessageShareData({
                                ...shareData, 
                                desc: '聆听文化之妙，感受旅行之美，欢迎使用青川智能语音导游！', // 分享描述
                                success: function() {
                                    // 分享到QQ或朋友设置成功
                                }
                            });
                        }
                        if (res.checkResult.updateTimelineShareData) {
                            wx.updateTimelineShareData({
                                ...shareData, 
                                success: function() {
                                    // 分享到QQ空间或朋友圈设置成功
                                }
                            });
                        }
                    }
                }
            });
            
        });
        wx.miniProgram.getEnv(function (res) {
            if (res.miniprogram) {
                _store.commit('checkEnv', 'miniprogram');
            } else {
                _store.commit('checkEnv', 'browser');
            }
        });
    }
}).$mount('#app');

export default vm;