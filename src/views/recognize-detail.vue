<style lang="less">
    #recognize-detail {
        height: 100%;
        width: 100%;
        .result-content{
            padding: 40px;
            box-sizing: border-box;
            text-align: center;
            .result-img{
                width: 400px;
                height: 400px;
                display: inline-block;
                margin-top: 30px;
                border-radius: 200px;
            }
            .result-name{
                margin-bottom: 20px;
                padding: 20px;
                font-size:60px;
                color:rgba(51,51,51,1);
                line-height:70px;
                span{
                    display: inline-block;
                    padding: 28px 0;
                    border-bottom: 1px solid rgba(51,51,51,1);
                }
            }
            .result-desc{
                width: 418px;
                font-size:30px;
                font-weight:400;
                color:rgba(51,51,51,1);
                line-height:70px;
                margin: 0 auto;
            }
        }
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
            this.$router.replace({
                name: 'recognize'
            });
            return;
        } else {
            const contaier = document.querySelector('#recognize-detail');
            /*const ifm = document.querySelector('.ifm');
            if (ifm) {
                contaier.removeChild(ifm);
            }
            let iframe = document.createElement('iframe');
            iframe.src = 'https' + params.src.slice(4);
            iframe.name = 'newIframe';
            iframe.frameBorder = '0';
            iframe.height = '100%';
            iframe.width = '100%';
            iframe.classList.add('ifm');
            contaier.appendChild(iframe);*/
            // console.log(document.querySelector('.ifm').contentWindow.document)
            // iframe.onload = function(e) {
            //     console.log(iframe.contentWindow)
            //    //  ['newIframe'].document.body.innerHTML
            // }
            // iframe.contentWindow.document.getElementById('user-pic').src = 'https://www.baidu.com' /// ???


            if(contaier.children.length>0){
                contaier.innerHTML = "";
            }
            let bgImg = 'https' + params.img.slice(4);
            let contentStr = `<div class='result-content'>
                                <div class='result-img' style="background:url(${bgImg}) no-repeat center / 100% 100%"></div>
                                <div class="result-name"><span>${params.name}</span></div>
                                <div class="result-desc">${params.desc}</div>
                             </div>`;
            contaier.innerHTML = contentStr;
        }
    }
}
</script>
