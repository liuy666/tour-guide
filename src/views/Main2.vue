<style lang="less" scoped>
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
        <section id="wrapper"></section>
        <!-- <img src="../assets/images/bg.jpg" alt=""  style="position:absolute;left:0;top:0;;height:80%;"/> -->
        <!-- <section class="main_view" v-show="isShow">
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
        </section> -->
    </div>
</template>

<script>
    import { XButton, Icon  } from 'vux';
    import { setTimeout } from 'timers';
    export default {
        components: {
            XButton,
            Icon
        },
        mounted() {

            const imageLayer = new AMap.ImageLayer({
                url: './bg.jpg',
                bounds: new AMap.Bounds(
                    [105.554561, 32.201035],
                    [105.600952, 32.234801]
                ),
                zooms:[14,16],
                zIndex: 100
            });
            const map = new AMap.Map('wrapper', {
                showBuildingBlock: true,
                pitchEnable: false,
                buildingAnimation: true,
                rotateEnable: false,
                touchZoomCenter: 1,
                center: [105.570825,32.216881],
                zoom: 15,
                zooms:[14,16],
                viewMode: '3D',
                layers: [
                    new AMap.TileLayer(),
                    imageLayer
                ]
            });
            // map.setFeatures([]);
            // map.setMapStyle("amap://styles/dark");
            // function lockMapBounds() {
            //     const bounds = new AMap.Bounds([105.554561, 32.201035],[105.600952, 32.234801]);
            //     map.setLimitBounds(bounds);
            // }
            // lockMapBounds();
            function showInfoDragging(e) {
                const bounds = map.getBounds();
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
            }
            function move(x, y) {
                map.setStatus({
                    dragEnable: false
                });
                map.panBy(x, y);
                setTimeout(() => {
                    map.setStatus({
                        dragEnable: true
                    });
                },500);
            }
            function lnglat2container(long, lati) {
                const lnglat = new AMap.LngLat(long, lati);
                const pixel = map.lnglatTocontainer(lnglat);
                return pixel.round();
            }
            map.on('dragging', showInfoDragging);

            // const swipe = new Hammer(document.querySelector('#wrapper'));
            // swipe.on('pan', function(e) {
            //     console.log(e)
            // });

            // swipe.on('panleft', function(e) {
            //     map.panBy(-10, 0);
            // });
            // swipe.on('panright', function(e) {
            //     map.panBy(10, 0);
            // });
            // swipe.on('panup', function(e) {
            //     map.panBy(0, -10);
            // });
            // swipe.on('pandown', function(e) {
            //     map.panBy(0, 10);
            // });

        },
        data () {
            return {
                isShow: false,
                isOpenDetail: false,
                isEnd: false
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
