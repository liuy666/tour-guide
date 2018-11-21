<style lang="less" scoped>
    #scenic-line {
        border-top: 1px solid #f8f8f8;
        padding-left: 30px;
        .line-list {
            height: 468px;
            overflow-y: auto;
            ul {
                overflow: hidden;
                li {
                    height: 100px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin-top: 20px;
                    .img-left {
                        display: flex;
                        flex-direction: row;
                        div {
                            margin-right: 30px;
                            height: 100px;
                            width: 112px;
                            img {
                                height: 100%;
                                width: 100%;
                            }
                        }
                        p {
                            font-weight: 400;
                        }
                        .font30 {
                            font-size: 30px;
                            line-height: 34px;
                            margin: 18px 0 8px;
                        }
                        .font24 {
                            font-size: 24px;
                            color: #888;
                        }
                    }
                    .img-right {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        div {
                            width: 30px;
                            height: 24px;
                            margin-right: 28px;
                        }
                        img {
                            width: 100%;
                            height: 100%;
                            display: none;
                        }
                    }
                }
            }
        }
    }
</style>

<template>
    <div id="scenic-line">
        <section class="line-list">
            <ul>
                <v-touch tag="li" v-for="line of lines" :key="line.lineId" @tap="gotoMapLine(line.lineId)">
                    <section class="img-left">
                        <div>
                            <img style="border-radius: 10px;" src="../assets/images/bg_select@3x.png" alt="加载中..." />
                        </div>
                        <section>
                            <p class="font30">{{line.name}}</p>
                            <p class="font24">用时{{parseInt(line.playHour)}}小时</p>
                        </section>
                    </section>
                    <section class="img-right">
                        <div>
                            <img :data-lineid="line.lineId" src="../assets/images/icon_select@2x.png" alt="加载中..." />
                        </div>
                    </section>
                </v-touch>
            </ul>
        </section> 
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    data() {
        return {
        }
    },
    created() {
        this.SETROUTENAME('scenic-line');
    },
    mounted() {
        const lineId = sessionStorage.getItem('lineId');
        const imgs = document.querySelectorAll('.img-right img');
        for (let img of imgs) {
            if (img.dataset.lineid === lineId) {
                img.style.display = 'block';
            }
        }
    },
    beforeRouteLeave (to, from , next) {
        this.SETFROMROUTENAME('scenic-line');
        next();
    },
    computed: mapState({
        lines: state => state.app.lineList,
    }),
    methods: {
        ...mapMutations([
            'SETROUTENAME',
            'REMOVECURRENTLINE',
            'SETFROMROUTENAME'
        ]),
        gotoMapLine(lineId) {
            const imgs = document.querySelectorAll('.img-right img');
            for (let img of imgs) {
                if (img.dataset.lineid === lineId) {
                    if (img.style.display === 'block') {
                        img.style.display = 'none';
                        sessionStorage.removeItem('lineId');
                        this.REMOVECURRENTLINE();
                    } else {
                        sessionStorage.setItem('lineId', lineId);
                        img.style.display = 'block';
                        this.$router.push({
                            name: 'main',
                            params: {
                                lineId
                            }
                        });
                    }
                } else {
                    img.style.display = 'none';
                }
            }
        }
    }
}
</script>