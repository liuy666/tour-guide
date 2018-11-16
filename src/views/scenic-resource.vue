<style lang="less" scoped>
    #scenic-resource {
        border-top: 1px solid #f8f8f8;
        padding-left: 30px;
        .resource-list {
            height: 468px;
            overflow-y: auto;
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
                            border-radius: 10px;
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
                        <img :data-rid="res.resource_id" :src="res.url" alt="" />
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
        this.setRouteName('scenic-resource');
    },
    computed: mapState({
        resourceList: state => state.app.resourceList
    }),
    methods: {
        ...mapMutations([
            'setRouteName'
        ]),
        selectOne(e) {
            const lis = document.querySelectorAll('ul li');
            for (let li of lis) {
                if (li.dataset.rid === e.target.dataset.rid) {
                    this.$router.push({
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