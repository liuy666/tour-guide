<style lang="less" scoped>
    #scenic-spot {
        .seach {
            position: relative;
            width:650px;
            height:60px;
            margin: 0 30px 20px;
            input::-webkit-input-placeholder { 
                font-size:24px;
                font-weight:500;
                color: #888;
                line-height:34px;
            }
            input {
                width:650px;
                height:60px;
                background:#f8f8f8;
                border-radius:30px;
                padding-left: 72px;
                box-sizing: border-box;
            }
            img {
                position: absolute;
                top: 13px;
            }
            .img-32-34 {
                width: 32px;
                height: 34px;
                left: 20px;
            }
            .img-34-34 {
                width: 32px;
                height: 34px;
                right: 9px;
            }
        }
        .spot-list {
            height: 389px;
            overflow-y: auto;
            ul {
                overflow: hidden;
                li {
                    height: 112px;
                    margin-bottom: 8px;
                    box-sizing: border-box;
                    padding: 6px 30px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    background: #f8f8f8;
                    .img-left {
                        display: flex;
                        flex-direction: row;
                        img {
                            width: 112px;
                            height: 100px;
                            border-radius: 10px;
                            margin-right: 32px;
                        }
                        span {
                            font-size: 30px;
                            font-weight: 400;
                            line-height: 112px;
                        }
                    }
                    .img-right {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        img {
                            width: 50px;
                            height: 50px;
                        }
                    }
                }
            }
        }
    }
    
</style>

<template>
    <div id="scenic-spot">
        <section class="seach">
            <input type="text" placeholder="请输入景点名称" />
            <img src="../assets/images/icon_so@2x.png" alt=""  class="img-32-34" />
            <img src="../assets/images/icon_close@2x.png" alt="" class="img-34-34" />
        </section>
        <section class="spot-list">
            <ul>
                <!-- <li>
                    <section class="img-left">
                        <img src="../assets/images/fj.jpg" alt="" />
                        <span>1.北伐军行图</span>
                    </section>
                    <section class="img-right">
                        <img src="../assets/images/icon_big_stop@2x.png" alt="" />
                    </section>
                </li> -->
                <li v-for="point of pointsList" :key="point.id">
                    <section class="img-left">
                        <img :src="point.src" alt="加载中..." />
                        <span>{{ point.id + '. ' +point.name }}</span>
                    </section>
                    <section class="img-right">
                        <img src="../assets/images/icon_big_stop@2x.png" alt="加载中..." />
                    </section>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pointsList: []
        }
    },
    created() {
        let pointList = JSON.parse(sessionStorage.getItem('pointList'));
        pointList.sort((a, b) => a.serial - b.serial);
        pointList.forEach(element => {
            this.pointsList.push({
                src: element.url,
                name: element.name,
                id: element.serial
            });
        });
    }
}
</script>