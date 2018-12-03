<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="less" scoped>
    #app {
        height: 100%;
    }
</style>

<script>
    import { mapMutations, mapState } from 'vuex';
    export default {
        data() {
            return {
                timer: '', // 音频的播放定时器
                audioPercent: '', // 音频的播放进度
                totalTime: '' // 音频的总时长
            }
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
                    const mainAudio = document.querySelector('.main-audio');
                    const audioContainer = document.querySelector('#app');
                    if (mainAudio) {
                        clearInterval(this.timer);
                        if (!mainAudio.paused) {
                            mainAudio.pause();
                        }
                        audioContainer.removeChild(mainAudio);
                        this.audioPercent = 0;
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

                    audioDom.oncanplay = (e) => {
                        let _audioDom = e.target;
                        this.totalTime = _audioDom.duration;
                        // sessionStorage.setItem('playStatus', JSON.stringify({isPauseStatus : false}));
                        _audioDom.play();
                        // this.SETMAPSTATUS({
                        //     isPlayed: true,
                        // });
                        // this.isPlayed = true;
                        // if (this.isPlayed) {
                        //     this.changeMapIcon(true);
                        // }
                    }
                    audioDom.onplay = (e) => {
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
                if (percent >= 100) {
                    const currentAudio = document.querySelector('.main-audio');

                    // 改用vuex更改地图icon 关闭弹窗 更改播放按钮状态
                    // this.changeMapIcon(false);
                    // this.oMap_main.closePopup();
                    // this.isPlayed = false;

                    if (!currentAudio.paused || !currentAudio.ended) {
                        currentAudio.pause();
                    }
                    this.audioPercent = 0;
                    this.SETPERCENT(0);
                    this.CLEAR_CURRENT_INTERVAL();
                    let currentId = currentAudio.dataset.id;
                    const app = document.querySelector('#app');
                    app.removeChild(currentAudio);
                    // sessionStorage.setItem('playStatus', JSON.stringify({isPauseStatus: true}));
                    
                    const isAuto = sessionStorage.getItem('isAuto');
                    // 如果开启了自动连播
                    if (isAuto) {
                        let next = this.getNext(currentId);
                        if (next) {

                            // 改用vuex更改当前显示信息
                            // this.scenicPointImg = next.nextPoint.url;
                            // this.scenicPointName = next.nextPoint.name;
                            // this.scenicPointId = next.nextPoint.resource_id;
                            // this.START_NEW_INTERVAL();
                            // this.isPlayed = true;
                            // this.changeMapIcon(true);

                            sessionStorage.setItem('currentPoint',JSON.stringify(next.nextPoint));
                            // this.autoPlay(); // 同步通知景点列表更改状态--假如景点列表当前未打开?待测试
                            // this.playAudio({
                            //     _src: next.nextPlay.aSrc,
                            //     _id: next.nextPlay.aId,
                            //     _type: 3
                            // });
                            this.STARTPLAY({
                                src: next.nextPlay.aSrc,
                                id: next.nextPlay.aId
                            });
                        } else { // 表明播放列表已播完，则更改播放状态
                            sessionStorage.setItem('playStatus', JSON.stringify({isPauseStatus: true}));
                        }
                    }
                }
            },
        },
        methods: {
            ...mapMutations([
                'SETPERCENT', // 实时更新播放进度
                'STARTPLAY',
                'CLEAR_CURRENT_INTERVAL'
                // 'SETMAPSTATUS' // 更新地图页的播放状态
            ]),
            // 播放进度圆环
            changeProgress() {
                this.timer = setInterval(() => {
                    let currentTime = document.querySelector('.main-audio').currentTime;
                    this.audioPercent = currentTime / this.totalTime * 100;
                    console.log('播放进度：' + currentTime / this.totalTime * 100 + '%');
                    this.SETPERCENT(this.audioPercent);
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
        }
    }
</script>
