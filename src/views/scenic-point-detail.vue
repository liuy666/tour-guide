<style lang="less">
    #scenic-point-detail{
        padding: 30px;
        .weui-toast {
            height: 170px;
            width: 228px;
            i {
                width: 60px;
                height: 60px;
                margin-top: 55px;
            }
        }
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
                width: 112px;
                height: 112px;
                position: relative;
                .iwrap {
                    width: 112px;
                    height: 112px;
                    position: absolute;
                    left: 0;
                    top: 0;
                    .control {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        img {
                            width: 100%;
                            height: 100%;
                            display: block;
                        }
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
            }
            .audio-area-name{
                width: calc(~'100% - 114px');
                margin-left: 20px;
                margin-top: 10px;
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
            border-radius: 20px;
            overflow: hidden;
            .vux-swiper-desc{
                text-align: right;
            }
        }
        .captiom-area {
            margin-top: 41px;
            font-size: 30px;
            line-height: 48px; 
            color: #666;
            font-weight: 400;
            padding-bottom: 175px;
            text-indent: 2em;
        }
        .point-list-area {
            background-color: #fff;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 175px;
            padding-top: 19px;
            box-sizing: border-box;
            .point-list{
                white-space: nowrap;
                display: flex;
                flex-direction: row;
                overflow-x: auto;
                -webkit-overflow-scrolling : touch;
                padding-left: 50px;
                margin-right: 30px;
                box-sizing: border-box;
                li{
                    display: flex;
                    height: 150px;
                    flex-direction: column;
                    padding-right: 92px;
                    background: url('../assets/images/icon_dian@3x.png') no-repeat 124px 51px;
                    background-size: 44px 8px;
                    position: relative;
                    &:last-child{
                        padding-right: 0;
                        background: none;
                    }
                    .point-list-img{
                        width: 100px;
                        height: 100px;
                        box-sizing: border-box;
                        border-radius:50%;
                        overflow: hidden;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    div.ignore {
                        border: 2px solid #fff;
                    }
                    div.orange {
                        border-color: #FE5100!important;
                    }
                    .point-list-name{
                        position: absolute;
                        font-size: 24px;
                        width: 150px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        left: -25px;
                        text-align: center;
                        bottom: 0;
                        &.current{
                            color: #FE5100;
                        }
                    }
                }
            }
        }
    } 
    
</style>

<template>
    <div id="scenic-point-detail">
        <loading :show="isShowLoading" :text="loadText" position="absolute"></loading>
        <section class="audio-area">
            <div class="audio-area-img">
                <img :src="pointImg" style="width:100%;height:100%;border-radius:100%;" />
                <!-- 播放图标-暂停中状态 -->
                <v-touch class="iwrap" v-show="!isPlayed" v-on:tap="playAudio()">
                    <div class="control img-16-26">
                        <img src="../assets/images/icon_small_pause@3x.png" alt="" />
                    </div>
                </v-touch>
                
                <!-- 暂停图标-播放中状态 -->
                <v-touch class="iwrap" v-show="isPlayed" v-on:tap="pauseAudio">
                    <div class="control img-20-24">
                        <img src="../assets/images/icon_suspend@3x.png" alt="" />
                    </div>
                </v-touch>
            </div>
            <div class="audio-area-name">
                <span class="point-name">{{pointName}}</span>
                <div style="display:flex;margin-top:4px;">
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
            {{pointCaption}}
        </section>
        <section class="point-list-area">
            <ul class="point-list">
                <v-touch tag="li" v-for="(item,index) in pointList" :key="index" @tap="changePointInfo(index,true,$event)">
                    <div class="point-list-img ignore" :class="item.resource_id == currentPointId ? 'orange' : ''"><img :src="item.url"/></div>
                    <div class="point-list-name" :class="item.resource_id == currentPointId ? 'current' : ''" >{{item.name}}</div>
                </v-touch>
            </ul>
        </section>
    </div>
</template>

<script>
import { Swiper, XProgress, Loading } from 'vux'
export default {
    components : {
        Swiper,
        XProgress,
        Loading
    },
    data() {
        return {
            currentIndex: 0,
            currentPointId: JSON.parse(sessionStorage.getItem("currentPoint")).resource_id,
            pointImg: JSON.parse(sessionStorage.getItem("currentPoint")).url,
            pointName: JSON.parse(sessionStorage.getItem("currentPoint")).name,
            pointCaption: JSON.parse(sessionStorage.getItem("currentPoint")).commentary,
            pointList: JSON.parse(sessionStorage.getItem("pointList")),
            playList: JSON.parse(sessionStorage.getItem("playList")),
            isPlayed: false,
            audioProgress: 0,
            currentTimeStr: '0:00',
            totalTimeStr: '0:00',
            currentTime : '',
            totalTime:'',
            imageList : [],
            timer: '',
            playIndex : 0,
            isShowLoading : false,
            loadText:''
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
                if(sessionStorage.getItem("isAuto")){
                    //如果是自动  找到当前点在播放列表中的位置  然后讲列表序列中的下一个点设置成当前 
                    //同时找到当前点在所有景点列表中的位置，执行changePointInfo
                    // this.playList.forEach((v,i) => { 
                    //     if(v.aId === this.currentPointId) {
                    //         this.playIndex = i;
                    //         return;
                    //     }
                    // })
                    this.playIndex = this.playList.findIndex(item => item.aId === this.currentPointId);
                    if(this.playIndex < this.playList.length-1){
                        this.changePointInfo(this.playIndex+1,false);
                    }
                }
            }
        }
    },
    methods : {
        //初始化音频
        setAudio(isChange) {
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
                    //this.isPlayed = !playStatus.isPauseStatus;
                    audioDom.currentTime = playStatus.currentTime;
                    if(!playStatus.isPauseStatus){//播放状态
                        this.isPlayed = true;
                        audioDom.play();
                    }else{
                        this.isPlayed = false;
                    }   
                    //初始化进度条
                    this.audioProgress = playStatus.currentTime / playStatus.totalTime * 100;
                    document.querySelector(".circle").style.left = "calc("+this.audioProgress+"% - 8px)";
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
                if(sessionStorage.getItem("isAuto")){
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
            this.isShowLoading = true;
            let _self = this;
            this.imageList = [];
            const imgList = await this.$http.get(this.$base + 'hqyatu-navigator/app/resource/getSowingPictures/'+ _self.currentPointId);
            if(!imgList){
                this.isShowLoading = false;
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
                /*this.imageList.push({
                    url : 'javascript:',
                    img : './fj.jpg',
                    title : ''
                })*/
                document.querySelector(".vux-swiper").style.backgroundColor = "#f8f8f8";
            }
            this.isShowLoading = false;
        },
        //切换景点
        changePointInfo (index,isClick,ev) {
            let newPointInfo = {};
            if(isClick){
                newPointInfo = this.pointList[index];
            }else{
                newPointInfo = this.pointList.filter(item => item.resource_id === this.playList[index].aId)[0];
                document.querySelector(".point-list").scrollLeft = 120 * (parseInt(newPointInfo.serial)-1);
            }
            sessionStorage.setItem("currentPoint",JSON.stringify(newPointInfo));
            //this.currentIndex = index;
            this.currentPointId = newPointInfo.resource_id;
            this.pointImg = newPointInfo.url;
            this.pointName = newPointInfo.name;
            this.pointCaption = newPointInfo.commentary;
            this.getCurrentImgList();
            this.setAudio(true);
        }
    },
    created() {
        this.getCurrentImgList();
    },
    mounted() {
        // this.pointList.forEach((v,i) => {
        //     if(v.resource_id === this.currentPointId){
        //         this.currentIndex = i;
        //         return;
        //     }
        // });
        this.currentIndex = this.pointList.findIndex(item => item.resource_id === this.currentPointId);
        document.querySelector(".point-list").scrollLeft = 120 * this.currentIndex;
        const fromRouteName = this.$store.state.app.fromRouteName_detail;
        if(fromRouteName != 'scenic-point-detail'){
            sessionStorage.removeItem('playStatus');
        }
        this.setAudio();
    },
    beforeRouteLeave (to, from , next) {
        const status = document.querySelector('.detail-audio').paused;
        this.pauseAudio();
        let playStatus = {
            currentTime: document.querySelector('.detail-audio').currentTime,
            isPauseStatus : status
        }
        sessionStorage.setItem('playStatus', JSON.stringify(playStatus));
        this.$store.commit('SETFROMROUTENAME', 'scenic-point-detail');
        if(this.timer){
            clearInterval(this.timer);
        }
        next();
    }
}
</script>