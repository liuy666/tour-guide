<style lang="less">
    #main {
        height:100%;
        width: 100%;
        position: relative;
        #wrapper {
            width: 100%;
            height: 100%;
            // .amap-demo {
            //     height: 100%;
            // }
        }
        .main_view {
            width: 720px;
            height: 500px;
            z-index: 10;
            background-color: orange;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 140px;
            .main_view_header {
                height: 60px;
                background-color: #fff;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .camera {
                    display: flex;
                    flex-direction: row;
                }
            }
            .main_view_footer {
                height: 100px;
                background-color: #fff;
                overflow-x: scroll;
                white-space: nowrap;
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
        //信息窗体
        .info-contanir {
            width: 524px;
            height: 276px;
            padding: 30px 20px;
            box-sizing: border-box;
            background: url(/bg_pop_up@3x.png) no-repeat center / 100% 100%;
            position: relative;
        }
        .info-content {
            display: flex;
            .info-scenic-img-area{
                width: 200px;
                height: 200px;
            }
            .info-scenic-img{
                width: 100%;
                height: 100%;
                border-radius: 100px;
            }
            .info-scenic-info{
                width: calc(~'100% - 220px');
                margin-left: 20px;
                .info-scenic-name {
                    font-size: 30px;
                    color: #333333;
                    font-weight:bold;
                }
                .info-scenic-dec{
                    font-size : 24px;
                    line-height: 32px;
                    margin-top: 4px;
                }
            }
        }
        
        .info-scenic-btns{
            position: absolute;
            right: 24px;
            bottom: 36px;
            button {
                width: 110px;
                height: 56px;
                text-align: center;
                border: none;
                border-radius: 10px;
                color: rgba(255,255,255,0.9);
                font-size: 30px;
                &.toPlay{
                     background: #FE5100;
                }
                &.toDetail{
                    background: #FF8B00;
                    margin-left: 42px;
                }
            }
        }
        
    }
</style>

<template>
    <div id="main">
        <section id="wrapper"></section>
        <!-- <img src="../assets/images/bg.jpg" alt=""  style="position:absolute;left:0;top:0;;height:80%;"/>  -->
        <section class="main_view" v-show="isShow">
            <section class="main_view_header">
                <section class="camera">
                    <button @click="useCamera">智能识别</button>
                    <span>不认识就扫一扫</span>
                </section>
                <section class="weather">空气指数</section>
            </section>
            <router-view />
            <section class="main_view_footer">
                <icon type="success" is-msg @click.native="goto1"></icon>
                <icon type="success" is-msg @click.native="goto2"></icon>
                <icon type="success" is-msg></icon>
                <icon type="success" is-msg></icon>
                <icon type="success" is-msg></icon>
                <icon type="success" is-msg></icon>
            </section>
        </section>
        <section class="toolbars">
            <!-- <div style="float:left;width: 100px;height: 100%;background-color:#ccc;" @click="handlePlay">播放/暂停</div> -->
            <!-- <audio controls style="display:none;">
                <source src="http://hqyatu-navigator.oss-cn-beijing.aliyuncs.com/20181023/e6586ba47dc44b2fb31be240ee7f14e8.mp3?Expires=1540287348&OSSAccessKeyId=LTAIuMC8xUilE1EZ&Signature=qDBw4yqLpye5KXJvsXHnaysFx8Y%3D" type="audio/mpeg" />
                您的浏览器不支持 audio 元素
            </audio>
            <x-button style="float:right;" @click.native="handleClick" :mini="true">菜单</x-button> -->
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
            <div class="list-btn" @click="handleClick" ></div> 
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
    </div>
</template>

<script>
    import { XButton, Icon, XCircle } from 'vux';
    import { setTimeout } from 'timers';
    export default {
        components: {
            XButton,
            Icon,
            XCircle
        },
        mounted() {
            const _self  = this;
            //获取屏幕大小 动态设置不同手机的地图zoom
            const containerWidth = document.querySelector('#wrapper').clientWidth;
            const containerHeight = document.querySelector('#wrapper').clientHeight; 
            let zoom = 0; //地图缩放
            let centerPoint = [105.56826,32.216186];
            if(containerHeight<600){
                zoom = 14.6;
            }else if(containerHeight<700){
                zoom = 14.8;
            }else if(containerHeight<800){
                zoom = 15;
            }else if(containerHeight<900){
                zoom = 15.1;
            }else if(containerWidth > 500 && containerWidth < 800){
                zoom = 15.5;
            }else if(containerWidth > 800){
                zoom = 15.9;
            }

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
                url: './bg.jpg',
                bounds: new AMap.Bounds(
                    [105.554561, 32.201035],
                    [105.600952, 32.234801]
                ),
                zooms:[zoom,17],
                zIndex: 100
            });
            //地图
            const oMap = new AMap.Map('wrapper', {
                showBuildingBlock: true,
                pitchEnable: false,
                buildingAnimation: true,
                rotateEnable: false,
                touchZoomCenter: 1,
                center: [105.56826,32.216186],
                zoom: zoom,
                zooms:[zoom,17],
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

            //发请求请求所有景点的经纬度信息
            //·····
            let pointArr = [[105.570578,32.204367],[105.56693,32.207417],[105.56723,32.209705],[105.562896,32.209051]];
            let nameArr = ['景点1','平襄侯祠','姜维神像','景点4'];
            let flagArr = ['1','2','3','4']; //景点的唯一标识
            function setPoint(point,index) { 
                let num = index + 1;
                let marker = new AMap.Marker({
                    content: "<div class='marker-content' data-flag='"+flagArr[index]+"'><div class='point-icon'>"+num+"</div><div class='point-name'>"+nameArr[index]+"</div></div>",
                    position: point,
                });
                marker.on('click',markerClick);
                //marker.emit('click', {target: marker});
                oMap.add(marker);
            }
            pointArr.forEach(function(value,index){
                setPoint(value,index);
            })
            //点击弹出信息窗体
            function markerClick(e) { 
                if(infoWindow.getPosition() !== undefined &&  infoWindow.getPosition().N == e.target.getPosition().N) {
                    if(infoWindow.getIsOpen()){
                        infoWindow.close();
                    }else{
                        openInfoWindow(e);
                    }
                }else{
                    openInfoWindow(e);
                }
            }
            //自定义信息窗体内容
            function creatInfoWindow(infoArr) {
                var info = document.createElement("div");
                info.className = "info-contanir";

                var middle = document.createElement("div");
                middle.className = "info-content";

                var htmlStr = ` <div class='info-scenic-img-area'><img style="width:100%;height:100%;border-radius:100%;" src='${infoArr[1]}' /></div>
                                <div class='info-scenic-info'>
                                    <div class='info-scenic-name'>${infoArr[0]}</div>
                                    <div class='info-scenic-dec'>${infoArr[2]}</div>
                                </div>`
                middle.innerHTML = htmlStr;

                info.appendChild(middle);

                var btnArea = document.createElement('div');
                btnArea.className = "info-scenic-btns";

                var btn1 = document.createElement('button');
                btn1.className = "toPlay";
                btn1.innerHTML = "解说";
                btn1.onclick = toPlay;
                btnArea.appendChild(btn1);

                var btn2 = document.createElement('button');
                btn2.className = "toDetail";
                btn2.innerHTML = "详情";
                btn2.onclick = toDetail;
                btnArea.appendChild(btn2);
                
                info.appendChild(btnArea);
                return info;

            }
            //景点弹窗播放
            function toPlay() {
                
            }
            //景点弹窗详情
            function toDetail() {
                _self.$router.push('scenic-point-detail');
            }
            //请求数据展示对应信息窗体内容
            function openInfoWindow(e) {
                 let flag = e.target.Je.contentDom.children[0].getAttribute("data-flag");//当前景点的唯一标识
                //发请求请求景点详细数据
                //·······景点名称 景点图片 景点解说  景点音频标识
                //景点信息数组
                let infoArr = ["平襄侯祠","http://tpc.googlesyndication.com/simgad/5843493769827749134","汶川大地震第一个地震遗址保护纪念地，位于四川省广元市青川县。","001"];
                //自定义信息窗体内容
                infoWindow.setContent(creatInfoWindow(infoArr));
                infoWindow.open(oMap, e.target.getPosition());
            }
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
            oMap.on('moveend', mapDragged);

        },
        data () {
            return {
                isShow: false,
                isOpenDetail: false,
                isEnd: false,
                isAuto: false,//是否自动播放
                isPlay: false,//是否播放状态
                audiopercent: 100,
                scenicImg: 'https://tpc.googlesyndication.com/simgad/5843493769827749134',
                scenicPointName: '1.平襄侯祠'
            }
        },
        methods: {
            handleClick() {
                this.isShow = !this.isShow;
                this.$router.push({
                    name: this.isShow ? 'scenic-spot' : 'main'
                });
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
            }
        }
    }
</script>
