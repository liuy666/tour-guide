<style lang="less" scoped>
    #message-list {
        background-color: #f8f8f8;
        width: 100%;
        height: 100%;
        ul {
            overflow: hidden;
            li {
                overflow: hidden;
                .msg-date {
                    width: 168px;
                    height: 36px;
                    background-color: #dbdbdb;
                    border-radius: 18px;
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 36px;
                    color: #fff;
                    margin: 22px auto;
                    text-align: center;
                }
                dl {
                    border-radius: 20px;
                    overflow: hidden;
                    width: 690px;
                    margin: 0 auto;
                    dt {
                        width: 690px;
                        height: 310px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    dd {
                        overflow: hidden;
                        background-color: #fff;
                        h2 {
                            
                            font-size: 30px;
                            font-weight: 500;
                            line-height: 70px;
                            margin-bottom: 8px;
                            padding-left: 20px;
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
                                    font-size: 24px;
                                    font-weight:400;
                                    color: #888;
                                    &:nth-child(1) {
                                        margin-right: 36px;
                                    }
                                }
                            }
                            a {
                                float: right;
                                font-size: 24px;
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
</style>

<template>
    <div id="message-list">
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
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            messageList: []
        }
    },
    async created() {
        const getMsgList = await this.$http.get(this.$base + '/hqyatu-navigator/app/hqarticle/list', {
            domainUrl: 'www.qxgz.com', // 上线改成获取域名
            limit: 20
        });

        console.log(getMsgList)
        if (!getMsgList) {
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
                img: item.imgUrl,
                title: item.title,
                date1: newDate2,
                date2: newDate1,
                date3: newDate3,
                interval,
                content: item.content
            }
        });
        let contentList = getMsgList.page.list.map(item => {
            return {
                content: item.content,
                id: item.articleId,
            }
        });
    },
    methods: {
        ...mapMutations([
            'SAVECONTENT'
        ]),
        gotoMsgDetail(params) {
            // 存储文章
            this.SAVECONTENT(params.content);
            this.$router.push({
                name: 'msg-detail',
                params
            });
        },
    }
}
</script>
