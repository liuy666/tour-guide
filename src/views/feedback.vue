<style lang="less">
    div#feedback {
        width: 690px;
        margin: 0 auto;
        padding-top: 36px;
        font-size: 30px;
        .wrapper-textarea-200 {
            width: 690px;
            height: 260px;
            background: rgba(248,248,248,1);
            border-radius: 10px; 
            padding: 30px;
            box-sizing: border-box;
            position: relative;
            margin-bottom: 51px;
            span {
                position: absolute;
                right: 20px;
                bottom: 18px;
                font-size:24px;
                font-weight:400;
            }
            .textarea-200 {       
                width: 630px;
                height: 150px; 
                resize: none;
                outline: none;
                font-weight:400;
                background-color: rgba(248,248,248,1);
                line-height:40px;
            }
        }
        .title-263-29 {
            font-weight: 500;
            line-height: 70px;
            margin-bottom: 26px;
            span {
                font-size: 24px;
                color: #888;
                margin-left: 20px;
            }
        }
        .wrapper-upload-120 {
            height: 120px;
            margin-bottom: 60px;
            .upload-120-120-base {
                float: left;
                height: 120px;
                width: 120px;
                border-radius: 10px;
                margin-right: 40px;
                position: relative;
            }
            .upload-hasBackground {
                background: rgba(248,248,248,1) url('../assets/images/fk.png') no-repeat center center / 32px 32px;
                overflow: hidden;
                input {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                    opacity: 0;
                }
            }
            .upload-hasImage {
                .close-btn {
                    position: absolute;
                    right: -10px;
                    top: -10px;
                    width: 34px;
                    height: 34px;
                    background: url('../assets/images/close-btn.png') no-repeat center center / 34px 34px;
                }
            }
        }
        form {
            overflow: hidden;
            div {
                overflow: hidden;
                margin-bottom: 24px;
                span {
                    font-weight: 500;
                    float: left;
                    width: 125px;
                    margin-right: 40px;
                    line-height: 70px;
                }
                input {
                    float: left;
                    outline: none;
                    width: 525px;
                    line-height: 70px;
                    font-size: 30px;
                    border-radius: 0;
                }
                input::-webkit-input-placeholder{ /* 改变默认placeholder颜色的方式 */
                    color: #ccc;
                }
                input::-moz-placeholder{   /* Mozilla Firefox 19+ */
                    color: #ccc;
                }
                input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
                    color: #ccc;
                }
                input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
                    color: #ccc;
                }
                input.border-bottom-1 {
                    border-bottom: 1px solid #e2e2e2;
                }
            }
            button.submit-upload {
                width: 690px;
                height: 90px;
                border-radius: 10px;
                font-size: 30px;
                color: #fff;
                font-weight: 500;
                margin-top: 80px;
                background: #FE5100;
            }
        }
        .weui-toast {
            top: @toast-top;
        }
        .weui-icon_toast {
            margin-top: 30px;
        }
        .weui-icon_toast:before {
            font-size: 100px;
            content: '\EA0D';
        }
        .weui-toast__content {
            margin-top: 20px;
        }
    }
</style>
    
<template>
    <div id="feedback">
        <section class="wrapper-textarea-200">
            <textarea v-model.trim="textareaValue" placeholder="请描述你遇到的问题！" class="textarea-200" rows="4" @input="inputWord"></textarea>
            <span><i>{{ entered }}</i>/200</span>
        </section>
        <section class="title-263-29">
            上传凭证<span>(不超过3张)</span>
        </section>
        <section class="wrapper-upload-120">
            <section class="upload-120-120-base upload-hasBackground" v-show="isCanAddImage">
                <input type="file" id="camera" accept="image/*" @change="addImg" />
            </section>
        </section>
        <form>
            <div>
                <span>姓名</span>
                <input v-model.trim="yourName" type="text" placeholder="请留下您的姓名" class="border-bottom-1" />
            </div>
            <div>
                <span>电话号码</span>
                <input v-model.trim="yourTel" type="text" placeholder="请留下你您的电话号码" @input="validateTel" @blur="validateLength" class="border-bottom-1"/>
            </div>
            <button class="submit-upload" @click.prevent="handleSubmit">提交反馈</button>
        </form>
        <toast v-model="isTips" type="cancel" :text="tipsText" :is-show-mask="true" width="8.2em"></toast>
    </div>
</template>

<script>
import { Toast } from 'vux';
export default {
    components: {
        Toast
    },
    data() {
        return {
            textareaValue: '',
            isCanAddImage: true,
            words: 0,
            yourName: '',
            yourTel: '',
            isTips: false,
            tipsText: '',
        }
    },
    computed: {
        entered() {
            return this.words;
        }
    },
    methods: {
        // 点击添加图片
        addImg(changeEvent) {
            // console.dir(changeEvent);
            const filesList = changeEvent.target.files, // 返回一个FileList对象,类数组类型
                  sectionDom = document.createElement('section'), // 创建预览容器元素
                  imgDom = document.createElement('img'), // 创建图片元素
                  containerDom = document.querySelector('.wrapper-upload-120'), // 获取包含框元素
                  uploadDom = document.querySelector('.upload-hasBackground'), // 获取上传按钮元素
                  closeDom = document.createElement('span');
            
            // 添加类名 渲染标签
            closeDom.classList.add('close-btn');
            // imgDom.classList.add('preview-image');
            imgDom.style.width = '100%';
            imgDom.style.height = '100%';
            imgDom.style.borderRadius = '5px';
            sectionDom.classList.add('upload-120-120-base', 'upload-hasImage');

            // 给关闭按钮添加点击关闭事件，开发调试用click，真机测试改用tap
            closeDom.addEventListener('click', (e) => {
                const eventSrc = e.target,
                      parentNode = eventSrc.parentNode,
                      grandparentNode = parentNode.parentNode;
                if (eventSrc.className === 'close-btn') {
                    grandparentNode.removeChild(parentNode);
                    if (containerDom.children.length <= 3) {
                        this.isCanAddImage = true;
                    }
                }
            });

            // 异步读取文件
            const fileReader = new FileReader();
            fileReader.readAsDataURL(filesList[0]); // 返回一个基于Base64编码的data-url对象
            fileReader.onload = (loadEvent) => {
                imgDom.src = loadEvent.target.result;
                imgDom.file = filesList[0];
                sectionDom.appendChild(imgDom);
                sectionDom.appendChild(closeDom);
                containerDom.insertBefore(sectionDom, uploadDom);
                changeEvent.target.value = '';
                if(containerDom.children.length > 3) {
                    this.isCanAddImage = false;
                }
            }
        },
        // 多选框输入事件
        inputWord() {
            if (this.textareaValue.length > 200) {
                this.textareaValue = this.textareaValue.slice(0, 200);
            }
            this.words = this.textareaValue.length;
        },
        // 验证电话号码格式是否正确
        validateTel() {
            if (this.yourTel.length >= 11) {
                if (!this.$tool.validateReg.phoneNumber(Number(this.yourTel.length))) {
                    this.tipsText = '手机号码无效啦 ~';
                    this.isTips = true;
                    this.yourTel = this.yourTel.slice(0, 11);
                    this.isCorrent = false;
                } else {
                    this.isCorrent = true;
                }
            }
        },
        // 验证电话号码长度是否正确
        validateLength() {
            if (this.yourTel.length < 11) {
                this.tipsText = '手机号码太短啦 ~';
                this.isTips = true;
                this.isCorrent = false;
            } else {
                this.isCorrent = true;
            }
        },
        // 提交反馈
        handleSubmit() {
            if (!this.textareaValue || !this.yourName || !this.isCorrent) {
                this.tipsText = '请填写完整反馈信息';
                this.isTips = true;
                return;
            }
        }
    }
}
</script>
