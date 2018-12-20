<template>
    <div id="app">
        <router-view />
        <!-- <div id="test" style="width: 100%;height: 30px;position:absolute;"></div> -->
        <confirm class="a_confirm" v-model="isShowAppConfirm" title="自动连播" @on-confirm="onAppConfirm" confirm-text="播放" mask-z-index="1003">
            <p style="text-align:center;">是否开始播放下一个景点</p>
        </confirm>
    </div>
</template>

<style lang="less">
    #app {
        height: 100%;
        .a_confirm.vux-confirm .weui-dialog {
            border-radius: 20px;
            width: 541px;
            max-width: 541px;
            .weui-dialog__hd {
                padding-top: 32px;
                .weui-dialog__title {
                    font-size: 36px;
                    font-weight: bold;
                    color: #333;
                }
            }
            .weui-dialog__bd {
                padding-bottom: 32px;
                padding-top: 32px;
                p {
                    font-size: 28px;
                    color: #333;
                    font-weight: 400;
                    line-height: 40px;
                }
                
            }
            .weui-dialog__ft {
                line-height: 80px;
                a {
                    font-size: 36px;
                    font-weight: 400;
                }
            }
        }
    }
</style>

<script>
    import { Confirm } from 'vux';
    import { mapMutations, mapState } from 'vuex';
    export default {
        data() {
            return {
                timer: '', // 音频的播放定时器
                audioPercent: '', // 音频的播放进度
                totalTime: '', // 音频的总时长
                isShowAppConfirm: false,
                nextPoint: null
            }
        },
        components: {
            Confirm
        },
        computed: {
            ...mapState({
                playParams: state => state.app.playParams,
                playStatus: state => state.app.playStatus
            })
        },
        watch: {
            // 监听播放参数(src、id)  开始新的播放
            playParams(params) {
                if (params) {
                    // 如果是扫码播放 则不在这里创建音频 ，只开启进度条
                    if (!params.isQrCode) {
                        // alert('进入播放')
                        const mainAudio = document.querySelector('.main-audio');
                        const audioContainer = document.querySelector('#app');
                        if (mainAudio) { // 当前正在播放时 切换了音频
                            clearInterval(this.timer);
                            if (!mainAudio.paused) {
                                mainAudio.pause();
                            }
                            audioContainer.removeChild(mainAudio);
                            this.audioPercent = 0;
                            this.SET_PERCENT(0);
                            this.timer = '';
                        }
                        let audioDom = document.createElement('audio');
                        let sourceDom = document.createElement('source');
                        sourceDom.type = 'audio/mpeg';
                        sourceDom.src = params.src;
                        audioDom.preload = 'auto';
                        audioDom.dataset.id = params.id;
                        audioDom.appendChild(sourceDom);
                        audioDom.className = 'main-audio';
                        audioDom.style.display = 'none';
                        audioContainer.appendChild(audioDom);
                        audioDom.load();
                        // alert('音频创建完成')

                        audioDom.oncanplay = (e) => {
                            // alert('音频就绪')
                            let _audioDom = e.target;
                            this.totalTime = _audioDom.duration;
                            // function ready() {
                            //     alert('开始播放')
                            //     _audioDom.play();
                            // }
                            // if (!window.WeixinJSBridge || !WeixinJSBridge.invoke) {
                            //     alert('没有WeixinJSBridgeReady')
                            //     document.removeEventListener('WeixinJSBridgeReady', ready, false);
                            //     document.addEventListener('WeixinJSBridgeReady', ready, false)
                            // } else {
                            //     alert('有WeixinJSBridgeReady')
                            //     ready()
                            // } 
                            _audioDom.play();
                            sessionStorage.setItem("totalTime",_audioDom.duration);
                            this.NOTICE_STOP(false); // 通知是否结束播放 -- 否
                            this.NOTICE_AUTO_PLAY(false); // 通知是否开始连播 -- 否
                            this.SET_HAS_GET_TOTAL(true);
                            // 添加次数统计
                            this.countPlayTimes(JSON.parse(sessionStorage.getItem('currentScenic')).scenery_id, params.id);
                        }
                        audioDom.onplay = (e) => {
                            this.changeProgress();
                        }
                    } else {
                        this.changeProgress();
                    }   
                }
            },
            // 监听播放状态 及时清除定时器
            playStatus(status) {
                if (status === 'pause') {
                    clearInterval(this.timer);
                    this.timer = '';
                }
            },
            // 播放进度监听
            audioPercent(percent) {
                if (percent > 99) { // 实际获取的时长可能比实际时长短 1s 左右,这里判断 99% 就算播完了
                    const currentAudio = document.querySelector('.main-audio');
                    // alert('isStop:' + this.$store.state.app.isStop)
                    // 通知地图页 更换icon图标/关闭弹窗/更改播放按钮状态
                    this.NOTICE_STOP(true);

                    if (!currentAudio.paused || !currentAudio.ended) { // 如果当前音频还有最后一点点没播完则直接停止 针对获取的总时长比实际时长短一点点的问题
                        // alert('暂停')
                        currentAudio.pause();
                    }
                    this.audioPercent = 0;
                    this.SET_HAS_GET_TOTAL(false);
                    this.SET_PERCENT(0);
                    this.CLEAR_CURRENT_INTERVAL();
                    let currentId = currentAudio.dataset.id;
                    const app = document.querySelector('#app');
                    app.removeChild(currentAudio);
                    // alert(document.querySelector('.main-audio'))
                    
                    // 如果开启了自动连播
                    const isAuto = sessionStorage.getItem('isAuto');
                    if (isAuto && isAuto == "true") {
                        // alert('自动播')
                        let next = this.getNext(currentId);
                        if (next) {
                            // alert('已经获取下一个')
                            this.SET_IS_LAST(false);
                            sessionStorage.setItem('currentPoint',JSON.stringify(next.nextPoint));
                            // this.AUTO_PALY(); // 同步通知景点列表更改状态--假如景点列表当前未打开?待测试
                            // this.START_PLAY({
                            //     src: next.nextPlay.aSrc,
                            //     id: next.nextPlay.aId
                            // });
                            this.nextPoint = {...next};
                            this.isShowAppConfirm = true;
                            // this.startPlay({
                            //     src: next.nextPlay.aSrc,
                            //     id: next.nextPlay.aId
                            // });
                            
                        }else{
                            // alert('最后一个')
                            this.SET_IS_LAST(true);
                        }
                    }
                }
            },
            // 监听路由 回退到home页 则停止播放
            '$route'(to, from) {
                if (to.path === '/' && from.name && document.querySelector('.main-audio')) {
                    this.CLEAR_CURRENT_INTERVAL();
                    document.querySelector('.main-audio').pause();
                }
            }
        },
        methods: {
            ...mapMutations([
                'SET_PERCENT', // 实时更新播放进度
                'START_PLAY',
                'CLEAR_CURRENT_INTERVAL',
                'NOTICE_STOP',
                'NOTICE_AUTO_PLAY',
                // 'AUTO_PALY',
                'SET_HAS_GET_TOTAL',
                'SET_IS_LAST'
            ]),
            onAppConfirm() {
                // 通知地图页更改当前景点显示信息
                this.NOTICE_AUTO_PLAY({
                    isAutoPlay: true,
                    nextMessage: this.nextPoint
                });
                const mainAudio = document.querySelector('.main-audio');
                const audioContainer = document.querySelector('#app');
                if (mainAudio) { // 当前正在播放时 切换了音频
                    clearInterval(this.timer);
                    if (!mainAudio.paused) {
                        mainAudio.pause();
                    }
                    audioContainer.removeChild(mainAudio);
                    this.audioPercent = 0;
                    this.SET_PERCENT(0);
                    this.timer = '';
                }
                let audioDom = document.createElement('audio');
                let sourceDom = document.createElement('source');
                sourceDom.type = 'audio/mpeg';
                sourceDom.src = this.nextPoint.nextPlay.aSrc;
                audioDom.preload = 'auto';
                audioDom.dataset.id = this.nextPoint.nextPlay.aId;
                audioDom.appendChild(sourceDom);
                audioDom.className = 'main-audio';
                audioDom.style.display = 'none';
                audioContainer.appendChild(audioDom);
                audioDom.load();

                audioDom.oncanplay = (e) => {
                    let _audioDom = e.target;
                    this.totalTime = _audioDom.duration;
                    _audioDom.play();
                    sessionStorage.setItem("totalTime",_audioDom.duration);
                    this.NOTICE_STOP(false); // 通知是否结束播放 -- 否
                    this.NOTICE_AUTO_PLAY(false); // 通知是否开始连播 -- 否
                    this.SET_HAS_GET_TOTAL(true);
                    // 添加次数统计
                    this.countPlayTimes(JSON.parse(sessionStorage.getItem('currentScenic')).scenery_id, options.id);
                }
                audioDom.onplay = (e) => {
                    this.changeProgress();
                }
            },
            // 播放进度
            changeProgress() {
                this.timer = setInterval(() => {
                    this.totalTime = this.totalTime || sessionStorage.getItem("totalTime");
                    let currentTime = document.querySelector('.main-audio').currentTime;
                    this.audioPercent = currentTime / this.totalTime * 100;
                    console.log('播放进度：' + currentTime / this.totalTime * 100 + '%');
                    // document.querySelector('#test').innerHTML = '播放进度：' + currentTime / this.totalTime * 100 + '%';
                    this.SET_PERCENT(this.audioPercent);
                },1000);
            },
            // 获取下一个播放链接
            getNext(currentId) {
                const playList = JSON.parse(sessionStorage.getItem('playList'));
                const index = playList.findIndex(item => item.aId === currentId);

                if (index + 1 === playList.length) { // 如果上一个播放的已经是最后一个
                    return false;
                } else {
                    const pointList = JSON.parse(sessionStorage.getItem('pointList'));
                    let nextPoint = pointList.filter(item => item.resource_id === playList[index + 1].aId)[0];
                    return {
                        nextPlay: playList[index + 1],
                        nextPoint: nextPoint
                    }
                }
            },
            async countPlayTimes(sid, pid) {
                const increaseTimes = await this.$http.get(this.$base + '/app/sys/playerVoice',{
                    sceneryId: parseInt(sid),
                    resourceId: parseInt(pid)
                });
                if (!increaseTimes) {
                    return;
                }
            }
        }
    }
</script>
