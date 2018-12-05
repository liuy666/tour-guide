<style lang="less">
    #home{
        width: 100%;
        height: 100%;
        position: relative;
        #wrapper_home{
            width: 100%;
            height: 100%;
            .marker-icon{
                width: 88px;
                height: 96px;
                margin-left: -44px;
                margin-top: -96px;
            }
            .marker-content-new{
                width: auto !important;
                height: auto !important;
                margin-left: -33px !important;
                margin-top: -70px !important;
                .icon{
                    width: 66px;
                    height: 73px;
                    background: url("../assets/images/icon_scenic_home@3x.png") no-repeat center center / 100% 100%;
                }
                .name{
                    white-space: nowrap;
                    position: absolute;
                    padding: 10px 20px;
                    background: url("../assets/images/icon_bg@3x.png") no-repeat center center / 100% 100%;
                    font-weight: bold;
                    color: #572b12;
                    transform: translateX(-50%);
                    margin-left: 33px;
                    text-align: center;
                    font-size: 24px;
                }
            }
            .leaflet-popup-content-wrapper{
                padding: 0;
            }
            .leaflet-popup-content{
                margin: 0;
            }
            .leaflet-popup-tip{
                width: 26px;
                height: 26px;
            }
            .leaflet-popup-content{
                width: auto !important;
            }
        }
        // 消息提示弹窗样式
        .vux-toast .weui-icon_toast {
            margin-top: 30px;
        }
        .vux-toast .weui-toast {
            top: @toast-top;
            width: 228px;
        }
        .weui-icon-success-no-circle:before {
            font-size: 100px;
            content: '\EA0D';
        }
        .weui-toast__content {
            margin-top: 20px;
        }

        .msg-70-70 {
            width: 70px;
            height: 70px;
            position: absolute;
            z-index: 1001;
            top: 21px;
            left: 24px;
        }
        .has {
            background: url("../assets/images/icon_news@3x.png") no-repeat center center / 70px 70px;
        }
        .no {
            background: url("../assets/images/icon_news_no@3x.png") no-repeat center center / 70px 70px;
        }
    } 
</style>

<template>
    <div id="home">
        <section id="wrapper_home"></section>
        <v-touch tag="section" class="msg-70-70" :class="[isHasMsg ? 'has' : 'no']" v-on:tap="gotoMsgList"></v-touch> 
        <toast v-model="isTips" type="cancel" :text="tipsText" :is-show-mask="true"></toast>
    </div>
</template>

<script>
    import { Toast } from 'vux';
    export default {
        components: {
            Toast
        },
        async created() {
            const getMsgList = await this.$http.get(this.$base + '/hqyatu-navigator/app/hqarticle/list', {
                domainUrl: 'www.qxgz.com', // 上线改成获取域名
                limit: 500
            });
            if (!getMsgList || !getMsgList.page || !getMsgList.page.list || !getMsgList.page.list.length) {
                this.$router.replace({
                    name: 'not-found'
                });
                return;
            }
            const validList = getMsgList.page.list.filter(item => {
                // 处理当天时间,获取失效时间和今天之间的间隔时间
                const today1 = this.$tool.formatDate(new Date()), // 格式化当天时间，舍去时分秒
                      today2 = new Date(today1 + 'T00:00:00'), // 重新转成日期标准格式
                      today3 = today2.getTime(), // 得到具体毫秒值
                      interval = item.passDate - today3 ;
                return interval >= 0;
            });
            if (validList.length) {
                this.isHasMsg = true;
            } else {
                this.isHasMsg = false;
            }
        },
        mounted() {
            const _self  = this;
            //获取屏幕大小 动态设置不同手机的地图zoom
            const containerWidth = document.querySelector('#wrapper_home').clientWidth;
            const containerHeight = document.querySelector('#wrapper_home').clientHeight; 
            let zoom = 9; //地图缩放
            if(containerWidth > 600){
                zoom = 10;
            }
            if(containerWidth > 800){
                zoom = 11;
            }
            this.bl = parseFloat((containerWidth/375).toFixed(2));
            
            //地图
            let oMap = L.map("wrapper_home", {
                center: [32.526044, 105.019557],
                zoom: zoom,
                minZoom: zoom,
                maxZoom: 18,
                attributionControl: false,
                zoomControl: false,
                maxBounds : [[31.459197, 104.49496], [33.573508, 105.725429]],
                maxBoundsViscosity : 0.8
            });
            let imageUrl = './qcx.jpg',
            imageBounds = [[31.459197, 104.49496], [33.573508, 105.725429]];    
            L.imageOverlay(imageUrl, imageBounds).addTo(oMap);
            this.oMap_home = oMap;
            this.getScenicList();
        },
        data () {
            return {
                oMap_home : {},
                oInfoWindow : {},
                isTips : false,
                tipsText : '请求失败',
                isHasMsg: false,
                bl: 0,
                currentInfo: null,
                scenicList: [],
                hh: ''
            }
        },
        methods: {
            async getScenicList () {
                let _self = this;
                const scenicList = await this.$http.get(this.$base + '/hqyatu-navigator/app/scenery/list', {
                    domainUrl: 'www.qxgz.com'
                });
                if(!scenicList){
                    this.isTips = true;
                    return;
                }
                if(scenicList.data && scenicList.data.length && scenicList.data.length>0){
                    sessionStorage.setItem('scenicList',JSON.stringify(scenicList.data));
                    scenicList.data.forEach((v,i) => {
                        let myIcon = L.divIcon({
                                        html:'<div data-id="'+v.scenery_id+'"><div class="icon"></div><div class="name">'+v.name+'</div></div>',
                                        className: 'marker-content-new',
                                        popupAnchor: [0, -(35*this.bl)]
                                    });
                        let marker = L.marker([v.latitude, v.longitude], {icon: myIcon}).addTo(this.oMap_home)
                                     .bindPopup(_self.createInfoWindow(v),{className:"info-content-new"})
                                     .on('click',function(){
                                         _self.currentInfo = {...v};
                                     });
                    })
                }
            },
            createInfoWindow(scenicInfo) { 

                var info = document.createElement("div");
                info.className = "info-contanir";

                var middle = document.createElement("div");
                middle.className = "info-content";

                var htmlStr = ` <div class='info-scenic-img-area'><img style="width:100%;height:100%;border-radius:100%;" src='${scenicInfo.accessCoverUrl}' /></div>
                                <div class='info-scenic-info'>
                                    <div class='info-scenic-name'>${scenicInfo.name}</div>
                                    <div class='info-scenic-dec'>${scenicInfo.introduce}</div>

                                </div>`
                middle.innerHTML = htmlStr;

                info.appendChild(middle);

                var btnArea = document.createElement('div');
                btnArea.className = "info-scenic-btns";

                var btn1 = document.createElement('button');
                btn1.className = "toScenic";
                btn1.onclick = this.toScenic;
                btnArea.appendChild(btn1);

                info.appendChild(btnArea);
                return info;
            },
            toScenic() {
                // 如果景区列表存在 则提前临时保存
                if (sessionStorage.getItem('scenicList')) {
                    this.scenicList = JSON.parse(sessionStorage.getItem('scenicList'));
                }

                // 清空所有缓存
                sessionStorage.clear();

                // 如果之前临时保存有景区列表 则再存入缓存
                if (this.scenicList.length) {
                    sessionStorage.setItem('scenicList',JSON.stringify(this.scenicList));
                }

                // 更新当前景区信息
                sessionStorage.setItem('currentScenic',JSON.stringify(this.currentInfo));
                this.$router.push({
                    path : '/main'
                })
            },
            gotoMsgList() {
                this.$router.push({
                    path: '/message-list'
                });
            }
        }
    }
</script>
