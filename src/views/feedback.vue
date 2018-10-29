<style lang="less" scoped>
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
            overflow: hidden;
            .upload-120-120 {
                float: left;
                height: 120px;
                width: 120px;
                border-radius: 10px;
                margin-right: 20px;
                background: rgba(248,248,248,1) url('../assets/images/fk.png') no-repeat center center / 32px 32px;
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
                }
                input::-webkit-input-placeholder{
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
            }
            .add-gray {
                background: #cacaca;
            }
            .add-orange {
                background: #FE5100;
            }
        }
    }
</style>
    
<template>
    <div id="feedback">
        <section class="wrapper-textarea-200">
            <textarea :value="value" 
                    placeholder="请描述你遇到的问题！"
                    class="textarea-200"
                    rows="4"></textarea>
            <span><i>0</i>/200</span>
        </section>
        <section class="title-263-29">
            上传凭证<span>(不超过3张)</span>
        </section>
        <section class="wrapper-upload-120">
            <section class="upload-120-120"></section>
            <section class="upload-120-120"></section>
            <section class="upload-120-120"></section>
        </section>
        <form>
            <div>
                <span>姓名</span>
                <input type="text" placeholder="请留下您的姓名" class="border-bottom-1" />
            </div>
            <div>
                <span>电话号码</span>
                <input type="text" placeholder="请留下你您的电话号码" />
            </div>
            <button :class="[isChangeColor ? addGray : addOrange]" class="submit-upload">提交反馈</button>
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            value: '',
            isChangeColor: true,
            addGray: 'add-gray',
            addOrange: 'add-orange'
        }
    },
    methods: {
        callBack(event) {

        }
    }
}
</script>
