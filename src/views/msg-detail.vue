<style lang="less">
    #msg-detail {
        height: 100%;
        width: 100%;
        overflow-y: auto;
        padding: 30px;
        box-sizing: border-box;
        img {
            width: 100%;
            margin: 20px 0;
        }
        p {
            font-size: 28px;
        }
    }
</style>

<template>
    <div id="msg-detail"></div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {

        }
    },
    computed: mapState({
        content: state => state.app.content
    }),
    mounted() {
        console.log('****');
        console.log(this.$route);
        if (this.$route.params.content) {
            document.querySelector('#msg-detail').innerHTML = this.$route.params.content;
        } else {
            document.querySelector('#msg-detail').innerHTML = this.content;
        }
    }
}
</script>
