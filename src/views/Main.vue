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
                        let imageLayer = new AMap.ImageLayer({
                            url: '/bg.jpg',
                            bounds: new AMap.Bounds(
                                    [105.554561, 32.201035],
                                    [105.600952, 32.234801]
                            ),
                            zooms: [14, 19],
                            zIndex: 100,
                            opacity: 0.5
                        });
                        oMap.add(imageLayer);
                    },
                }
            }
        }
    }
</script>
