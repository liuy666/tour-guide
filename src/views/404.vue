<style lang="less" scoped>
    div#not-found {
        width: 100%;
        height: 100%;
        background-color: #fff;
        .not-found-wrapper {
            overflow: hidden;
            width: 100%;
            height: 100%;
            .img-box {
                width: 360px;
                height: 322px;
                margin: 351px auto 30px;
                background: url("../assets/images/notfound.png") no-repeat center center / 100% 100%;
            }
            p {
                line-height: 34px;
                font-size: 28px;
                font-weight: 500;
                color: #666;
                text-align: center;
            }
        }
    }
</style>

<template>
    <div id="not-found">
        <v-touch class="not-found-wrapper" @tap="gotoHome">
            <div class="img-box"></div>
            <p>网络不给力，点击屏幕重试</p>
        </v-touch>
    </div>
</template>

<script>
export default {
    methods: {
        gotoHome() {
            this.$router.replace({ // 需更改  不能直接跳跟路由 应改为指定路由
                path: '/'
            })
        }
    }
}
</script>
