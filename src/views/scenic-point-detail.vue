<style lang="less">
    #scenic-point-detail{
        padding: 10px;
    }
    #scenic-point-detail .vux-slider .vux-indicator-right>a>.vux-icon-dot.active,#scenic-point-detail .vux-slider>.vux-indicator>a>.vux-icon-dot.active{
        background-color: #fff !important;
    }
    #scenic-point-detail .vux-slider .vux-indicator-right>a>.vux-icon-dot,#scenic-point-detail .vux-slider>.vux-indicator>a>.vux-icon-dot {
        width: 1.5vw;
        height: 1.5vw;
        border-radius: 1vw;
        background-color: rgba(255,255,255,0.4)
    }
    #scenic-point-detail .vux-slider{
        border-radius: 20px;
    }
    #scenic-point-detail .caption-title, #scenic-point-detail .point-list-title{
        padding: 30px 0;
        line-height: 50px;
        font-size: 36px;
    }
    #scenic-point-detail .caption-content{
        height: 300px;
    }
</style>

<template>
    <div id="scenic-point-detail">
        <section>
            <audio id="audio" controls="controls"  >
                <source src="../assets/audio/111.mp3" type="audio/mpeg" />
            </audio>
        </section>
        <section>
            <swiper 
                :list="imageList"
                dots-position="center"
                :auto="false"
                :loop="true"
                height="220px">
            </swiper>
        </section>
        <section>
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
        <section>
            <div class="point-list-title">
                其他景点
            </div>
            <div class="point-list-content">

            </div>
        </section>
    </div>
</template>

<script>
import { Swiper } from 'vux'
export default {
    components : {
        Swiper
    },
    data() {
        return {
            imageList : [
                {
                    url: 'javascript:',
                    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg'
                },
                {
                    url: 'javascript:',
                    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
                }
            ]
        }
    }
}
</script>