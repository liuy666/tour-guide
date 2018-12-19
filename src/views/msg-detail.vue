<style lang="less">
    #msg-detail {
        height: 100%;
        width: 100%;
        overflow-y: auto;
        padding: 30px;
        box-sizing: border-box;
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
        //content: state => state.app.content
        msgParams: state => state.app.msgParams
    }),
    mounted() {
        // if (this.$route.params.content) {
        //     document.querySelector('#msg-detail').innerHTML = this.$route.params.content;
        //     document.querySelector('#name').text = this.$route.params.msgTitle;
        // } else {
        //     document.querySelector('#msg-detail').innerHTML = this.msgParams.content;
        //     document.querySelector('#name').text = this.msgParams.msgTitle;
        // }
        document.querySelector('#msg-detail').innerHTML = this.msgParams.content;
        document.querySelector('#name').text = this.msgParams.msgTitle;
        this.$nextTick(() => {
            const imgs = document.querySelectorAll('img');
            const container = document.querySelector('#msg-detail');
            const padding = parseInt(window.getComputedStyle(container).padding);
            const contentWidth = container.clientWidth - padding * 2;

            for (let img of imgs) {
                let newDiv = document.createElement('div');
                newDiv.style.height = contentWidth / img.offsetWidth * img.offsetHeight + 'px';
                newDiv.style.width = contentWidth + 'px';
                newDiv.style.marginTop = '10px';
                newDiv.style.marginBottom = '10px';
                let parent = img.parentNode;
                let newImg = img.cloneNode();
                newImg.style.width = '100%';
                newImg.style.height = '100%';
                newDiv.appendChild(newImg);
                parent.insertBefore(newDiv, img);
                parent.removeChild(img);
            }
        });
    },
    // beforeRouteLeave (to, from , next) {
    //     document.querySelector('#name').text = "青川导游";
    //     next()
    // }
}
</script>
