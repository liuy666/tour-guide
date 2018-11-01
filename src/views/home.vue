<style lang="less">
    #home{
        width: 100%;
        height: 100%;
        position: relative;
        #wrapper_home{
            width: 100%;
            height: 100%;
        }
    }
</style>

<template>
    <div id="home">
        <section id="wrapper_home">1111111111111111111</section>
    </div>
</template>

<script>
    import { setTimeout } from 'timers';
    export default {
        mounted() {
            const _self  = this;
            //获取屏幕大小 动态设置不同手机的地图zoom
            const containerWidth = document.querySelector('#wrapper_home').clientWidth;
            const containerHeight = document.querySelector('#wrapper_home').clientHeight; 
            /*let zoom = 0; //地图缩放
            let centerPoint = [105.149068,32.569454];
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
                zoom = 15.8;
            }*/

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
                url: './qingchuan.jpg',
                bounds: new AMap.Bounds(
                    [105.639333, 32.926354],
                    [104.599752, 32.118127]
                ),
                zooms:[10,14],
                zIndex: 100
            });
            //地图
            const oMap = new AMap.Map('wrapper', {
                showBuildingBlock: true,
                pitchEnable: false,
                buildingAnimation: true,
                rotateEnable: false,
                touchZoomCenter: 1,
                center: [105.149068,32.569454],
                zoom: 10,
                zooms:[10,14],
                viewMode: '3D',
                layers: [
                    new AMap.TileLayer(),
                    imageLayer
                ]
            });
        },
        data () {
            return {
                
            }
        },
        methods: {
            
        }
    }
</script>
