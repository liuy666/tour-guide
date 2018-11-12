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
                    img {
                        height: 100px;
                        width: 112px;
                        margin-right: 30px;
                        border-radius: 10px;
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
                <li v-for="res of resources" :key="res.resource_id">
                    <img :src="res.url" alt="" />
                    <span>{{res.name}}</span>
                </li>
            </ul>
        </section> 
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            
        }
    },
    computed: mapState({
        resources: state => state.app.resourceList
    }),
}
</script>