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
                <li>
                    <img src="../assets/images/fj.jpg" alt="" />
                    <span>剑门关景区购物点</span>
                </li>
            </ul>
        </section> 
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>