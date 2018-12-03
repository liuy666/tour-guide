<style lang="less" scoped>
    #scenic-resource {
        border-top: 1px solid #f8f8f8;
        padding-left: 30px;
        .resource-list {
            height: 468px;
            overflow-y: auto;
            -webkit-overflow-scrolling : touch;
            ul {
                overflow: hidden;
                li {
                    height: 100px;
                    display: flex;
                    flex-direction: row;
                    margin-top: 20px;
                    div {
                        height: 100px;
                        width: 112px;
                        margin-right: 30px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    span {
                        font-size: 30px;
                        font-weight: 400;
                        line-height: 100px;
                    }
                }
            }
        }
    }
</style>

<template>
    <div id="scenic-resource">
        <section class="resource-list">
            <ul>
                <li v-for="res of resourceList" :key="res.resource_id" :data-rid="res.resource_id" @click="selectOne">
                    <div :data-rid="res.resource_id">
                        <img v-if="res.url" style="border-radius: 10px;" :data-rid="res.resource_id" :src="res.url" alt="加载中..." />
                        <img v-else-if="res.resource_type === 7" style="border-radius: 10px;" :data-rid="res.resource_id" src="../assets/images/bg_stop@3x.png" alt="加载中..." />
                        <img v-else-if="res.resource_type === 3" style="border-radius: 10px;" :data-rid="res.resource_id" src="../assets/images/bg_shop@3x.png" alt="加载中..." />
                        <img v-else-if="res.resource_type === 8" style="border-radius: 10px;" :data-rid="res.resource_id" src="../assets/images/bg_hotel@3x.png" alt="加载中..." />
                        <img v-else-if="res.resource_type === 5" style="border-radius: 10px;" :data-rid="res.resource_id" src="../assets/images/bg_exit@3x.png" alt="加载中..." />
                        <img v-else-if="res.resource_type === 9" style="border-radius: 10px;" :data-rid="res.resource_id" src="../assets/images/bg_centre@3x.png" alt="加载中..." />
                        <img v-else-if="res.resource_type === 10" style="border-radius: 10px;" :data-rid="res.resource_id" src="../assets/images/bg_doctor@3x.png" alt="加载中..." />
                        <img v-else-if="res.resource_type === 4" style="border-radius: 10px;" :data-rid="res.resource_id" src="../assets/images/bg_food@3x.png" alt="加载中..." />
                        <img v-else-if="res.resource_type === 6" style="border-radius: 10px;" :data-rid="res.resource_id" src="../assets/images/bg_toilet@3x.png" alt="加载中..." />
                        <img v-else-if="res.resource_type === 11" style="border-radius: 10px;" :data-rid="res.resource_id" src="../assets/images/bg_else@3x.png" alt="加载中..." />
                    </div>
                    <span :data-rid="res.resource_id">{{res.name}}</span>
                </li>
            </ul>
        </section> 
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
    data() {
        return {
            
        }
    },
    created() {
        this.SET_ROUTE_NAME('scenic-resource');
    },
    computed: mapState({
        resourceList: state => state.app.resourceList
    }),
    methods: {
        ...mapMutations([
            'SET_ROUTE_NAME'
        ]),
        selectOne(e) {
            const lis = document.querySelectorAll('ul li');
            for (let li of lis) {
                if (li.dataset.rid === e.target.dataset.rid) {
                    this.$router.replace({
                        name: 'main',
                        params: {
                            rid: li.dataset.rid
                        }
                    });
                }
            }
        }
    }
}
</script>