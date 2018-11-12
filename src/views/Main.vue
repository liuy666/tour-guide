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
            // .v-enter {
            //     opacity: 0;
            // }
            // .v-enter-active {
            //     transition: all 0.5s ease;
            // }
            // .v-leave {
            //     opacity: 1;
            // }
            // .v-leave-active {
            //     transition: all .5s ease;
            // }
            // .v-leave-to {
            //     opacity: 0;
            // }
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
        }
        .point-icon{
            width: 100px;
            height: 52px;
            line-height: 45px;
            margin-left: -24px;
            background: url(/icon_scenic@3x.png) no-repeat center / auto 100%;
            text-align: center;
            color: #fff;
        }
        .point-icon.player{
            background: url(/icon_use@3x.png) no-repeat center / auto 100%;
        }
        .point-name{
            white-space: nowrap;
            margin-left: -45%;
            text-align: center;
            border-radius: 16px;
            background: rgba(0,0,0,0.3);
            color: rgba(255,255,255,0.8);
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
                        <span>22~15℃</span>
                        <span>多云</span>
                        <span>空气指数</span>
                        <span>优:38</span>
                        <span>22~15℃</span>
                        <span>多云</span>
                        <span>空气指数</span>
                        <span>优:38</span>
                    </section>
                    <span><img src="../assets/images/partly_cloudy_day@2x.png" alt="加载中..."></span>
                </section>
            </section>
            <!-- <transition> 
                <router-view></router-view>
            </transition> -->
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
                    景区地址： <span class="font-color-666">{{scenicAddress}}</span>
                </div>
                <div class="scenic-time">
                    开放时间： <span class="font-color-666">{{scenicOpenTime}}</span>
                </div>
            </div>
            <div class="scenic-dec">
                <div class="dec-title">景区介绍</div>
                <div class="dec-content font-color-888">{{scenicDec}}</div>
            </div>
            <!-- <p @click="openMap">景区地址：四川省广元市剑门关 -- <a href="qqmap://map/search?keyword=四川省广元市剑门关&region=广元&referer=F7UBZ-CH6R2-TNVUO-CCN73-ZA5LO-LZBO4">试试打开腾讯地图App（只能在App或手机浏览器中生效，微信内置浏览器也不行）</a></p>
            <p @click="openMap">景区地址：四川省广元市剑门关 -- <a href="https://apis.map.qq.com/uri/v1/search?keyword=四川省广元市剑门关&region=广元&referer=F7UBZ-CH6R2-TNVUO-CCN73-ZA5LO-LZBO4">试试打开腾讯地图App（h5调用）</a></p>
            <p @click="openMap">景区地址：四川省广元市剑门关 -- <a href="https://uri.amap.com/search?keyword=四川省广元市剑门关&city=310000&view=map&src=test&coordinate=gaode&callnative=1">试试打开高德地图App</a></p>
            <p @click="openMap">景区地址：四川省广元市剑门关 -- <a href="http://api.map.baidu.com/geocoder?address=四川省广元市剑门关&output=html&src=webapp.baidu.openAPIdemo">试试打开百度地图App--方式1：web端--地址解析</a></p>
            <p @click="openMap">景区地址：四川省广元市剑门关 -- <a href="bdapp://map/geocoder?src=andr.baidu.openAPIdemo&address=四川省广元市剑门关">试试打开百度地图App--方式2：安卓端--地址解析</a></p>
            <p @click="openMap">景区地址：四川省广元市剑门关 -- <a href="baidumap://map/geocoder?address=四川省广元市剑门关&src=ios.baidu.openAPIdemo">试试打开百度地图App--方式3：ios端--地址解析</a></p> -->
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
    import { mapActions, mapMutations } from 'vuex';
    export default {
        components: {
            XButton,
            Icon,
            XCircle,
            Toast,
            Loading
        },
        created() {
            console.log(this.$route)
        },
        async mounted() {
            const _self = this;
            const query = this.$route.query;
            if (query.sid) {
                const scenicList = await this.$http.get(this.$base + '/hqyatu-navigator/app/scenery/list');
                if (!scenicList) {
                    this.isTips = true;
                    return;
                }
                let currentScenic = scenicList.data.filter(item => item.scenery_id === query.sid)[0];
                sessionStorage.setItem('currentScenic',JSON.stringify(currentScenic));
            }
            //处理获取到的要用到的景区信息  景区手绘图路径、景区手绘图两点坐标、景区zoom、地图中心点
            const scenicInfo = JSON.parse(sessionStorage.getItem("currentScenic"));
            
            // 底部景区简介弹窗初始化移至此处
            this.scenicImg = scenicInfo.accessCoverUrl;
            this.scenicName = scenicInfo.name;
            this.scenicLevel = scenicInfo.level;
            this.scenicAddress = scenicInfo.address;
            this.scenicOpenTime = scenicInfo.opening_time;
            this.scenicDec = scenicInfo.introduce;

            this.sceneryId = scenicInfo.scenery_id;
            const scenicBgImg = './qxgz.jpg',
                  imgRightTop = [scenicInfo.northeast_lng,scenicInfo.northeast_lat],
                  imgLeftBottom = [scenicInfo.southwest_lng,scenicInfo.southwest_lat],
                  mapZoom = scenicInfo.zoom,
                  centerPoint = [scenicInfo.longitude,scenicInfo.latitude];
            console.log("中心点：" + centerPoint);
            console.log('右上：'+imgRightTop+'左下:'+imgLeftBottom);
            
            //获取屏幕大小 动态设置不同手机的地图zoom
            const containerWidth = document.querySelector('#wrapper').clientWidth;
            const containerHeight = document.querySelector('#wrapper').clientHeight; 
            let zoom = 0,maxZoom = 0; //地图缩放
            if(containerHeight<600){
                zoom = mapZoom;
            }else if(containerHeight<700){
                zoom = mapZoom+0.2;
            }else if(containerHeight<800){
                zoom = mapZoom+0.4;
            }else if(containerHeight<900){
                zoom = mapZoom+0.5;
            }else if(containerWidth > 500 && containerWidth < 800){
                zoom = mapZoom+0.9;
            }else if(containerWidth > 800){
                zoom = mapZoom+1.3;
            }
            maxZoom = zoom+2;
            if(zoom>17) maxZoom=19;
            if(zoom>19) zoom=19;

            let offsetx = 4;//信息窗体偏移
            if(containerWidth > 600 && containerWidth < 800){
                offsetx = 12;
            }else if(containerWidth > 800 && containerWidth < 1000) {
                offsetx = 14;
            }else if(containerWidth > 1000) {
                offsetx = 16;
            }

            //地图图片图层
            const imageLayer = new AMap.ImageLayer({
                url: scenicBgImg,
                bounds: new AMap.Bounds(
                    imgLeftBottom,
                    imgRightTop
                ),
                //zooms:[zoom,maxZoom],
                zooms:[16,19],
                zIndex: 100
            });
            //地图
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
            // oMap.setFeatures([]);
            // oMap.setMapStyle("amap://styles/dark");
            oMap.on('click',function(e){
                console.log(e.lnglat.getLng()+','+e.lnglat.getLat());
            })

            //地图信息窗体
            let infoWindow = new AMap.InfoWindow({
                isCustom: true,  //使用自定义窗体
                offset: new AMap.Pixel(offsetx, -30)
            });

            this.oMap_main = oMap;
            this.infoWindow_main = infoWindow;

            this.getScenicPointList(null, query);
            
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
                }
            }
            AMap.plugin(["AMap.Geolocation"], function() {
                var geolocation = new AMap.Geolocation(options);
                _self.oMap_main.addControl(geolocation);
                //geolocation.getCurrentPosition()
                geolocation.on('complete',function(GeolocationResult) {
                    document.querySelector(".currentPosition").value = GeolocationResult.position;
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
                resourceType: 1, // 景区资源类型 默认 1 -- 景点
                isTips: false,
                tipsText: '请求失败',
                isShowMenu: false,
                isOpenDetail: false,
                isEnd: false,
                isAuto: true,//是否自动播放
                audioPercent: 0,
                scenicPointImg: '',
                scenicPointName: '',
                menuList: [],
                loadText: '',
                isShowLoading: false,
                isPlayed: false,
                timer: '',
                totalTime: '',
                currentScenicId: '',
                markers: [],
            }
        },
        watch: {
            // 播放进度监听
            audioPercent(val) {
                if (val >= 4) {
                    const au = document.querySelector('.main-audio');
                    clearInterval(this.timer);
                    if (!au.paused || !au.ended) {
                        au.pause();
                    }
                    let hasPlayList = JSON.parse(sessionStorage.getItem('hasPlayList'));
                    console.log(au.dataset)
                    hasPlayList.push(au.dataset.id);
                    sessionStorage.setItem('hasPlayList', JSON.stringify(hasPlayList));
                    this.audioPercent = 0;
                    this.timer = '';
                    this.isPlayed = false;
                    if (this.isAuto) {
                        const currentAudioContainer = document.querySelector('.toolbars');
                        currentAudioContainer.removeChild(au);
                        let playList = this.getPlayList();
                        if (!playList.length) {
                            console.log('是否从头播')
                            return;
                        }
                        this.playAudio({
                            src: playList[0].guideUrl,
                            id: playList[0].resource_id
                        });
                        this.scenicPointImg = playList[0].url;
                        this.scenicPointName = playList[0].serial + '. ' + playList[0].name;
                        sessionStorage.setItem('currentPoint',JSON.stringify(playList[0]));
                    }
                }
            }
        },        
        methods: {
            // 打开图标菜单
            async openMenu() {
                if (!this.isShowMenu) {
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

                    console.log(getListAndWheather);

                    if (!getListAndWheather) {
                        this.isShowLoading = false;
                        return;
                    }

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
                    })
                } else {
                    // 菜单页面关闭后所有图标重置为灰色图片
                    const _lis = document.querySelectorAll('.main_view_footer li'),
                          _colorSrcList = JSON.parse(sessionStorage.getItem('colorSrcList'));
                    for (let li of _lis) {
                        li.firstElementChild.src = _colorSrcList.filter(item => item.mark === li.dataset.mark)[0].graySrc;
                    }
                }
                this.isShowMenu = !this.isShowMenu;

                // 默认跳转到景点列表
                if (this.isShowMenu) {
                    this.$router.push({
                        name: 'scenic-spot',
                        params: {
                            sceneryId: this.sceneryId
                        }
                    });
                } else {
                    this.$router.push({
                        name: 'main'
                    });
                }
                this.isShowLoading = false;
            },
            // 点击图标加载对应景区资源
            gotoWhere(remark, value) {
                console.log(remark);
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
                switch (remark) {
                    case 'resource_point':
                        this.getScenicPointList(value);
                        this.$router.push({
                            name: 'scenic-spot',
                            params: {
                                sceneryId: this.sceneryId
                            }
                        });
                        break;
                    case 'resource_line':
                        this.getScenicPointList(1);
                        this.getLineList({
                            _this: this,
                            sceneryId: this.sceneryId
                        });
                        this.$router.push({name: 'scenic-line'});
                        break;
                    default:
                        this.getScenicPointList(value);
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
                'saveResourceList'
            ]),
            // 初始化音频播放
            playAudio(options) {
                const mainAudio = document.querySelector('.main-audio');
                if (mainAudio && mainAudio.paused) {
                    mainAudio.play();
                } else {
                    let src = '',
                        id = '';
                    if (options) {
                        src = options.src;
                        id = options.id;
                    } else {
                        // let sortList = JSON.parse(sessionStorage.getItem('pointList'));
                        // sortList.sort((a, b) => a.serial - b.serial);
                        let sortList = this.getPlayList();
                        src = sortList[0].guideUrl;
                        id = sortList[0].resource_id;
                    }
                    const audioContainer = document.querySelector('.toolbars');
                    let audioDom = document.createElement('audio'),
                        sourceDom = document.createElement('source');
                    sourceDom.type = 'audio/mpeg';
                    sourceDom.src = src;
                    audioDom.dataset.id = id;
                    audioDom.appendChild(sourceDom);
                    audioDom.classList.add('main-audio');
                    audioDom.style.display = 'none';
                    audioContainer.appendChild(audioDom);
                    audioDom.oncanplay = (e) => {
                        const _audioDom = e.target;
                        this.totalTime = _audioDom.duration;
                        console.log(this.totalTime)
                        _audioDom.play();
                    }
                    audioDom.onplay = (e) => {
                        this.changeProgress();
                    }
                }
                this.isPlayed = true;
            },
            // 暂停播放
            pauseAudio() {
                console.log(this.timer)
                clearInterval(this.timer);
                this.timer = '';
                document.querySelector('.main-audio').pause();
                this.isPlayed = false;
            },
            // 获取未播放过的音频列表
            getPlayList() {
                let _sortList = JSON.parse(sessionStorage.getItem('pointList')),
                    _hasPlayList = JSON.parse(sessionStorage.getItem('hasPlayList'));
                _sortList.sort((a, b) => a.serial - b.serial);
                let notPlayList = _sortList.filter(item => {
                    return !this.$tool.isExist(item.resource_id, _hasPlayList);
                });
                return notPlayList;
            },
            // 播放进度圆环
            changeProgress() {
                this.timer = setInterval(() => {
                    let mid = this.audioPercent * 10;
                    mid += 1;
                    mid = mid / 10;
                    this.audioPercent = mid;
                },this.totalTime);
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
                this.isOpenDetail = !this.isOpenDetail;
            },
            // 自动连播切换
            changeAuto() {
                this.isAuto = !this.isAuto;
            },

            //地图相关方法
            //请求景区资源列表
            async getScenicPointList(resourceType, query) {
                resourceType = resourceType || this.resourceType;
                let _self = this;
                _self.markers = [];
                const pointList = await this.$http.get(this.$base + `/hqyatu-navigator/app/resource/list?sceneryId=${this.sceneryId}&resourceType=${resourceType}`);

                if(!pointList){
                    this.isTips = true;
                    return;
                }

                let pointLnglat = [], pointName = [], pointflag = [], pointSerial = [];
                if(pointList.page.list && pointList.page.list.length && pointList.page.list.length>0){
                    //设置默认显示(第一个景点的图片和名字) 如果通过二维码扫码进入页面则使用指定景点
                    if(resourceType == 1) {
                        if (query && query.pid) {
                          const qrcode_point = pointList.filter(item => item.resource_id === query.pid)[0];
                            this.scenicPointImg = qrcode_point.url;
                            this.scenicPointName = qrcode_point.serial + '. ' + qrcode_point.name;
                            sessionStorage.setItem("currentPoint",JSON.stringify(qrcode_point));
                            this.playAudio({
                                src: qrcode_point.guideUrl,
                                id: qrcode_point.resource_id
                            });
                        } else {
                            this.scenicPointImg = pointList.page.list[0].url;
                            this.scenicPointName = pointList.page.list[0].serial + '. ' + pointList.page.list[0].name;
                            sessionStorage.setItem("currentPoint",JSON.stringify(pointList.page.list[0]));
                        }
                        sessionStorage.setItem('pointList',JSON.stringify(pointList.page.list));
                    } else {
                        this.saveResourceList(pointList.page.list);
                    }

                    sessionStorage.setItem('hasPlayList',JSON.stringify([]));
                    pointList.page.list.forEach((v,i) => {
                        pointLnglat.push([v.longitude,v.latitude])
                        pointName.push(v.name)
                        pointflag.push(i)
                        if(v.serial){
                            pointSerial.push(v.serial)
                        }

                    });
                }
                //地图画点
                let pointLnglat1 = [[104.839214,32.459624],[104.840214,32.459624]];
                //用覆盖物群组的方式添加多个点标记 方便移除
                function setPoint(point,index) { 
                    let num = _self.resourceType == 1 ? pointSerial[index] : '';
                    let marker = new AMap.Marker({
                        content: "<div class='marker-content' data-flag='"+pointflag[index]+"'><div class='point-icon'>"+num+"</div><div class='point-name'>"+pointName[index]+"</div></div>",
                        position: point,
                    });
                    marker.on('click',_self.markerClick);
                    //_self.oMap_main.add(marker);
                    _self.markers.push(marker);
                }
                pointLnglat1.forEach(function(value,index){
                    setPoint(value,index);
                })
                let overlayGroups = new AMap.OverlayGroup(_self.markers);
                this.pointGroups = overlayGroups;
                this.oMap_main.add(overlayGroups);
            },
            markerClick(e) {
                if(this.infoWindow_main.getPosition() !== undefined && this.infoWindow_main.getPosition().O == e.target.getPosition().O && this.infoWindow_main.getPosition().N == e.target.getPosition().N) {
                    if(this.infoWindow_main.getIsOpen()){
                        this.infoWindow_main.close();
                    }else{
                        this.openInfoWindow(e);
                    }
                }else{
                    this.openInfoWindow(e);
                }
            },
            openInfoWindow(e) {
                let flag = e.target.Je.contentDom.children[0].getAttribute("data-flag");//当前点在点列表数据中的下标
                const pointInfo = JSON.parse(sessionStorage.getItem("pointList"))[flag];
                sessionStorage.setItem('currentPoint',JSON.stringify(pointInfo));
                
                if(this.resourceType == 1){
                    this.scenicPointImg = pointInfo.url;
                    this.scenicPointName = pointInfo.serial+'.'+pointInfo.name;
                    this.infoWindow_main.setContent(this.createInfoWindow_scenicPoint(pointInfo));
                }else{
                    this.infoWindow_main.setContent(this.createInfoWindow(pointInfo));
                }
                this.infoWindow_main.open(this.oMap_main, e.target.getPosition());
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
                btn1.className = "toPlay";
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
                img_other.src = pointInfo.url;
            },
            toPlay() {

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
                    //sessionStorage.setItem("isPlayed",true);
                }else{
                    //sessionStorage.setItem("isPlayed",false);
                }
                this.$router.push({
                    name :  'scenic-point-detail'
                });
            },
            //画路线
            drawLine() {

            }
        }
    }
</script>
