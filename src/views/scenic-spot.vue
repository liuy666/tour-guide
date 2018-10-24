<style lang="less" scoped>
    .circle {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: red;
        position: absolute;
        left: 60%;
        bottom: -6px;
    }
</style>

<template>
    <div id="scenic-spot" style="padding-bottom: 60px;">
        dfsfsdfsdfsdf来快点离开饭店里空间发了肯德基里看风景时离开家里开发
        <section style="position:relative;">
            <x-progress :percent="60" :show-cancel="false"></x-progress>
            <div class="circle"></div>
        </section>
    </div>
</template>

<script>
import { XProgress } from 'vux'; 
export default {
    components: {
        XProgress
    },
    data() {
        return {

        }
    }
}
</script>