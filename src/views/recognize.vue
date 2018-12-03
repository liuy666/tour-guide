<style lang="less">
    #recognize {
        height: 100%;
        overflow: hidden;
        // loading层弹窗样式
        .weui-loading_toast .weui-toast {
            top: @toast-top;
            width: 228px!important;
            height: 170px!important;
            min-height: 170px!important;
            max-height: 170px!important;
            i {
                width: 60px;
                height: 60px;
                margin-top: 55px;
            }
        }

        // 带图标信息提示
        .short.vux-toast .weui-toast { // 提示框
            top: @toast-top;
            width: 228px!important;
            height: 170px!important;
            min-height: 170px!important;
            max-height: 170px!important;
        }
        .short.vux-toast .weui-icon_toast { // 提示框icon图片容器
            margin-top: 28px;
        }
        .short.vux-toast .weui-icon_toast:before { // 提示框icon图片
            font-size: 60px;
        }
        .short.vux-toast .weui-toast__content { // 提示框文本信息
            margin: 22px 0 0 0;
            font-size: 28px;
        }

        // 纯文字信息提示
        .long.vux-toast .weui-toast{ // 提示框
            top: @toast-top;
            width: auto!important;
        }
        .long.vux-toast .weui-toast__content { // 提示框文本信息
            margin: 0;
            font-size: 28px;
            padding: 25px 20px 15px;
        }


        .img-690-866 {
            background: url("../assets/images/recognize.png") no-repeat center center / 690px 866px;
            border-radius: 20px;
            width: 690px;
            height: 866px;
            margin: 31px auto 78px;
        }
        .camera-wraper {
            display: flex;
            flex-direction: row;
            width: 410px;
            height: 177px;
            margin: 0 auto;
            overflow: hidden;
            .s-130-177 {
                position: relative;
                overflow: hidden;
                section {
                    width: 130px;
                    height: 130px;
                    margin-bottom: 11px;
                }
                p {
                    font-size: 30px;
                    font-weight: 500;
                    line-height: 36px;
                    text-align: center;
                }
                input {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                }
            }
            .left {
                margin-right: 150px;
                section {
                    background: url("../assets/images/icon_photograph@2x.png") no-repeat center top / 130px 130px;
                }
            }
            .right section {
                background: url("../assets/images/icon_photo@2x.png") no-repeat center top / 130px 130px;
            }
        }
    }
</style>

<template>
    <div id="recognize">
        <loading :show="isShowLoading" :text="loadText" position="absolute"></loading>
        <toast class="short" v-model="isTips1" type="cancel" :text="tipsText1" :is-show-mask="true"></toast>
        <toast class="short" v-model="isTips2" type="success" :text="tipsText2" :is-show-mask="true"></toast>
        <toast class="long" v-model="isTips3" type="text" :text="tipsText3" :is-show-mask="true"></toast>
        <section class="img-690-866"></section>
        <section class="camera-wraper">
            <section class="left s-130-177">
                <input type="file" class="camera" accept="image/*" capture="camera" @change="addImg" />
                <section></section>
                <p>拍照</p>
            </section>
            <section class="right s-130-177">
                <input type="file" class="camera" accept="image/*" @change="addImg" />
                <section></section>
                <p>相册</p>
            </section>
        </section>
    </div>
</template>

<script>
import { Loading, Toast } from 'vux';
import { mapMutations } from 'vuex';
export default {
    components: {
        Loading,
        Toast
    },
    data() {
        return {
            isShowLoading: false,
            loadText: '',
            isTips1: false,
            isTips2: false,
            isTips3: false,
            tipsText1: '',
            tipsText2: '',
            tipsText3: ''
        }
    },
    beforeRouteLeave (to, from , next) {
        this.SET_FROM_ROUTE_NAME('recognize');
        next();
    },
    methods: {
        ...mapMutations([
            'SET_FROM_ROUTE_NAME'
        ]),
        async addImg(changeEvent) {
            this.isShowLoading = true;
            const file = changeEvent.target.files[0], // 返回一个FileList对象,类数组类型
                  imgType = file.type;
            
            // 上传图片至服务器
            if (imgType === 'image/png' || imgType === 'image/jpeg') {
                const formData = new FormData();
                formData.append('image_file', file);
                const res = await this.$http.post(this.$base + '/hqyatu-navigator/app/img/recognition', formData, 'multipart/form-data');

                if (!res) {
                    this.isShowLoading = false;
                    changeEvent.target.value = '';
                    this.tipsText1 = '请求失败';
                    this.isTips1 = true;
                    return;
                }

                this.isShowLoading = false;
                let descOrder = res.response.identify_results.sort((a, b) => b.probability - a.probability);
                if (descOrder[0].probability.toFixed(2) > 0.7) {
                    this.tipsText2 = '识别成功';
                    this.isTips2 = true;
                    setTimeout(() => {
                        this.$router.push({
                            name: 'recognize-detail',
                            params: {
                                src: descOrder[0].detail_url
                            }
                        });
                    }, 2000);
                } else if (descOrder[0].probability.toFixed(2) > 0.3 && descOrder[0].probability.toFixed(2) <= 0.7) {
                    changeEvent.target.value = '';
                    this.tipsText3 = '难住我了，换个角度试试~';
                    this.isTips3 = true;
                } else if (descOrder[0].probability.toFixed(2) > 0.1 && descOrder[0].probability.toFixed(2) <= 0.3) {
                    changeEvent.target.value = '';
                    this.tipsText3 = '好像不是植物哦~';
                    this.isTips3 = true;
                } else {
                    changeEvent.target.value = '';
                    this.tipsText3 = '偶~超出了我的认知';
                    this.isTips3 = true;
                }
            }
        }
    }
}
</script>