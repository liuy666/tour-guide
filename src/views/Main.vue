<style lang="less" scoped>
    #main {
        height:100%;
        width: 100%;
        position: relative;
        .wrapper {
            width: 100%;
            height: 100%;
            // .amap-demo {
            //     height: 100%;
            // }
        }
        .main_view {
            width: 720px;
            height: 500px;
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
        .toolbars {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 40px;
            width: 90%;
            height: 80px;
            background-color: aqua;
        }
        .introButton {
            position: absolute;
            right: 40px;
            top: 40px;
            width: 100px;
            height: 100px;
        }
        .introDetail {
            background-color: #ccc;
            width: 100%;
            height: 600px;
            position: absolute;
            bottom: 70px;
            left: 30px;
            p {
                font-size: 30px;
            }
        }
        .xxx {
            position: absolute;
            right: 40px;
            top: 140px;
            width: 100px;
            height: 100px;
        }
    }
</style>

<template>
    <div id="main">
        <section class="wrapper">
            <el-amap 
                vid="amap" 
                :zoom="zoom"
                :zooms="zooms"
                :center="center" 
                class="amap-demo"
                viewMode="3D"
                :touchZoomCenter="1"
                :rotateEnable="false"
                :events="events">
            </el-amap>
        </section>
        <!-- <img src="../assets/images/bg.jpg" alt=""  style="position:absolute;left:0;top:0;;height:80%;"/> -->
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
            <div style="float:left;width: 100px;height: 100%;background-color:#ccc;" @click="handlePlay">播放/暂停</div>
            <audio controls style="display:none;">
                <source src="http://hqyatu-navigator.oss-cn-beijing.aliyuncs.com/20181023/e6586ba47dc44b2fb31be240ee7f14e8.mp3?Expires=1540287348&OSSAccessKeyId=LTAIuMC8xUilE1EZ&Signature=qDBw4yqLpye5KXJvsXHnaysFx8Y%3D" type="audio/mpeg" />
                您的浏览器不支持 audio 元素
            </audio>
            <x-button style="float:right;" @click.native="handleClick" :mini="true">菜单</x-button>
        </section>
        <section>
            <button @click="seeIntroduce" class="introButton">简介</button>
        </section>
        <section>
            <button @click="gotodetail" class="xxx">测试连播</button>
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
    // import { amapManager } from 'vue-amap';
    import { XButton, Icon  } from 'vux';
    export default {
        components: {
            XButton,
            Icon
        },
        data () {
            return {
                isShow: false,
                isOpenDetail: false,
                isEnd: false,
                // amapManager,
                zoom: 14.54,
                zooms:[14.54,16],
                center: [105.570825,32.216881],
                events: {
                    init: (oMap) => {
                        const _self = this;
                        function showInfoDragend(){
                            console.log('拖拽地图结束');
                            console.log(oMap.getBounds());
                            console.log(oMap.getSize());
                        }
                        (function lockMapBounds() {
                            var bounds = new AMap.Bounds([105.554561, 32.201035],[105.600952, 32.234801]);
                            oMap.setLimitBounds(bounds);
                        })()
                        oMap.on('dragend', showInfoDragend);
    
                        //手绘地图图层
                        let imageLayer = new AMap.ImageLayer({
                            url: '/bg.jpg',
                            bounds: new AMap.Bounds(
                                    [105.554561, 32.201035],
                                    [105.600952, 32.234801]
                            ),
                            zooms:[14.54,16],
                            zIndex: 100
                        });
                        oMap.add(imageLayer);
                        oMap.setFeatures([]);
                        oMap.setMapStyle("amap://styles/dark");
                        //景点标记+信息窗体 
                        let infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)});
                        let infoContent = [
                            "<div class='info-container'>",
                                "<div class='info-content' style='overflow:hidden;'>",
                                    "<img src='/point.png' style='width:40px;height:40px;float:left;' />",
                                    "<div style='float:left;'><div>景点名字</div><div>这里是景点的描述</div></div>",
                                "</div>",
                                "<div class='btns-area' style='text-align:center;'>",
                                    "<button>解说</button>",
                                    "<button id='detail-btn'>详情</button>",
                                "</div>",
                            "</div>"
                        ]
                        //发请求请求所有景点的经纬度信息
                        //·····
                        let pointArr = [[105.570578,32.204367],[105.56693,32.207417],[105.56723,32.209705],[105.562896,32.209051]];
                        let nameArr = ['景点1','景点2','景点3','景点4'];
                        let flagArr = ['1','2','3','4']; //景点的唯一标识
                        function setPoint(point,index) { 
                            let num = index + 1;
                            let marker = new AMap.Marker({
                                content: "<div class='marker-content' data-flag='"+flagArr[index]+"'><div style='width: 30px;height: 30px;background: url(/point.png) no-repeat center / 100% 100%;text-align: center;color: red;'>"+num+"</div><div>"+nameArr[index]+"</div></div>",
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
                            let flag = e.target.Uh.contentDom.children[0].getAttribute("data-flag");//当前景点的唯一标识
                            //发请求请求景点详细数据
                            //·······
                            infoWindow.setContent(infoContent.join(""));
                            infoWindow.open(oMap, e.target.getPosition());
                            
                            _self.$nextTick(() => {
                                let a = document.querySelector("#detail-btn");
                                a.addEventListener('click',function(){
                                    _self.$router.push('scenic-point-detail');
                                })
                            })
                        }

                        //定位
                        /*var options = {
                            'showButton': true,//是否显示定位按钮
                            'buttonPosition': 'LB',//定位按钮的位置
                            'buttonOffset': new AMap.Pixel(10, 20),//定位按钮距离对应角落的距离
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
                            oMap.addControl(geolocation);
                            geolocation.getCurrentPosition()
                        });*/
                    },
                }
            }
        },
        methods: {
            handleClick() {
                this.isShow = !this.isShow;
                this.$router.push('scenic-spot');
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
