<style lang="less">
    // 天气预报滚动动画
    @keyframes rollup {
        0% {
            transform: translateY(0px);
        }
        100% {
            transform: translateY(-160px);
        }
    }
    #main {
        height:100%;
        width: 100%;
        position: relative;

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

        // loading层弹窗样式
        .weui-loading_toast .weui-toast {
            top: @toast-top;
            height: 170px;
            width: 228px;
            i {
                width: 60px;
                height: 60px;
                margin-top: 55px;
            }
        }
        #wrapper {
            width: 100%;
            height: 100%;
        }
        //菜单弹窗
        .main_view {
            width: 732px;
            height: 733px;
            z-index: 1002;
            background: url("../assets/images/bg@3x.png") no-repeat center center / 100% 100%;
            position: absolute;
            bottom: 20.233vw;
            left: calc(~"50% - 366px");
            .main_view_wrapper {
                width: 710px;
                height: 714px;
                margin: 10px 0 0 11px;
                .main_view_header {
                    height: 120px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    position: relative;
                    box-sizing: border-box;
                    padding-left: 169px;
                    p {
                        font-size:32px;
                        font-weight:500;
                        line-height:34px;
                        margin-top: 41px;
                    }
                    .camera {
                        width: 122px;
                        height: 142px;
                        background: url("../assets/images/icon_ai@3x.png") no-repeat center center / 100% 100%;
                        position: absolute;
                        left: 32px;
                        top: -37px;
                    }
                    .weather {
                        width: 191px;
                        margin-right: 29px;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        .img-box {
                            width: 80px;
                            height: 80px;
                            margin-top: 24px;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .content {
                            height: 80px;
                            font-weight: 500;
                            display: flex;
                            flex-direction: column;
                            margin-top: 31px;
                            overflow: hidden;
                            span {
                                font-size: 24px;
                                line-height: 41px;
                                animation: rollup 8s linear 1s  infinite;
                            }
                        }
                    }
                }
                ul.main_view_footer {
                    height: 100px;
                    overflow-x: auto;
                    -webkit-overflow-scrolling : touch; 
                    display: flex;
                    flex-direction: row;
                    box-sizing: border-box;
                    margin: 0 29px 0 30px;
                    border-top: 1px solid #f8f8f8;
                    li {
                        margin-right: 10px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        text-align: center;
                        &:last-of-type {
                            margin-left: 0;
                        }
                        div {
                            width: 42px;
                            height: 42px;
                            margin: 0 27px 5px;
                            img {
                                width:100%;
                                height:100%;
                            }
                        }
                        span {
                            font-size: 24px;
                            line-height: 32px;
                            width: 96px;
                        }
                    }
                }
            }
        }
        //底部景点播放
        .toolbars {
            display: flex;
            position: absolute;
            left: 0;
            right: 0;
            margin: 0 auto;
            bottom: 30px;
            width: 520px;
            height: 148px;
            z-index: 1001;
            box-sizing: border-box;
            background: url("../assets/images/bg_player@3x.png") no-repeat center / 100% 100%;

            .vux-circle-content{
                height: 100%;
                box-sizing: border-box;
            }
            .player-control-btn-area{
                width: 124px;
                height: 124px;
                position: relative;
                margin-top: 12px;
                margin-left: 12px;
                .player-img-area{
                    width: 112px;
                    height: 112px;
                    margin-top: 6px;
                    margin-left: 6px;
                    position: relative;
                    .wrap {
                        width: 112px;
                        height: 112px;
                        position: absolute;
                        left: 0;
                        top: 0;
                        .control {
                            position: absolute;
                            left: 50%;
                            top: 50%; 
                            overflow: hidden;
                            img {
                                float: left;
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .img-16-26 {
                            width: 16px;
                            height: 26px;
                            transform: translate(-8px, -13px);
                        }
                        .img-20-24 {
                            width: 20px;
                            height: 24px;
                            transform: translate(-10px, -12px);
                        }
                    }
                }
                .player-control-btn{
                    position: absolute;
                }
            }
            .scenic-point-name-area{
                width: 270px;
                height: 100px;
                line-height: 100px;
                padding: 0 0 0 10px;
                text-align: center;
                margin-top: 24px;
                background: url('../assets/images/icon_down@3x.png') no-repeat 50% 80px;
                background-size: 24px 8px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                box-sizing: border-box;
            }
            .list-btn{
                width: 44px;
                height: 100px;
                padding: 0 14px;
                margin-top: 24px;
                background: url('../assets/images/icon_list@3x.png') no-repeat center center / 32px 26px;
            }
        }
        //地图页功能键区域
        .function-area-left,.function-area-right{
            position: absolute;
            width: 70px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            z-index: 1001;
        }
        .function-area-right{
            height: 250px;
            top: 26px;
            right: 30px;
        }
        .function-area-left{
            height: 160px;
            left: 30px;
            bottom: 186px;
        }
        .function-btn{
            width: 70px;
            height: 70px;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 100% 100%;
            &.FK{ // 反馈图片
                background-image: url('../assets/images/icon_feedback@3x.png');
            }
            &.DW{
                background-image: url('../assets/images/icon_static@3x.png');
            }
            &.JJ{ // 简介图片
                background-image: url('../assets/images/icon_intro@3x.png');
            }
            &.QJ{ // 全景图片
                background-image: url('../assets/images/icon_panorama@3x.png');
            }
            &.ZD{ // 自动图片
                background-image: url('../assets/images/icon_auto@3x.png');
                &.NO{
                    background-image: url('../assets/images/icon_auto_no@3x.png');
                }
            }
        }
        .marker-content-new{
            width: auto !important;
            height: auto !important;
            margin-left: -61px !important;
            margin-top: -90px !important;
            .icon{
                width: 122px;
                height: 73.3px;
                &.type-point{
                    background: url("../assets/images/icon_use_normal@3x.png") no-repeat center / auto 100%;
                }
                &.type-buy{
                    background: url("../assets/images/icon_gowu@3x.png") no-repeat center / auto 100%;
                }
                &.type-eat{
                    background: url("../assets/images/icon_to_food@3x.png") no-repeat center / auto 100%;
                }
                &.type-door{
                    background: url("../assets/images/icon_to_exit@3x.png") no-repeat center / auto 100%;
                }
                &.type-wc{
                    background: url("../assets/images/icon_to_wc@3x.png") no-repeat center / auto 100%;
                }
                &.type-park{
                    background: url("../assets/images/icon_to_shop@3x.png") no-repeat center / auto 100%;
                }
                &.type-hotel{
                    background: url("../assets/images/icon_to_hotel@3x.png") no-repeat center / auto 100%;
                }
                &.type-center{
                    background: url("../assets/images/icon_to_centre@3x.png") no-repeat center / auto 100%;
                }
                &.type-hospital{
                    background: url("../assets/images/icon_to_doctor@3x.png") no-repeat center / auto 100%;
                }
                &.player{
                    background: url("../assets/images/playing.gif") no-repeat center / auto 100%;
                }
            }
            .name{
                white-space: nowrap;
                border-radius: 30px;
                padding: 0px 20px;
                background: rgba(0,0,0,0.5);
                color: #ffffff;
                position: absolute;
                display: block;
                margin-left: 61px;
                text-align: center;
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            }
        }
        .point-serial{
            width: 30px !important;
            height: 30px !important;
            margin-left: 20px !important;
            margin-top: -46px !important;
            background: #68A8FC;
            color: #fff;
            line-height: 34px;
            text-align: center;
            border-radius: 15px;
        }
        .info-content-new{
            // bottom: 70px !important;
        }
        .leaflet-popup-content-wrapper{
            padding: 0;
            border-radius: 20px;
        }
        .leaflet-popup-content{
            margin: 0;
        }
        .leaflet-popup-tip{
            width: 26px;
            height: 26px;
        }
        // 景区简介弹窗样式
        .introDetail{
            position: absolute;
            z-index: 1001;
            left: 30px;
            bottom: 0;
            background: #fff;
            width: 690px;
            padding: 20px 30px;
            border-radius: 10px 10px 0 0 ;
            box-sizing: border-box;
            .scenic-detail-header{
                display: flex;
                .scenic-img{
                    width: 220px;
                    height: 220px;
                    margin-top: -100px;
                }
                .scenic-name-level{
                    width: 360px;
                    margin-left: 22px;
                    .scenic-name{
                        font-size: 36px;
                        font-weight: bold;
                    }
                    .scenic-level{
                        display: inline-block;
                        padding: 12px 10px 8px 10px;
                        line-height: 22px;
                        border-radius: 20px;
                        border: 1px solid #FEA32B;
                        color: #FEA32B;
                        font-size: 24px;
                        margin-top: 16px;
                    }
                }
                .close-btn{
                    width: 34px;
                    height: 34px;
                    position: absolute;
                    right: 10px;
                    top: 10px;
                    background: url('../assets/images/icon_close_black@2x.png') no-repeat center center / 100% 100%;
                }
            }
            .scenic-address-time{
                padding: 40px 0 30px;
                font-size: 30px;
                line-height: 44px;
                border-bottom: 1px solid dashed #FE5100; 
                margin-bottom: 20px;
                .scenic-address{
                    text-indent: 44px;
                    background: url('../assets/images/icon_black_site@3x.png') no-repeat left top;
                    background-size: 32px 40px;
                    position: relative;
                    .font-color-666{
                        background: url('../assets/images/icon_map_more@3x.png') no-repeat right center;
                        background-size: 16px 28px;
                        padding-right: 20px;
                        position: absolute;
                        right: 0;
                        top: 2px;
                        box-sizing: border-box;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        width: calc(~'100% - 160px');
                    }
                }
                .scenic-time{
                    text-indent: 44px;
                    background: url('../assets/images/icon_black_time@3x.png') no-repeat left center;
                    background-size: 32px 32px;
                    margin-top: 20px;
                }
            }
            .dec-title{
                text-indent: 24px;
                font-size: 30px;
                padding: 20px 0;
                background: url('../assets/images/kuai@3x.png') no-repeat left center;
                background-size: 10px 30px;
                line-height: 30px;
            }
            .scenic-dec {
                overflow: hidden;
                .dec-content{
                    font-size: 28px;
                    line-height: 36px;
                    margin-bottom: 40px;
                    overflow: hidden;
                    word-break: break-all;
                    overflow: hidden;
                    max-height: 540px;
                }
            }
        }
    }
</style>

<template>
    <div id="main">
        <section id="map_test"></section>
        <!-- 网络请求loading层 -->
        <loading :show="isShowLoading" :text="loadText" position="absolute"></loading>
        <!-- 地图容器 -->
        <section id="wrapper"></section>
        <!-- 图标菜单弹窗 -->
        <section class="main_view " v-show="isShowMenu">
            <section class="main_view_wrapper">
                <section class="main_view_header">
                    <v-touch tag="section" class="camera" v-on:tap="gotoPage({name: 'recognize'})"></v-touch>
                    <p>遇见全世界的美</p>
                    <section class="weather">
                        <section class="content">
                            <span>{{ temp }}</span>
                            <span>{{ weather }}</span>
                            <span>空气指数</span>
                            <span>{{ AQI }}</span>
                            <span>{{ temp }}</span>
                            <span>{{ weather }}</span>
                            <span>空气指数</span>
                            <span>{{ AQI }}</span>
                        </section>
                        <section>
                            <section class="img-box"><img :src="weatherImg" alt="加载中..." /></section>
                        </section>
                    </section>
                </section>
                <router-view></router-view>
                <ul class="main_view_footer">
                    <v-touch tag="li" v-for="menu in menuList" :key="menu.id" :data-mark="menu.paramKey" v-on:tap="gotoWhere(menu.paramKey, menu.paramValue)">
                        <div>
                            <img :src="menu.graySrc" alt="" />
                        </div>
                        <span>{{ menu.name }}</span>
                    </v-touch>
                </ul>
            </section>
        </section>
        <!-- 图标菜单 -->
        <section class="toolbars">
            <div class="player-control-btn-area">
                <x-circle
                    :percent="audioPercent"
                    :stroke-width="2"
                    :trail-width="6"
                    :stroke-color="'#FE5100'"
                    trail-color="#ffffff">
                    <div class="player-img-area">
                        <img style="width:100%; height:100%; border-radius: 50%;" :src="scenicPointImg" />
                        <!-- 播放图标-暂停中状态 -->
                        <v-touch class="wrap" v-show="!isPlayed" v-on:tap="playAudio({_type: 1})">
                            <div class="control img-16-26">
                                <img src="../assets/images/icon_small_pause@3x.png" alt="" />
                            </div>
                        </v-touch>
                            <!-- 暂停图标-播放中状态 -->
                        <v-touch class="wrap" v-show="isPlayed" v-on:tap="pauseAudio">
                            <div class="control img-20-24">
                                <img src="../assets/images/icon_suspend@3x.png" alt="" />
                            </div>
                        </v-touch>
                    </div>
                </x-circle>
            </div>
            <v-touch class="scenic-point-name-area" v-on:tap="toDetail">
                {{scenicPointName}}
            </v-touch>
            <v-touch class="list-btn" v-on:tap="openMenu" ></v-touch>
        </section>
        <!-- 左侧反馈功能图标 -->
        <section class="function-area-left">
            <v-touch class="function-btn FK" v-on:tap="gotoPage({name: 'feedback'})"></v-touch>
            <v-touch class="function-btn DW" v-on:tap="getCurrentPosition"></v-touch>
        </section>
        <!-- 右侧简介/全景/自动功能图标 -->
        <section class="function-area-right">
            <v-touch tag="section" class="function-btn JJ" v-on:tap="seeIntroduce"></v-touch>
            <v-touch tag="section" class="function-btn QJ" v-on:tap="gotoPage({name: 'full-view', needGetSrc: true})"></v-touch>
            <v-touch tag="section" class="function-btn ZD" v-on:tap="changeAuto" :class="isAuto ? '' : 'NO'"></v-touch>
        </section>
        <!-- 底部景区简介弹窗 -->
        <section v-show="isOpenDetail" class="introDetail">
            <div class="scenic-detail-header">
                <div class="scenic-img"><img style="width:100%;height:100%;border-radius:100%;" :src="scenicImg"/></div>
                <div class="scenic-name-level">
                    <div class="scenic-name">{{scenicName}}</div>
                    <span class="scenic-level">{{scenicLevel+"级风景区"}}</span>
                </div>
                <v-touch class="close-btn" v-on:tap="seeIntroduce"></v-touch>
            </div>
            <div class="scenic-address-time">
                <div class="scenic-address">
                    景区地址：
                    <a class="font-color-666" style="text-decoration: none; color:#333;" :href="'https://uri.amap.com/search?keyword=' + scenicAddress + '&city=' + region + '&view=map&src=test&coordinate=gaode&callnative=1'">{{scenicAddress}}</a>
                </div>
                <div class="scenic-time">
                    开放时间： <span class="font-color-666">{{scenicOpenTime}}</span>
                </div>
            </div>
            <div class="scenic-dec">
                <div class="dec-title">景区介绍</div>
                <!-- 最大限制字数340 -->
                <div class="dec-content font-color-888">{{scenicDec}}</div>
            </div>
           
        </section>
        <!-- 记录当前经纬度临时框（开发测试用） -->
        <!-- <section style="position:absolute; left:0; bottom:0; z-index:1001;">
            <input v-model="longlati" class="currentPosition"  />
        </section> -->
        <!-- 提示弹窗 -->
        <toast v-model="isTips" type="cancel" :text="tipsText" :is-show-mask="true"></toast>
    </div>
</template>

<script>
    import LC from 'leaflet.chinatmsproviders';
    import { XButton, Icon, XCircle, Toast, Loading } from 'vux';
    import { mapActions, mapMutations, mapState } from 'vuex';
    export default {
        components: {
            XButton,
            Icon,
            XCircle,
            Toast,
            Loading
        },
        // 导航离开该组件的对应路由时调用 可以访问组件实例 `this`
        beforeRouteLeave(to, from, next){
            this.$store.commit('setFromRouteName_detail', to.name);
            next();
        },
        // 在当前路由改变，但是该组件被复用时调用 可以访问组件实例 `this`
        beforeRouteUpdate (to, from, next) { 
            next();
        },
        created() {
            if(this.timer){
                clearInterval(this.timer);
            }
        },
        async mounted() {
            const query = this.$route.query;
            let scenicInfo = null;

            // 扫码进入页面,先获取该域名下的景区列表,并根据获取的景区id获取景区详情
            if (query.sid) {
                const scenicList = await this.$http.get(this.$base + '/hqyatu-navigator/app/scenery/list', {
                    domainUrl: 'www.qxgz.com'
                });
                if (!scenicList) {
                    this.tipsText = "请求失败";
                    this.isTips = true;
                    return;
                }
                let currentScenic = scenicList.data.filter(item => item.scenery_id === query.sid)[0];
                sessionStorage.setItem('currentScenic',JSON.stringify(currentScenic));
                scenicInfo = {
                    ...currentScenic
                }
            } else {
                //处理获取到的要用到的景区信息  景区手绘图路径、景区手绘图两点坐标、景区zoom、地图中心点
                scenicInfo = JSON.parse(sessionStorage.getItem("currentScenic"));
            }
            
            // 初始化底部景区简介弹窗
            this.scenicImg = scenicInfo.accessCoverUrl;
            this.scenicName = scenicInfo.name;
            this.scenicLevel = scenicInfo.level;
            this.scenicAddress = scenicInfo.address;
            this.region = Number(String(scenicInfo.region).slice(1));
            this.scenicOpenTime = scenicInfo.opening_time;
            this.scenicDec = scenicInfo.introduce;
            // 存储景区id
            this.sceneryId = scenicInfo.scenery_id;

            // 获取地图初始化信息
            const scenicBgImg = './dhk.jpg', // 图片图层
                  imgRightTop = [scenicInfo.northeast_lng,scenicInfo.northeast_lat], // 地图右上角
                  imgLeftBottom = [scenicInfo.southwest_lng,scenicInfo.southwest_lat], // 地图左下角
                  imgRightTop1 = [scenicInfo.northeast_lat,scenicInfo.northeast_lng], // 地图右上角
                  imgLeftBottom1 = [scenicInfo.southwest_lat,scenicInfo.southwest_lng], // 地图左下角
                  mapZoom = scenicInfo.zoom, // 地图zoom
                  centerPoint = [scenicInfo.center_lat,scenicInfo.center_lng]; // 地图显示范围中心点
         
            // 获取屏幕大小 动态设置不同手机的地图zoom
            const containerWidth = document.querySelector('#wrapper').clientWidth;
            const containerHeight = document.querySelector('#wrapper').clientHeight;

            this.bl = parseFloat((containerWidth/375).toFixed(2));
            
            // 地图缩放
            let zoom = 0,
                maxZoom = 0; 
            if (containerHeight < 600) {
                zoom = mapZoom;
            } else if (containerHeight < 700) {
                zoom = mapZoom + 0.2;
            } else if (containerHeight < 800) {
                zoom = mapZoom + 0.4;
            } else if (containerHeight < 900) {
                zoom = mapZoom + 0.5;
            } else if (containerWidth > 500 && containerWidth < 800) {
                zoom = mapZoom + 0.9;
            } else if (containerWidth > 800) {
                zoom = mapZoom + 1.3;
            }
            maxZoom = zoom+2;
            if (zoom > 17) maxZoom = 19;
            if (zoom > 19) zoom = 19;
            
            let _self = this;

            let map_test = new AMap.Map('map_test', {
                showBuildingBlock: true,
                pitchEnable: false,
                buildingAnimation: true,
                rotateEnable: false,
                touchZoomCenter: 1,
                center: centerPoint,
                zoom: 10,
                zooms:[10,14],
                layers: [
                    new AMap.TileLayer()
                ]
            });

            // 获取当前地图定位
            var options = {
                'showButton': true,//是否显示定位按钮
                'buttonPosition': 'LB',//定位按钮的位置
                'buttonOffset': new AMap.Pixel(15, 23),//定位按钮距离对应角落的距离
                'showMarker': true,//是否显示定位点
                'markerOptions':{//自定义定位点样式，同Marker的Options
                    'offset': new AMap.Pixel(-18, -36),
                    'content':'<img src="https://a.amap.com/jsapi_demos/static/resource/img/user.png" style="width:36px;height:36px"/>'
                },
                'showCircle': true,//是否显示定位精度圈
                'circleOptions': {//定位精度圈的样式
                    'strokeColor': '#0093FF',
                    'noSelect': true,
                    'strokeOpacity': 0.5,
                    'strokeWeight': 1,
                    'fillColor': '#02B0FF',
                    'fillOpacity': 0.25
                },
                'panToLocation':false
            }
            AMap.plugin(["AMap.Geolocation"], function() {
                var geolocation = new AMap.Geolocation(options);
                _self.geolocation = geolocation;
                map_test.addControl(geolocation);
                //geolocation.getCurrentPosition()
                geolocation.on('complete',function(GeolocationResult) {
                    let cp = GeolocationResult.position;
                    if(cp.lat >= imgLeftBottom.lat && cp.lat <= imgRightTop.lat && cp.lng >= imgLeftBottom.lng && cp.lng <= imgRightTop.lng){
                        _self.oMap_main.setCenter(cp);
                    }else{
                        _self.isTips = true;
                        _self.tipsText = "您当前不在景区范围内";
                    }
                    //document.querySelector(".currentPosition").value = GeolocationResult.position;
                })
                geolocation.on('error',function(){
                    _self.isTips = true;
                    _self.tipsText = "定位失败";
                })
            });

            
            // 实例化地图
            let oMap = L.map("wrapper", {
                center: centerPoint,//centerPoint,[30.5829110000,104.0637260000]
                zoom: 17,
                minZoom: 17,
                maxZoom: 19,
                attributionControl: false,
                zoomControl: false,
                closePopupOnClick:false,
                maxBounds : [imgLeftBottom1, imgRightTop1],
                maxBoundsViscosity : 0.8
            });
            // L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
            //     maxZoom: 19,
            //     minZoom: 17
            // }).addTo(oMap);
            
            L.imageOverlay('./dhk.jpg', [imgLeftBottom1,imgRightTop1]).addTo(oMap);
            this.oMap_main = oMap;

            oMap.on('click',function(e) {
                //console.log(e.latlng);
                _self.$router.push({
                    name: 'main'
                });
                _self.isShowMenu = false;
                _self.isOpenDetail = false;
            })
            // 获取默认景点列表
            this.getScenicPointList({
                resourceType: 1,
                query
            });

            // 初始化图标菜单
            this.initMenu();
        },
        data () {
            return {
                bl:0,//当前屏幕大小与375的比例 用于动态设置信息弹窗的偏移
                geolocation:{},//定位对象
                longlati: '', // 当前定位经纬度坐标
                sceneryId: '', // 当前景区id
                scenicImg: '', // 景区简介弹窗--图片
                scenicName: '', // 景区简介弹窗--景区名称
                scenicLevel: '', // 景区简介弹窗--景区等级
                scenicAddress: '', // 景区简介弹窗--地址
                scenicOpenTime: '', // 景区简介弹窗--开放时间
                scenicDec: '', // 景区简介弹窗--描述
                oMap_main: {}, // 地图实例化对象
                line: {}, // 路线
                resourceType: 1, // 景区资源类型 默认 1 -- 景点
                isTips: false,
                tipsText: '请求失败',
                isShowMenu: false,
                isOpenDetail: false,
                isAuto: false, // 是否自动播放
                audioPercent: 0,
                scenicPointImg: '', // 播放栏--景点图片
                scenicPointName: '', // 播放栏--景点名称
                scenicPointId:'', // 播放栏--景点Id
                mapClickPointId:'',
                menuList: [],
                loadText: '',
                isShowLoading: false,
                isPlayed: false,
                timer: '',
                totalTime: '',
                currentScenicId: '',
                markers: [],
                markers_line:[],
                temp: '',
                AQI: '',
                weather: '',
                weatherImg: '',
                typeList : [ // 地图画点类型
                    {
                        type:1,
                        className:'type-point'
                    },{
                        type:3,
                        className:'type-buy'
                    },{
                        type:4,
                        className:'type-eat'
                    },{
                        type:5,
                        className:'type-door'
                    },{
                        type:6,
                        className:'type-wc'
                    },{
                        type:7,
                        className:'type-park'
                    },{
                        type:8,
                        className:'type-hotel'
                    },{
                        type:9,
                        className:'type-center'
                    },{
                        type:10,
                        className:'type-hospital'
                    }
                ],
                defaultImgList : [ // 地图画点默认图片列表
                    '/bg_scenic@3x.png',
                    '/bg_select@3x.png',
                    '/bg_shop@3x.png',
                    '/bg_food@3x.png',
                    '/bg_exit@3x.png',
                    '/bg_toilet@3x.png',
                    '/bg_stop@3x.png',
                    '/bg_hotel@3x.png',
                    '/bg_centre@3x.png',
                    '/bg_doctor@3x.png'
                ],
                region: '', // 景点所属地区
                indexOfMarkers : 0
            }
        },
        computed: mapState({
            watchPause: state => state.app.pauseStatus, // 监听景点列表的暂停
            watchLine: state => state.app.lineStatus // 监听取消路线选择
        }),
        watch: {
            watchPause(val) {
                this.pauseAudio();
            },
            watchLine(val) {
                // 清除当前路线
                this.removeMarker(2);
                this.line.remove();
            },
            // 播放进度监听
            audioPercent(val) {
                if (val >= 100) {
                    const au = document.querySelector('.main-audio');
                    clearInterval(this.timer);
                    this.changeMapIcon(false);
                    this.oMap_main.closePopup();
                    if (!au.paused || !au.ended) {
                        au.pause();
                    }
                    this.audioPercent = 0;
                    this.timer = '';
                    let currentId = au.dataset.id;
                    const currentAudioContainer = document.querySelector('.toolbars');
                    currentAudioContainer.removeChild(au);
                    sessionStorage.setItem('playStatus', JSON.stringify({isPauseStatus: true}));
                    this.playEnd(); // 同步通知景点列表更改状态--假如景点列表当前未打开?待测试
                    this.isPlayed = false;

                    // 如果开启了自动连播
                    if (this.isAuto) {
                        let next = this.getNext(currentId);
                        if (next) {
                            this.scenicPointImg = next.nextPoint.url;
                            this.scenicPointName = next.nextPoint.name;
                            this.scenicPointId = next.nextPoint.resource_id;
                            sessionStorage.setItem('currentPoint',JSON.stringify(next.nextPoint));
                            this.autoPlay(); // 同步通知景点列表更改状态--假如景点列表当前未打开?待测试
                            this.playAudio({
                                _src: next.nextPlay.aSrc,
                                _id: next.nextPlay.aId,
                                _type: 3
                            });
                        } else { // 表明播放列表已播完，则更改播放状态
                            sessionStorage.setItem('playStatus', JSON.stringify({isPauseStatus: true}));
                            this.playEnd(); // 同步通知景点列表更改状态--假如景点列表当前未打开?待测试
                        }
                    }
                }
            },
            '$route'(to, from) {
                // 关闭菜单并展开对应信息窗体
                if (from.name === 'scenic-spot' && to.name === 'main' && to.params.pid) {
                    const currentPoint = JSON.parse(sessionStorage.getItem('currentPoint'));
                    this.scenicPointImg = currentPoint.url;
                    this.scenicPointName = currentPoint.name;
                    this.scenicPointId = currentPoint.resource_id;
    
                    this.getMarkerIndex(to.params.pid);
                    this.markers[this.indexOfMarkers].openPopup();
                    
                    this.playAudio({
                        _src: currentPoint.guideUrl,
                        _id: to.params.pid,
                        _type: 3
                    });
                    this.isShowMenu = false;
                }
                if (from.name === 'scenic-resource' && to.name === 'main' && to.params.rid) {
                    this.getMarkerIndex(to.params.rid);
                    this.markers[this.indexOfMarkers].openPopup();
                    this.isShowMenu = false;
                }
                if(from.name == "scenic-line" && to.name == "main" && to.params.lineId){
                    this.drawLine(to.params.lineId);
                    this.isShowMenu = false;
                }
            }
        },    
        methods: {
            updateLocation(position) { 
                var latitude = position.coords.latitude; 
                var longitude = position.coords.longitude; 
                var accuracy = position.coords.accuracy; 

                alert("jingweidu:" +latitude + longitude )
                // document.getElementById("“纬度”").innerHTML = latitude; 
                // document.getElementById("“经度”").innerHTML = longitude; 
                // document.getElementById("“准确度”").innerHTML = accuracy + "米"; 
            },

            handleLocationError(error) {  
                alert("1111");
                switch (error.code) { 
                case 0: 
                    console.log("“尝试获取您的位置信息时发生错误：”" + error.message); 
                    break; 
                case 1: 
                    console.log("“用户拒绝了获取位置信息请求。”"); 
                    break; 
                case 2: 
                    console.log("“浏览器无法获取您的位置信息。”"); 
                    break; 
                case 3: 
                    console.log("“获取您位置信息超时。”"); 
                    break; 
                } 
            },

            getCurrentPosition() { 
                this.geolocation.getCurrentPosition()
                // console.dir(L)
                // return
                // this.oMap_main.locate({
                //     setView: true,
                //     maxZoom: 19,
                //     timeout:50000
                // })
                // this.oMap_main.on('locationfound', function(e) {
                //     alert("cg")
                //     var radius = e.accuracy / 2;
                //     L.marker(e.latlng).addTo(this.oMap_main).bindPopup("你就在这个圈内");
                //     L.circle(e.latlng, radius).addTo(this.oMap_main);
                // });
                // this.oMap_main.on('locationerror', function(e) { 
                //     alert('2222')
                //     console.log('定位出错=====>', e);
                // });

                // var myOptions = {
                //     enableHighAccuracy: true,
                //     timeout: 30000,
                //     maximumAge: 0
                // };
                // navigator.geolocation.getCurrentPosition(this.updateLocation, this.handleLocationError, myOptions);
            },
            // 获取下一个播放链接
            getNext(currentId) {
                const playList = JSON.parse(sessionStorage.getItem('playList'));
                const index = playList.findIndex(item => item.aId === currentId);

                if (index + 1 === playList.length) { // 如果上一个播放的已经是最后一个
                    return false;
                } else {
                    const pointList = JSON.parse(sessionStorage.getItem('pointList'));
                    let nextPoint = pointList.filter(item => item.resource_id === playList[index + 1].aId)[0];
                    return {
                        nextPlay: playList[index + 1],
                        nextPoint: nextPoint
                    }
                }
            },
            // 初始化图标菜单
            async initMenu() {
                this.isShowLoading = true;

                // 获取当前景区经纬度
                const getCoordinate = JSON.parse(sessionStorage.getItem('currentScenic'));

                // 获取 menu 菜单列表 获取天气
                const getListAndWheather = await this.$http.all([
                    {
                        type: 'get',
                        url: this.$base + '/hqyatu-navigator/app/resource/getSelectMenue',
                        urlParams: {
                            sceneryId: this.sceneryId
                        }
                    },
                    {
                        type: 'get',
                        url: this.$base + '/hqyatu-navigator/app/weather/getWeatherData',
                        urlParams: {
                            longitude: getCoordinate.longitude,
                            latitude: getCoordinate.latitude
                        }
                    }
                ]);

                // console.log(getListAndWheather);
                if (!getListAndWheather) {
                    this.isShowLoading = false;
                    return;
                }

                // 初始化天气
                this.temp = getListAndWheather[1].data.temperature;
                this.AQI = getListAndWheather[1].data.airIndex;
                this.weather = getListAndWheather[1].data.skycon;
                this.weatherImg = getListAndWheather[1].data.iconUrl;

                // 渲染页面并存储至 sessionStorage
                let menuList = [],
                    colorSrcList = [];
                getListAndWheather[0].menue.forEach(item => {
                    menuList.push({
                        name: item.remark, // 菜单名称
                        id: item.id, // 菜单id
                        paramKey: item.paramKey, // 菜单类型 -- key 如:'resource_point'
                        graySrc: item.iconUrl1, // 灰色图标
                        paramValue: item.paramValue // 菜单类型 -- value 如: '1'
                    });
                    colorSrcList.push({
                        mark: item.paramKey,
                        colorSrc: item.iconUrl,
                        graySrc: item.iconUrl1
                    })
                });
                this.menuList = [].concat(menuList);
                sessionStorage.setItem('colorSrcList', JSON.stringify(colorSrcList));

                // 初始化默认第一个图标为彩色图片
                this.$nextTick(() => {
                    const lis = document.querySelectorAll('.main_view_footer li');
                    for (let li of lis) {
                        if (li.dataset.mark === 'resource_point') {
                            li.firstElementChild.children[0].src = colorSrcList.filter(item => item.mark === 'resource_point')[0].colorSrc;
                        }
                    }
                });
                this.SETROUTENAME('scenic-spot');
                this.isShowLoading = false;
            },
            // 打开图标菜单
            openMenu() {
                const routeName = this.$store.state.app.routeName;
                if (!this.isShowMenu) {
                    // 默认跳转到景点列表并关闭当前其他弹窗
                    this.oMap_main.closePopup();
                    this.isOpenDetail = false;
                    if (routeName === 'scenic-spot') {
                        this.$router.push({
                            name: 'scenic-spot',
                            params: {
                                sceneryId: this.sceneryId
                            }
                        });
                    } else if (routeName === 'scenic-line') {
                        this.$router.push({
                            name: 'scenic-line'
                        });
                    } else {
                        this.$router.push({
                            name: 'scenic-resource',
                            params: {
                                type: sessionStorage.getItem('currentResource')
                            }
                        });
                    }
                    this.isShowMenu = true;
                } else {
                    this.$router.push({
                        name: 'main'
                    });
                    this.isShowMenu = false;
                }
            },
            // 点击图标加载对应景区资源
            gotoWhere(paramKey, paramValue) {

                // 点击图标更改为有色图标
                const lis = document.querySelectorAll('.main_view_footer li');
                const colorSrcList = JSON.parse(sessionStorage.getItem('colorSrcList'));
                for (let li of lis) {
                    if (li.dataset.mark !== paramKey) {
                        li.firstElementChild.children[0].src = colorSrcList.filter(item => item.mark === li.dataset.mark)[0].graySrc;
                    } else {
                        li.firstElementChild.children[0].src = colorSrcList.filter(item => item.mark === li.dataset.mark)[0].colorSrc;
                    }
                }
                this.removeMarker(1);

                switch (paramKey) {
                    case 'resource_point':
                        if(this.markers_line.length>0){
                            this.removeMarker(2);
                            this.line.remove();
                        }
                        this.$router.push({
                            name: 'scenic-spot',
                            params: {
                                sceneryId: this.sceneryId
                            }
                        });
                        this.getScenicPointList({
                            resourceType: 1
                        });
                        break;
                    case 'resource_line':
                        if(this.markers_line.length>0){
                            this.markers_line.forEach(v =>  {
                                v.addTo(this.oMap_main);
                            })
                            this.line.addTo(this.oMap_main);
                        }
                        this.getLineList({
                            _this: this,
                            sceneryId: this.sceneryId
                        });
                        this.$router.push({name: 'scenic-line'});
                        this.getScenicPointList({
                            resourceType: 1
                        });
                        break;
                    default:
                        if(this.markers_line.length>0){
                            this.removeMarker(2);
                            this.line.remove();
                        }
                        sessionStorage.setItem('currentResource', paramKey);
                        this.$router.push({
                            name: 'scenic-resource',
                            params: {
                                type: paramKey
                            }
                        });
                        this.getScenicPointList({
                            resourceType: paramValue,
                            paramKey
                        });
                        break;
                }
            },
            ...mapActions([
                'getLineList'
            ]),
            ...mapMutations([
                'SAVERESOURCELIST',
                'SETROUTENAME', // 更改路由name
                'startCurrentPlay', // 开始播放
                'autoPlay', // 自动连播
                'playEnd', // 播放结束
                'SETTOROUTENAMEOFMENU'
            ]),
            /**
             * 初始化音频播放
             * _type 标志播放来源 1-工具栏播放 2-景点详情页回退续播 3-景点列表点播/地图解说播放/连播 4-扫码播放
             */
            playAudio(options) {
                const mainAudio = document.querySelector('.main-audio');
                const audioContainer = document.querySelector('.toolbars');

                let src = ''; // 待播放景点 -- src
                let id = ''; // 待播放景点 -- id
                let isContinuePlay = false; // 是否需要续播，针对播放来源2

                // 根据播放来源处理不同逻辑
                if (options._type === 1) { // 工具栏播放
                    if (mainAudio && mainAudio.paused) { // 如果当前 Audio 是暂停状态则直接继续播放
                        console.log('++++++++++++++ _type:1 继续播放 ++++++++++++++');
                        mainAudio.play();
                        sessionStorage.setItem('playStatus', JSON.stringify({isPauseStatus: false})); // 修改暂停状态标志量--isPauseStatus
                        this.startCurrentPlay('play'); // 同步通知景点列表更改状态--假如景点列表当前未打开?待测试
                        this.isPlayed = true;
                        this.changeMapIcon(true); // 同步地图上标记点更改状态
                        return;
                    } else { // 如果当前 Audio 还不存在则创建元素,并播放当前景点
                        console.log('++++++++++++++ _type:1 工具栏播放 ++++++++++++++');
                        const currentPoint = JSON.parse(sessionStorage.getItem('currentPoint'));
                        src = currentPoint.guideUrl;
                        id = currentPoint.resource_id;
                    }                        
                } else if (options._type === 2) { // 景点详情页回退续播
                    console.log('++++++++++++++ _type:2 景点详情页回退续播 ++++++++++++++');
                    src = options._src;
                    id = options._id;
                    isContinuePlay = true;
                } else if (options._type === 3) { // 景点列表点播/地图解说播放/连播
                    console.log('++++++++++++++ _type:3 点播/连播 ++++++++++++++');
                    src = options._src;
                    id = options._id;
                } else { // 扫码播放
                    return;
                }

                if (mainAudio) {
                    clearInterval(this.timer);
                    if (!mainAudio.paused) {
                        mainAudio.pause();
                    }
                    audioContainer.removeChild(mainAudio);
                    this.audioPercent = 0;
                    this.timer = null;
                }
                let audioDom = document.createElement('audio');
                let sourceDom = document.createElement('source');
                sourceDom.type = 'audio/mpeg';
                sourceDom.src = src;
                audioDom.preload = 'auto';
                audioDom.dataset.id = id;
                audioDom.appendChild(sourceDom);
                audioDom.classList.add('main-audio');
                audioDom.style.display = 'none';
                audioContainer.appendChild(audioDom);
                audioDom.load();

                // 开始播放
                if (isContinuePlay) {
                    const playStatus = JSON.parse(sessionStorage.getItem('playStatus'));
                    audioDom.currentTime = playStatus.currentTime;
                    audioDom.oncanplay = (e) => { 
                        let _audioDom = e.target;
                        this.totalTime = _audioDom.duration;
                        this.audioPercent = playStatus.currentTime / _audioDom.duration * 100;

                        if (playStatus.isPauseStatus) { // 暂停中
                            this.isPlayed = false;
                        } else {
                            _audioDom.play();
                            this.startCurrentPlay('play'); // 同步通知景点列表更改状态--假如景点列表当前未打开?待测试
                            this.isPlayed = true;
                        } 
                        if (this.isPlayed) {
                            this.changeMapIcon(true);
                        }
                    }
                    audioDom.onplay = (e) => {
                        this.changeProgress();
                    }
                } else {
                    audioDom.oncanplay = (e) => {
                        let _audioDom = e.target;
                        this.totalTime = _audioDom.duration;
                        sessionStorage.setItem('playStatus', JSON.stringify({isPauseStatus : false}));
                        _audioDom.play();
                        this.startCurrentPlay('play'); this.startCurrentPlay('play'); // 同步通知景点列表更改状态--假如景点列表当前未打开?待测试
                        this.isPlayed = true;
                        if (this.isPlayed) {
                            this.changeMapIcon(true);
                        }
                    }
                    audioDom.onplay = (e) => {
                        this.changeProgress();
                    }
                }
            },
            // 暂停播放
            pauseAudio() {
                clearInterval(this.timer);
                this.timer = '';
                document.querySelector('.main-audio').pause();
                let status = {
                    currentTime: document.querySelector('.main-audio').currentTime,
                    isPauseStatus : true
                } 
                sessionStorage.setItem('playStatus', JSON.stringify(status));
                this.startCurrentPlay('pause'); // 同步通知景点列表更改状态--假如景点列表当前未打开?待测试
                this.isPlayed = false;

                //地图图标交互效果 
                this.changeMapIcon(false);
            },
            // 改变地图图标交互效果 
            changeMapIcon (isPlay) { 
                this.getMarkerIndex(false);
                let ind = this.indexOfMarkers;
                if(!this.markers[ind]._icon.children[0]){
                    return false;
                }
                this.markers.forEach((v,i) => {
                    if(isPlay && i == ind){
                        v._icon.children[0].children[0].classList.add("player");
                    }else{
                        v._icon.children[0].children[0].classList.remove("player");
                    }
                })

                if(document.querySelector(".info-scenic-btns")){
                    if(isPlay){
                        document.querySelector(".info-scenic-btns").children[0].classList.add("playing")
                    }else{
                        document.querySelector(".info-scenic-btns").children[0].classList.remove("playing")
                    }
                }
                return true;
            },
            // 找某个点标记在this.markers中的位置
            getMarkerIndex(id) {
                //获取当前点的id
                let currentId = "";
                if(!id){
                    currentId = JSON.parse(sessionStorage.getItem("currentPoint")).resource_id;
                }else{ 
                    currentId = id;
                }
                
                this.markers.forEach((item,index) => { 
                    if(item._icon.children[0].dataset.id == currentId){
                        this.indexOfMarkers = index;
                    }
                });
            },
            // 播放进度圆环
            changeProgress() {
                this.timer = setInterval(() => {
                    let currentTime = document.querySelector('.main-audio').currentTime;
                    this.audioPercent = currentTime / this.totalTime * 100;
                },1000);
            },
            // 跳转其他页
            gotoPage(...params) {
                if (params[0].needGetSrc) {
                    const fullViewSrc = JSON.parse(sessionStorage.getItem('currentScenic')).panorama_url;
                    if (fullViewSrc) {
                        this.$router.push({
                            name: params[0].name,
                            params: {
                                src: fullViewSrc
                            }
                        });
                    } else {
                        this.tipsText = '还没有全景图 ~'
                        this.isTips = true;
                        return;
                    }  
                } else {
                    this.$router.push({name: params[0].name});
                }
            },
            // 打开/关闭景区详情弹窗
            seeIntroduce() {
                this.isOpenDetail = !this.isOpenDetail;
                this.oMap_main.closePopup();
                this.isShowMenu = false;
            },
            // 自动连播切换
            changeAuto() {
                this.isAuto = !this.isAuto;
                sessionStorage.setItem('isAuto',this.isAuto);
            },

            /**
             * 地图相关方法
             * 请求景区资源列表
             * @param {Object} arg {resourceType, query} 资源类型
             * @param {Object} query 扫码访问时的 query 参数对象
             */
            async getScenicPointList(arg) {
                this.resourceType = arg.resourceType;
                this.markers = [];

                // 根据资源类型获取资源列表
                const res = await this.$http.get(this.$base + `/hqyatu-navigator/app/resource/list?sceneryId=${this.sceneryId}&resourceType=${arg.resourceType}`);
                if(!res){
                    this.tipsText = "请求失败";
                    this.isTips = true;
                    return;
                }

                if(res.page.list && res.page.list.length){

                    // 判断是否是初始化页面 还是回退进入本页面
                    const fromRouteName = this.$store.state.app.fromRouteName;

                    // 初始化默认显示
                    if(arg.resourceType == 1) {
                        if (arg.query && arg.query.pid) { // 如果通过二维码扫码进入页面则使用指定景点
                            const qrcode_current_point = res.page.list.filter(item => item.resource_id === arg.query.pid)[0];

                            // 存储当前扫码景点的信息
                            sessionStorage.setItem("currentPoint",JSON.stringify(qrcode_current_point));
                            this.scenicPointImg = qrcode_current_point.url;
                            this.scenicPointName = qrcode_current_point.name;
                            this.scenicPointId = qrcode_current_point.resource_id;

                            // 播放当前扫码景点的解说音频
                            this.playAudio({
                                _src: qrcode_current_point.guideUrl,
                                _id: qrcode_current_point.resource_id,
                                _type: 4
                            });
                        } else { 
                            if (fromRouteName === 'root') { // 如果是刷新后初始化页面
                                console.log(999999)
                                const cPoint = JSON.parse(sessionStorage.getItem("currentPoint"));

                                // 移除部分本地存储
                                sessionStorage.removeItem('playStatus');
                                sessionStorage.removeItem('isAuto');
                                sessionStorage.removeItem('currentResource');
                                sessionStorage.removeItem('lineList');
                                sessionStorage.removeItem('lineId');
     
                                // 存储完整景点列表和当前景点信息(取第一个景点) 
                                sessionStorage.setItem('pointList',JSON.stringify(res.page.list));
                                sessionStorage.setItem("currentPoint",JSON.stringify(res.page.list[0]));
                                this.scenicPointImg = res.page.list[0].url;
                                this.scenicPointName = res.page.list[0].name;
                                this.scenicPointId = res.page.list[0].resource_id;

                                // 过滤出默认播放列表
                                const playList = res.page.list.map(item => {
                                    return {
                                        aSrc: item.guideUrl,
                                        aId: item.resource_id
                                    }
                                });
                                sessionStorage.setItem('playList',JSON.stringify(playList));
                            }
                        }
                    } else {
                        this.SAVERESOURCELIST(res.page.list); // commit mutation 保存其他资源列表
                    }

                    //地图画点
                    let className_resource = this.typeList.filter(item => item.type == this.resourceType)[0].className;
                    res.page.list.forEach((v,i) => {
                        let infoContent = this.resourceType == 1 ? this.createInfoWindow_scenicPoint(v) : this.createInfoWindow(v);
                        let myIcon = L.divIcon({
                            html: `<div data-id="${v.resource_id}">
                                        <div class="icon ${className_resource}"></div>
                                        <div class="name">${v.name}</div>
                                    </div>`,
                            className: 'marker-content-new',
                            popupAnchor: [0, -(42*this.bl)]
                        });
                        let marker = L.marker([v.latitude, v.longitude], {icon: myIcon}).addTo(this.oMap_main)
                                      .bindPopup(infoContent,{className:"info-content-new"})
                                      .on('click',() => { 
                                        this.isShowMenu = false;
                                        this.isOpenDetail = false;
                                        this.mapClickPointId = v.resource_id;
                                        if(document.querySelector(".info-scenic-btns")){
                                            if(document.querySelector(".main-audio") && !document.querySelector(".main-audio").paused && this.scenicPointId === v.resource_id){
                                                document.querySelector(".info-scenic-btns").children[0].classList.add("playing")
                                            }else{
                                                document.querySelector(".info-scenic-btns").children[0].classList.remove("playing")
                                            }
                                        }
                                    });
                        this.markers.push(marker);
                    });           

                    // 如果是从景点详情页回退的情况
                    if (fromRouteName === 'scenic-point-detail') {
                        const { guideUrl, resource_id, url, name } = JSON.parse(sessionStorage.getItem('currentPoint'));

                        this.scenicPointImg = url;
                        this.scenicPointName = name;
                        this.scenicPointId = resource_id;
                        
                        // 设置播放栏
                        this.playAudio({
                            _src: guideUrl,
                            _id: resource_id,
                            _type: 2 
                        });
                    }
                }
            },
            //清除点标记
            removeMarker(type) {
                let markerArr = type == 1 ? this.markers : this.markers_line;
                markerArr.forEach(v => {
                    v.remove();
                })                
            },
            //景点的弹窗内容
            createInfoWindow_scenicPoint(pointInfo) {
                let info = document.createElement("div");
                info.className = "info-contanir";

                let middle = document.createElement("div");
                middle.className = "info-content";

                let htmlStr = ` <div class='info-scenic-img-area'><img style="width:100%;height:100%;border-radius:100%;" src='${pointInfo.url}' /></div>
                                <div class='info-scenic-info'>
                                    <div class='info-scenic-name'>${pointInfo.name}</div>
                                    <div class='info-scenic-dec'>${pointInfo.commentary}</div>
                                </div>`;
                middle.innerHTML = htmlStr;

                info.appendChild(middle);

                let btnArea = document.createElement('div');
                btnArea.className = "info-scenic-btns";

                let btn1 = document.createElement('button');
                btn1.className = "toPlay";
                btn1.onclick = this.toPlay;
                btnArea.appendChild(btn1);

                let btn2 = document.createElement('button');
                btn2.className = "toDetail";
                btn2.onclick = this.toDetail;
                btnArea.appendChild(btn2);
                
                info.appendChild(btnArea);
                return info;
            },
            //除景点外的其他资源弹窗内容
            createInfoWindow(pointInfo) {
                var info_other = document.createElement("div");
                info_other.className = "info-contanir-other";

                var img_other = document.createElement("img");
                img_other.style.width = "100%";
                img_other.style.height = "100%";
                img_other.style.borderRadius = "10px";
                if(pointInfo.url){
                    img_other.src = pointInfo.url;
                }else{
                    img_other.src = this.defaultImgList[this.resourceType-1];
                }
                info_other.appendChild(img_other);
                return info_other;
            },
            toPlay(e) {
                let currentPointInfo = JSON.parse(sessionStorage.getItem('pointList')).filter(item => item.resource_id === this.mapClickPointId)[0];
                let {url, name, guideUrl, resource_id} = currentPointInfo;
                this.scenicPointImg = url;
                this.scenicPointName = name;
                this.scenicPointId = resource_id;
                
                if(!e.currentTarget.classList.contains('playing')){ // 之前是暂停状态则<继续播放>或<开始新的播放>
                    sessionStorage.setItem('currentPoint',JSON.stringify(currentPointInfo));
                    let cau = document.querySelector(".main-audio");
                    if(cau && cau.paused && resource_id == cau.dataset.id){ // 继续播放
                        this.playAudio({_type: 1});
                    }else{ // 开始新的播放
                        const currLineId = sessionStorage.getItem('lineId');
                        const pointList = JSON.parse(sessionStorage.getItem('pointList'));
                        let newPlayList = [];

                        if (currLineId) { // 如果当前地图上存在路线
                            const lineList = JSON.parse(sessionStorage.getItem('lineList'));
                            let lineDetailList =  lineList.filter(item => item.lineId === currLineId)[0].lineDetailList;
                            let pidList = lineDetailList.map(item => item.resourceId);

                            if (this.$tool.isExist(this.mapClickPointId, pidList)) { // 如果当前点击播放的景点在路线上，则需要按路线播
                                console.log('++++++++++++++ 从景点'+ name +'开始按已选路线播 ++++++++++++++');
                                const index1 = pidList.findIndex(item => item === this.mapClickPointId);
                                newPlayList = lineDetailList.map(item => {
                                    return {
                                        aSrc: pointList.filter(i => i.resource_id === item.resourceId)[0].guideUrl,
                                        aId: item.resourceId
                                    }
                                });
                                newPlayList = newPlayList.slice(index1);
                            } else { // 如果当前点击播放的景点不在路线上
                                console.log('++++++++++++++ 从景点'+ name +'开始按顺序播 ++++++++++++++');
                                const index2 = pointList.findIndex(item => item.resource_id === this.mapClickPointId);
                                newPlayList = pointList.slice(index2).map(item => {
                                    return {
                                        aSrc: item.guideUrl,
                                        aId: item.resource_id
                                    }
                                });
                            }
                        } else { // 如果当前地图上不存在路线
                            const index3 = pointList.findIndex(item => item.resource_id === this.mapClickPointId);
                            newPlayList = pointList.slice(index3).map(item => {
                                return {
                                    aSrc: item.guideUrl,
                                    aId: item.resource_id
                                }
                            });
                        }

                        // 更新播放列表并播放
                        sessionStorage.setItem('playList', JSON.stringify(newPlayList));
                        this.playAudio({
                            _src: guideUrl,
                            _id: resource_id,
                            _type: 3
                        });
                    }
                }else{ // 之前是播放状态则暂停
                    this.pauseAudio();
                }
            },
            toDetail() {
                if(document.querySelector(".main-audio")){
                    const status = document.querySelector('.main-audio').paused;
                    this.pauseAudio();
                    let playStatus = {
                        currentTime: document.querySelector('.main-audio').currentTime,
                        totalTime: this.totalTime,
                        isPauseStatus : status
                    }
                    sessionStorage.setItem('playStatus', JSON.stringify(playStatus));
                }
                this.$router.push({
                    name :  'scenic-point-detail'
                });
            },
            //画路线
            drawLine(lineId) { 
                if(this.markers_line.length>0){
                    this.removeMarker(2);
                    this.line.remove();
                }
                const lineList = this.$store.state.app.lineList;
                let currentLine = lineList.filter(item => item.lineId === lineId)[0];
                let path = currentLine.coordinatesList; //完整点
                let path_point = currentLine.lineDetailList; //途径景点
                if(path.length == 0) return;
                let mapPath = [];
                path.forEach(v => {
                    let one = [v.latitude,v.longitude];
                    mapPath.push(one);
                })
                let polyline = L.polyline(mapPath,{color:"#68A8FC",weight:4,dashArray:[20,10]}).addTo(this.oMap_main);
                this.line = polyline;

                //路线途径景点
                path_point.forEach((v,i) => {
                    let num = i+1;
                    let myIcon = L.divIcon({html:'<div data-id="'+v.resourceId+'">'+ num +'</div>',className: 'point-serial'});
                    let marker_line = L.marker([v.latitude, v.longitude], {icon: myIcon}).addTo(this.oMap_main)
                    this.markers_line.push(marker_line);
                });
            }
        }
    }
</script>
