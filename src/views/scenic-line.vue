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
                        img {
                            height: 100px;
                            width: 112px;
                            margin-right: 30px;
                            border-radius: 10px;
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
                        img {
                            width: 30px;
                            height: 24px;
                            margin-right: 28px;
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
                <li>
                    <section class="img-left">
                        <img src="../assets/images/fj.jpg" alt="" />
                        <section>
                            <p class="font30">古道风情路线</p>
                            <p class="font24">用时4小时</p>
                        </section>
                    </section>
                    <section class="img-right">
                        <img src="../assets/images/icon_select@2x.png" alt="" />
                    </section>
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