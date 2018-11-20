<style lang="less" scoped>
    #full-view {
        height: 100%;
        width: 100%;
    }
</style>

<template>
    <div id="full-view"></div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        const params = this.$route.params;
        if(!Object.keys(params).length) {
            this.$router.push({
                name: 'main'
            });
            return;
        } else {
            const contaier = document.querySelector('#full-view');
            const ifm = document.querySelector('.ifm');
            if (ifm) {
                contaier.removeChild(ifm);
            }
            let iframe = document.createElement('iframe');
            iframe.src = params.src;
            iframe.frameBorder = '0';
            iframe.height = '100%';
            iframe.width = '100%';
            iframe.classList.add('ifm');
            contaier.appendChild(iframe);
        }
    }
}
</script>