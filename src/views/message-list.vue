<style lang="less" scoped>
    #message-list {
        width: 100%;
        height: 100%;
        .ul-wrapper {
            background-color: #f8f8f8;
            width: 100%;
            height: 100%;
            ul {
                overflow: hidden;
                li {
                    overflow: hidden;
                    padding-bottom: 10px;
                    .msg-date {
                        width: 168px;
                        height: 36px;
                        background-color: #dbdbdb;
                        border-radius: 18px;
                        font-size: 24px;
                        font-weight: 400;
                        line-height: 36px;
                        box-sizing: border-box;
                        padding-top: 3px;
                        color: #fff;
                        margin: 22px auto;
                        text-align: center;
                    }
                    dl {
                        border-radius: 20px;
                        overflow: hidden;
                        width: 690px;
                        margin: 0 auto;
                        background-color: #fff;
                        box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.24);
                        dt {
                            width: 690px;
                            height: 310px;
                            margin-bottom: 14px;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                        dd {
                            overflow: hidden;
                            h2 {
                                
                                font-size: 32px;
                                font-weight: 500;
                                line-height: 70px;
                                margin-bottom: 8px;
                                padding: 0 20px;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                box-sizing: border-box;
                                overflow: hidden;
                            }
                            section {
                                overflow: hidden;
                                padding: 0 20px;
                                margin-bottom: 20px;
                                p {
                                    float: left;
                                    overflow: hidden;
                                    span {
                                        float: left;
                                        font-size: 28px;
                                        font-weight:400;
                                        color: #888;
                                        &:nth-child(1) {
                                            margin-right: 36px;
                                        }
                                    }
                                }
                                a {
                                    float: right;
                                    font-size: 28px;
                                    color: #FE5100;
                                    font-weight: 400;
                                    padding-right: 23px;
                                    text-decoration: none;
                                    background: url('../assets/images/icon_right@3x.png') no-repeat right center / 12px 24px;
                                }
                            }
                        }
                    }
                    .dl-gray {
                        color: #ccc;
                        a {
                            color: #ccc;
                            background: url('../assets/images/icon_hui@3x.png') no-repeat right center / 12px 24px;
                        }
                    }
                }
            }
        }
        .no-message-list {
            width: 100%;
            height: 100%;
            background-color: #fff;
            overflow: hidden;
            div {
                width: 359px;
                height: 280px;
                background: url("../assets/images/nolist.png") no-repeat center center / 359px 280px;
                margin: 398px auto 23px;
            }
            p {
                font-size: 28px;
                font-weight: 500;
                color: #666;
                line-height: 40px;
                text-align: center;
            }
        }

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
    }
</style>

<template>
    <div id="message-list">
        <div class="ul-wrapper" v-if="!isNoMessage">
            <ul>
                <li v-for="msg of messageList" :key="msg.id">
                    <template v-if="msg.interval >= 0">
                        <section class="msg-date">{{ msg.date1 }}</section>
                        <dl>
                            <dt>
                                <img :src="msg.img" alt="加载中..." />
                            </dt>
                            <dd>
                                <h2>{{ msg.title }}</h2>
                                <section>
                                    <p>
                                        <span>{{ msg.date2 }}</span>
                                        <span>{{ msg.date3 }}</span>
                                    </p>
                                    <v-touch tag="a" href="#" @tap.prevent="gotoMsgDetail({ content: msg.content, msgId: msg.id, msgTitle: msg.title })">阅读全文</v-touch>
                                </section>
                            </dd>
                        </dl>
                    </template>
                    <template v-else>
                        <section class="msg-date">{{ msg.date1 }}</section>
                        <dl class="dl-gray">
                            <dt>
                                <img :src="msg.img" alt="加载中..." />
                            </dt>
                            <dd>
                                <h2>{{ msg.title }}</h2>
                                <section>
                                    <p>
                                        <span>{{ msg.date2 }}</span>
                                        <span>{{ msg.date3 }}</span>
                                    </p>
                                    <a href="javascript:void(0);">阅读全文</a>
                                </section>
                            </dd>
                        </dl>
                    </template>
                </li>
            </ul>
        </div>
        <div class="no-message-list" v-else>
            <div class="img-wrapper"></div>
            <p>这里空空如也</p>
            <p>愿你的每一段坚守都不负岁月</p>
        </div>
        <loading :show="isShowLoading" :text="loadText" position="absolute"></loading>
        <toast class="short" v-model="isTips1" type="cancel" :text="tipsText1" :is-show-mask="true"></toast>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { Loading, Toast } from 'vux';

export default {
    data() {
        return {
            messageList: [],
            isNoMessage: false,
            isShowLoading: false,
            loadText: '',
            isTips1: false,
            tipsText1: ''
        }
    },
    components: {
        Loading,
        Toast
    },
    async created() {
        this.isShowLoading = true;
        document.querySelector('#name').text = "青川导游";
        const getMsgList = await this.$http.get(this.$base + '/app/hqarticle/list', {
            domainUrl: 'window.location.hostname', // www.qxgz.com
            limit: 500
        });
        if (!getMsgList || !getMsgList.page || !getMsgList.page.list || !getMsgList.page.list.length) {
            this.isNoMessage = true;
            this.isShowLoading = false;
            this.tipsText1 = '请求失败';
            this.isTips1 = true;
            return;
        }
        this.messageList = getMsgList.page.list.map(item => {
            // 处理创建日期为两种显示格式
            const createDate = new Date(item.createTime),
                  year = createDate.getFullYear(),
                  month = ('0' + (createDate.getMonth() + 1)).slice(-2),
                  day = ('0' + createDate.getDate()).slice(-2),
                  hour = ('0' + createDate.getHours()).slice(-2),
                  minute = ('0' + createDate.getMinutes()).slice(-2),
                  newDate1 = year + '-' + month + '-' + day,
                  newDate2 = month + '月' + day + '日',
                  newDate3 = hour + ':' + minute;

            // 处理当天时间,获取失效时间和今天之间的间隔时间
            const today1 = this.$tool.formatDate(new Date()), // 格式化当天时间，舍去时分秒
                  today2 = new Date(today1 + 'T00:00:00'), // 重新转成日期标准格式
                  today3 = today2.getTime(), // 得到具体毫秒值
                  interval = item.passDate - today3 ;

            return {
                id: item.articleId,
                img: item.imgUrl ? item.imgUrl.replace(/http/, 'https') : item.imgUrl,
                title: item.title,
                date1: newDate2,
                date2: newDate1,
                date3: newDate3,
                interval,
                content: item.content
            }
        });
        this.isShowLoading = false;
    },
    methods: {
        ...mapMutations([
            'SAVE_CONTENT'
        ]),
        gotoMsgDetail(params) {
            document.querySelector('#name').text = params.msgTitle;
            // 存储文章
            this.SAVE_CONTENT(params);
            this.$router.replace({
                name: 'msg-detail',
                params
            });
        },
    }
}
</script>
