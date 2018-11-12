<style lang="less">
    #home{
        width: 100%;
        height: 100%;
        position: relative;
        #wrapper_home{
            width: 100%;
            height: 100%;
        }
        .weui-icon_toast.weui-icon-success-no-circle:before {
            font-size: 100px;
            content: "\EA0D";
        }
        .weui-icon_toast{
            margin-top: 40px;
        }
        .weui-toast__content{
            margin-top: 20px;
        }
        .msg-70-70 {
            width: 70px;
            height: 70px;
            position: absolute;
            top: 21px;
            left: 24px;
        }
        .has {
            background: url("../assets/images/icon_news@3x.png") no-repeat center center / 70px 70px;
        }
        .no {
            background: url("../assets/images/icon_news_no@3x.png") no-repeat center center / 70px 70px;
        }
    }

    #wrapper_home .marker-content{
        width: 60px;
        height: 50px;
        margin-left: -30px;
        font-size: 20px;
    }
    #wrapper_home .scenic-icon{
        width: 100%;
        height: 100%;
        background: url(/icon_scenic_home@3x.png) no-repeat center / auto 100%;
        text-align: center;
        color: #fff;
    }
    
</style>

<template>
    <div id="home">
        <section id="wrapper_home"></section>
        <section class="msg-70-70" :class="[isHasMsg ? 'has' : 'no']" @click="gotoMsgList"></section>
        <toast v-model="isTips" type="cancel" :text="tipsText" :is-show-mask="true" width="8.2em"></toast>
    </div>
</template>

<script>
    import { setTimeout } from 'timers'
    import { Toast, Badge } from 'vux'
    export default {
        components: {
            Toast,
            Badge
        },
        async created() {
            const getMsgList = await this.$http.get(this.$base + '/hqyatu-navigator/app/hqarticle/list', {
                domainUrl: 'www.qxgz.com', // 上线改成获取域名
                limit: 20
            });

            console.log(getMsgList)
            if (!getMsgList) {
                return;
            }
            const validList = getMsgList.page.list.filter(item => {
                // 处理当天时间,获取失效时间和今天之间的间隔时间
                const today1 = this.$tool.formatDate(new Date()), // 格式化当天时间，舍去时分秒
                      today2 = new Date(today1 + 'T00:00:00'), // 重新转成日期标准格式
                      today3 = today2.getTime(), // 得到具体毫秒值
                      interval = item.passDate - today3 ;
                return interval >= 0;
            });
            if (validList.length) {
                this.isHasMsg = true;
            } else {
                this.isHasMsg = false;
            }
        },
        mounted() {
            const _self  = this;
            //获取屏幕大小 动态设置不同手机的地图zoom
            const containerWidth = document.querySelector('#wrapper_home').clientWidth;
            const containerHeight = document.querySelector('#wrapper_home').clientHeight; 
            let zoom = 0; //地图缩放
            if(containerHeight<600){
                zoom = 9.5;
            }else if(containerHeight<700){
                zoom = 9.6;
            }else if(containerHeight<800){
                zoom = 9.8;
            }else if(containerHeight<900){
                zoom = 9.8;
            }else if(containerWidth > 500 && containerWidth < 800){
                zoom = 10.3;
            }else if(containerWidth > 800){
                zoom = 10.8;
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
                url: './qcx.jpg',
                bounds: new AMap.Bounds(
                    [104.49496, 31.459197],
                    [105.725429, 33.573508]  
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
                zoom: 9,
                zooms:[zoom,14],
                viewMode: '3D',
                layers: [
                    new AMap.TileLayer(),
                    imageLayer
                ]
            });
            //地图信息窗体
            let infoWindow = new AMap.InfoWindow({
                isCustom: true,  //使用自定义窗体
                offset: new AMap.Pixel(-10, -30)
            });
            this.oMap_home = oMap;
            this.oInfoWindow = infoWindow;
            this.getScenicList();
        },
        data () {
            return {
                oMap_home : {},
                oInfoWindow : {},
                isTips : false,
                tipsText : '请求失败',
                isHasMsg: false,
            }
        },
        methods: {
            async getScenicList () {
                let _self = this;
                const scenicList = await this.$http.get(this.$base + '/hqyatu-navigator/app/scenery/list', {
                    domainUrl: 'www.qxgz.com'
                });
                if(!scenicList){
                    this.isTips = true;
                    return;
                }
                let scenicLnglat = [], scenicName = [], secnicflag = [];
                if(scenicList.data && scenicList.data.length && scenicList.data.length>0){
                    sessionStorage.setItem('scenicList',JSON.stringify(scenicList.data));
                    scenicList.data.forEach((v,i) => {
                        scenicLnglat.push([v.longitude,v.latitude])
                        scenicName.push(v.name)
                        secnicflag.push(i)
                    })
                }
                function setPoint(point,index) { 
                    let num = index + 1;
                    let marker = new AMap.Marker({
                        content: "<div class='marker-content' data-flag='"+secnicflag[index]+"'><div class='scenic-icon'></div></div>",
                        position: point,
                    });
                    marker.on('click',_self.markerClick);
                    _self.oMap_home.add(marker);
                }
                scenicLnglat.forEach(function(value,index){
                    setPoint(value,index);
                })
            },
            markerClick(e) {
                if(this.oInfoWindow.getPosition() !== undefined &&  this.oInfoWindow.getPosition().N == e.target.getPosition().N) {
                    if(this.oInfoWindow.getIsOpen()){
                        this.oInfoWindow.close();
                    }else{
                        this.openInfoWindow(e);
                    }
                }else{
                    this.openInfoWindow(e);
                }
            },
            openInfoWindow(e) {
                let flag = e.target.Je.contentDom.children[0].getAttribute("data-flag");//当前景区在景区列表数据中的下标
                const scenicInfo = JSON.parse(sessionStorage.getItem("scenicList"))[flag];
                sessionStorage.setItem('currentScenic',JSON.stringify(scenicInfo));
                this.oInfoWindow.setContent(this.createInfoWindow(scenicInfo));
                this.oInfoWindow.open(this.oMap_home, e.target.getPosition());
            },
            createInfoWindow(scenicInfo) {
                var info = document.createElement("div");
                info.className = "info-contanir";

                var middle = document.createElement("div");
                middle.className = "info-content";

                var htmlStr = ` <div class='info-scenic-img-area'><img style="width:100%;height:100%;border-radius:100%;" src='${scenicInfo.accessCoverUrl}' /></div>
                                <div class='info-scenic-info'>
                                    <div class='info-scenic-name'>${scenicInfo.name}</div>
                                    <div class='info-scenic-dec'>${scenicInfo.introduce}</div>
                                </div>`
                middle.innerHTML = htmlStr;

                info.appendChild(middle);

                var btnArea = document.createElement('div');
                btnArea.className = "info-scenic-btns";

                var btn1 = document.createElement('button');
                btn1.className = "toScenic";
                btn1.onclick = this.toScenic;
                btnArea.appendChild(btn1);

                
                info.appendChild(btnArea);
                return info;
            },
            toScenic() {
                this.$router.push({
                    name : 'main'
                })
            },
            gotoMsgList() {
                if (this.isHasMsg) {
                    this.$router.push({
                        name: 'message-list'
                    });
                }
            }
        }
    }
</script>
