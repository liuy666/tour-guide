<style lang="less">
    #scenic-point-detail{
        padding: 30px;
    }
    #scenic-point-detail .caption-title, #scenic-point-detail .point-list-title{
        padding: 30px 0;
        line-height: 50px;
        font-size: 36px;
    }
    #scenic-point-detail .caption-content{
        height: 300px;
    }
    #scenic-point-detail .weui-progress__bar{
        background:rgba(254,235,226,1);
        height: 6px;
        border-radius:4px;
    }
    #scenic-point-detail .weui-progress__inner-bar{
        background:rgba(254,81,0,1);
        border-radius:4px;
    }
    .audio-area{
        display: flex;
        .audio-area-img{
            width: 94px;
            height: 94px;
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

    }
</style>

<template>
    <div id="scenic-point-detail">
        <section class="audio-area">
            <div class="audio-area-img">
                <img :src="pointImg" style="width:100%;height:100%;border-radius:100%;" />
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
            <div class="caption-title">
                解说词
            </div>
            <div class="caption-content">
                这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容
                这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容
                这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容
                这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容
                这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容
                这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容这里是解说词的内容
            </div>
        </section>
        <section class="point-list-area">
            <div class="point-list-title">
                其他景点
            </div>
            <div class="point-list-content">

            </div>
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
            pointImg: JSON.parse(sessionStorage.getItem("currentPoint")).url,
            pointName: JSON.parse(sessionStorage.getItem("currentPoint")).serial+'.'+JSON.parse(sessionStorage.getItem("currentPoint")).name,
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
    }
}
</script>