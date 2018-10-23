<style lang="less" scoped>
    #main {
        height:100%;
        position: relative;
        .wrapper {
            height: 100%;
            .amap-demo {
                height: 100%;
            }
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
            width: 460px;
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
    }
</style>

<template>
    <div id="main">
        <section class="wrapper">
            <el-amap 
                vid="amap" 
                :zoom="zoom" 
                :center="center" 
                class="amap-demo"
                :amap-manager="amapManager"
                :events="events">
            </el-amap>
        </section>
        <section class="main_view" v-show="isShow">
            <section class="main_view_header">
                <section class="camera">
                    <button @click="useCamera">智能识别</button>
                    <span>不认识就扫一扫</span>
                </section>
                <section class="weather">空气指数</section>
                <!-- 使用flex弹性布局 -->
            </section>
            <router-view />
            <section class="main_view_footer">
                <!-- 使用自定义图标 -->
                <icon type="success" is-msg @click.native="goto1"></icon>
                <icon type="success" is-msg @click.native="goto2"></icon>
                <icon type="success" is-msg></icon>
                <icon type="success" is-msg></icon>
                <icon type="success" is-msg></icon>
                <icon type="success" is-msg></icon>
                <icon type="success" is-msg></icon>
                <icon type="success" is-msg></icon>
                <icon type="success" is-msg></icon>
                <icon type="success" is-msg></icon>
                <icon type="success" is-msg></icon>
                <icon type="success" is-msg></icon>
                <icon type="success" is-msg></icon>
                <icon type="success" is-msg></icon>
                <icon type="success" is-msg></icon>
                <icon type="success" is-msg></icon>
                <icon type="success" is-msg></icon>
                <icon type="success" is-msg></icon>
                <icon type="success" is-msg></icon>
                <icon type="success" is-msg></icon>
                <icon type="success" is-msg></icon>
                <!-- 使用flex弹性布局 -->
            </section>
        </section>
        <section class="toolbars">
            <x-button @click.native="handleClick">点我</x-button>
        </section>
        <section>
            <button @click="seeIntroduce" class="introButton">简介</button>
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
    import { amapManager } from 'vue-amap';
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
                amapManager,
                zoom: 14,
                center: [105.579225,32.219581],
                events: {
                    init: (oMap) => {
                        // console.log(oMap); // 高德地图对象实例
                        // console.log(AMap); // 高德全局对象，用于实例化地图对象
                        let imageLayer = new AMap.ImageLayer({
                            url: '/bg.jpg',
                            bounds: new AMap.Bounds(
                                    [105.554561, 32.201035],
                                    [105.600952, 32.234801]
                            ),
                            zooms: [0, 19],
                            zIndex: 100,
                            opacity: 0.5
                        });
                        oMap.add(imageLayer);
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
            }
        }
    }
</script>
