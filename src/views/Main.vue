<style>
    .amap-demo {
      height: 100%;
    }
</style>

<template>
    <div style="height:100%;">
        <el-amap vid="amap" 
                 :zoom="zoom" 
                 :center="center" 
                 class="amap-demo"
                 :amap-manager="amapManager"
                 :events="events">         
        </el-amap>
    </div>
</template>

<script>
    import { amapManager } from 'vue-amap';
    export default {
        data () {
            return {
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
        }
    }
</script>
