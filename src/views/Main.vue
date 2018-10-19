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
                zoom: 15,
                center: [105.579225,32.219581],
                events: {
                    init: (oMap) => {
                        //手绘地图图层
                        let imageLayer = new AMap.ImageLayer({
                            url: '/bg.jpg',
                            bounds: new AMap.Bounds(
                                    [105.554561, 32.201035],
                                    [105.600952, 32.234801]
                            ),
                            zooms: [10, 19],
                            zIndex: 100,
                            //opacity: 0.5
                        });
                        oMap.add(imageLayer);
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
                                    "<button>详情</button>",
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
                        }
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
            }
        }
    }
</script>
