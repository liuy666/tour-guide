<style lang="less">
    @keyframes rotateimg {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
    #scenic-point-detail{
        padding: 30px;
        
        // loading层弹窗样式
        .weui-loading_toast .weui-toast {
            top: @toast-top;
            width: 228px!important;
            height: 170px!important;
            min-height: 170px!important;
            max-height: 170px!important;
            i {
                width: 60px;
                height: 60px;
                margin-top: 55px;
            }
        }

        // 带图标信息提示
        .short.vux-toast .weui-toast { // 提示框
            top: @toast-top;
            width: 228px!important;
            height: 170px!important;
            min-height: 170px!important;
            max-height: 170px!important;
        }
        .short.vux-toast .weui-icon_toast { // 提示框icon图片容器
            margin-top: 28px;
        }
        .short.vux-toast .weui-icon_toast:before { // 提示框icon图片
            font-size: 60px;
        }
        .short.vux-toast .weui-toast__content { // 提示框文本信息
            margin: 22px 0 0 0;
            font-size: 28px;
        }

        .weui-progress__bar{
            background:rgba(254,226,213,1);
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
                .animateImg{
                    animation-name: rotateimg;
                    animation-duration: 30s;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                    //animation-play-state: paused;
                }
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
                        position: absolute;
                        left: -16px;
                        top: 0;
                        background:rgba(254,81,0,1);
                        box-shadow:0px 1px 3px 0px rgba(254,81,0,0.27);
                    }
                }
            }
        }
        .img-list-area{
            margin-top: 24px;
            //border-radius: 20px;
            overflow: hidden;
            .vux-swiper-desc{
                text-align: right;
            }
            .vux-img{
                border-radius: 20px;
            }
            .vux-swiper-desc{
                line-height: 40px;
                background: rgba(0,0,0,0.3);
                padding: 0;
                right: 20px;
                bottom: 36px;
                box-sizing: border-box;
                padding: 4px 20px 0 20px;
                border-radius: 20px;
                left: auto;
                font-size: 28px;
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
                    .point-playing{
                        width: 100px;
                        height: 100px;
                        position: absolute;
                        left: 0;
                        top: 0;
                        background: url("../assets/images/playing_detail.gif") no-repeat center center;
                        background-size: 36px 32px;
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
        <toast class="short" v-model="isTips" type="cancel" :text="tipsText" :is-show-mask="true"></toast>
        <toast class="long" v-model="isTips3" type="text" :text="tipsText3" :is-show-mask="true"></toast>
        <section class="audio-area">
            <div class="audio-area-img">
                <img :src="pointImg" style="width:100%;height:100%;border-radius:100%;" class="scenicImg" />
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
                        <x-progress :percent="progress" :show-cancel="false"></x-progress>
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
                <v-touch tag="li" v-for="(item,index) in pointList" :key="index" @tap="changePointInfo(index,$event)">
                    <div class="point-list-img ignore" :class="item.resource_id == currentPointId ? 'orange' : ''"><img :src="item.url"/></div>
                    <div class="point-list-name" :class="item.resource_id == currentPointId ? 'current' : ''" >{{item.name}}</div>
                    <div v-show="item.resource_id == playingPointId && audioPlay" class="point-playing"></div>
                </v-touch>
            </ul>
        </section>
    </div>
</template>

<script>
import { Swiper, XProgress, Loading, Toast } from 'vux';
import { mapMutations, mapState } from 'vuex';
export default {
    components : {
        Swiper,
        XProgress,
        Loading,
        Toast
    },
    data() {
        const cPoint = JSON.parse(sessionStorage.getItem("pointList")).filter(item => item.resource_id == sessionStorage.getItem("mapClickPointId"))[0];
        return {
            currentIndex: 0,
            showPoint: cPoint,
            currentPointId: cPoint.resource_id,
            pointImg: cPoint.url,
            pointName: cPoint.name,
            pointCaption: cPoint.commentary,
            pointList: JSON.parse(sessionStorage.getItem("pointList")),
            playList: JSON.parse(sessionStorage.getItem("playList")),
            isPlayed: false,
            progress:0,
            currentTimeStr: '0:00',
            totalTimeStr: '0:00',
            currentTime : '',
            totalTime:'',
            imageList : [],
            timer: '',
            playIndex : 0,
            isShowLoading : false,
            loadText:'',
            isTips:false,
            isTips3:false,
            tipsText: '请求失败',
            tipsText3:'',
            bl:0,
            playingPointId : JSON.parse(sessionStorage.getItem("currentPoint")).resource_id, //正在播放音频的景点id
            audioPlay: false //音频存在且音频正在播放状态时为true
        }
    },
    watch : {
        audioPercent (val) {
            //设置进度条、圆圈、当前时长的显示状态
            //当播放音频的景点与展示的景点一致 进度条等状态跟着播放进度走
            //不一致 进度条等状态初始化为0
            if(val>0){
                if(document.querySelector(".main-audio").dataset.id == this.showPoint.resource_id){
                    document.querySelector(".circle").style.left = "calc("+ val +"% - 8px)";

                    this.currentTime = val/100*this.totalTime;
                    let cf = Math.floor(this.currentTime/60);
                    let cm = (this.currentTime%60).toFixed(0) < 10 ? '0'+(this.currentTime%60).toFixed(0) : (this.currentTime%60).toFixed(0);
                    if(cm == 60) {
                        cf = cf + 1;
                        cm = "00";
                    }
                    this.currentTimeStr = cf + ":" + cm;
                    this.progress = val;
                }else{
                    document.querySelector(".circle").style.left = "-8px";
                    this.currentTimeStr = "0:00";
                    this.progress = 0;
                }
            }else{
                document.querySelector(".circle").style.left = "-8px";
                this.currentTimeStr = "0:00";
                this.progress = 0;
                if(this.isLastOne){
                    //document.querySelector('.animateImg').style.animationPlayState = 'paused';
                    this.animatePause();
                }
            }
        },
        //播放最终结束（未自动时单音频播放完成 || 自动时整个播放列表播放完成）
        isStop (val) {
            if (val) {
                this.isPlayed = false;
                this.audioPlay = false;
                if(!sessionStorage.getItem('isAuto') || sessionStorage.getItem('isAuto') == "false"){
                    //document.querySelector('.animateImg').style.animationPlayState = 'paused';
                    this.animatePause();
                }
            }
        },
        //自动播放
        isAutoPlay (val) { 
            if (val) {
                //设置应该显示的景点信息 
                this.showPoint = this.$store.state.app.nextMessage.nextPoint;
                this.currentPointId = this.showPoint.resource_id;
                this.pointImg = this.showPoint.url;
                this.pointName = this.showPoint.name;
                this.pointCaption = this.showPoint.commentary;
                this.currentTimeStr = "0:00";
                this.getCurrentImgList();

                
                this.START_NEW_INTERVAL();
                this.isPlayed = true;
                this.audioPlay = true;
                //document.querySelector('.animateImg').style.animationPlayState = 'running';
                this.running();
                //更新session信息
                sessionStorage.setItem("currentPoint",JSON.stringify(this.showPoint));
                sessionStorage.setItem("mapClickPointId",this.showPoint.resource_id);
                sessionStorage.setItem("showPoint",JSON.stringify(this.showPoint));
                this.playingPointId = this.showPoint.resource_id;
                //设置滚动位置
                let ind = this.pointList.findIndex(item => item.resource_id === this.showPoint.resource_id)
                document.querySelector(".point-list").scrollLeft = 15 + this.bl * 96 * ind;
            }
        },
        //用于自动播放 切换景点时获取总时长
        hasGetTotal (val){
            if(val) {
                let totalTime = sessionStorage.getItem("totalTime");
                console.log(totalTime);
                this.totalTime = totalTime;
                let m = (this.totalTime%60).toFixed(0) < 10 ? '0'+(this.totalTime%60).toFixed(0) : (this.totalTime%60).toFixed(0);
                this.totalTimeStr = Math.floor(this.totalTime/60) + ":" + m;
            }
        }
    },
    computed : {
        ...mapState({
            audioPercent: state => state.app.percent,
            isStop: state => state.app.isStop, // 监听是否当前是否播放完毕
            isAutoPlay: state => state.app.isAutoPlay, // 监听是否开始连播下一个音频
            hasGetTotal: state => state.app.hasGetTotal,
            isLastOne: state => state.app.isLastOne
        })
    },
    methods : {
        ...mapMutations([
            'SET_PERCENT',
            'START_PLAY',
            'START_NEW_INTERVAL', // 开始新的定时器
            'CLEAR_CURRENT_INTERVAL' //清除定时器
        ]),
        //当没有播放时进入详情 或 播放的音频不是进入详情页的景点  初始化音频 获取对应景点音频的总时长
        setAudio() {
            const audio = document.querySelector(".detail-audio");
            if(audio){
                document.querySelector(".audio-area").removeChild(audio);
            }
            const audioContainer = document.querySelector(".audio-area");
            let audioDom = document.createElement("audio"),
                sourceDom = document.createElement("source");
            sourceDom.type = 'audio/mpeg';
            sourceDom.src = this.showPoint.guideUrl;
            audioDom.dataset.id = this.showPoint.resource_id;
            audioDom.appendChild(sourceDom);
            audioDom.classList.add('detail-audio');
            audioDom.style.display = 'none';
            audioContainer.appendChild(audioDom);
            audioDom.load();

            audioDom.oncanplay = (e) => { 
                let _audioDom = e.target;
                this.totalTime = _audioDom.duration;
                let m = (this.totalTime%60).toFixed(0) < 10 ? '0'+(this.totalTime%60).toFixed(0) : (this.totalTime%60).toFixed(0);
                this.totalTimeStr = Math.floor(this.totalTime/60) + ":" + m;
            }
            audioDom.onplay = (e) => {
                this.totalTime = e.target.duration;
                let m = (this.totalTime%60).toFixed(0) < 10 ? '0'+(this.totalTime%60).toFixed(0) : (this.totalTime%60).toFixed(0);
                this.totalTimeStr = Math.floor(this.totalTime/60) + ":" + m;
            }
        },
        //播放
        playAudio() {
            const mainAudio = document.querySelector('.main-audio');
            //当前正在播放并且播放景点与展示景点一致
            if(mainAudio && mainAudio.dataset.id == this.showPoint.resource_id){
                if(mainAudio.paused){
                    this.isPlayed = true;
                    mainAudio.play();
                    this.START_NEW_INTERVAL();
                }
            }
            //未播放状态或者播放景点与展示景点不一致，重新创建音频
            else{ 
                document.querySelector(".circle").style.left = "-8px";
                this.progress = 0;
                this.isPlayed = true;
                this.currentTimeStr = '0:00';
                let src = this.showPoint.guideUrl,
                    id = this.showPoint.resource_id;
                this.START_PLAY({src, id}); // 开始播放
                this.START_NEW_INTERVAL(); // 开始定时器
                sessionStorage.setItem("currentPoint",JSON.stringify(this.showPoint));
                sessionStorage.setItem("mapClickPointId",this.showPoint.resource_id);
                this.playingPointId = this.showPoint.resource_id;
            }
            //document.querySelector('.animateImg').style.animationPlayState = 'running';
            this.running();
            this.audioPlay = true;
        },
        pauseAudio() {
            this.CLEAR_CURRENT_INTERVAL(); // 通知App页清除定时器
            document.querySelector('.main-audio').pause(); // 直接暂停音频
            this.isPlayed = false;
            //document.querySelector('.animateImg').style.animationPlayState = 'paused';
            this.animatePause();
            this.audioPlay = false;
        },
        //获取当前景点轮播图
        async getCurrentImgList() {
            this.isShowLoading = true;
            let _self = this;
            this.imageList = [];
            const imgList = await this.$http.get(this.$base + '/hqyatu-navigator/app/resource/getSowingPictures/'+ _self.currentPointId);
            if(!imgList){
                this.isShowLoading = false;
                this.isTips = true;
                return;
            }
            if(imgList.sowingPictures && imgList.sowingPictures.length>0){
                let len = imgList.sowingPictures.length;
                let list = [];
                imgList.sowingPictures.forEach((v,i) => {
                    let title = (i+1)+'/'+len;
                    let obj = {
                        url : 'javascript:',
                        img : v ? 'https' + v.slice(4) : v,
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
        changePointInfo (index,ev) {
            let newPointInfo = this.pointList[index];
            this.showPoint = newPointInfo;
            this.currentPointId = newPointInfo.resource_id;
            this.pointImg = newPointInfo.url;
            this.pointName = newPointInfo.name;
            this.pointCaption = newPointInfo.commentary;
            
            this.getCurrentImgList();
            this.setAudio();
            sessionStorage.setItem("showPoint",JSON.stringify(newPointInfo));

            if(document.querySelector(".main-audio") ){
                if(document.querySelector(".main-audio").dataset.id != this.showPoint.resource_id){
                    this.isPlayed = false;
                    document.querySelector(".circle").style.left = "-8px";
                    this.progress = 0;
                    this.currentTimeStr = "0:00";
                    //document.querySelector('.animateImg').style.animationPlayState = 'paused';
                    this.animatePause();
                }else{
                    if(!document.querySelector(".main-audio").paused){
                        this.isPlayed = true;
                        //document.querySelector('.animateImg').style.animationPlayState = 'running';
                        this.running();
                    }else{
                        this.isPlayed = false;
                    }
                    document.querySelector(".circle").style.left = "calc("+ this.audioPercent +"% - 8px)";
                    this.progress = this.audioPercent;
                    let cf = Math.floor(this.currentTime/60);
                    let cm = (this.currentTime%60).toFixed(0) < 10 ? '0'+(this.currentTime%60).toFixed(0) : (this.currentTime%60).toFixed(0);
                    this.currentTimeStr = cf + ":" + cm;
                }
                
                this.audioPlay = !document.querySelector(".main-audio").paused ? true : false;
                
            }else{
                this.isPlayed = false;
                document.querySelector(".circle").style.left = "-8px";
                this.progress = 0;
                this.currentTimeStr = "0:00";
                //document.querySelector('.animateImg').style.animationPlayState = 'paused';
                this.animatePause();
            }
        },
        running () {
            document.querySelector(".scenicImg").classList.add("animateImg");
        },
        animatePause () {
            // let siteImg = document.querySelector(".scenicImg").css('transform')  //获取当前元素的动画改变，transform的值
            // let siteWp = document.querySelector('.audio-area-img').css('transform')
            // document.querySelector('.audio-area-img').css('transform',siteWp === 'none' ? siteImg : siteImg.concat('',siteWp))  
            //由于父元素没有动画，所以每次赋值的时候，需要将上次父元素的状态加上
            document.querySelector(".scenicImg").classList.remove('animateImg');
        }
    },
    created() {
        this.getCurrentImgList();
    },
    mounted() {
        //获取屏幕大小 
        const containerWidth = document.querySelector('#scenic-point-detail').clientWidth;
        this.bl = parseFloat((containerWidth/375).toFixed(2));

        let self = this;
        this.currentIndex = this.pointList.findIndex(item => item.resource_id === this.currentPointId);
        document.querySelector(".point-list").scrollLeft =  15 + this.bl * 96 * this.currentIndex;
        
        //刷新进页面
        const fromRouteName = this.$store.state.app.fromRouteName_detail;
        if(fromRouteName != 'scenic-point-detail'){
            this.showPoint = JSON.parse(sessionStorage.getItem("showPoint"));
            if(!this.showPoint) {
                this.showPoint = JSON.parse(sessionStorage.getItem("pointList")).filter(item => item.resource_id == sessionStorage.getItem("mapClickPointId"))[0]
            }
            this.currentPointId = this.showPoint.resource_id;
            this.pointImg = this.showPoint.url;
            this.pointName = this.showPoint.name;
            this.pointCaption = this.showPoint.commentary;
        }
        
        //进入页面时，判断是否正在播放 且 播放的景点与展示的景点是否一致
        //如果一致    初始化播放状态、总时长，总时长通过session获取 因为此时正在播放的音频的总时长已经准确的存入了session中
        //如果不一致  播放状态设置为暂停，总时长用过自己创建一个audio来获取并展示
        let mainAudio = document.querySelector(".main-audio");
        if(mainAudio && mainAudio.dataset.id == this.showPoint.resource_id){
            if(mainAudio.paused) { 
                this.isPlayed = false;
                this.audioPlay = false;
            }else{
                this.isPlayed = true;
                this.audioPlay = true;
                //document.querySelector('.animateImg').style.animationPlayState = 'running';
                this.running();
            }
            this.totalTime = sessionStorage.getItem("totalTime");
            let m = (this.totalTime%60).toFixed(0) < 10 ? '0'+(this.totalTime%60).toFixed(0) : (this.totalTime%60).toFixed(0);
            this.totalTimeStr = Math.floor(this.totalTime/60) + ":" + m;

            this.currentTime = document.querySelector(".main-audio").currentTime;
            let cf = Math.floor(this.currentTime/60);
            let cm = (this.currentTime%60).toFixed(0) < 10 ? '0'+(this.currentTime%60).toFixed(0) : (this.currentTime%60).toFixed(0);
            this.currentTimeStr = cf + ":" + cm;
            this.progress = this.currentTime/this.totalTime*100;
            document.querySelector(".circle").style.left = "calc("+this.progress+"% - 8px)";

        }else{
            this.isPlayed = false;
            this.audioPlay = false;
            this.setAudio();
            if(mainAudio && !mainAudio.paused){
                this.audioPlay = true;
            }
        }

        this.$nextTick(function(){
            let circle = document.querySelector(".circle");
            let flag = 0;
            circle.addEventListener("touchstart",function(e){ 
                if(self.progress == 0){
                    self.isTips3 = true;
                    self.tipsText3 = '在当前音频开始播放后才可以拖动哦~';
                    return;
                }
                if(self.isPlayed){
                    self.isPlayed = false;
                    document.querySelector(".main-audio").pause();
                    self.CLEAR_CURRENT_INTERVAL();
                    flag = 1;
                }else{
                    self.isPlayed = false;
                    self.CLEAR_CURRENT_INTERVAL();
                }
                //document.querySelector('.animateImg').style.animationPlayState = 'paused';
                self.animatePause();
            })
            circle.addEventListener("touchmove",function(e){ 
                if(self.progress == 0){
                    return;
                }
                let x = e.changedTouches[0].clientX - this.parentElement.offsetLeft;
                let xx = x < 0 ? 0 : x;
                let total = this.parentElement.offsetWidth;
                let move = xx > total ? total : xx;
                document.querySelector(".circle").style.left = (move - 8) + 'px';
                
                self.currentTime = self.totalTime * (move / total).toFixed(2);
                document.querySelector('.main-audio').currentTime = self.totalTime * (move / total).toFixed(2);
                let cf = Math.floor(self.currentTime/60);
                let cm = (self.currentTime%60).toFixed(0) < 10 ? '0'+(self.currentTime%60).toFixed(0) : (self.currentTime%60).toFixed(0);
                if(cm == 60) {
                    cf = cf + 1;
                    cm = "00";
                }
                self.currentTimeStr = cf + ":" + cm;

                self.progress = self.currentTime / self.totalTime * 100;
                self.SET_PERCENT(self.progress);
                
            })
            circle.addEventListener("touchend",function(e){  
                if(self.progress == 0){
                    return;
                }
                if(flag == 1){
                    self.isPlayed = true;
                    document.querySelector(".main-audio").play();
                    self.START_NEW_INTERVAL();
                    flag = 0;
                }else{
                    self.isPlayed = true;
                    self.audioPlay = true;
                    self.START_NEW_INTERVAL();
                }
                //document.querySelector('.animateImg').style.animationPlayState = 'running';
                self.running();
            })
        })
    },
    beforeRouteLeave (to, from , next) {
        this.$store.commit('SET_FROM_ROUTE_NAME', 'scenic-point-detail');
        next();
    }
}
</script>