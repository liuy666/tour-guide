<style lang="less" scoped>
    #scenic-spot {
        .weui-loading_toast .weui-toast {
            top: @toast-top;
            height: 170px;
            width: 228px;
            i {
                width: 60px;
                height: 60px;
                margin-top: 55px;
            }
        }
        .seach {
            position: relative;
            width:650px;
            height:60px;
            margin: 0 30px 20px;
            input::-webkit-input-placeholder { 
                font-size:24px;
                font-weight:500;
                color: #888;
                line-height:34px;
            }
            input {
                width:650px;
                height:60px;
                background:#f8f8f8;
                border-radius:30px;
                padding-left: 72px;
                box-sizing: border-box;
            }
            section {
                position: absolute;
                top: 13px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .img-32-34 {
                width: 32px;
                height: 34px;
                left: 20px;
            }
            .img-34-34 {
                width: 32px;
                height: 34px;
                right: 9px;
            }
        }
        .spot-list {
            height: 389px;
            overflow-y: auto;
            ul {
                overflow: hidden;
                li {
                    height: 112px;
                    margin-bottom: 8px;
                    box-sizing: border-box;
                    padding: 6px 30px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    .img-left {
                        display: flex;
                        flex-direction: row;
                        div {
                            width: 112px;
                            height: 100px;
                            margin-right: 32px;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                        span {
                            font-size: 30px;
                            font-weight: 400;
                            line-height: 112px;
                        }
                    }
                    .img-right {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        div {
                            width: 50px;
                            height: 50px;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                    .play {
                        display: none;
                    }
                }
            }
        }
    }
</style>

<template>
    <div id="scenic-spot">
        <!-- 网络请求loading层 -->
        <loading :show="isShowLoading" :text="loadText" position="absolute"></loading>
        <section class="seach">
            <input type="text" placeholder="请输入景点名称" v-model="val" />
            <v-touch tag="section" class="img-32-34" @tap="searchInput">
                <img src="../assets/images/icon_so@2x.png" alt="加载中..."/>
            </v-touch>
            <v-touch tag="section" class="img-34-34"  @tap="clearInput">
                <img src="../assets/images/icon_close@2x.png" alt="加载中..." />
            </v-touch>
        </section>
        <section class="spot-list">
            <ul class="list">
                <li v-for="point of pointsList" :key="point.id" :data-pid="point.id" @click="selectOne">
                    <section class="img-left" :data-pid="point.id">
                        <div :data-pid="point.id">
                            <img v-if="point.src" style="border-radius: 10px;" :data-pid="point.id" :src="point.src" alt="加载中..." />
                            <img v-else style="border-radius: 10px;" :data-pid="point.id" src="../assets/images/bg_scenic@3x.png" alt="加载中..." />
                        </div>
                        <span :data-pid="point.id">{{ point.name }}</span>
                    </section>
                    <section :data-pid="point.id" class="img-right">
                        <div :data-pid="point.id">
                            <img :data-pid="point.id" src="../assets/images/icon_big_stop@2x.png" alt="加载中..." />
                            <img :data-pid="point.id" class="play" src="../assets/images/icon_big_play@2x.png" alt="加载中..." />
                        </div>
                    </section>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import { Loading } from 'vux';
import { mapMutations, mapState } from 'vuex';
export default {
    components: {
        Loading
    },
    data() {
        return {
            pointsList: [],
            val: '',
            isShowLoading: false,
            loadText: '',
            sceneryId: '',
        }
    },
    created() {
        let pointList = JSON.parse(sessionStorage.getItem('pointList'));
        this.getList(pointList);
        this.sceneryId = this.$route.params.sceneryId;
        this.SETROUTENAME('scenic-spot');
    },
    mounted() {
        const playStatus = JSON.parse(sessionStorage.getItem('playStatus'));
        const lis = document.querySelectorAll('.spot-list li');
        const currPoint = JSON.parse(sessionStorage.getItem('currentPoint'));
        for (let li of lis) {
            if (li.dataset.pid === currPoint.resource_id) {
                li.style.backgroundColor = '#f0f0f0';
                if (playStatus && !playStatus.status) {
                    li.children[1].children[0].children[0].style.display = 'none';
                    li.children[1].children[0].children[1].style.display = 'block';
                } else {
                    li.children[1].children[0].children[0].style.display = 'block';
                    li.children[1].children[0].children[1].style.display = 'none';
                }
            } else {
                li.style.backgroundColor = '#fff';
                li.children[1].children[0].children[0].style.display = 'block';
                li.children[1].children[0].children[1].style.display = 'none';
            }
        }        
    },
    computed: mapState({
        watchPlay: state => state.app.playStatus,
        watchAutoPlay: state => state.app.autoPlay,
        watchPlayEnd: state => state.app.playEnd,
    }),
    watch: {
        watchPlay(val) {
            const currPoint = JSON.parse(sessionStorage.getItem('currentPoint'));
            const lis = document.querySelectorAll('.spot-list li');
            for (let li of lis) {
                if (li.dataset.pid === currPoint.resource_id) {
                    if (val === 'play') {
                        li.children[1].children[0].children[0].style.display = 'none';
                        li.children[1].children[0].children[1].style.display = 'block';
                    }
                    if (val === 'pause') {
                        li.children[1].children[0].children[0].style.display = 'block';
                        li.children[1].children[0].children[1].style.display = 'none';
                    }
                }
            }
        },
        watchAutoPlay(val) {
            const lis = document.querySelectorAll('.spot-list li');
            const currPoint = JSON.parse(sessionStorage.getItem('currentPoint'));
            for (let li of lis) {
                if (li.dataset.pid === currPoint.resource_id) {
                    li.style.backgroundColor = '#f0f0f0';
                    li.children[1].children[0].children[0].style.display = 'none';
                    li.children[1].children[0].children[1].style.display = 'block';
                } else {
                    li.style.backgroundColor = '#fff';
                    li.children[1].children[0].children[0].style.display = 'block';
                    li.children[1].children[0].children[1].style.display = 'none';
                }
            }
        },
        // 监听是否播放结束
        watchPlayEnd(val) {
            const lis = document.querySelectorAll('.spot-list li');
            const currPoint = JSON.parse(sessionStorage.getItem('currentPoint'));
            for (let li of lis) {
                if (li.dataset.pid === currPoint.resource_id) {
                    li.style.backgroundColor = '#f0f0f0';
                    li.children[1].children[0].children[0].style.display = 'block';
                    li.children[1].children[0].children[1].style.display = 'none';
                } else {
                    li.style.backgroundColor = '#fff';
                    li.children[1].children[0].children[0].style.display = 'block';
                    li.children[1].children[0].children[1].style.display = 'none';
                }
            }
        }
    },
    methods: {
        ...mapMutations([
            'SETROUTENAME',
            'pauseCurrentPlay'
        ]),
        selectOne(e) {
            const lis = document.querySelectorAll('.spot-list li');
            for (let li of lis) {
                if (e.target.dataset.pid === li.dataset.pid) {
                    if (li.children[1].children[0].children[0].style.display === 'none') {
                        li.children[1].children[0].children[0].style.display = 'block';
                        li.children[1].children[0].children[1].style.display = 'none';
                        this.pauseCurrentPlay();
                    } else {
                        li.style.backgroundColor = '#f0f0f0';
                        li.children[1].children[0].children[0].style.display = 'none';
                        li.children[1].children[0].children[1].style.display = 'block';
                        let status = {
                            status: false
                        }
                        sessionStorage.setItem('playStatus', JSON.stringify(status));
                        const pointList = JSON.parse(sessionStorage.getItem('pointList'));
                        let currPoint = pointList.filter(item => item.resource_id === li.dataset.pid)[0];
                        sessionStorage.setItem('currentPoint', JSON.stringify(currPoint));
                        let sortList = [...pointList];
                        sortList.sort((a, b) => a.serial - b.serial);
                        let index = sortList.findIndex(item => item.resource_id === li.dataset.pid);
                        let newPlayList = sortList.slice(index).map(item => {
                            return {
                                aSrc: item.guideUrl,
                                aId: item.resource_id
                            }
                        });
                        sessionStorage.setItem('playList', JSON.stringify(newPlayList));
                        this.$router.push({
                            name: 'main',
                            params: {
                                pid: li.dataset.pid
                            }
                        });
                    }
                } else {
                    li.style.backgroundColor = '#fff';
                    li.children[1].children[0].children[0].style.display = 'block';
                    li.children[1].children[0].children[1].style.display = 'none';
                }
            }
        },
        clearInput() {
            this.val = '';
        },
        async searchInput() {
            this.isShowLoading = true;
            const result = await this.$http.get(this.$base + '/hqyatu-navigator/app/resource/list', {
                sceneryId: this.sceneryId,
                resourceType: 1,
                name: this.val
            });
            if (!result) {
                this.isShowLoading = false;
                return;
            }
            this.getList(result.page.list);
            this.isShowLoading = false;
        },
        getList(pointList) {
            pointList.sort((a, b) => a.serial - b.serial);
            this.pointsList = pointList.map(element => {
                return {
                    src: element.url,
                    name: element.name,
                    id: element.resource_id
                };
            });
        }
    }
}
</script>