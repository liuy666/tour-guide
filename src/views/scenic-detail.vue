<style lang="less" scoped>
    #scenic-detail {
        height: 100%;
    }
</style>

<template>
    <div id="scenic-detail">
        <audio controls>
            <source :src="defaultSrc" type="audio/mpeg" />
            您的浏览器不支持 audio 元素
        </audio>
        <audio controls>
            <source src="" type="audio/mpeg" />
            您的浏览器不支持 audio 元素
        </audio>
        <audio controls>
            <source src="" type="audio/mpeg" />
            您的浏览器不支持 audio 元素
        </audio>
    </div>
</template>

<script>
export default {
    data() {
        return {
            defaultSrc: '',
            srcList: []
        }
    }
}
</script>
