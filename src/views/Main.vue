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
                <section class="camera">不认识就扫一扫</section>
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
            }
        }
    }
</script>
