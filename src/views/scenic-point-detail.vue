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
                        left: -16px;
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
            .vux-swiper-desc{
                text-align: right;
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
                    <div class="audio-time">{{currentTimeStr}}</div>
                    <div class="audio-progress">
                        <x-progress :percent="audioProgress" :show-cancel="false"></x-progress>
                        <div class="circle"></div>
                    </div>
                    <div class="audio-time">{{totalTimeStr}}</div>
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
            audioProgress: 0,
            currentTimeStr: '0:00',
            totalTimeStr: '0:00',
            currentTime : '',
            totalTime:'',
            imageList : [],
            timer: ''
        }
    },
    watch : {
        audioProgress (v) {
            if(v >= 100){
                const dAudio = document.querySelector('.detail-audio');
                clearInterval(this.timer);
                if (!dAudio.paused || !dAudio.ended) {
                    dAudio.pause();
                }
                this.isPlayed = false;
            }
        }
    },
    methods : {
        //初始化音频
        setAudio(isChange,isAuto) {
            const audio = document.querySelector(".detail-audio");
            if(audio){
                document.querySelector(".audio-area").removeChild(audio);
            }
            const audioContainer = document.querySelector(".audio-area");
            let audioDom = document.createElement("audio"),
                sourceDom = document.createElement("source");
            sourceDom.type = 'audio/mpeg';
            sourceDom.src = JSON.parse(sessionStorage.getItem("currentPoint")).guideUrl;
            audioDom.dataset.id = JSON.parse(sessionStorage.getItem("currentPoint")).resource_id;
            audioDom.appendChild(sourceDom);
            audioDom.classList.add('detail-audio');
            audioDom.style.display = 'none';
            audioContainer.appendChild(audioDom);
            audioDom.oncanplay = (e) => {
                const _audioDom = e.target;
                this.totalTime = _audioDom.duration;
                let m = (this.totalTime%60).toFixed(0) < 10 ? '0'+(this.totalTime%60).toFixed(0) : (this.totalTime%60).toFixed(0);
                this.totalTimeStr = Math.floor(this.totalTime/60) + ":" + m;
            }
            audioDom.onplay = (e) => {
                this.changeProgress();
            }
            if(!isChange){//进页面的初始化
                const playStatus = JSON.parse(sessionStorage.getItem("playStatus"));
                if(playStatus){
                    let cm = (playStatus.currentTime%60).toFixed(0) < 10 ? '0'+(playStatus.currentTime%60).toFixed(0) : (playStatus.currentTime%60).toFixed(0),
                        tm = (playStatus.totalTime%60).toFixed(0) < 10 ? '0'+(playStatus.totalTime%60).toFixed(0) : (playStatus.totalTime%60).toFixed(0);
                    this.currentTimeStr = Math.floor(playStatus.currentTime/60) + ":" + cm;
                    this.totalTimeStr = Math.floor(playStatus.totalTime/60) + ":" + tm;
                    this.isPlayed = playStatus.status;
                    audioDom.currentTime = playStatus.currentTime;
                    if(!playStatus.status){//播放状态
                        this.isPlayed = true;
                        audioDom.play();
                    }else{
                        this.isPlayed = false;
                    }   
                }else{
                    let tm1 = (this.totalTime%60).toFixed(0) < 10 ? '0'+(this.totalTime%60).toFixed(0) : (this.totalTime%60).toFixed(0);
                    this.currentTimeStr = '0:00';
                    this.totalTimeStr = Math.floor(this.totalTime/60) + ":" + tm1;
                    this.isPlayed = false;
                }
            }else{//切换景点的初始化
                let tm2 = (this.totalTime%60).toFixed(0) < 10 ? '0'+(this.totalTime%60).toFixed(0) : (this.totalTime%60).toFixed(0);
                this.currentTimeStr = '0:00';
                this.totalTimeStr = Math.floor(this.totalTime/60) + ":" + tm2;
                this.isPlayed = false;
                if(isAuto){
                    this.playAudio();
                }
            }
        },
        //播放
        playAudio() {
            const detailAudio = document.querySelector(".detail-audio");
            if(detailAudio && detailAudio.paused){
                this.isPlayed = true;
                detailAudio.play();
            }else{
                console.log("****");
            }
        },
        pauseAudio() {
            clearInterval(this.timer);
            this.timer = '';
            document.querySelector('.detail-audio').pause();
            this.isPlayed = false;
        },
        changeProgress() {
            this.timer = setInterval(() => {
                this.currentTime = document.querySelector('.detail-audio').currentTime;
                let cf = Math.floor(this.currentTime/60);
                let cm = (this.currentTime%60).toFixed(0) < 10 ? '0'+(this.currentTime%60).toFixed(0) : (this.currentTime%60).toFixed(0);
                if(cm == 60) {
                    cf = cf + 1;
                    cm = "00";
                }
                this.currentTimeStr = cf + ":" + cm;

                this.audioProgress = this.currentTime / this.totalTime * 100;
                document.querySelector(".circle").style.left = "calc("+this.audioProgress+"% - 8px)";
            },1000);
        },
        //获取当前景点轮播图
        async getCurrentImgList() {
            let _self = this;
            this.imageList = [];
            const imgList = await this.$http.get(this.$base + 'hqyatu-navigator/app/resource/getSowingPictures/'+ _self.currentPointId);
            if(!imgList){
                return;
            }
            if(imgList.sowingPictures && imgList.sowingPictures.length>0){
                let len = imgList.sowingPictures.length;
                let list = [];
                imgList.sowingPictures.forEach((v,i) => {
                    let title = (i+1)+'/'+len;
                    let obj = {
                        url : 'javascript:',
                        img : v,
                        title : title
                    }
                    list.push(obj);
                })
                this.imageList = list;
            }else{
                this.imageList.push({
                    url : 'javascript:',
                    img : './fj.jpg',
                    title : ''
                })
            }
        },
        //切换景点
        changePointInfo (index,ev) {
            sessionStorage.setItem("currentPoint",JSON.stringify(this.pointList[index]));
            this.currentIndex = index;
            this.currentPointId = this.pointList[index].resource_id;
            this.pointImg = this.pointList[index].url;
            this.pointName = this.pointList[index].serial + '. ' + this.pointList[index].name;
            this.pointCaption = this.pointList[index].commentary;
            this.getCurrentImgList();
            this.setAudio(true);
        }
    },
    created() {
        this.getCurrentImgList();
    },
    mounted() {
        this.pointList.forEach((v,i) => {
            if(v.resource_id === this.currentPointId){
                this.currentIndex = i;
                return;
            }
        });
        document.querySelector(".point-list").scrollLeft = 120 * this.currentIndex;

        this.setAudio();
    },
    beforeRouteLeave (to, from , next) {
        const status = document.querySelector('.detail-audio').paused;
        this.pauseAudio();
        let playStatus = {
            currentTime: document.querySelector('.detail-audio').currentTime,
            totalTime: this.totalTime,
            status : status
        }
        sessionStorage.setItem('playStatus', JSON.stringify(playStatus));
        next();
    }
}
</script>