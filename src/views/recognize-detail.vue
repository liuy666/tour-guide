<style lang="less" scoped>
    #recognize-detail {
        height: 100%;
        width: 100%;
    }
</style>

<template>
    <div id="recognize-detail"></div>
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
                name: 'recognize'
            });
            return;
        } else {
            const contaier = document.querySelector('#recognize-detail');
            const ifm = document.querySelector('.ifm');
            if (ifm) {
                contaier.removeChild(ifm);
            }
            let iframe = document.createElement('iframe');
            iframe.src = 'https' + params.src.slice(4);
            iframe.frameBorder = '0';
            iframe.height = '100%';
            iframe.width = '100%';
            iframe.classList.add('ifm');
            contaier.appendChild(iframe);
        }
    }
}
</script>
