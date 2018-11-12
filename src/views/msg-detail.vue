<style lang="less" scoped>
    #msg-detail {
        height: 100%;
        width: 100%;
        overflow-y: auto;
    }
</style>

<template>
    <div id="msg-detail"></div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        console.log('****');
        console.log(this.$route);
        document.querySelector('#msg-detail').innerHTML = this.$route.params.content;
    }
}
</script>
