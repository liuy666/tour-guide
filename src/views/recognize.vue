<style lang="less">
    #recognize {
        height: 100%;
        overflow: hidden;
        .weui-loading_toast .weui-toast {
            top: @toast-top;
            height: 170px;
            width: 228px;
            i {
                width: 60px;
                height: 60px;
                margin-top: 55px;
            }
        }
        .vux-toast .weui-icon_toast {
            margin-top: 30px;
        }
        .vux-toast .weui-toast {
            top: @toast-top;
            width: 228px;
        }
        .weui-icon-success-no-circle:before {
            font-size: 100px;
            content: '\EA0D';
        }
        .weui-toast__content {
            margin-top: 20px;
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
        <toast v-model="isTips" type="cancel" :text="tipsText" :is-show-mask="true"></toast>
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
import {Loading, Toast} from 'vux';
export default {
    components: {
        Loading,
        Toast
    },
    data() {
        return {
            isShowLoading: false,
            loadText: '',
            isTips: false,
            tipsText: ''
        }
    },
    methods: {
        async addImg(changeEvent) {
            // console.log(changeEvent);
            this.isShowLoading = true;
            const file = changeEvent.target.files[0], // 返回一个FileList对象,类数组类型
                  imgType = file.type;
            
            // 上传图片至服务器
            if (imgType === 'image/png' || imgType === 'image/jpeg') {
                const formData = new FormData();
                formData.append('image_file', file);
                const res = await this.$http.post(this.$base + '/hqyatu-navigator/app/img/recognition', formData, 'multipart/form-data');
                console.log(res);

                if (!res) {
                    this.isShowLoading = false;
                    changeEvent.target.value = '';
                    this.tipsText = res.msg;
                    this.isTips = true;
                    return;
                }

                this.isShowLoading = false;
                let descOrder = res.response.identify_results.sort((a, b) => b.probability - a.probability);
                if (descOrder[0].probability.toFixed(2) >= 0.45) {
                    this.$router.push({
                        name: 'recognize-detail',
                        params: {
                            src: descOrder[0].detail_url
                        }
                    });
                } else {
                    changeEvent.target.value = '';
                    this.tipsText = '无法识别该图像！';
                    this.isTips = true;
                }
                
            }
        }
    }
}
</script>