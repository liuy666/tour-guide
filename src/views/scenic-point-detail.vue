<style lang="less">
    #scenic-point-detail{
        padding: 30px;
        .weui-progress__bar{
            background:rgba(254,235,226,1);
            height: 6px;
            border-radius:4px;
        }
        .weui-progress__inner-bar{
            background:rgba(254,81,0,1);
            border-radius:4px;
        }
        .audio-area{
            display: flex;
            .audio-area-img{
                width: 94px;
                height: 94px;
                position: relative;
                .control {
                    position: absolute;
                    left: 50%;
                    top: 50%; 
                }
                .img-16-26 {
                    width: 16px;
                    height: 26px;
                    transform: translate(-8px, -13px);
                }
                .img-20-24 {
                    width: 20px;
                    height: 24px;
                    transform: translate(-10px, -12px);
                }
            }
            .audio-area-name{
                width: calc(~'100% - 114px');
                height: 94px;
                margin-left: 20px;
                .point-name{
                    font-size: 30px;
                }
                .audio-time{
                    font-size: 24px;
                    max-width: 60px;
                }
                .audio-progress{
                    position: relative;
                    width: calc(~'100% - 160px');
                    margin: 0 20px;
                    padding-top: 14px;
                    .circle {
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        background: #fff;
                        position: absolute;
                        left: 60%;
                        top: -2px;
                        box-shadow:0px 1px 3px 0px rgba(129,28,0,0.15);
                    }
                }
            }
            
        }
        .img-list-area{
            margin-top: 24px;
            .vux-slider{
                border-radius: 20px;
            }
        }
        .captiom-area , .point-list-area{
            margin-top: 40px;
        }
        .area-title{
            text-indent: 24px;
            font-size: 30px;
            background: url('../assets/images/kuai@3x.png') no-repeat left center;
            background-size: 10px 30px;
            line-height: 30px;
            margin-bottom: 20px;
        }
        .caption-content-area{
            height: 300px;
            padding: 30px;
            box-sizing: border-box;
            background:rgba(248,248,248,1);
            font-size: 24px;
            overflow: hidden;
            .caption-content{
                height: 100%;
                overflow-y: auto;
                line-height: 36px; 
            }
        }
        .point-list{
            width: 100%;
            white-space: nowrap;
            display: flex;
            flex-direction: row;
            overflow-x: auto;
            padding-top: 10px;
            li{
                flex:1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-right: 100px;
                background: url('../assets/images/icon_dot@3x.png') no-repeat 160px 70px;
                background-size: auto 10px;
                cursor: pointer;
                &:last-child{
                    padding-right: 0;
                    background: none;
                }
                .point-list-img{
                    width: 140px;
                    height: 140px;
                }
                .point-list-name{
                    font-size: 24px;
                    margin-top: 20px;
                    text-indent: 10px;
                    &.current{
                        color: #FE5100;
                    }
                }
            }
        }
    } 
    
</style>

<template>
    <div id="scenic-point-detail">
        <section class="audio-area">
            <div class="audio-area-img">
                <img :src="pointImg" style="width:100%;height:100%;border-radius:100%;" />
                <!-- 播放图标-暂停中状态 -->
                <img v-show="!isPlayed" @click="playAudio()" class="control img-16-26" src="../assets/images/icon_small_pause@3x.png" alt="" />
                <!-- 暂停图标-播放中状态 -->
                <img v-show="isPlayed" @click="pauseAudio" class="control img-20-24" src="../assets/images/icon_suspend@3x.png" alt="" />
            </div>
            <div class="audio-area-name">
                <span class="point-name">{{pointName}}</span>
                <div style="display:flex;margin-top:6px;">
                    <div class="audio-time">{{currentTime}}</div>
                    <div class="audio-progress">
                        <x-progress :percent="audioProgress" :show-cancel="false"></x-progress>
                        <div class="circle"></div>
                    </div>
                    <div class="audio-time">{{totalTime}}</div>
                </div>
            </div>
        </section>
        <section class="img-list-area">
            <swiper 
                :list="imageList"
                dots-position="center"
                :auto="false"
                :loop="true"
                :show-dots="false"
                :aspect-ratio='0.55'
                >
            </swiper>
        </section>
        <section class="captiom-area">
            <div class="area-title">
                解说词
            </div>
            <div class="caption-content-area">
                <div class="caption-content">
                    {{pointCaption}}
                </div>
            </div>
        </section>
        <section class="point-list-area">
            <div class="area-title">
                所有景点
            </div>
            <ul class="point-list">
                <li v-for="(item,index) in pointList" :key="index" @click="changePointInfo(index,$event)">
                    <div class="point-list-img"><img :src="item.url" style="width:100%;height:100%;border-radius:50%;" /></div>
                    <div class="point-list-name" :class="item.resource_id == currentPointId ? 'current' : ''" >{{item.serial+'. '+item.name}}</div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import { Swiper, XProgress } from 'vux'
export default {
    components : {
        Swiper,
        XProgress
    },
    data() {
        return {
            currentIndex: 0,
            currentPointId: JSON.parse(sessionStorage.getItem("currentPoint")).resource_id,
            pointImg: JSON.parse(sessionStorage.getItem("currentPoint")).url,
            pointName: JSON.parse(sessionStorage.getItem("currentPoint")).serial+'.'+JSON.parse(sessionStorage.getItem("currentPoint")).name,
            pointCaption: JSON.parse(sessionStorage.getItem("currentPoint")).commentary,
            pointList: JSON.parse(sessionStorage.getItem("pointList")),

            isPlayed: false,
            audioProgress: 60,
            currentTime: '2:00',
            totalTime: '5:30',
            imageList : [
                {
                    url: 'javascript:',
                    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
                    title : '1/2'
                },
                {
                    url: 'javascript:',
                    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg',
                    title: '2/2'
                }
            ]
        }
    },
    methods : {
        //获取当前景点轮播图
        getCurrentImgList() {

        },
        //切换景点
        changePointInfo (index,ev) {
            sessionStorage.setItem("currentPoint",JSON.stringify(this.pointList[index]));
            this.currentIndex = index;
            this.currentPointId = this.pointList[index].resource_id;
            this.pointImg = this.pointList[index].url;
            this.pointName = this.pointList[index].serial + '. ' + this.pointList[index].name;
            this.pointCaption = this.pointList[index].commentary;
            
        }
    },
    mounted() {
        this.pointList.forEach((v,i) => {
            if(v.resource_id === this.currentPointId){
                this.currentIndex = i;
                return;
            }
        });
        document.querySelector(".point-list").scrollLeft = 120 * this.currentIndex;
    }
}
</script>