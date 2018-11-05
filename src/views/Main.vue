<style lang="less">
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
                    overflow: hidden;
                    #use-camera {
                        width: 122px;
                        height: 142px;
                        opacity: 0;
                    }
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
                        font-size: 24px;
                        line-height: 34px;
                        font-weight: 500;
                        display: flex;
                        flex-direction: column;
                        margin-top: 31px;
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
                    height: 100px;
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
            &.FK{
                background-image: url('../assets/images/icon_feedback@3x.png');
            }
            &.DW{
                background-image: url('../assets/images/icon_static@3x.png');
            }
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
        .xxx {
            position: absolute;
            right: 40px;
            top: 140px;
            width: 100px;
            height: 100px;
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
        
        
    }
</style>

<template>
    <div id="main">
        <loading :show="isShowLoading" :text="loadText" position="absolute"></loading>
        <section id="wrapper"></section>
        <section class="main_view " v-show="isShowMenu">
            <section class="main_view_header">
                <section class="camera">
                    <input type="file" capture="camera" id="use-camera" accept="image/*" @change="useCamera" />
                </section>
                <p>遇见全世界的美</p>
                <section class="weather">
                    <section class="content">
                        <span>22~15℃</span>
                        <span>多云</span>
                    </section>
                    <span><img src="../assets/images/partly_cloudy_day@2x.png" alt="加载中..."></span>
                </section>
            </section>
            <router-view />
            <ul class="main_view_footer">
                <li v-for="menu in menuList" :key="menu.id" :data-remark="menu.remark" >
                    <img :src="menu.graySrc" alt="" />
                    <span>{{ menu.name }}</span>
                </li>
            </ul>
        </section>
        <section class="toolbars">
            <!-- <div style="float:left;width: 100px;height: 100%;background-color:#ccc;" @click="handlePlay">播放/暂停</div> -->
            <!-- <audio controls style="display:none;">
                <source src="http://hqyatu-navigator.oss-cn-beijing.aliyuncs.com/20181023/e6586ba47dc44b2fb31be240ee7f14e8.mp3?Expires=1540287348&OSSAccessKeyId=LTAIuMC8xUilE1EZ&Signature=qDBw4yqLpye5KXJvsXHnaysFx8Y%3D" type="audio/mpeg" />
                您的浏览器不支持 audio 元素
            </audio> -->
            <div class="player-control-btn-area">
                <x-circle
                    :percent="audiopercent"
                    :stroke-width="2"
                    :trail-width="6"
                    :stroke-color="'#FE5100'"
                    trail-color="#ffffff">
                    <div class="player-img-area"><img style="width:100%;height:100%;border-radius: 100%;" :src="scenicImg" /></div>
                </x-circle>
            </div>
            <div class="scenic-point-name-area">
                {{scenicPointName}}
            </div>
            <div class="list-btn" @click="openMenu" ></div> 
        </section>
        <section class="function-area-left">
            <div class="function-btn FK"></div>
            <div class="function-btn DW"></div>
        </section>
        <section class="function-area-right">
            <div class="function-btn JJ"></div>
            <div class="function-btn QJ"></div>
            <div class="function-btn ZD" :class="isAuto ? '' : 'NO'"></div>
        </section>
        <section v-show="isOpenDetail" class="introDetail">
            <p @click="openMap">景区地址：四川省广元市剑门关 -- <a href="qqmap://map/search?keyword=四川省广元市剑门关&region=广元&referer=F7UBZ-CH6R2-TNVUO-CCN73-ZA5LO-LZBO4">试试打开腾讯地图App（只能在App或手机浏览器中生效，微信内置浏览器也不行）</a></p>
            <p @click="openMap">景区地址：四川省广元市剑门关 -- <a href="https://apis.map.qq.com/uri/v1/search?keyword=四川省广元市剑门关&region=广元&referer=F7UBZ-CH6R2-TNVUO-CCN73-ZA5LO-LZBO4">试试打开腾讯地图App（h5调用）</a></p>
            <p @click="openMap">景区地址：四川省广元市剑门关 -- <a href="https://uri.amap.com/search?keyword=四川省广元市剑门关&city=310000&view=map&src=test&coordinate=gaode&callnative=1">试试打开高德地图App</a></p>
            <p @click="openMap">景区地址：四川省广元市剑门关 -- <a href="http://api.map.baidu.com/geocoder?address=四川省广元市剑门关&output=html&src=webapp.baidu.openAPIdemo">试试打开百度地图App--方式1：web端--地址解析</a></p>
            <p @click="openMap">景区地址：四川省广元市剑门关 -- <a href="bdapp://map/geocoder?src=andr.baidu.openAPIdemo&address=四川省广元市剑门关">试试打开百度地图App--方式2：安卓端--地址解析</a></p>
            <p @click="openMap">景区地址：四川省广元市剑门关 -- <a href="baidumap://map/geocoder?address=四川省广元市剑门关&src=ios.baidu.openAPIdemo">试试打开百度地图App--方式3：ios端--地址解析</a></p>
        </section>

        <toast v-model="isTips" type="cancel" :text="tipsText" :is-show-mask="true" width="8.2em"></toast>
    </div>
</template>

<script>
    import { XButton, Icon, XCircle, Toast, Loading} from 'vux';
    import { setTimeout } from 'timers';
    export default {
        components: {
            XButton,
            Icon,
            XCircle,
            Toast,
            Loading
        },
        mounted() {
            //处理获取到的要用到的景区信息  景区手绘图路径、景区手绘图两点坐标、景区zoom、地图中心点
            const scenicInfo = JSON.parse(sessionStorage.getItem("currentScenic"));
            this.sceneryId = scenicInfo.scenery_id;
            const scenicImg = './qxgz.jpg',
                  imgRightTop = [scenicInfo.northeast_lng,scenicInfo.northeast_lat],
                  imgLeftBottom = [scenicInfo.southwest_lng,scenicInfo.southwest_lat],
                  mapZoom = scenicInfo.zoom,
                  centerPoint = [scenicInfo.longitude,scenicInfo.latitude];

            console.log('右上：'+imgRightTop+'左下:'+imgLeftBottom);
            const _self  = this;
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
                url: scenicImg,
                bounds: new AMap.Bounds(
                    imgLeftBottom,
                    imgRightTop
                ),
                zooms:[zoom,19],
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
                zooms:[zoom,19],
                viewMode: '3D',
                layers: [
                    new AMap.TileLayer(),
                    imageLayer
                ]
            });
            // oMap.setFeatures([]);
            // oMap.setMapStyle("amap://styles/dark");

            //地图信息窗体
            let infoWindow = new AMap.InfoWindow({
                isCustom: true,  //使用自定义窗体
                offset: new AMap.Pixel(offsetx, -30)
            });

            this.oMap_main = oMap;
            this.infoWindow_main = infoWindow;

            this.getScenicPointList();
            
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

        },
        data () {
            return {
                sceneryId: '',
                oMap_main: {},
                infoWindow_main: {},
                resourceType: 1,//景区资源类型 默认1位景点
                isTips: false,
                tipsText: '请求失败',
                isShowMenu: false,
                isOpenDetail: false,
                isEnd: false,
                isAuto: false,//是否自动播放
                isPlay: false,//是否播放状态
                audiopercent: 100,
                scenicImg: 'https://tpc.googlesyndication.com/simgad/5843493769827749134',
                scenicPointName: '1.平襄侯祠',
                menuList: [],
                loadText: '',
                isShowLoading: false,
            }
        },
        methods: {
            // 打开图标菜单
            async openMenu() {
                if (!this.isShowMenu) {
                    this.isShowLoading = true;
                    const getMenu = await this.$http.get(this.$base + '/hqyatu-navigator/app/resource/getSelectMenue', {
                        sceneryId: '1057570712933412865'
                    });
                    if (!getMenu) {
                        this.isShowLoading = false;
                        return;
                    }
                    // console.log(getMenu);
                    let menuList = [];
                    getMenu.menue.forEach(item => {
                        menuList.push({
                            name: item.remark,
                            id: item.id,
                            remark: item.paramKey,
                            colorSrc: item.iconUrl,
                            graySrc: item.iconUrl1
                        });
                    });
                    this.menuList = [].concat(menuList);
                }
                this.isShowMenu = !this.isShowMenu;
                this.$router.push({
                    name: this.isShowMenu ? 'scenic-spot' : 'main'
                });
                this.isShowLoading = false;
            },
            goto1() {
                this.$router.push('scenic-spot');
            },
            goto2() {
                this.$router.push('scenic-line');
            },
            useCamera() {
                console.log(1)
                this.$router.push('use-camera');
            },
            seeIntroduce() {
                this.isOpenDetail = !this.isOpenDetail;
            },
            openMap() {
                console.log(6);
            },
            handlePlay() {
                const au = document.querySelector('audio');
                au.paused ? au.play() : au.pause();
            },
            gotodetail() {
                this.$router.push('scenic-detail');
            },


            //地图相关方法
            //请求景区资源列表
            async getScenicPointList() {
                let _self = this;
                const hostname = window.location.hostname;
                const pointList = await this.$http.get(this.$base + `/hqyatu-navigator/app/resource/list?sceneryId=${this.sceneryId}&resourceType=${this.resourceType}&url=www.qxgz.com`);
                //const pointList = await this.$http.get(this.$base + `/hqyatu-navigator/app/resource/list?sceneryId=${this.sceneryId}&resourceType=${this.resourceType}&url=${hostname}`);
                if(!pointList){
                    this.isTips = true;
                    return;
                }
                let pointLnglat = [], pointName = [], pointflag = [], pointSerial = [];
                if(pointList.page.list && pointList.page.list.length && pointList.page.list.length>0){
                    sessionStorage.setItem('pointList',JSON.stringify(pointList.page.list));
                    pointList.page.list.forEach((v,i) => {
                        pointLnglat.push([v.longitude,v.latitude])
                        pointName.push(v.name)
                        pointflag.push(i)
                        if(v.serial){
                            pointSerial.push(v.serial)
                        }
                    })
                }
                let pointLnglat1 = [[104.839214,459624],[104.840214,32.459624]];
                function setPoint(point,index) { 
                    let num = _self.resourceType == 1 ? pointSerial[index] : '';
                    let marker = new AMap.Marker({
                        content: "<div class='marker-content' data-flag='"+pointflag[index]+"'><div class='point-icon'>"+num+"</div><div class='point-name'>"+pointName[index]+"</div></div>",
                        position: point,
                    });
                    marker.on('click',_self.markerClick);
                    _self.oMap_main.add(marker);
                }
                pointLnglat1.forEach(function(value,index){
                    setPoint(value,index);
                })
                
            },
            markerClick(e) {
                if(this.infoWindow_main.getPosition() !== undefined &&  this.infoWindow_main.getPosition().N == e.target.getPosition().N) {
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
                this.$router.push('scenic-point-detail');
            }
        }
    }
</script>
