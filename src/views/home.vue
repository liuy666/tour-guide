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
</style>

<template>
    <div id="home">
        <section id="wrapper_home"></section>
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
            let zoom = 0; //地图缩放
            if(containerHeight<600){
                zoom = 10;
            }else if(containerHeight<700){
                zoom = 10.1;
            }else if(containerHeight<800){
                zoom = 10.3;
            }else if(containerHeight<900){
                zoom = 10.4;
            }else if(containerWidth > 500 && containerWidth < 800){
                zoom = 10.8;
            }else if(containerWidth > 800){
                zoom = 11.2;
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
                url: './qingchuan.jpg',
                bounds: new AMap.Bounds(
                    [104.599752, 32.118127],
                    [105.639333, 32.926354]  
                ),
                zooms:[zoom,14],
                zIndex: 100
            });
            //地图
            const oMap = new AMap.Map('wrapper_home', {
                showBuildingBlock: true,
                pitchEnable: false,
                buildingAnimation: true,
                rotateEnable: false,
                touchZoomCenter: 1,
                center: [105.019557,32.526044],
                zoom: zoom,
                zooms:[zoom,14],
                viewMode: '3D',
                layers: [
                    new AMap.TileLayer(),
                    imageLayer
                ]
            });

            this.$http.get(this.$base + '/hqyatu-navigator/app/scenery/list')
            .then(res => {
                debugger
            })
            
            let pointArr = [[104.838736,32.458672]];
            let nameArr = ['青溪古镇'];
            let flagArr = ['1','2','3','4']; //景点的唯一标识
            function setPoint(point,index) { 
                let num = index + 1;
                let marker = new AMap.Marker({
                    content: "<div class='marker-content' data-flag='"+flagArr[index]+"'><div class='point-icon'>"+num+"</div><div class='point-name'>"+nameArr[index]+"</div></div>",
                    position: point,
                });
                
                oMap.add(marker);
            }
            pointArr.forEach(function(value,index){
                setPoint(value,index);
            })
        },
        data () {
            return {
                
            }
        },
        methods: {
            
        }
    }
</script>
