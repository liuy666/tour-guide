<style lang="less">
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
        .weui-toast {
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
            .amap-geolocation-con {
                z-index: inherit !important;
            }
            .amap-geolocation-con .amap-geo{
                background: #fff url(/icon_static@3x.png) no-repeat center center / 100% 100%;
                border: none;
            }
            .amap-locate-loading .amap-geo {
                background: #fff  url(https://webapi.amap.com/theme/v1.3/loading.gif) no-repeat center center / 50% 50%;
            }
            .amap-icon img{
                width: 50px;
                height: 56px;
            }
        }
        .main_view {
            width: 710px;
            height: 714px;
            z-index: 10;
            background: url("../assets/images/bg_liebiao@2x.png") no-repeat center center / 100% 100%;
            position: absolute;
            bottom: 20.733vw;
            left: calc(~"50% - 355px");
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
                    background: url("../assets/images/icon_ai@2x.png") no-repeat center center / 100% 100%;
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
                    img {
                        width: 80px;
                        height: 80px;
                        margin-top: 24px;
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
                display: flex;
                flex-direction: row;
                box-sizing: border-box;
                margin: 0 29px 0 30px;
                border-top: 1px solid #f8f8f8;
                li {
                    margin-right: 54px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                    &:last-of-type {
                        margin-left: 0;
                    }
                    img {
                        width: 42px;
                        height: 42px;
                        margin: 0 27px 5px;
                    }
                    span {
                        font-size: 24px;
                        line-height: 32px;
                        width: 96px;
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
                    .control {
                        position: absolute;
                        left: 50%;
                        top: 50%; 
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
                .player-control-btn{
                    position: absolute;
                }
            }
            .scenic-point-name-area{
                width: 300px;
                height: 100px;
                line-height: 100px;
                text-align: center;
                margin-top: 24px;
                background: url('../assets/images/icon_down@3x.png') no-repeat 50% 80px;
                background-size: 24px 8px;
            }
            .list-btn{
                width: 44px;
                height: 100px;
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
        }
        .function-area-right{
            height: 250px;
            top: 26px;
            right: 30px;
        }
        .function-area-left{
            height: 90px;
            left: 30px;
            bottom: 256px;
        }
        .function-btn{
            width: 70px;
            height: 70px;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 100% 100%;
            &.FK{
                background-image: url('../assets/images/icon_feedback@3x.png');
            }
            // &.DW{
            //     background-image: url('../assets/images/icon_static@3x.png');
            // }
            &.JJ{
                background-image: url('../assets/images/icon_intro@3x.png');
            }
            &.QJ{
                background-image: url('../assets/images/icon_panorama@3x.png');
            }
            &.ZD{
                background-image: url('../assets/images/icon_auto@3x.png');
                &.NO{
                    background-image: url('../assets/images/icon_auto_no@3x.png');
                }
            }
        }
        //点标记
        .marker-content{
            font-size: 20px;
            .point-icon{
                width: 100px;
                height: 52px;
                line-height: 45px;
                margin-left: -24px;
                text-align: center;
                color: #fff;
                &.type-point{
                    background: url(/icon_scenic@3x.png) no-repeat center / auto 100%;
                }
                &.type-buy{
                    background: url(/icon_gowu@3x.png) no-repeat center / auto 100%;
                }
                &.type-eat{
                    background: url(/icon_to_food@3x.png) no-repeat center / auto 100%;
                }
                &.type-door{
                    background: url(/icon_to_exit@3x.png) no-repeat center / auto 100%;
                }
                &.type-wc{
                    background: url(/icon_to_wc@3x.png) no-repeat center / auto 100%;
                }
                &.type-park{
                    background: url(/icon_to_shop@3x.png) no-repeat center / auto 100%;
                }
                &.type-hotel{
                    background: url(/icon_to_hotel@3x.png) no-repeat center / auto 100%;
                }
                &.type-center{
                    background: url(/icon_to_centre@3x.png) no-repeat center / auto 100%;
                }
                &.type-hospital{
                    background: url(/icon_to_doctor@3x.png) no-repeat center / auto 100%;
                }
                &.player{
                    background: url(/playing.gif) no-repeat center / auto 100%;
                }
            }
            .point-name{
                white-space: nowrap;
                margin-left: -45%;
                text-align: center;
                border-radius: 16px;
                background: rgba(0,0,0,0.3);
                color: rgba(255,255,255,0.8);
            }
        }
        
        .introDetail{
            position: absolute;
            left: 30px;
            bottom: 0;
            background: #fff;
            width: 690px;
            height: 686px;
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
                        padding: 10px;
                        line-height: 20px;
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
                padding: 40px 0;
                font-size: 30px;
                line-height: 34px;
                background: url('../assets/images/xian@3x.png') no-repeat center bottom;
                .scenic-address{
                    text-indent: 44px;
                    background: url('../assets/images/icon_black_site@3x.png') no-repeat left top;
                    background-size: 32px 40px;
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
            .dec-content{
                height: 210px;
                font-size: 24px;
                line-height: 36px;
                overflow: hidden;
                word-break: break-all;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
        }
    }
</style>

<template>
    <div id="main">
        <!-- 网络请求loading层 -->
        <loading :show="isShowLoading" :text="loadText" position="absolute"></loading>
        <!-- 地图容器 -->
        <section id="wrapper"></section>
        <!-- 图标菜单弹窗 -->
        <section class="main_view " v-show="isShowMenu">
            <section class="main_view_header">
                <section class="camera" @click="gotoPage({name: 'recognize'})"></section>
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
                    <span>
                        <img :src="weatherImg" alt="加载中..." />
                        </span>
                </section>
            </section>
            <router-view></router-view>
            <ul class="main_view_footer">
                <li v-for="menu in menuList" :key="menu.id" :data-mark="menu.mark" @click="gotoWhere(menu.mark, menu.value)">
                    <img :src="menu.graySrc" alt="" />
                    <span>{{ menu.name }}</span>
                </li>
            </ul>
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
                        <img v-show="!isPlayed" @click="playAudio()" class="control img-16-26" src="../assets/images/icon_small_pause@3x.png" alt="" />
                        <!-- 暂停图标-播放中状态 -->
                        <img v-show="isPlayed" @click="pauseAudio" class="control img-20-24" src="../assets/images/icon_suspend@3x.png" alt="" />
                    </div>
                </x-circle>
            </div>
            <div class="scenic-point-name-area" @click="toDetail">
                {{scenicPointName}}
            </div>
            <div class="list-btn" @click="openMenu" ></div> 
        </section>
        <!-- 左侧反馈功能图标 -->
        <section class="function-area-left">
            <div class="function-btn FK" @click="gotoPage({name: 'feedback'})"></div>
        </section>
        <!-- 右侧简介/全景/自动功能图标 -->
        <section class="function-area-right">
            <div class="function-btn JJ" @click="seeIntroduce"></div>
            <div class="function-btn QJ" @click="gotoPage({name: 'full-view', needGetSrc: true})"></div>
            <div class="function-btn ZD" @click="changeAuto" :class="isAuto ? '' : 'NO'"></div>
        </section>
        <!-- 底部景区简介弹窗 -->
        <section v-show="isOpenDetail" class="introDetail">
            <div class="scenic-detail-header">
                <div class="scenic-img"><img style="width:100%;height:100%;border-radius:100%;" :src="scenicImg"/></div>
                <div class="scenic-name-level">
                    <div class="scenic-name">{{scenicName}}</div>
                    <span class="scenic-level">{{scenicLevel+"级风景区"}}</span>
                </div>
                <div class="close-btn" @click="seeIntroduce"></div>
            </div>
            <div class="scenic-address-time">
                <div class="scenic-address">
                    景区地址： <span class="font-color-666"><a :href="'https://uri.amap.com/search?keyword=' + scenicAddress + '&city=' + region + '&view=map&src=test&coordinate=gaode&callnative=1'">{{scenicAddress}}</a></span>
                </div>
                <div class="scenic-time">
                    开放时间： <span class="font-color-666">{{scenicOpenTime}}</span>
                </div>
            </div>
            <div class="scenic-dec">
                <div class="dec-title">景区介绍</div>
                <div class="dec-content font-color-888">{{scenicDec}}</div>
            </div>
           
        </section>
        <!-- 记录当前经纬度临时框（开发测试用） -->
        <section style="position:absolute;left:0;bottom:0;">
            <input class="currentPosition"  />
        </section>
        <!-- 提示弹窗 -->
        <toast v-model="isTips" type="cancel" :text="tipsText" :is-show-mask="true" width="8.2em"></toast>
    </div>
</template>

<script>
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
        beforeRouteLeave(to, from, next){
            if(to.name == "scenic-point-detail"){
                this.$store.commit('setFromRouteName_detail', 'scenic-point-detail');
            }
            next();
        },
        beforeRouteUpdate (to, from, next) {
            if(to.name == "main"){
                if(from.name == "scenic-line" && to.params.lineId){
                    this.openMenu();
                    this.drawLine(to.params.lineId);
                }
            }
            next();
        },
        created() {
            if(this.timer){
                clearInterval(this.timer);
            }
        },
        async mounted() {
            const _self = this;
            const query = this.$route.query;
            let scenicInfo = null;

            // 扫码进入页面,先获取该域名下的景区列表,并根据获取的景区id获取景区详情
            if (query.sid) {
                const scenicList = await this.$http.get(this.$base + '/hqyatu-navigator/app/scenery/list', {
                    domainUrl: 'www.qxgz.com'
                });
                if (!scenicList) {
                    this.isTips = true;
                    this.tipsText = "请求失败";
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
            const scenicBgImg = './qxgz.jpg', // 图片图层
                  imgRightTop = [scenicInfo.northeast_lng,scenicInfo.northeast_lat], // 地图右上角
                  imgLeftBottom = [scenicInfo.southwest_lng,scenicInfo.southwest_lat], // 地图左下角
                  mapZoom = scenicInfo.zoom, // 地图zoom
                  centerPoint = [scenicInfo.longitude,scenicInfo.latitude]; // 地图中心店
            
            // 获取屏幕大小 动态设置不同手机的地图zoom
            const containerWidth = document.querySelector('#wrapper').clientWidth;
            const containerHeight = document.querySelector('#wrapper').clientHeight;
            
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

            // 信息窗体偏移
            let offsetx = 4;
            if(containerWidth > 600 && containerWidth < 800){
                offsetx = 12;
            }else if(containerWidth > 800 && containerWidth < 1000) {
                offsetx = 14;
            }else if(containerWidth > 1000) {
                offsetx = 16;
            }

            // 添加地图图片图层
            const imageLayer = new AMap.ImageLayer({
                url: scenicBgImg,
                bounds: new AMap.Bounds(
                    imgLeftBottom,
                    imgRightTop
                ),
                zooms:[zoom,maxZoom],
                //zooms:[16,19],
                zIndex: 100
            });

            // 实例化地图对象
            const oMap = new AMap.Map('wrapper', {
                showBuildingBlock: true,
                pitchEnable: false,
                buildingAnimation: true,
                rotateEnable: false,
                touchZoomCenter: 1,
                center: centerPoint,
                zoom: zoom,
                zooms:[zoom,maxZoom],
                viewMode: '3D',
                layers: [
                    new AMap.TileLayer(),
                    imageLayer
                ]
            });

            // 清除地图上其他默认标记点
            oMap.setFeatures([]);

            // 更改为黑色主题
            oMap.setMapStyle("amap://styles/normal");

            // 地图点击事件
            oMap.on('click',function(e) {
                console.log(e.lnglat.getLng()+','+e.lnglat.getLat());
            });

            // 添加地图信息窗体
            let infoWindow = new AMap.InfoWindow({
                isCustom: true,  //使用自定义窗体
                offset: new AMap.Pixel(offsetx, -30)
            });
            
            // 保存地图实例及信息窗体实例，用于清除
            this.oMap_main = oMap;
            this.infoWindow_main = infoWindow;

            // 获取默认景点列表
            this.getScenicPointList(null, query);

            // 初始化图标菜单
            this.initMenu();
            
            //拖动中事件 没用
            /*function showInfoDragging(e) {
                const bounds = oMap.getBounds();
                console.log(bounds)
                const southWest = lnglat2container(105.554561, 32.201035);
                const northEast = lnglat2container(105.600952, 32.234801);
                const c1 = lnglat2container(bounds.bounds[0].O, bounds.bounds[0].N);
                const c2 = lnglat2container(bounds.bounds[1].O, bounds.bounds[1].N);
                const c3 = lnglat2container(bounds.bounds[2].O, bounds.bounds[2].N);
                const c4 = lnglat2container(bounds.bounds[3].O, bounds.bounds[3].N);
                const c5 = lnglat2container(bounds.bounds[4].O, bounds.bounds[4].N);
                const containerWidth = document.querySelector('#wrapper').clientWidth;
                const containerHeight = document.querySelector('#wrapper').clientHeight;
                const imgWidth = northEast.x - southWest.x;
                const imgHeight = southWest.y - northEast.y;
                console.log(southWest, northEast);
                // if()
                if (southWest.x >= 30) {
                    if (northEast.y >= 30) {
                        move(-southWest.x, -northEast.y);
                        return;
                    } else if (southWest.y <= containerHeight - 30) {
                        move(-southWest.x, containerHeight - southWest.y);
                        return;
                    }
                } else if (northEast.x <= containerWidth - 30) {
                    if (northEast.y >= 30) {
                        move(containerWidth - northEast.x, -northEast.y);
                        return;
                    } else if (southWest.y <= containerHeight - 30) {
                        move(containerWidth - northEast.x, containerHeight - southWest.y);
                        return;
                    }
                }
            }*/

            //拖动中事件
            function mapDragging(){ 
                moveJudgement(false);
            }
            //移动结束事件
            function mapDragged(){ 
                moveJudgement(true);
            }
            //移动事件的判断内容
            function moveJudgement(isEnd){
                let bounds = oMap.getBounds();

                let x = oMap.getSize().width;
                let y = oMap.getSize().height;

                //图片图层左上角的经纬度和像素
                let img_leftTop_LngLat = new AMap.LngLat(105.554561, 32.234801);
                let img_leftTop_pixel = oMap.lngLatToContainer(img_leftTop_LngLat);  

                //图片图层左下角的经纬度和像素
                let img_leftBottom_LngLat = new AMap.LngLat(105.554561, 32.201035);
                let img_leftBottom_pixel = oMap.lngLatToContainer(img_leftBottom_LngLat); 

                //图片图层右上角的经纬度和像素
                let img_rightTop_LngLat = new AMap.LngLat(105.600952, 32.234801);
                let img_rightTop_pixel = oMap.lngLatToContainer(img_rightTop_LngLat);  

                //图片图层右下角的经纬度和像素
                let img_rightBottom_LngLat = new AMap.LngLat(105.600952, 32.201035);
                let img_rightBottom_pixel = oMap.lngLatToContainer(img_rightBottom_LngLat); 

                
                let flag = 0;
                //上边
                if(img_leftTop_pixel.y > 0){  
                    if(img_leftTop_pixel.x > 0){
                        move(-img_leftTop_pixel.x,-img_leftTop_pixel.y)
                    }else if(img_rightTop_pixel.x > x){
                        move(0,-img_leftTop_pixel.y)
                    }else{
                        move(x-img_rightTop_pixel.x,-img_leftTop_pixel.y)
                    }
                    flag = 1;
                }
                //下边
                if(y-img_rightBottom_pixel.y > 0){ 
                    if(img_leftBottom_pixel.x > 0){
                        move(-img_leftBottom_pixel.x,y-img_rightBottom_pixel.y)
                    }else if(img_rightBottom_pixel.x > x){
                        move(0,y-img_rightBottom_pixel.y)
                    }else{
                        move(x-img_rightBottom_pixel.x,y-img_rightBottom_pixel.y)
                    }
                    flag = 1;
                }
                //左边
                if(flag == 0 && img_leftTop_pixel.x > 0){
                    if(img_leftTop_pixel.y < 0 || img_leftBottom_pixel.y > y){
                        move(-img_leftTop_pixel.x,0)
                    }
                }
                //右边
                if(flag == 0 && x-img_rightTop_pixel.x > 0){
                    if(img_rightTop_pixel.y < 0 || img_rightBottom_pixel.y > y){
                        move(x-img_rightTop_pixel.x,0)
                    }
                }
                
            }
            //地图移动
            function move(x, y) {
                oMap.setStatus({
                    dragEnable: false
                });
                oMap.panBy(x, y);
                setTimeout(() => {
                    oMap.setStatus({
                        dragEnable: true
                    });
                },500);
            }
            //经纬度转换为坐标
            function lnglat2container(long, lati) {
                const lnglat = new AMap.LngLat(long, lati);
                const pixel = oMap.lnglatTocontainer(lnglat);
                return pixel.round();
            }
            //oMap.on('moveend', mapDragged);
            
            // 获取当前地图定位
            var options = {
                'showButton': true,//是否显示定位按钮
                'buttonPosition': 'LB',//定位按钮的位置
                'buttonOffset': new AMap.Pixel(15, 93),//定位按钮距离对应角落的距离
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
                _self.oMap_main.addControl(geolocation);
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
            });
        },
        data () {
            return {
                //景区信息
                sceneryId: '',
                scenicImg: '',
                scenicName: '',
                scenicLevel: '',
                scenicAddress: '',
                scenicOpenTime: '',
                scenicDec: '',
                oMap_main: {},
                infoWindow_main: {},
                pointGroups: {},
                line: {}, // 路线
                linePointGroups : {}, // 路线起点终点的覆盖物群组
                resourceType: 1, // 景区资源类型 默认 1 -- 景点
                isTips: false,
                tipsText: '请求失败',
                isShowMenu: false,
                isOpenDetail: false,
                isEnd: false,
                isAuto: false, // 是否自动播放
                audioPercent: 0,
                scenicPointImg: '',
                scenicPointName: '',
                scenicPointSerial:'1',
                mapClickPointId:'',
                menuList: [],
                loadText: '',
                isShowLoading: false,
                isPlayed: false,
                timer: '',
                totalTime: '',
                currentScenicId: '',
                markers: [],
                temp: '',
                AQI: '',
                weather: '',
                weatherImg: '',
                typeList : [{
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
                }],
                region: '',
            }
        },
        computed: mapState({
            watchPause: state => state.app.pauseStatus,
            watchLine: state => state.app.lineStatus
        }),
        watch: {
            watchPause(val) {
                this.pauseAudio();
            },
            watchLine(val) {
                // 清除当前路线
                this.oMap_main.remove(this.line);
                this.oMap_main.remove(this.linePointGroups);
            },
            // 播放进度监听
            audioPercent(val) {
                if (val >= 5) {
                    const au = document.querySelector('.main-audio');
                    clearInterval(this.timer);
                    this.changeMapIcon(false);
                    if (!au.paused || !au.ended) {
                        au.pause();
                    }
                    this.audioPercent = 0;
                    this.timer = '';
                    let currentId = au.dataset.id;
                    const currentAudioContainer = document.querySelector('.toolbars');
                    currentAudioContainer.removeChild(au);
                    sessionStorage.setItem('playStatus', JSON.stringify({status: true}));
                    this.playEnd();
                    this.isPlayed = false;
                    if (this.isAuto) {
                        let next = this.getNext(currentId);
                        if (next) {
                            this.scenicPointImg = next.nextPoint.url;
                            this.scenicPointName = next.nextPoint.serial + '. ' + next.nextPoint.name;
                            this.scenicPointSerial = next.nextPoint.serial;
                            sessionStorage.setItem('currentPoint',JSON.stringify(next.nextPoint));
                            this.autoPlay();
                            this.playAudio({
                                _src: next.nextPlay.aSrc,
                                _id: next.nextPlay.aId,
                                _type: 5
                            });
                            this.infoWindow_main.close();
                        } else {
                            sessionStorage.setItem('playStatus', JSON.stringify({status: true}));
                            this.playEnd();
                        }
                    }
                }
            },
            '$route'(to, from) {
                console.log(to, from);
                // 关闭菜单并展开对应信息窗体
                if (from.name === 'scenic-spot' && to.name === 'main' && to.params.pid) {
                    const selectPoint = JSON.parse(sessionStorage.getItem('pointList')).filter(item => item.resource_id === to.params.pid)[0];
                    sessionStorage.setItem('currentPoint', JSON.stringify(selectPoint));
                    sessionStorage.setItem('oldSerial', this.scenicPointSerial);

                    this.scenicPointImg = selectPoint.url;
                    this.scenicPointName = selectPoint.serial + '. ' + selectPoint.name;
                    this.scenicPointSerial = selectPoint.serial;
                    this.isShowMenu = false;
                    this.markerClick(null, this.markers[selectPoint.serial-1]);

                    this.playAudio({
                        _src: selectPoint.guideUrl,
                        _id: to.params.pid,
                        _type: 3
                    });
                }
            }
        },    
        methods: {
            getNext(lastId) {
                const playList = JSON.parse(sessionStorage.getItem('playList'));
                let index = playList.findIndex(item => item.aId === lastId);

                if (index + 1 === playList.length) {
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
                this.temp = getListAndWheather[1].data.temperature + '℃';
                this.AQI = getListAndWheather[1].data.airIndex;
                this.weather = getListAndWheather[1].data.skycon;
                this.weatherImg = getListAndWheather[1].data.iconUrl;

                // 渲染页面并存储至 sessionStorage
                let menuList = [],
                    colorSrcList = [];
                getListAndWheather[0].menue.forEach(item => {
                    menuList.push({
                        name: item.remark,
                        id: item.id,
                        mark: item.paramKey,
                        graySrc: item.iconUrl1,
                        value: item.paramValue
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
                            li.firstElementChild.src = colorSrcList.filter(item => item.mark === 'resource_point')[0].colorSrc;
                        }
                    }
                });
                this.setRouteName('scenic-spot');
                this.isShowLoading = false;
            },
            // 打开图标菜单
            openMenu() {
                const routeName = this.$store.state.app.routeName;
                if (!this.isShowMenu) {
                    this.infoWindow_main.close();
                    // 默认跳转到景点列表
                    if (routeName === 'scenic-spot') {
                        this.$router.push({
                            name: 'scenic-spot',
                            params: {
                                sceneryId: this.sceneryId
                            }
                        });
                    } else if (routeName === 'scenic-line') {
                        this.$router.push({
                            name: 'scenic-line',
                            params: {

                            }
                        });
                    } else {
                        this.$router.push({
                            name: 'scenic-resource',
                            params: {
                                type: 'xx'
                            }
                        });
                    }
                    this.isShowMenu = true;
                } else {
                    this.isShowMenu = false;
                }
            },
            // 点击图标加载对应景区资源
            gotoWhere(remark, value) {
                const lis = document.querySelectorAll('.main_view_footer li'),
                      colorSrcList = JSON.parse(sessionStorage.getItem('colorSrcList'));
                for (let li of lis) {
                    if (li.dataset.mark !== remark) {
                        li.firstElementChild.src = colorSrcList.filter(item => item.mark === li.dataset.mark)[0].graySrc;
                    } else {
                        li.firstElementChild.src = colorSrcList.filter(item => item.mark === li.dataset.mark)[0].colorSrc;
                    }
                }
                this.oMap_main.remove(this.pointGroups);
                this.infoWindow_main.close();
                switch (remark) {
                    case 'resource_point':
                        this.getScenicPointList(value);
                        this.oMap_main.remove(this.line);
                        this.oMap_main.remove(this.linePointGroups);
                        this.$router.push({
                            name: 'scenic-spot',
                            params: {
                                sceneryId: this.sceneryId
                            }
                        });
                        break;
                    case 'resource_line':
                        this.getScenicPointList(1);
                        this.oMap_main.add(this.line);
                        this.oMap_main.add(this.linePointGroups);
                        this.getLineList({
                            _this: this,
                            sceneryId: this.sceneryId
                        });
                        this.$router.push({name: 'scenic-line'});
                        break;
                    default:
                        this.getScenicPointList(value);
                        this.oMap_main.remove(this.line);
                        this.oMap_main.remove(this.linePointGroups);
                        this.$router.push({
                            name: 'scenic-resource',
                            params: {
                                type: remark
                            }
                        });
                        break;
                }
            },
            ...mapActions([
                'getLineList'
            ]),
            ...mapMutations([
                'saveResourceList',
                'setRouteName', // 更改路由name
                'startCurrentPlay', // 开始播放
                'autoPlay', // 自动连播
                'playEnd' // 播放结束
            ]),
            // 初始化音频播放
            playAudio(options) {
                /**
                 * _type 标志播放来源 1-工具栏播放 2-景点详情页跳转回来播放 3-景点列表点播 4-地图解说播放 5-连播 6-扫码播放
                 */
                
                const mainAudio = document.querySelector('.main-audio');
                const audioContainer = document.querySelector('.toolbars');
                if (mainAudio && mainAudio.paused && !options) {
                    let status = {
                        status: false
                    }
                    sessionStorage.setItem('playStatus', JSON.stringify(status));
                    mainAudio.play();
                    this.startCurrentPlay('play');
                    console.log(0)
                    this.isPlayed = true;
                } else {
                    let src = ''; // 播放src
                    let id = ''; // 景点id
                    options = options || {_src: '', _id: '', _type: 1};
                    let {_src, _id, _type} = options;
                    let isContinuePlay = false; // 是否需要续播，针对播放来源2

                    if (_type === 1) { // 工具栏播放，默认取第一个景点来播放
                        let playList = JSON.parse(sessionStorage.getItem('playList'));
                        src = playList[0].aSrc,
                        id = playList[0].aId
                        console.log(1)
                    } else if (_type === 2) { // 景点详情页跳转后续播
                        src = _src;
                        id = _id;
                        isContinuePlay = true;
                        console.log(2)
                    } else if (_type === 3) { // 景点列表点播
                        src = _src;
                        id = _id;
                        if (mainAudio) {
                            clearInterval(this.timer);
                            if (!mainAudio.paused) {
                                mainAudio.pause();
                            }
                            audioContainer.removeChild(mainAudio);
                            this.audioPercent = 0;
                            this.timer = null;
                        }
                        console.log(3)
                    } else if (_type === 4) { // 地图解说播放
                        src = _src;
                        id = _id;
                        if (mainAudio) {
                            clearInterval(this.timer);
                            if (!mainAudio.paused) {
                                mainAudio.pause();
                            }
                            audioContainer.removeChild(mainAudio);
                            this.audioPercent = 0;
                            this.timer = null;
                        }
                        console.log(4)
                    } else if (_type === 5) { // 自动连播
                        src = _src;
                        id = _id;
                        console.log(5)
                    } else { // 扫码播放

                    }

                    let audioDom = document.createElement('audio');
                    let sourceDom = document.createElement('source');
                    sourceDom.type = 'audio/mpeg';
                    sourceDom.src = src;
                    audioDom.dataset.id = id;
                    audioDom.appendChild(sourceDom);
                    audioDom.classList.add('main-audio');
                    audioDom.style.display = 'none';
                    audioContainer.appendChild(audioDom);

                    // 开始播放
                    if (isContinuePlay) {
                        const playStatus = JSON.parse(sessionStorage.getItem('playStatus'));
                        audioDom.currentTime = playStatus.currentTime;
                        audioDom.oncanplay = (e) => { 
                            let _audioDom = e.target;
                            this.totalTime = _audioDom.duration;
                            this.audioPercent = playStatus.currentTime / _audioDom.duration * 100;

                            if (playStatus.status) { // 暂停中
                                this.isPlayed = false;
                            } else {
                                _audioDom.play();
                                this.startCurrentPlay('play');
                                this.isPlayed = true;
                            } 

                            if(this.isPlayed){
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
                            let status = {
                                currentTime: 0,
                                status : false
                            }
                            sessionStorage.setItem('playStatus', JSON.stringify(status));
                            _audioDom.play();
                            this.startCurrentPlay('play');
                            this.isPlayed = true;

                            if(this.isPlayed){
                                this.changeMapIcon(true);
                            }
                        }
                        audioDom.onplay = (e) => {
                            this.changeProgress();
                        }
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
                    status : true
                } 
                sessionStorage.setItem('playStatus', JSON.stringify(status));
                this.startCurrentPlay('pause');
                this.isPlayed = false;

                //地图图标交互效果 
                this.changeMapIcon(false);
            },
            //改变地图图标交互效果 
            changeMapIcon (isPlay) {

                if(!this.markers[this.scenicPointSerial-1].Ke.contentDom){
                    return false;
                }
                let oldSerial = sessionStorage.getItem("oldSerial"),
                    oldmarker = this.markers[oldSerial-1].Ke.contentDom.children[0].children[0],
                    cmarker = this.markers[this.scenicPointSerial-1].Ke.contentDom.children[0].children[0];
                
                oldmarker.classList.remove("player");
                oldmarker.innerHTML = oldSerial;

                if(isPlay){
                    cmarker.classList.add("player");
                    cmarker.innerHTML = "";
                    if(document.querySelector(".info-scenic-btns")){
                        document.querySelector(".info-scenic-btns").children[0].classList.add("playing")
                    }
                }else{
                    cmarker.classList.remove("player");
                    cmarker.innerHTML = this.scenicPointSerial;
                    if(document.querySelector(".info-scenic-btns")){
                        document.querySelector(".info-scenic-btns").children[0].classList.remove("playing")
                    }
                }
                return true;
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
                    this.$router.push({
                        name: params[0].name,
                        params: {
                            src: JSON.parse(sessionStorage.getItem('currentScenic')).panorama_url
                        }
                    });
                } else {
                    this.$router.push({name: params[0].name});
                }
            },
            // 打开/关闭景区详情弹窗
            seeIntroduce() {
                this.infoWindow_main.close();
                this.isOpenDetail = !this.isOpenDetail;
            },
            // 自动连播切换
            changeAuto() {
                this.isAuto = !this.isAuto;
                sessionStorage.setItem('isAuto',this.isAuto);
            },

            /**
             * 地图相关方法
             * 请求景区资源列表
             * @param {String} resourceType 资源类型 不传时默认 1-景点
             */
            async getScenicPointList(resourceType, query) {
                resourceType = resourceType || this.resourceType;
                if (resourceType) {
                    this.resourceType = resourceType;
                }
                this.markers = [];
                const pointList = await this.$http.get(this.$base + `/hqyatu-navigator/app/resource/list?sceneryId=${this.sceneryId}&resourceType=${resourceType}`);

                if(!pointList){
                    this.isTips = true;
                    this.tipsText = "请求失败";
                    return;
                }

                if(pointList.page.list && pointList.page.list.length){
                    // 判断是否是初始化页面 还是回退进入本页面
                    const fromRouteName = this.$store.state.app.fromRouteName;

                    //设置默认显示(第一个景点的图片和名字) 如果通过二维码扫码进入页面则使用指定景点
                    if(resourceType == 1) {
                        if (query && query.pid) {
                            sessionStorage.setItem("oldSerial",this.scenicPointSerial);
                            const qrcode_point = pointList.filter(item => item.resource_id === query.pid)[0];
                            this.scenicPointImg = qrcode_point.url;
                            this.scenicPointName = qrcode_point.serial + '. ' + qrcode_point.name;
                            this.scenicPointSerial = qrcode_point.serial;
                            sessionStorage.setItem("currentPoint",JSON.stringify(qrcode_point));
                            this.playAudio({
                                _src: qrcode_point.guideUrl,
                                _id: qrcode_point.resource_id,
                                _type: 6
                            });
                        } else { 
                            if (!fromRouteName) {
                                const cPoint = JSON.parse(sessionStorage.getItem("currentPoint"));
                                sessionStorage.removeItem('playStatus');
                                sessionStorage.removeItem('isAuto');
                                // if (cPoint) {
                                //     this.scenicPointImg = cPoint.url;
                                //     this.scenicPointName = cPoint.serial + '. ' + cPoint.name;
                                //     this.scenicPointSerial = cPoint.serial;
                                // } else {
                                    
                                // }
                                sessionStorage.setItem("oldSerial",this.scenicPointSerial);
                                sessionStorage.setItem('pointList',JSON.stringify(pointList.page.list));
                                sessionStorage.setItem("currentPoint",JSON.stringify(pointList.page.list[0]));
                                this.scenicPointImg = pointList.page.list[0].url;
                                this.scenicPointName = pointList.page.list[0].serial + '. ' + pointList.page.list[0].name;
                                this.scenicPointSerial = pointList.page.list[0].serial;

                                // 过滤出默认播放列表
                                let _sortList = [...pointList.page.list];
                                _sortList.sort((a, b) => a.serial - b.serial);
                                let playList = _sortList.map(item => {
                                    return {
                                        aSrc: item.guideUrl,
                                        aId: item.resource_id
                                    }
                                });
                                sessionStorage.setItem('playList',JSON.stringify(playList));
                            }
                        }
                    } else {
                        this.saveResourceList(pointList.page.list);
                    }

                    //地图画点
                    let className = this.typeList.filter(item => item.type == this.resourceType)[0].className;
                    pointList.page.list.forEach((v,i) => {
                        let num = this.resourceType == 1 ? v.serial : ''; 
                        let marker = new AMap.Marker({
                            content: "<div class='marker-content' data-id='"+ v.resource_id +"' data-flag='"+i+"'><div class='point-icon "+className+"'>"+num+"</div><div class='point-name'>"+v.name+"</div></div>",
                            position: [v.longitude,v.latitude],
                        });
                        marker.on('click',this.markerClick);
                        this.markers.push(marker);
                    });
                    let overlayGroups = new AMap.OverlayGroup(this.markers);
                    this.pointGroups = overlayGroups;
                    this.oMap_main.add(overlayGroups);                    

                    if (fromRouteName === 'scenic-point-detail') {
                        sessionStorage.setItem("oldSerial",this.scenicPointSerial);
                        const { guideUrl, resource_id, url, name, serial } = JSON.parse(sessionStorage.getItem('currentPoint'));
                        this.scenicPointImg = url;
                        this.scenicPointName = serial + '. ' + name;
                        this.scenicPointSerial = serial;
                        
                        this.playAudio({
                            _src: guideUrl,
                            _id: resource_id,
                            _type: 2 
                        });
                    }
                }
            },
            markerClick(e, v) {
                if (!e) {
                    if(this.infoWindow_main.getPosition() !== undefined && this.infoWindow_main.getPosition().O == v.getPosition().O && this.infoWindow_main.getPosition().N == v.getPosition().N) {
                        
                        if(this.infoWindow_main.getIsOpen()){
                            this.infoWindow_main.close();
                        }else{
                            this.openInfoWindow(v);
                        }
                    }else{
                        this.openInfoWindow(v);
                    }
                } else {
                    if(this.infoWindow_main.getPosition() !== undefined && this.infoWindow_main.getPosition().O == e.target.getPosition().O && this.infoWindow_main.getPosition().N == e.target.getPosition().N) {
                        
                        if(this.infoWindow_main.getIsOpen()){
                            this.infoWindow_main.close();
                        }else{
                            this.openInfoWindow(e.target);
                        }
                    }else{
                        this.openInfoWindow(e.target);
                    }
                }
                
            },
            openInfoWindow(target) {
                this.isShowMenu = false;

                let flag = target.Ke.contentDom.children[0].dataset.flag;//当前点在点列表数据中的下标
                this.mapClickPointId = target.Ke.contentDom.children[0].dataset.id;
                const pointInfo = this.resourceType == 1 ? JSON.parse(sessionStorage.getItem("pointList"))[flag] : JSON.parse(sessionStorage.getItem("otherPointList"))[flag];
                if(this.resourceType == 1){                    
                    this.infoWindow_main.setContent(this.createInfoWindow_scenicPoint(pointInfo));
                }else{
                    this.infoWindow_main.setContent(this.createInfoWindow(pointInfo));
                }
                this.infoWindow_main.open(this.oMap_main, target.getPosition());
            },
            //景点的弹窗内容
            createInfoWindow_scenicPoint(pointInfo) {
                var info = document.createElement("div");
                info.className = "info-contanir";

                var middle = document.createElement("div");
                middle.className = "info-content";

                var htmlStr = ` <div class='info-scenic-img-area'><img style="width:100%;height:100%;border-radius:100%;" src='${pointInfo.url}' /></div>
                                <div class='info-scenic-info'>
                                    <div class='info-scenic-name'>${pointInfo.name}</div>
                                    <div class='info-scenic-dec'>${pointInfo.commentary}</div>
                                </div>`
                middle.innerHTML = htmlStr;

                info.appendChild(middle);

                var btnArea = document.createElement('div');
                btnArea.className = "info-scenic-btns";

                var btn1 = document.createElement('button');
                if(document.querySelector(".main-audio") && !document.querySelector(".main-audio").paused && this.scenicPointSerial === pointInfo.serial){
                    btn1.className = "toPlay playing"
                }else{
                    btn1.className = "toPlay"
                }
                btn1.onclick = this.toPlay;
                btnArea.appendChild(btn1);

                var btn2 = document.createElement('button');
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
                img_other.src = pointInfo.url;
                info_other.appendChild(img_other);
                return info_other;
            },
            toPlay(e) {
                //e.currentTarget.classList.add("playing");
                sessionStorage.setItem("oldSerial",this.scenicPointSerial);

                let currentPointInfo = JSON.parse(sessionStorage.getItem('pointList')).filter(item => item.resource_id === this.mapClickPointId)[0];
                let {url, name, serial, guideUrl, resource_id} = currentPointInfo;
                this.scenicPointImg = url;
                this.scenicPointName = serial + '. ' + name;
                this.scenicPointSerial = serial;
                
                if(!e.currentTarget.classList.contains('playing')){
                    sessionStorage.setItem('currentPoint',JSON.stringify(currentPointInfo));
                    let cau = document.querySelector(".main-audio");
                    if(cau && cau.paused && resource_id == cau.dataset.id){
                        this.playAudio();
                    }else{
                        const lineList = JSON.parse(sessionStorage.getItem('lineList'));
                        let newPlayList = [];
                        if (lineList) {
                            const currLineId = sessionStorage.getItem('lineId');
                            let lineDetailList =  lineList.filter(item => item.lineId === currLineId)[0].lineDetailList;
                            let pidList = lineDetailList.map(item => item.resourceId);
                            if (this.$tool.isExist(this.mapClickPointId, pidList)) {
                                console.log(111)

                                newPlayList = lineDetailList.map(item => {
                                    let url = JSON.parse(sessionStorage.getItem('pointList')).filter(i => i.resource_id === item.resourceId)[0].guideUrl;
                                    return {
                                        aSrc: url,
                                        aId: item.resourceId
                                    }
                                });
                            } else {
                                console.log(222)
                                const pointList = JSON.parse(sessionStorage.getItem('pointList'));
                                let sortList = [...pointList];
                                sortList.sort((a, b) => a.serial - b.serial);
                                let index = sortList.findIndex(item => item.resource_id === this.mapClickPointId);
                                newPlayList = sortList.slice(index).map(item => {
                                    return {
                                        aSrc: item.guideUrl,
                                        aId: item.resource_id
                                    }
                                });
                            }
                        } else {
                            const pointList = JSON.parse(sessionStorage.getItem('pointList'));
                            let sortList = [...pointList];
                            sortList.sort((a, b) => a.serial - b.serial);
                            let index = sortList.findIndex(item => item.resource_id === this.mapClickPointId);
                            newPlayList = sortList.slice(index).map(item => {
                                return {
                                    aSrc: item.guideUrl,
                                    aId: item.resource_id
                                }
                            });
                        }
                        sessionStorage.setItem('playList', JSON.stringify(newPlayList));
                        this.playAudio({
                            _src: guideUrl,
                            _id: resource_id,
                            _type: 4
                        });
                    }
                }
            },
            toDetail() {
                if(document.querySelector(".main-audio")){
                    const status = document.querySelector('.main-audio').paused;
                    this.pauseAudio();
                    let playStatus = {
                        currentTime: document.querySelector('.main-audio').currentTime,
                        totalTime: this.totalTime,
                        status : status
                    }
                    sessionStorage.setItem('playStatus', JSON.stringify(playStatus));
                }
                this.$router.push({
                    name :  'scenic-point-detail'
                });
            },
            //画路线
            drawLine(lineId) { 
                this.oMap_main.remove(this.line);
                this.oMap_main.remove(this.linePointGroups);
                const lineList = this.$store.state.app.lineList;
                let currentLine = lineList.filter(item => item.lineId === lineId)[0];
                let path = currentLine.coordinatesList;
                if(path.length == 0) return;
                let mapPath = [];
                path.forEach(v => {
                    let one = [v.longitude,v.latitude];
                    mapPath.push(one);
                })
                let polyline = new AMap.Polyline({
                    path: mapPath,
                    isOutline: false,
                    strokeColor: "#68A8FC", 
                    strokeOpacity: 1,
                    strokeWeight: 4,
                    // 折线样式还支持 'dashed'
                    strokeStyle: "dashed",
                    // strokeStyle是dashed时有效
                    strokeDasharray: [40, 10],
                    lineJoin: 'round',
                    lineCap: 'round',
                    zIndex: 150
                });
                this.line = polyline;
                this.oMap_main.add(polyline);

                //起点终点
                let points = [mapPath[0],mapPath[mapPath.length-1]];
                let linePoints = [];
                points.forEach((v,i) => {
                    let ic = i == 0 ? '/icon_rise@3x.png' : 'icon_end@3x.png';
                    let linemarker = new AMap.Marker({
                        icon : ic,
                        position: v,
                        offset: new AMap.Pixel(-12, -28),
                    });
                    linePoints.push(linemarker);
                })
                let groups = new AMap.OverlayGroup(linePoints);
                this.linePointGroups = groups;
                this.oMap_main.add(groups);
            }
        }
    }
</script>
