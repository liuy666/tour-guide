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
            img {
                position: absolute;
                top: 13px;
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
                        img {
                            width: 112px;
                            height: 100px;
                            border-radius: 10px;
                            margin-right: 32px;
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
                        img {
                            width: 50px;
                            height: 50px;
                        }
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
            <img src="../assets/images/icon_so@2x.png" alt=""  class="img-32-34" @click="searchInput" />
            <img src="../assets/images/icon_close@2x.png" alt="" class="img-34-34" @click="clearInput" />
        </section>
        <section class="spot-list">
            <ul class="list">
                <li v-for="point of pointsList" :key="point.id" :data-pid="point.id" @click="selectOne">
                    <section class="img-left">
                        <img :src="point.src" alt="加载中..." />
                        <span>{{ point.index + '. ' +point.name }}</span>
                    </section>
                    <section class="img-right">
                        <img src="../assets/images/icon_big_stop@2x.png" alt="加载中..." />
                    </section>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import { Loading } from 'vux';
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
    },
    methods: {
        selectOne(evnet) {
            console.log(event);
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
                    index: element.serial,
                    id: element.resource_id
                };
            });
        }
    }
}
</script>