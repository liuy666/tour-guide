<style>
    html,body{
        height: 100%;
    }
    .amap-demo {
      height: 100%;
    }
</style>

<template>
    <div style="height:100%;">
        <!-- hello world! -->
        <el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amap-demo">
        </el-amap>
    </div>
</template>

<script>
    import { amapManager } from 'vue-amap';
    export default {
        data () {
            return {
                amapManager,
                zoom: 12,
                center: [121.59996, 31.197646],
                events: {
                    init: (o) => {
                    console.log(o.getCenter())
                    console.log(this.$refs.map.$$getInstance())
                    o.getCity(result => {
                        console.log(result)
                    })
                    },
                    'moveend': () => {
                    },
                    'zoomchange': () => {
                    },
                    'click': () => {
                       
                    }
                },
                plugin: ['ToolBar', {
                    pName: 'MapType',
                    defaultType: 0,
                    events: {
                    init(o) {
                        console.log(o);
                    }
                    }
                }]
            }
        }
    }
</script>
