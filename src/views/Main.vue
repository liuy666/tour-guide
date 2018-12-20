<style lang="less">
    // 天气预报滚动动画
    @keyframes rollup {
        0% {
            transform: translateY(0px);
        }
        100% {
            transform: translateY(-160px);
        }
    }
    @keyframes rotateimg {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
    #main {
        height:100%;
        width: 100%;
        position: relative;

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

        // confirm 弹窗
        .d_confirm.vux-confirm .weui-dialog {
            border-radius: 20px;
            width: 541px;
            max-width: 541px;
            .weui-dialog__bd {
                padding-bottom: 40px;
                p {
                    font-size: 36px;
                    font-weight: bold;
                    color: #333;
                    line-height: 60px;
                }
            }
            .weui-dialog__hd {
                padding-top: 36px;
            }
            .weui-dialog__ft {
                line-height: 80px;
                a {
                    font-size: 36px;
                    font-weight: 400;
                }
            }
        }

        .p_confirm.vux-confirm .weui-dialog {
            border-radius: 20px;
            width: 541px;
            max-width: 541px;
            .weui-dialog__hd {
                padding-top: 32px;
                .weui-dialog__title {
                    font-size: 36px;
                    font-weight: bold;
                    color: #333;
                }
            }
            .weui-dialog__bd {
                padding-bottom: 32px;
                p {
                    font-size: 28px;
                    color: #333;
                    font-weight: 400;
                    line-height: 40px;
                }
                
            }
            .weui-dialog__ft {
                line-height: 80px;
                a {
                    font-size: 36px;
                    font-weight: 400;
                }
            }
        }

        // 地图容器
        #wrapper {
            width: 100%;
            height: 100%;
        }

        //菜单弹窗
        .main_view {
            width: 732px;
            height: 733px;
            z-index: 1002;
            background: url("../assets/images/bg@3x.png") no-repeat center center / 100% 100%;
            position: absolute;
            bottom: 20.233vw;
            left: calc(~"50% - 366px");
            .main_view_wrapper {
                width: 710px;
                height: 714px;
                margin: 10px 0 0 11px;
                .main_view_header {
                    height: 120px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    position: relative;
                    box-sizing: border-box;
                    padding-left: 169px;
                    p {
                        font-size:32px;
                        font-weight:500;
                        line-height:34px;
                        margin-top: 41px;
                    }
                    .camera {
                        width: 122px;
                        height: 142px;
                        background: url("../assets/images/icon_ai@3x.png") no-repeat center center / 100% 100%;
                        position: absolute;
                        left: 32px;
                        top: -37px;
                    }
                    .weather {
                        width: 191px;
                        margin-right: 29px;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        .img-box {
                            width: 80px;
                            height: 80px;
                            margin-top: 24px;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .content {
                            height: 80px;
                            font-weight: 500;
                            display: flex;
                            flex-direction: column;
                            margin-top: 31px;
                            overflow: hidden;
                            span {
                                font-size: 24px;
                                line-height: 41px;
                                animation: rollup 8s linear 1s  infinite;
                                text-align: right;
                            }
                        }
                    }
                }
                ul.main_view_footer {
                    height: 100px;
                    overflow-x: auto;
                    -webkit-overflow-scrolling : touch; 
                    display: flex;
                    flex-direction: row;
                    box-sizing: border-box;
                    margin: 0 29px 0 30px;
                    border-top: 1px solid #f8f8f8; 
                    // background: url("../assets/images/rightline.png") no-repeat right center ;
                    box-shadow: 1px 0px 2px rgba(255,255,255,.2) inset;
                    li {
                        margin-right: 10px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        text-align: center;
                        &:last-of-type {
                            margin-left: 0;
                        }
                        div {
                            width: 42px;
                            height: 42px;
                            margin: 0 37px 5px;
                            img {
                                width:100%;
                                height:100%;
                            }
                        }
                        span {
                            font-size: 24px;
                            line-height: 34px;
                            width: 116px;
                        }
                    }
                }
            }
        }

        //底部景点播放栏
        .toolbars {
            display: flex;
            position: absolute;
            left: 0;
            right: 0;
            margin: 0 auto;
            bottom: 30px;
            width: 520px;
            height: 148px;
            z-index: 1001;
            box-sizing: border-box;
            background: url("../assets/images/bg_player@3x.png") no-repeat center / 100% 100%;
            .vux-circle-content{
                height: 100%;
                box-sizing: border-box;
            }
            .player-control-btn-area{
                width: 124px;
                height: 124px;
                position: relative;
                margin-top: 12px;
                margin-left: 12px;
                .player-img-area{
                    width: 110px;
                    height: 110px;
                    margin-top: 7px;
                    margin-left: 7px;
                    position: relative;
                    .pointImg {
                        animation-name: rotateimg;
                        animation-duration: 30s;
                        animation-timing-function: linear;
                        animation-iteration-count: infinite;
                    }
                    .p_start {
                        animation-play-state: running;
                    }
                    .p_stop {
                        animation-play-state: paused;
                    }
                    .wrap {
                        width: 112px;
                        height: 112px;
                        position: absolute;
                        left: 0;
                        top: 0;
                        .control {
                            position: absolute;
                            left: 50%;
                            top: 50%; 
                            overflow: hidden;
                            img {
                                float: left;
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .img-16-26 {
                            width: 16px;
                            height: 26px;
                            transform: translate(-8px, -13px);
                        }
                        .img-20-24 {
                            width: 20px;
                            height: 24px;
                            transform: translate(-10px, -12px);
                        }
                    }
                }
                .player-control-btn{
                    position: absolute;
                }
            }
            .scenic-point-name-area{
                width: 270px;
                height: 100px;
                line-height: 100px;
                padding: 0 0 0 10px;
                text-align: center;
                margin-top: 24px;
                background: url('../assets/images/icon_down@3x.png') no-repeat 50% 80px;
                background-size: 24px 8px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                box-sizing: border-box;
            }
            .list-btn{
                width: 44px;
                height: 100px;
                padding: 0 14px;
                margin-top: 24px;
                background: url('../assets/images/icon_list@3x.png') no-repeat center center / 32px 26px;
            }
        }

        //地图页功能键区域
        .function-area-left,.function-area-right{
            position: absolute;
            width: 86px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            z-index: 1001;
        }
        .function-area-right{
            height: 260px;
            top: 26px;
            right: 30px;
            // 自定义弹窗
            #tips {
                width: 278px;
                height: 63px;
                background: url("../assets/images/dbx.png") no-repeat center center / 100% 100%;
                position: absolute;
                z-index: 1001;
                bottom: -78px; 
                right: -4px;
                p {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    font-size: 26px;
                    color: #fff;
                    height: 40px;
                    width: 100%;
                    text-align: center;
                    line-height: 40px;
                }
            }
        }
        .function-area-left{
            height: 180px;
            left: 30px;
            bottom: 186px;
        }
        .function-btn{
            width: 86px;
            height: 86px;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 100% 100%;
            &.FK{ // 反馈图片
                background-image: url('../assets/images/icon_feedback@3x.png');
            }
            &.DW{
                background-image: url('../assets/images/icon_static@3x.png');
                &.position{
                    background-image: url('../assets/images/loading.gif');
                }
            }
            &.JJ{ // 简介图片
                background-image: url('../assets/images/icon_intro@3x.png');
            }
            &.QJ{ // 全景图片
                background-image: url('../assets/images/icon_panorama@3x.png');
            }
            &.ZD{ // 自动图片
                background-image: url('../assets/images/icon_auto@3x.png');
                &.NO{
                    background-image: url('../assets/images/icon_auto_no@3x.png');
                }
            }
        }

        // 定位动态图
        .my-position{
            width: auto !important;
            height: auto !important;
            margin-left: -33px !important;
            margin-top: -70px !important;
            .icon{
                width: 66px;
                height: 73px;
                background: url("../assets/images/location.gif") no-repeat center / auto 100%;
            }
        }

        // 地图标记图标
        .marker-content-new{
            width: auto !important;
            height: auto !important;
            margin-left: -61px !important;
            margin-top: -90px !important;
            .icon{
                width: 122px;
                height: 73.3px;
                &.type-point{
                    background: url("../assets/images/icon_use_normal@3x.png") no-repeat center / auto 100%;
                }
                &.type-buy{
                    background: url("../assets/images/icon_gowu@3x.png") no-repeat center / auto 100%;
                }
                &.type-eat{
                    background: url("../assets/images/icon_to_food@3x.png") no-repeat center / auto 100%;
                }
                &.type-door{
                    background: url("../assets/images/icon_to_exit@3x.png") no-repeat center / auto 100%;
                }
                &.type-wc{
                    background: url("../assets/images/icon_to_wc@3x.png") no-repeat center / auto 100%;
                }
                &.type-park{
                    background: url("../assets/images/icon_to_shop@3x.png") no-repeat center / auto 100%;
                }
                &.type-hotel{
                    background: url("../assets/images/icon_to_hotel@3x.png") no-repeat center / auto 100%;
                }
                &.type-center{
                    background: url("../assets/images/icon_to_centre@3x.png") no-repeat center / auto 100%;
                }
                &.type-hospital{
                    background: url("../assets/images/icon_to_doctor@3x.png") no-repeat center / auto 100%;
                }
                &.type-other{
                    background: url("../assets/images/icon_else_location@3x.png") no-repeat center / auto 100%;
                }
                &.player{
                    background: url("../assets/images/playing.gif") no-repeat center / auto 100%;
                }
            }
            .name{
                white-space: nowrap;
                border-radius: 30px;
                padding: 0px 20px;
                background: rgba(255,255,255,.8);
                color: #642F15;
                // color: #333;
                position: absolute;
                display: block;
                margin-left: 61px;
                text-align: center;
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
                font-size: 24px;

                border: 1px solid #642F15;
            }
        }

        // 地图路线序号
        .point-serial{
            width: 30px !important;
            height: 30px !important;
            margin-left: 20px !important;
            margin-top: -46px !important;
            background: #68A8FC;
            color: #fff;
            line-height: 34px;
            text-align: center;
            border-radius: 15px;
        }

        /*信息弹窗相关*/
        .leaflet-popup-content-wrapper{
            padding: 0;
            border-radius: 20px;
        }
        .leaflet-popup-content{
            margin: 0;
        }
        .leaflet-popup-tip{
            width: 26px;
            height: 26px;
        }
        .leaflet-popup-content{
            width: auto !important;
        }
        .leaflet-popup-close-button{
            width: 36px;
            height: 36px;
            font-size: 36px;
            line-height: 36px;
        }

        // 景区简介弹窗样式
        .introDetail{
            position: absolute;
            z-index: 1001;
            left: 30px;
            bottom: 0;
            background: #fff;
            width: 690px;
            padding: 20px 30px 16px;
            border-radius: 20px 20px 0 0 ;
            box-sizing: border-box;
            box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.24);
            .scenic-detail-header{
                display: flex;
                .scenic-img{
                    width: 220px;
                    height: 220px;
                    margin-top: -100px;
                    position: relative;
                    .control-btn{
                        width: 220px;
                        height: 220px;
                        position: absolute;
                        left: 0;
                        top: 0;
                        .control{
                            position: absolute;
                            left: 50%;
                            top: 50%; 
                            overflow: hidden;
                            img {
                                float: left;
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .img-34-40 {
                            width: 34px;
                            height: 40px;
                            transform: translate(-17px, -20px);
                        }
                    }
                }
                .ignore {
                    box-sizing: border-box;
                    border: 2px solid #fff;
                }
                .detail-img {
                    animation-name: rotateimg;
                    animation-duration: 30s;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                }
                .d_start {
                        animation-play-state: running;
                }
                .d_stop {
                    animation-play-state: paused;
                }
            }
                
            .scenic-name-level{
                width: 360px;
                margin-left: 22px;
                .scenic-name{
                    font-size: 36px;
                    font-weight: bold;
                }
                .scenic-level{
                    display: inline-block;
                    padding: 12px 10px 8px 10px;
                    line-height: 22px;
                    border-radius: 20px;
                    border: 1px solid #FEA32B;
                    color: #FEA32B;
                    font-size: 24px;
                    margin-top: 16px;
                }
            }
            .close-btn{
                width: 34px;
                height: 34px;
                position: absolute;
                right: 10px;
                top: 10px;
                background: url('../assets/images/icon_close_black@2x.png') no-repeat center center / 100% 100%;
            }
        }
        .newIntroDetail {
            height: 98%;
            position: absolute;
            box-sizing: border-box;
            z-index: 1002;
            left: 30px;
            bottom: 0;
            background: #fff;
            width: 690px;
            border-radius: 20px 20px 0 0;
            padding: 38px 30px 16px;
            box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.24);
            .close-btn{
                width: 34px;
                height: 34px;
                position: absolute;
                right: 10px;
                top: 10px;
                background: url('../assets/images/icon_close_black@2x.png') no-repeat center center / 100% 100%;
            }
            .dec-content {
                font-size: 28px;
                font-weight: 400;
                color: #888;
                line-height: 36px;
                overflow-y: auto;
                -webkit-overflow-scrolling : touch;
                height: calc(~"100%-70px");
            }
        }
        .scenic-address-time{
            padding: 40px 0 30px;
            font-size: 30px;
            line-height: 44px;
            border-bottom: 1px solid dashed #FE5100; 
            margin-bottom: 20px;
            .scenic-address{
                text-indent: 44px;
                background: url('../assets/images/icon_black_site@3x.png') no-repeat left top;
                background-size: 32px 40px;
                position: relative;
                .font-color-666{
                    background: url('../assets/images/icon_map_more@3x.png') no-repeat right center;
                    background-size: 16px 28px;
                    padding-right: 20px;
                    position: absolute;
                    right: 10px;
                    top: 2px;
                    box-sizing: border-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: calc(~'100% - 160px');
                }
            }
            .scenic-time{
                text-indent: 44px;
                background: url('../assets/images/icon_black_time@3x.png') no-repeat left center;
                background-size: 32px 32px;
                margin-top: 20px;
                overflow: hidden;
            }
        }
        .dec-title{
            text-indent: 24px;
            font-size: 30px;
            padding: 20px 0;
            background: url('../assets/images/kuai@3x.png') no-repeat left center;
            background-size: 10px 30px;
            line-height: 30px;
        }
        .scenic-dec {
            overflow: hidden;
            .dec-content{
                font-size: 28px;
                line-height: 36px;
                margin-bottom: 40px;
                overflow: hidden;
                word-break: break-all;
                overflow: hidden;
                height: 144px;
                position: relative;
                span {
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    color: #FE5100;
                    font-size: 28px;
                    line-height: 36px;
                    font-weight: 400;
                    padding-right: 20px;
                    margin-right: 6px;
                    background: #fff url("../assets/images/icon_right@3x.png") no-repeat;
                    background-size: 12px 24px;
                    background-position: right 4px;
                }
            }
        }
    }
    
</style>

<template>
    <div id="main">
        <!-- <div style="position:absolute;z-index: 10005;width:100%;height:20px;text-align:center;">{{audioPercent}}</div> -->
        <section id="map_test"></section>
        <!-- 网络请求loading层 -->
        <loading :show="isShowLoading" :text="loadText" position="absolute"></loading>
        <!-- 提示弹窗 -->
        <toast class="short" v-model="isTips1" type="cancel" :text="tipsText1" :is-show-mask="true"></toast>
        <toast class="long" v-model="isTips3" type="text" :text="tipsText3" :is-show-mask="true"></toast>
        <confirm class="d_confirm" v-model="isShowConfirm" title=" " @on-confirm="onConfirm" confirm-text="播放" mask-z-index="1002">
            <p style="text-align:center;">您发现一条景区介绍<br/>快来听听吧！</p>
        </confirm>
        <confirm class="p_confirm" v-model="isShowConfirm2" title="是否播放当前景点" @on-confirm="onConfirm2" confirm-text="播放" mask-z-index="1002">
            <p style="text-align:center;">通过二维码识别到当前景点<br/>快来听听吧！</p>
        </confirm>
        <confirm class="p_confirm" v-model="isShowConfirm3" title="发现一条景点语音" @on-confirm="onConfirm3" confirm-text="播放" mask-z-index="1003">
            <p style="text-align:center;">定位到“{{locationPointName}}”这个景点<br/>快来听听吧！</p>
        </confirm>
        <!-- 地图容器 -->
        <section id="wrapper"></section>
        <!-- 图标菜单弹窗 -->
        <section class="main_view " v-show="isShowMenu">
            <section class="main_view_wrapper">
                <section class="main_view_header">
                    <v-touch tag="section" class="camera" v-on:tap="gotoPage('recognize')"></v-touch>
                    <p>遇见全世界的美</p>
                    <section class="weather">
                        <section class="content">
                            <span>{{ temp }}</span>
                            <span>{{ weather }}</span>
                            <span>空气指数</span>
                            <span>{{ AQI }}</span>
                            <span>{{ temp }}</span>
                            <span>{{ weather }}</span>
                            <span>空气指数</span>
                            <span>{{ AQI }}</span>
                        </section>
                        <section>
                            <section class="img-box"><img :src="weatherImg" alt="加载中..." /></section>
                        </section>
                    </section>
                </section>
                <router-view></router-view>
                <ul class="main_view_footer">
                    <v-touch tag="li" v-for="menu in menuList" :key="menu.id" :data-mark="menu.paramKey" v-on:tap="gotoWhere(menu.paramKey, menu.paramValue)">
                        <div>
                            <img :src="menu.graySrc" alt="" />
                        </div>
                        <span>{{ menu.name }}</span>
                    </v-touch>
                </ul>
            </section>
        </section>
        <!-- 图标菜单 -->
        <section class="toolbars">
            <div class="player-control-btn-area">
                <x-circle
                    :percent="audioPercent"
                    :stroke-width="4"
                    :trail-width="6"
                    :stroke-color="'#FE5100'"
                    trail-color="#ffffff">
                    <div class="player-img-area">
                        <img class="pointImg p_stop" style="width:100%; height:100%; border-radius: 50%;" :src="scenicPointImg" />
                        <!-- 播放图标-暂停中状态 -->
                        <v-touch class="wrap" v-show="!isPlayed" v-on:tap="playAudio({type: 1})">
                            <div class="control img-16-26">
                                <img src="../assets/images/icon_small_pause@3x.png" alt="" />
                            </div>
                        </v-touch>
                            <!-- 暂停图标-播放中状态 -->
                        <v-touch class="wrap" v-show="isPlayed" v-on:tap="pauseAudio">
                            <div class="control img-20-24">
                                <img src="../assets/images/icon_suspend@3x.png" alt="" />
                            </div>
                        </v-touch>
                    </div>
                </x-circle>
            </div>
            <v-touch class="scenic-point-name-area" v-on:tap="toDetail(false)">
                {{scenicPointName}}
            </v-touch>
            <v-touch class="list-btn" v-on:tap="openMenu" ></v-touch>
        </section>
        <!-- 左侧反馈功能图标 -->
        <section class="function-area-left">
            <section class="function-btn FK" @click="gotoPage('feedback')"></section>
            <section class="function-btn DW" :class="isPositioning ? 'position' : ''" @click="getCurrentPositions"></section>
        </section>
        <!-- 右侧简介/全景/自动功能图标 -->
        <section class="function-area-right">
            <section class="function-btn JJ" @click="seeIntroduce"></section>
            <section class="function-btn QJ" @click="gotoPage('full-view')"></section>
            <section class="function-btn ZD" @click="changeAuto" :class="isAuto ? '' : 'NO'"></section>
        </section>
        <!-- 底部景区简介弹窗 -->
        <section v-show="isOpenDetail" class="introDetail">
            <div class="scenic-detail-header">
                <div class="scenic-img">
                    <img class="ignore detail-img d_stop" style="width:100%;height:100%;border-radius:100%;" :src="scenicImg"/>
                    <v-touch class="control-btn" v-show="!isPlayed_scenic" v-on:tap="playAudio_scenic">
                        <div class="control img-34-40">
                            <img src="../assets/images/icon_small_pause@3x.png" alt="" />
                        </div>
                    </v-touch>
                    <v-touch class="control-btn" v-show="isPlayed_scenic" v-on:tap="pauseAudio_scenic">
                        <div class="control img-34-40">
                            <img src="../assets/images/icon_suspend@3x.png" alt="" />
                        </div>
                    </v-touch>
                </div>
                <div class="scenic-name-level">
                    <div class="scenic-name">{{scenicName}}</div>
                    <span class="scenic-level">{{scenicLevel+"级风景区"}}</span>
                </div>
                <div class="close-btn" @click="seeIntroduce"></div>
            </div>
            <div class="scenic-address-time">
                <div class="scenic-address">
                    景区地址：
                    <a class="font-color-666" style="text-decoration: none; color:#333;" :href="'https://uri.amap.com/search?keyword=' + scenicAddress + '&city=' + region + '&view=map&src=test&coordinate=gaode&callnative=1'">{{scenicAddress}}</a>
                </div>
                <div class="scenic-time">
                    开放时间： <span class="font-color-666">{{scenicOpenTime}}</span>
                </div>
            </div>
            <div class="scenic-dec">
                <div class="dec-title">景区介绍</div>
                <!-- 最大限制字数340 -->
                <div class="dec-content font-color-888">
                    {{shortScenicDec}}
                    <span @click="spreadDetail">查看全部</span>
                </div>
            </div>
        </section>
        <section v-show="isOpenNewDetail" class="newIntroDetail">
            <div class="close-btn" @click="seeIntroduce2"></div>
            <div class="dec-title">景区介绍</div>
            <!-- 最大限制字数340 -->
            <div class="dec-content font-color-888">
                {{scenicDec}}
            </div>
        </section>
    </div>
</template>

<script>
    import { XCircle, Toast, Loading, Confirm } from 'vux';
    import { mapActions, mapMutations, mapState } from 'vuex';
    export default {
        components: {
            XCircle,
            Toast,
            Loading,
            Confirm
        },
        // 导航离开该组件的对应路由时调用 可以访问组件实例 `this`
        beforeRouteLeave(to, from, next){
            clearInterval(this.locationTimer);
            this.locationTimer = '';
            this.$store.commit('setFromRouteName_detail', to.name);
            if(to.name == "index"){
                document.querySelector('#name').text = "青川导游"
            }
            next();
        },
        created() {
            console.log('created');
            console.log('开始加载页面...');
            this.isShowLoading = true;
            if (sessionStorage.getItem('isAuto') && sessionStorage.getItem('isAuto') == "true") {
                this.isAuto = true;
            } else {
                this.isAuto = false;
            }
        },
        async mounted() {
            console.log('mounted');
            if (this.$store.state.app.currentEnv === 'miniprogram') {
                // 显示返回小程序的按钮
            }
            let _self = this;
            let scenicInfo = null;

            // 扫码进入页面,先获取该域名下的景区列表,并根据获取的景区sid获取景区详情
            const query = this.$route.query;
            // 只有扫码直接进入时会发起请求,从其他页回退的情况不再请求
            if (query.sid && this.$store.state.app.fromRouteName == 'root') {
                const scenicList = await this.$http.get(this.$base + '/app/scenery/list', {
                    domainUrl: 'www.qxgz.com' // window.location.hostname
                });

                // 请求失败，跳转404 并传递返回的url
                if (!scenicList || !scenicList.data || !scenicList.data.length) {
                    this.$router.repalce({
                        name: 'not-found',
                        params: {
                            returnUrl: window.location.href
                        }
                    });
                    return;
                }

                // 请求成功，开始初始化
                let currentScenic = scenicList.data.filter(item => item.scenery_id === query.sid)[0];
                // 强制更改http为https
                currentScenic.accessCoverUrl = currentScenic.accessCoverUrl ? 'https' + currentScenic.accessCoverUrl.slice(4) : currentScenic.accessCoverUrl;
                currentScenic.accessMapUrl = currentScenic.accessMapUrl ? 'https' + currentScenic.accessMapUrl.slice(4) : currentScenic.accessMapUrl;
                currentScenic.accessUrl = currentScenic.accessUrl ? 'https' + currentScenic.accessUrl.slice(4) : currentScenic.accessUrl;
                currentScenic.explainOssUrl = currentScenic.explainOssUrl ? 'https' + currentScenic.explainOssUrl.slice(4) : currentScenic.explainOssUrl;
                currentScenic.qrcode = currentScenic.qrcode ? 'https' + currentScenic.qrcode.slice(4) : currentScenic.qrcode;
                currentScenic.url = currentScenic.url ? 'https://' + currentScenic.url : currentScenic.url;
                scenicInfo = {...currentScenic};
                sessionStorage.setItem('currentScenic',JSON.stringify(currentScenic));
            } else {
                //处理获取到的要用到的景区信息  景区手绘图路径、景区手绘图两点坐标、景区zoom、地图中心点
                scenicInfo = JSON.parse(sessionStorage.getItem("currentScenic"));
            }
            
            // 初始化底部景区简介弹窗并存储景区id
            this.scenicImg = scenicInfo.accessCoverUrl;
            this.scenicName = scenicInfo.name;
            this.scenicLevel = scenicInfo.level;
            this.scenicAddress = scenicInfo.address;
            this.region = Number(String(scenicInfo.region).slice(1));
            this.scenicOpenTime = scenicInfo.opening_time;
            this.scenicDec = scenicInfo.introduce;
            this.sceneryId = scenicInfo.scenery_id;
            document.querySelector('#name').text = scenicInfo.name;

            // 获取地图初始化信息
            const scenicBgImg = scenicInfo.accessMapUrl,//'./'+scenicInfo.file_name, // 图片图层
                  imgRightTop = [scenicInfo.northeast_lng,scenicInfo.northeast_lat], // 地图右上角
                  imgLeftBottom = [scenicInfo.southwest_lng,scenicInfo.southwest_lat], // 地图左下角
                  imgRightTop1 = [scenicInfo.northeast_lat,scenicInfo.northeast_lng], // 地图右上角
                  imgLeftBottom1 = [scenicInfo.southwest_lat,scenicInfo.southwest_lng], // 地图左下角
                  mapZoom = scenicInfo.zoom, // 地图zoom
                  centerPoint = [scenicInfo.center_lat,scenicInfo.center_lng]; // 地图显示范围中心点
         
            // 获取屏幕大小 动态设置不同手机的地图zoom
            const containerWidth = document.querySelector('#wrapper').clientWidth;
            const containerHeight = document.querySelector('#wrapper').clientHeight;
            this.bl = parseFloat((containerWidth/375).toFixed(2));
            
            // 地图缩放
            let zoom = mapZoom;
            if (containerWidth > 600 ) {
                zoom = mapZoom + 1;
            } 
            
            //高德定位
            let map_test = new AMap.Map('map_test', {
                showBuildingBlock: true,
                pitchEnable: false,
                buildingAnimation: true,
                rotateEnable: false,
                touchZoomCenter: 1,
                center: centerPoint,
                zoom: 10,
                zooms:[10,14],
                layers: [
                    new AMap.TileLayer()
                ]
            });

            // 获取当前地图定位
            var options = {
                'enableHighAccuracy':true,
                'timeout':10000,
                'showButton': false,//是否显示定位按钮
                'buttonPosition': 'LB',//定位按钮的位置
                'buttonOffset': new AMap.Pixel(15, 23),//定位按钮距离对应角落的距离
                'showMarker': false,//是否显示定位点
                'markerOptions':{//自定义定位点样式，同Marker的Options
                    'offset': new AMap.Pixel(-18, -36),
                    'content':'<img src="https://a.amap.com/jsapi_demos/static/resource/img/user.png" style="width:36px;height:36px"/>'
                },
                'showCircle': false,//是否显示定位精度圈
                'circleOptions': {//定位精度圈的样式
                    'strokeColor': '#0093FF',
                    'noSelect': true,
                    'strokeOpacity': 0.5,
                    'strokeWeight': 1,
                    'fillColor': '#02B0FF',
                    'fillOpacity': 0.25
                },
                'panToLocation':false,
                //'noIpLocate':3
            }
            AMap.plugin(["AMap.Geolocation"], function() {
                var geolocation = new AMap.Geolocation(options);
                _self.geolocation = geolocation;
                map_test.addControl(geolocation);
                geolocation.on('complete',function(GeolocationResult) {
                    _self.isPositioning = false;
                    // //如果是扫描播放
                    // if(_self.$route.query && _self.$route.query.pid){
                    //     return;
                    // }
                    let cp = GeolocationResult.position;

                    if(cp.lat >= imgLeftBottom1[0] && cp.lat <= imgRightTop1[0] && cp.lng >= imgLeftBottom1[1] && cp.lng <= imgRightTop1[1]){
                        if(JSON.stringify(_self.locationPoint) != '{}'){
                            _self.locationPoint.remove();
                        }
                        _self.oMap_main.setView([cp.lat,cp.lng]);
                        let myIcon = L.divIcon({
                            html: `<div class="icon"></div>`,
                            className: 'my-position'
                        });
                        _self.locationPoint = L.marker([cp.lat,cp.lng],{icon:myIcon}).addTo(_self.oMap_main);
                        
                        //如果自动播放并且当时地图显示的是所有的景点
                        if(_self.isAuto && _self.resourceType < 3){
                            _self.markers.forEach((v,i) => {
                                let latlng = new AMap.LngLat(v._latlng.lng,v._latlng.lat);
                                if(cp.distance(latlng) < 20){

                                    const pointList = JSON.parse(sessionStorage.getItem("pointList"));
                                    const point_dw = pointList.filter(item => item.resource_id === v._icon.children[0].dataset.id)[0];
                                    
                                    _self.locationPointName = point_dw.name;
                                    _self.locationPointInfo = point_dw;
                                    
                                    if(_self.scenicPointId != point_dw.resource_id){

                                        if(sessionStorage.getItem("locationId") && sessionStorage.getItem("locationId") == point_dw.resource_id){
                                            return;
                                        }else{
                                            sessionStorage.setItem("locationId",point_dw.resource_id);
                                        }

                                        if(_self.isShowConfirm){
                                            _self.isShowConfirm = false;
                                        }
                                        //定位到点之后弹框提示 看是否播放
                                        _self.$nextTick(() => {
                                            _self.isShowConfirm3 = true;
                                        });
                                    }
                                }
                            })
                        }
                    }else{
                        _self.tipsText3 = "您当前不在景区内";
                        _self.isTips3 = true;
                        clearInterval(_self.locationTimer);
                        _self.locationTimer = '';
                    }
                })
                geolocation.on('error',function(){
                    _self.tipsText3 = "定位失败，请确保手机已开启定位";
                    _self.isTips3 = true;
                    _self.isPositioning = false;
                    clearInterval(_self.locationTimer);
                    _self.locationTimer = '';
                })
            });

            // 实例化地图
            let oMap = L.map("wrapper", {
                center: centerPoint,
                zoom: zoom-1,
                minZoom: zoom-1,
                maxZoom: 19,
                attributionControl: false,
                zoomControl: false,
                maxBounds : [imgLeftBottom1, imgRightTop1],
                maxBoundsViscosity : 0.7,
                closePopupOnClick :false
            });
            this.oMap_main = oMap;
            

            // 添加自定义地图图层
            let mapImg = L.imageOverlay(scenicBgImg, [imgLeftBottom1,imgRightTop1]).addTo(oMap);

            // 给图层添加load事件
            mapImg.on('load',function(){
                _self.isHasMapImage = true;
                // if (_self.isHasPointList && _self.isHasWeather) { // 表明天气/资源列表/地图图片都已请求完成(不一定成功) 关闭loading 开始定位
                //     _self.isShowLoading = false;
                //     _self.autoGetPositon();
                // }
                // _self.isShowLoading = false;
                // _self.autoGetPositon();
                _self.oMap_main.setZoom(zoom); // 解决图片图层加载过程中而弹出景区介绍时 造成停止渲染的问题
                _self.oMap_main.setMinZoom(zoom);
            });
            // 给地图添加click事件
            this.oMap_main.on('click',function(e) {
                _self.pauseAudio_scenic();

                // 如果点击地图时 当前路由是景点/路线其他资源点则会退到main页
                if (_self.$route.name === 'scenic-spot' || _self.$route.name === 'scenic-line' || _self.$route.name === 'scenic-resource') {
                    _self.$router.replace({
                        name: 'main'
                    });
                }
                _self.oMap_main.closePopup();
                _self.isShowMenu = false;
                _self.isOpenDetail = false;
                _self.isOpenNewDetail = false;
            });

            // 获取默认景点列表 异步方法
            this.getScenicPointList({
                resourceType: 1,
                query
            });

            // 初始化图标菜单
            this.initMenu();
        },
        data () {
            return {
                locationPointName:'',
                locationPointInfo:{},
                locationTimer:'',
                count:0,
                bl:0,//当前屏幕大小与375的比例 用于动态设置信息弹窗的偏移
                locationPoint:{},//定位点
                geolocation:{},//定位对象
                longlati: '', // 当前定位经纬度坐标
                sceneryId: '', // 当前景区id
                scenicImg: '', // 景区简介弹窗--图片
                scenicName: '', // 景区简介弹窗--景区名称
                scenicLevel: '', // 景区简介弹窗--景区等级
                scenicAddress: '', // 景区简介弹窗--地址
                scenicOpenTime: '', // 景区简介弹窗--开放时间
                scenicDec: '', // 景区简介弹窗--描述
                oMap_main: {}, // 地图实例化对象
                line: {}, // 路线
                resourceType: 1, // 景区资源类型 默认 1 -- 景点
                isTips1: false,
                isTips3: false,
                tipsText1: '',
                tipsText3: '',
                isShowMenu: false,
                isOpenDetail: false,
                isAuto: false, // 是否自动播放
                scenicPointImg: '', // 播放栏--景点图片
                scenicPointName: '', // 播放栏--景点名称
                scenicPointId:'', // 播放栏--景点Id
                mapClickPointId:'',
                menuList: [],
                loadText: '',
                isShowLoading: false,
                isPlayed: false,
                isPlayed_scenic : false,
                isPositioning : false,
                currentScenicId: '',
                markers: [],
                markers_line:[],
                temp: '',
                AQI: '',
                weather: '',
                weatherImg: '',
                typeList : [ // 地图画点类型
                    {
                        type:1,
                        className:'type-point'
                    },{
                        type:3,
                        className:'type-buy'
                    },{
                        type:4,
                        className:'type-eat'
                    },{
                        type:5,
                        className:'type-door'
                    },{
                        type:6,
                        className:'type-wc'
                    },{
                        type:7,
                        className:'type-park'
                    },{
                        type:8,
                        className:'type-hotel'
                    },{
                        type:9,
                        className:'type-center'
                    },{
                        type:10,
                        className:'type-hospital'
                    },{
                        type:11,
                        className:'type-other'
                    }
                ],
                defaultImgList : [ // 地图画点默认图片列表
                    '/bg_scenic@3x.png',
                    '/bg_select@3x.png',
                    '/bg_shop@3x.png',
                    '/bg_food@3x.png',
                    '/bg_exit@3x.png',
                    '/bg_toilet@3x.png',
                    '/bg_stop@3x.png',
                    '/bg_hotel@3x.png',
                    '/bg_centre@3x.png',
                    '/bg_doctor@3x.png',
                    '/bg_else@3x.png'
                ],
                region: '', // 景点所属地区
                indexOfMarkers : 0,
                isHasWeather: false,
                isHasPointList: false,
                isHasMapImage: false,
                // isFirst: true,
                locateObj: {},
                isShowConfirm: false,
                isShowConfirm2: false,
                isShowConfirm3: false,
                pid: '',
                src: '',
                isOpenNewDetail: false,
            }
        },
        computed: {
            isStartPosition() {
                return this.isHasWeather && this.isHasPointList && this.isHasMapImage;
            },
            shortScenicDec() {
                return this.scenicDec.slice(0, 84) + '...';
            },
            ...mapState({
                watchLine: state => state.app.lineStatus, // 监听取消路线选择
                audioPercent: state => state.app.percent, // 监听播放进度
                isStop: state => state.app.isStop, // 监听是否当前是否播放完毕
                isAutoPlay: state => state.app.isAutoPlay // 监听是否开始连播下一个音频
            })
        },
        watch: {
            isStartPosition(val) {
                if (val) {
                    this.isShowLoading = false;
                    this.autoGetPositon();
                }
            },
            watchLine(val) {
                // 清除当前路线
                this.removeMarker(2);
                this.line.remove();
                this.line = {};
                this.markers_line = [];
            },
            // 监听main页的子路由的变化并做处理
            '$route'(to, from) {
                // 关闭菜单并展开对应信息窗体
                if (from.name === 'scenic-spot' && to.name === 'main' && to.params.pid) {
                    this.getMarkerIndex(to.params.pid);
                    this.markers[this.indexOfMarkers].openPopup();
                    this.isShowMenu = false;
                }
                if (from.name === 'scenic-resource' && to.name === 'main' && to.params.rid) {
                    this.getMarkerIndex(to.params.rid);
                    this.markers[this.indexOfMarkers].openPopup();
                    this.isShowMenu = false;
                }
                if(from.name == "scenic-line" && to.name == "main" && to.params.lineId){
                    this.drawLine(to.params.lineId);
                    this.isShowMenu = false;
                }
            },
            isStop(val) {
                // alert(val);
                // alert(typeof val);
                if (val) {
                    this.oMap_main.closePopup();
                    this.isPlayed = false;
                    if(this.resourceType < 3){
                        this.changeMapIcon(false);
                    }
                    document.querySelector('.pointImg').classList.remove('p_start');
                    document.querySelector('.pointImg').classList.add('p_stop');
                }
            },
            isAutoPlay(val) {
                if (val) {
                    this.scenicPointImg = this.$store.state.app.nextMessage.nextPoint.url;
                    this.scenicPointName = this.$store.state.app.nextMessage.nextPoint.name;
                    this.scenicPointId = this.$store.state.app.nextMessage.nextPoint.resource_id;
                    this.START_NEW_INTERVAL();
                    this.isPlayed = true;
                    if(this.resourceType < 3){
                        this.changeMapIcon(true);
                    }
                    document.querySelector('.pointImg').classList.remove('p_stop');
                    document.querySelector('.pointImg').classList.add('p_start');
                }
            }
        },    
        methods: {
            // 手动开启定位
            getCurrentPositions() {
                /*this.isPositioning = true;
                this.count = 0;
                this.oMap_main.locate({
                    setView: false,
                    maxZoom: 19,
                    enableHighAccuracy: true,
                    maximumAge: 5000,
                    timeout: 5000,
                    watch: true
                })*/
                this.isPositioning = true;
                this.geolocation.getCurrentPosition();

                if(this.locationTimer != ''){
                    clearInterval(this.locationTimer);
                    this.locationTimer = '';
                }
                this.locationTimer = setInterval(() => {
                    this.isPositioning = true;
                    this.geolocation.getCurrentPosition();
                    console.log("setInterval")
                },20000)
            },
            // 自动定位一次并弹出景区介绍同时播放
            autoGetPositon() {
                if (!sessionStorage.getItem("hasPosition")) { // 定位一次后则不再触发 直到清除 sessionStorage --> hasPosition
                    this.$nextTick(() => {
                        const detailAudio = document.querySelector('.detail-audio');
                        const audioContainer = document.querySelector('.introDetail');
                        if (detailAudio) { // 当前正在播放时 切换了音频
                            if (!detailAudio.paused) {
                                detailAudio.pause();
                            }
                            audioContainer.removeChild(detailAudio);
                        }
                        
                        let audioDom = document.createElement('audio');
                        let sourceDom = document.createElement('source');
                        sourceDom.type = 'audio/mpeg';
                        sourceDom.src = JSON.parse(sessionStorage.getItem('currentScenic')).explainOssUrl;
                        audioDom.preload = 'auto';
                        audioDom.dataset.sid = JSON.parse(sessionStorage.getItem('currentScenic')).scenery_id;
                        audioDom.appendChild(sourceDom);
                        audioDom.className = 'detail-audio';
                        audioDom.style.display = 'none';
                        audioContainer.appendChild(audioDom);

                        // 为景区音频添加播放完毕的监听事件
                        audioDom.addEventListener('ended', (e) => {
                            document.querySelector('.detail-img').classList.remove('d_start');
                            document.querySelector('.detail-img').classList.add('d_stop');
                            this.isPlayed_scenic = false;
                        });
                        audioDom.load();
                        
                        if (!this.$route.query.pid) { // 如果不是景点播放扫码 则自动播放景区介绍 
                            // 如果当前还存在某个景点播放则暂停
                            if (document.querySelector('.main-audio') && !document.querySelector('.main-audio').paused) {
                                this.pauseAudio();
                            }
                            // 非 iOS直接播放, iOS由于系统限制无法自动播放
                            if (!this.$tool.validateReg.isiOS(window.navigator.userAgent)) {
                                this.isOpenDetail = true;
                                console.log('开始景区播放')
                                audioDom.oncanplay = (e) => {
                                    let _audioDom = e.target;
                                    _audioDom.play();
                                    this.isPlayed_scenic = true;
                                    document.querySelector('.detail-img').classList.remove('d_stop');
                                    document.querySelector('.detail-img').classList.add('d_start');
                                }
                            } else {
                                // 引导点击播放
                                console.log('引导点击播放')
                                this.isShowConfirm = true;
                            }

                        } else {
                            this.isOpenDetail = false;
                        }
                    });

                    // 开始定位
                    this.getCurrentPositions();
                    sessionStorage.setItem("hasPosition", true);
                } else {
                    return;
                }
            },
            // 初始化图标菜单
            async initMenu() {

                // 获取 menu 菜单列表 获取天气
                const currentScenic = JSON.parse(sessionStorage.getItem('currentScenic'));
                const getListAndWheather = await this.$http.all([
                    {
                        type: 'get',
                        url: this.$base + '/app/resource/getSelectMenue',
                        urlParams: {
                            sceneryId: this.sceneryId
                        }
                    },
                    {
                        type: 'get',
                        url: this.$base + '/app/weather/getWeatherData',
                        urlParams: {
                            longitude: currentScenic.longitude,
                            latitude: currentScenic.latitude
                        }
                    }
                ]);
                if (!getListAndWheather) {
                    this.isHasWeather = true;
                    // if (this.isHasMapImage && this.isHasPointList) {
                    //     this.isShowLoading = false;
                    //     this.autoGetPositon();
                    // }
                    if (!this.isTips1) {
                        this.tipsText1 = "请求失败";
                        this.isTips1 = true;
                    }
                    return;
                }

                // 初始化天气
                this.temp = getListAndWheather[1].data.temperature;
                this.AQI = getListAndWheather[1].data.airIndex;
                this.weather = getListAndWheather[1].data.skycon;
                this.weatherImg = getListAndWheather[1].data.iconUrl;

                // 渲染页面并存储至 sessionStorage
                let menuList = [],
                    colorSrcList = [];
                getListAndWheather[0].menue.forEach(item => {
                    menuList.push({
                        name: item.remark, // 菜单名称
                        id: item.id, // 菜单id
                        paramKey: item.paramKey, // 菜单类型 -- key 如:'resource_point'
                        graySrc: item.iconUrl1, // 灰色图标
                        paramValue: item.paramValue // 菜单类型 -- value 如: '1'
                    });
                    colorSrcList.push({
                        mark: item.paramKey,
                        colorSrc: item.iconUrl,
                        graySrc: item.iconUrl1
                    })
                });
                this.menuList = [].concat(menuList);
                sessionStorage.setItem('colorSrcList', JSON.stringify(colorSrcList));

                // 初始化默认第一个图标为彩色图片
                this.$nextTick(() => {
                    const lis = document.querySelectorAll('.main_view_footer li');
                    for (let li of lis) {
                        if (li.dataset.mark === 'resource_point') {
                            li.firstElementChild.children[0].src = colorSrcList.filter(item => item.mark === 'resource_point')[0].colorSrc;
                        }
                    }
                });

                // 初始化默认第一个子页面是景点列表页
                this.SET_ROUTE_NAME('scenic-spot');

                this.isHasWeather = true;
                // if (this.isHasMapImage && this.isHasPointList) {
                //     this.isShowLoading = false;
                //     this.autoGetPositon();
                // }
            },
            // 打开图标菜单
            openMenu() {
                const routeName = this.$store.state.app.routeName;
                if (!this.isShowMenu) {
                    // 默认跳转到景点列表并关闭当前其他弹窗
                    this.oMap_main.closePopup();
                    this.isOpenDetail = false;
                    if (routeName === 'scenic-spot') {
                        this.$router.replace({
                            name: 'scenic-spot',
                            params: {
                                sceneryId: this.sceneryId
                            }
                        });
                    } else if (routeName === 'scenic-line') {
                        this.$router.replace({
                            name: 'scenic-line'
                        });
                    } else {
                        this.$router.replace({
                            name: 'scenic-resource',
                            params: {
                                type: sessionStorage.getItem('currentResource')
                            }
                        });
                    }
                    this.isShowMenu = true;
                } else {
                    this.$router.replace({
                        name: 'main'
                    });
                    this.isShowMenu = false;
                }
            },
            // 点击图标加载对应景区资源
            gotoWhere(paramKey, paramValue) {

                // 点击图标更改为有色图标
                const lis = document.querySelectorAll('.main_view_footer li');
                const colorSrcList = JSON.parse(sessionStorage.getItem('colorSrcList'));
                for (let li of lis) {
                    if (li.dataset.mark !== paramKey) {
                        li.firstElementChild.children[0].src = colorSrcList.filter(item => item.mark === li.dataset.mark)[0].graySrc;
                    } else {
                        li.firstElementChild.children[0].src = colorSrcList.filter(item => item.mark === li.dataset.mark)[0].colorSrc;
                    }
                }
                this.removeMarker(1);
                switch (paramKey) {
                    case 'resource_point':
                        if(this.markers_line.length>0){
                            this.removeMarker(2);
                            this.line.remove();
                        }
                        this.$router.replace({
                            name: 'scenic-spot',
                            params: {
                                sceneryId: this.sceneryId
                            }
                        });
                        this.getScenicPointList({
                            resourceType: 1
                        });
                        break;
                    case 'resource_line':
                        if(this.markers_line.length>0){
                            this.markers_line.forEach(v =>  {
                                v.addTo(this.oMap_main);
                            })
                            this.line.addTo(this.oMap_main);
                        }
                        this.getLineList({
                            _this: this,
                            sceneryId: this.sceneryId
                        });
                        this.$router.replace({name: 'scenic-line'});
                        this.getScenicPointList({
                            resourceType: 1
                        });
                        break;
                    default:
                        if(this.markers_line.length>0){
                            this.removeMarker(2);
                            this.line.remove();
                        }
                        sessionStorage.setItem('currentResource', paramKey);
                        this.$router.replace({
                            name: 'scenic-resource',
                            params: {
                                type: paramKey
                            }
                        });
                        this.getScenicPointList({
                            resourceType: paramValue,
                            paramKey
                        });
                        break;
                }
            },
            ...mapActions([
                'getLineList' // 请求获取路线列表
            ]),
            ...mapMutations([
                'SAVE_RESOURCE_LIST', // 保存资源列表
                'SET_ROUTE_NAME', // 设置to路由name
                'SET_FROM_ROUTE_NAME', // 设置from路由name
                'START_PLAY', // 开始播放,
                'CLEAR_CURRENT_INTERVAL', // 清除当前定时器
                'START_NEW_INTERVAL', // 开始新的定时器
                'NOTICE_STOP', // 通知是否结束播放
                'NOTICE_AUTO_PLAY', // 通知是否开始连播
                'NOTICE_STOP',
                'NOTICE_AUTO_PLAY',
                'SET_HAS_GET_TOTAL',
                'START_PLAY'
            ]),
            /**
             * 初始化音频播放
             * _type 标志播放来源 1-工具栏播放 2-景点列表点播/地图解说播放/扫码播放 
             */
            playAudio(options) {
                const mainAudio = document.querySelector('.main-audio');
                let src = ''; // 待播放景点 -- src
                let id = ''; // 待播放景点 -- id
                
                // 工具栏播放
                if (options.type === 1) {
                    this.oMap_main.closePopup(); // 关闭信息弹窗
                    if (mainAudio && mainAudio.paused) { // 如果当前 Audio 是暂停状态则直接继续播放
                        console.log('++++++++++++++ type:1 继续播放 ++++++++++++++');
                        if (document.querySelector('.detail-audio') && !document.querySelector('.detail-audio').paused) {
                            this.pauseAudio_scenic();
                        }
                        mainAudio.play();
                        this.START_NEW_INTERVAL(); // 重新启动计时器
                        this.isPlayed = true; // 播放图标更改
                        if(this.resourceType < 3){
                            this.changeMapIcon(true); // 同步地图上标记点更改状态
                        }
                        document.querySelector('.pointImg').classList.remove('p_stop');
                        document.querySelector('.pointImg').classList.add('p_start');
                        return;
                    } else { // 如果当前 Audio 还不存在则创建元素,并播放当前景点
                        console.log('++++++++++++++ type:1 工具栏播放 ++++++++++++++');
                        const currentPoint = JSON.parse(sessionStorage.getItem('currentPoint'));
                        src = currentPoint.guideUrl;
                        id = currentPoint.resource_id;
                    }
                }

                // 景点列表点播/地图解说播放/扫码播放
                if (options.type === 2) { 
                    console.log('++++++++++++++ type:2 景点列表点播/地图解说播放/扫码播放 ++++++++++++++');
                    src = options._src;
                    id = options._id;
                }

                if (document.querySelector('.detail-audio') && !document.querySelector('.detail-audio').paused) {
                    this.pauseAudio_scenic();
                }
                this.START_PLAY({src, id}); // 开始播放
                this.START_NEW_INTERVAL(); // 开始定时器
                this.isPlayed = true;
                if(this.resourceType < 3){
                    this.changeMapIcon(true);
                }
                document.querySelector('.pointImg').classList.remove('p_stop');
                document.querySelector('.pointImg').classList.add('p_start');
            },
            // 暂停播放
            pauseAudio() {
                this.CLEAR_CURRENT_INTERVAL(); // 通知App页清除定时器
                document.querySelector('.main-audio').pause(); // 直接暂停音频
                this.isPlayed = false;
                if(this.resourceType < 3){
                    this.changeMapIcon(false);
                }
                document.querySelector('.pointImg').classList.remove('p_start');
                document.querySelector('.pointImg').classList.add('p_stop');
            },
            // 改变地图图标交互效果 
            changeMapIcon (isPlay) {
                this.getMarkerIndex(false);
                let ind = this.indexOfMarkers;
                if(!this.markers[ind] || !this.markers[ind]._icon.children[0]){
                    return false;
                }
                this.markers.forEach((v,i) => {
                    if(isPlay && i == ind){
                        v._icon.children[0].children[0].classList.add("player");
                    }else{
                        v._icon.children[0].children[0].classList.remove("player");
                    }
                })

                if(document.querySelector(".info-scenic-btns")){
                    if(isPlay && this.scenicPointId == this.mapClickPointId){
                        document.querySelector(".info-scenic-btns").children[0].classList.add("playing")
                    }else{
                        document.querySelector(".info-scenic-btns").children[0].classList.remove("playing")
                    }
                }
                return true;
            },
            // 找某个点标记在this.markers中的位置
            getMarkerIndex(id) {
                //获取当前点的id
                let currentId = "";
                if(!id){
                    currentId = JSON.parse(sessionStorage.getItem("currentPoint")).resource_id;
                }else{ 
                    currentId = id;
                }
                
                this.markers.forEach((item,index) => { 
                    if(item._icon.children[0].dataset.id == currentId){
                        this.indexOfMarkers = index;
                    }
                });
            },
            // 跳转其他页
            gotoPage(name) {
                if (name === 'full-view') {
                    const fullViewSrc = JSON.parse(sessionStorage.getItem('currentScenic')).panorama_url;
                    if (fullViewSrc) {
                        this.$router.push({
                            name,
                            params: {
                                src: fullViewSrc
                            }
                        });
                    } else {
                        this.tipsText3 = '还没有全景图 ~'
                        this.isTips3 = true;
                        return;
                    }
                }
                if (name === 'recognize') {
                    this.$router.push({name});
                }
                if (name === 'feedback') {
                    this.$router.push({
                        name
                    });
                }
            },
            // 打开/关闭景区详情弹窗
            seeIntroduce() {
                if (this.isOpenDetail) {
                    this.pauseAudio_scenic();
                }
                this.isOpenDetail = !this.isOpenDetail;
                this.oMap_main.closePopup();
                this.isShowMenu = false;
            },
            seeIntroduce2() {
                this.isOpenNewDetail = !this.isOpenNewDetail;
                this.oMap_main.closePopup();
                this.isShowMenu = false;
            },
            // 自动连播切换
            changeAuto() {
                if (this.isAuto) {
                    this.tipsText3 = '您已关闭自动导游';
                    this.isTips3 = true;
                } else {
                    this.tipsText3 = '您已开启自动导游';
                    this.isTips3 = true;
                }
                this.isAuto = !this.isAuto;
                sessionStorage.setItem('isAuto',this.isAuto);
            },

            /**
             * 地图相关方法
             * 请求景区资源列表
             * @param {Object} arg {resourceType, query} 资源类型
             * @param {Object} query 扫码访问时的 query 参数对象
             */
            async getScenicPointList(arg) {
                let $this = this;
                this.resourceType = arg.resourceType;
                this.markers = [];

                // 根据资源类型获取资源列表
                const res = await this.$http.get(this.$base + `/app/resource/list?sceneryId=${this.sceneryId}&resourceType=${arg.resourceType}&limit=500`);
                if(!res || !res.page.list || !res.page.list.length){
                    this.isHasPointList = true;
                    // if (this.isHasMapImage && this.isHasWeather) {
                    //     this.isShowLoading = false;
                    //     this.autoGetPositon();
                    // }
                    if (!this.isTips1) { // 如果当前另一个请求也失败了,则不用重复弹窗
                        this.tipsText1 = "请求失败";
                        this.isTips1 = true;
                    }
                    return;
                }
                res.page.list.forEach(item => {
                    item.guideUrl = item.guideUrl ? 'https' + item.guideUrl.slice(4) : item.guideUrl;
                    item.url = item.url ? 'https' + item.url.slice(4) : item.url;
                });


                // 判断进行到这里的 是初始化页面 还是从其他页回退进入main页(不包括home页) 主要用于处理景点详情页的回退问题
                const fromRouteName = this.$store.state.app.fromRouteName;

                // 如果请求的是景点列表
                if(arg.resourceType == 1) {

                    // 存储更新完整景点列表
                    sessionStorage.setItem('pointList',JSON.stringify(res.page.list));
                    if (fromRouteName === 'root' || fromRouteName === 'feedback' || fromRouteName === 'recognize') { // 如果是刷新后初始化页面或从反馈页/识别页回退的情况
                        console.log('init');

                        // 移除部分其他资源页的类型/路线列表/路线id/其他资源列表
                        // sessionStorage.removeItem('currentResource'); // 改为后面处理
                        // sessionStorage.removeItem('lineList'); // 改为复现路线
                        // sessionStorage.removeItem('lineId'); // 改为复现路线
                        // sessionStorage.removeItem('otherPointList'); // 改为后面处理

                        if (arg.query && arg.query.pid && fromRouteName === 'root') { // 如果通过二维码扫码进入页面则使用指定景点
                            const QRCODE_CURRENT_POINT = res.page.list.filter(item => item.resource_id === arg.query.pid)[0];

                            // 存储当前扫码景点的信息
                            sessionStorage.setItem("currentPoint", JSON.stringify(QRCODE_CURRENT_POINT));
                            this.scenicPointImg = QRCODE_CURRENT_POINT.url;
                            this.scenicPointName = QRCODE_CURRENT_POINT.name;
                            this.scenicPointId = QRCODE_CURRENT_POINT.resource_id;
                            
                            // 过滤出默认播放列表
                            const index = res.page.list.findIndex(item => item.resource_id === arg.query.pid);
                            const newPlayList = res.page.list.slice(index).map(item => {
                                return {
                                    aSrc: item.guideUrl,
                                    aId: item.resource_id
                                }
                            });
                            sessionStorage.setItem('playList',JSON.stringify(newPlayList));

                            // 播放当前扫码景点的解说音频 针对ios做弹窗引导
                            if (!sessionStorage.getItem('hasPlayQrCode')) {
                                console.log('解说音频');
                                this.pid = arg.query.pid;
                                this.src = QRCODE_CURRENT_POINT.guideUrl;
                                if (!this.$tool.validateReg.isiOS(window.navigator.userAgent)) {
                                    //扫码播放景点时设置交互效果 打开对应信息弹窗
                                    //设置id 用于对应信息弹窗的播放跳动  
                                    this.mapClickPointId = arg.query.pid;
                                    sessionStorage.setItem("mapClickPointId",this.mapClickPointId);

                                    //打开扫码景点对应的信息弹窗
                                    // this.getMarkerIndex(arg.query.pid);
                                    // this.markers[this.indexOfMarkers].openPopup();

                                    this.playAudio({
                                        _src: QRCODE_CURRENT_POINT.guideUrl,
                                        _id: QRCODE_CURRENT_POINT.resource_id,
                                        type: 2
                                    });
                                } else {
                                    //弹框提示播放
                                    this.$nextTick(() => {
                                        this.isShowConfirm2 = true;
                                    });
                                }

                                // 只有第一次扫码会去自动播放或弹窗播放 刷新后则不再播放
                                sessionStorage.setItem('hasPlayQrCode', true);
                            }  
                        } else { // 否则默认取第一个景点
                            sessionStorage.setItem("currentPoint",JSON.stringify(res.page.list[0]));
                            this.scenicPointImg = res.page.list[0].url;
                            this.scenicPointName = res.page.list[0].name;
                            this.scenicPointId = res.page.list[0].resource_id;

                            // 过滤出默认播放列表
                            const playList = res.page.list.map(item => {
                                return {
                                    aSrc: item.guideUrl,
                                    aId: item.resource_id
                                }
                            });
                            sessionStorage.setItem('playList',JSON.stringify(playList));
                        }
                    }
                } else { // 如果请求的是其他资源列表 则commit mutation 保存
                    this.SAVE_RESOURCE_LIST(res.page.list);
                }

                //地图画点
                let className_resource = this.typeList.filter(item => item.type == this.resourceType)[0].className;
                res.page.list.forEach((v,i) => {
                    let infoContent = this.resourceType == 1 ? this.createInfoWindow_scenicPoint(v) : this.createInfoWindow(v);
                    let myIcon = L.divIcon({
                        html: `<div data-id="${v.resource_id}">
                                    <div class="icon ${className_resource}"></div>
                                    <div class="name">${v.name}</div>
                                </div>`,
                        className: 'marker-content-new',
                        popupAnchor: [0, -(42*this.bl)]
                    });
                    let marker = L.marker([v.latitude, v.longitude], {icon: myIcon}).addTo(this.oMap_main)
                                    .bindPopup(infoContent,{className:"info-content-new"})
                                    .on('click',(e) => { 
                                        //document.querySelector(".info-scenic-dec").style.lineHeight = 16 * $this.bl + 'px';
                                        $this.isShowMenu = false;
                                        $this.isOpenDetail = false;

                                        $this.mapClickPointId = v.resource_id;
                                        sessionStorage.setItem("mapClickPointId",$this.mapClickPointId);

                                        let currentPlayBtn = e.target._popup._contentNode.children[0].children[1].children[0];
                                        if(document.querySelector(".main-audio") && !document.querySelector(".main-audio").paused && this.scenicPointId == v.resource_id){
                                            currentPlayBtn.classList.add("playing")
                                        }else{
                                            currentPlayBtn.classList.remove("playing")
                                        }
                                    });
                    this.markers.push(marker);
                });

                if (arg.query && arg.query.pid && fromRouteName === 'root' && arg.resourceType == 1) {
                    //打开扫码景点对应的信息弹窗
                    this.getMarkerIndex(arg.query.pid);
                    this.markers[this.indexOfMarkers].openPopup();
                }

                // 处理回退的情况
                if (fromRouteName === 'scenic-point-detail' || fromRouteName === 'feedback' || fromRouteName === 'recognize') {

                    if (fromRouteName === 'scenic-point-detail') { // 如果是从景点详情页回退的情况
                        // 重新渲染当前景点信息
                        let currentPoint = JSON.parse(sessionStorage.getItem('currentPoint'));
                        this.scenicPointImg = currentPoint.url;
                        this.scenicPointName = currentPoint.name;
                        this.scenicPointId = currentPoint.resource_id;
                    }

                    // 重新渲染当前播放状态 解决回退后音频可视状态未同步的问题
                    let currAu = document.querySelector('.main-audio');
                    if (currAu) {  // 音频还在
                        if (!currAu.paused) { // 还没暂停
                            this.isPlayed = true;
                            document.querySelector('.pointImg').classList.remove('p_stop');
                            document.querySelector('.pointImg').classList.add('p_start');
                            if(this.resourceType < 3){
                                this.changeMapIcon(true);
                            }
                        } else { // 已暂停
                            this.isPlayed = false;
                            document.querySelector('.pointImg').classList.remove('p_start');
                            document.querySelector('.pointImg').classList.add('p_stop');
                            if(this.resourceType < 3){
                                this.changeMapIcon(false);
                            }
                        }
                    } else { // 音频不在
                        this.isPlayed = false;
                        document.querySelector('.pointImg').classList.remove('p_start');
                        document.querySelector('.pointImg').classList.add('p_stop');
                        if(this.resourceType < 3){
                            this.changeMapIcon(false);
                        }
                    }

                    // 如果之前选了路线 则重新画线路线
                    if (sessionStorage.getItem('lineId')) {
                        this.drawLine(sessionStorage.getItem('lineId'));
                    }

                    // 如果之前选了其他资源点 则清除对应的缓存信息
                    if (sessionStorage.getItem('currentResource')) {
                        sessionStorage.removeItem('currentResource');
                        sessionStorage.removeItem('otherPointList');
                    }
                } else { // 其他情况回退 则视情况更换icon图标
                    if(this.resourceType < 3) { // 只有景点或路线才需要更换icon图标
                        this.changeMapIcon(this.isPlayed);
                    } 
                }

                this.isHasPointList = true;
                // if (this.isHasMapImage && this.isHasWeather) {
                //     this.isShowLoading = false;
                //     this.autoGetPositon();
                // }
            },
            //清除点标记
            removeMarker(type) {
                let markerArr = type == 1 ? this.markers : this.markers_line;
                markerArr.forEach(v => {
                    v.remove();
                })                
            },
            //景点的弹窗内容
            createInfoWindow_scenicPoint(pointInfo) {
                let info = document.createElement("div");
                info.className = "info-contanir";
                info.dataset.id = pointInfo.resource_id;

                let middle = document.createElement("div");
                middle.className = "info-content";

                let htmlStr = ` <div class='info-scenic-img-area'><img style="width:100%;height:100%;border-radius:100%;" src='${pointInfo.url}' /></div>
                                <div class='info-scenic-info'>
                                    <div class='info-scenic-name'>${pointInfo.name}</div>
                                    <div class='info-scenic-dec'>${pointInfo.commentary}</div>
                                </div>`;
                middle.innerHTML = htmlStr;

                info.appendChild(middle);

                let btnArea = document.createElement('div');
                btnArea.className = "info-scenic-btns";

                let btn1 = document.createElement('button');
                btn1.className = "toPlay";
                btn1.onclick = this.toPlay;
                btnArea.appendChild(btn1);

                let btn2 = document.createElement('button');
                btn2.className = "toDetail";
                btn2.onclick = this.toDetail;
                btnArea.appendChild(btn2);
                
                info.appendChild(btnArea);
                return info;
            },
            //除景点外的其他资源弹窗内容
            createInfoWindow(pointInfo) {
                var info_other = document.createElement("div");
                info_other.className = "info-contanir-other";

                var img_other = document.createElement("img");
                img_other.style.width = "100%";
                img_other.style.height = "100%";
                img_other.style.borderRadius = "10px";
                if(pointInfo.url){
                    img_other.src = pointInfo.url;
                }else{
                    img_other.src = this.defaultImgList[this.resourceType-1];
                }
                info_other.appendChild(img_other);
                return info_other;
            },
            toPlay(e) {
                let currentPointInfo = JSON.parse(sessionStorage.getItem('pointList')).filter(item => item.resource_id === this.mapClickPointId)[0];
                let {url, name, guideUrl, resource_id} = currentPointInfo;
                this.scenicPointImg = url;
                this.scenicPointName = name;
                this.scenicPointId = resource_id;
                
                if(!e.currentTarget.classList.contains('playing')){ // 之前是暂停状态则<继续播放>或<开始新的播放>
                    sessionStorage.setItem('currentPoint',JSON.stringify(currentPointInfo));
                    let cau = document.querySelector(".main-audio");
                    if(cau && cau.paused && resource_id == cau.dataset.id){ // 继续播放
                        if (document.querySelector('.detail-audio') && !document.querySelector('.detail-audio').paused) {
                            this.pauseAudio_scenic();
                        }
                        this.playAudio({type: 1});
                    }else{ // 开始新的播放
                        const currLineId = sessionStorage.getItem('lineId');
                        const pointList = JSON.parse(sessionStorage.getItem('pointList'));
                        let newPlayList = [];

                        if (currLineId) { // 如果当前地图上存在路线
                            const lineList = JSON.parse(sessionStorage.getItem('lineList'));
                            let lineDetailList =  lineList.filter(item => item.lineId === currLineId)[0].lineDetailList;
                            let pidList = lineDetailList.map(item => item.resourceId);

                            if (this.$tool.isExist(this.mapClickPointId, pidList)) { // 如果当前点击播放的景点在路线上，则需要按路线播
                                console.log('++++++++++++++ 从景点'+ name +'开始按已选路线播 ++++++++++++++');
                                const index1 = pidList.findIndex(item => item === this.mapClickPointId);
                                newPlayList = lineDetailList.map(item => {
                                    return {
                                        aSrc: pointList.filter(i => i.resource_id === item.resourceId)[0].guideUrl,
                                        aId: item.resourceId
                                    }
                                });
                                newPlayList = newPlayList.slice(index1);
                            } else { // 如果当前点击播放的景点不在路线上
                                console.log('++++++++++++++ 从景点'+ name +'开始按顺序播 ++++++++++++++');
                                const index2 = pointList.findIndex(item => item.resource_id === this.mapClickPointId);
                                newPlayList = pointList.slice(index2).map(item => {
                                    return {
                                        aSrc: item.guideUrl,
                                        aId: item.resource_id
                                    }
                                });
                            }
                        } else { // 如果当前地图上不存在路线
                            const index3 = pointList.findIndex(item => item.resource_id === this.mapClickPointId);
                            newPlayList = pointList.slice(index3).map(item => {
                                return {
                                    aSrc: item.guideUrl,
                                    aId: item.resource_id
                                }
                            });
                        }

                        // 更新播放列表并播放
                        sessionStorage.setItem('playList', JSON.stringify(newPlayList));
                        this.playAudio({
                            _src: guideUrl,
                            _id: resource_id,
                            type: 2
                        });
                    }
                }else{ // 之前是播放状态则暂停
                    this.pauseAudio();
                }
            },
            toDetail(isWindow) {               
                if(!isWindow){
                    sessionStorage.setItem("mapClickPointId",this.scenicPointId);
                }
                this.$router.push({
                    name :  'scenic-point-detail'
                });
            },
            //画路线
            drawLine(lineId) { 
                if(this.markers_line.length>0){
                    this.removeMarker(2);
                    this.line.remove();
                }
                const lineList = this.$store.state.app.lineList;
                let currentLine = lineList.filter(item => item.lineId === lineId)[0];
                let path = currentLine.coordinatesList; //完整点
                let path_point = currentLine.lineDetailList; //途径景点
                if(path.length == 0) return;
                let mapPath = [];
                path.forEach(v => {
                    let one = [v.latitude,v.longitude];
                    mapPath.push(one);
                })
                let polyline = L.polyline(mapPath,{color:"#68A8FC",weight:4}).addTo(this.oMap_main);
                this.line = polyline;

                //路线途径景点
                path_point.forEach((v,i) => {
                    let num = i+1;
                    let myIcon = L.divIcon({html:'<div data-id="'+v.resourceId+'">'+ num +'</div>',className: 'point-serial'});
                    let marker_line = L.marker([v.latitude, v.longitude], {icon: myIcon}).addTo(this.oMap_main)
                    this.markers_line.push(marker_line);
                });
            },
            playAudio_scenic() {
                let mainAudio = document.querySelector('.main-audio');
                let detailAudio = document.querySelector('.detail-audio');
                let detailImg = document.querySelector('.detail-img');

                // 如果存在景点语音并正在播放，先暂停景点语音
                if (mainAudio && !mainAudio.paused) {
                    this.pauseAudio();
                }
                if (!detailAudio) { // 如果不存在 则去创建并播放 主要解决页面切换后无音频的情况
                    // alert('bug--还没有音频元素');
                    const audioContainer = document.querySelector('.introDetail');
                    let audioDom = document.createElement('audio');
                    let sourceDom = document.createElement('source');
                    sourceDom.type = 'audio/mpeg';
                    sourceDom.src = JSON.parse(sessionStorage.getItem('currentScenic')).explainOssUrl;
                    audioDom.preload = 'auto';
                    audioDom.dataset.sid = JSON.parse(sessionStorage.getItem('currentScenic')).scenery_id;
                    audioDom.appendChild(sourceDom);
                    audioDom.className = 'detail-audio';
                    audioDom.style.display = 'none';
                    audioContainer.appendChild(audioDom);

                    // 为景区音频添加播放完毕的监听事件
                    audioDom.addEventListener('ended', (e) => {
                        document.querySelector('.detail-img').classList.remove('d_start');
                        document.querySelector('.detail-img').classList.add('d_stop');
                        this.isPlayed_scenic = false;
                    });
                    audioDom.load();
                    audioDom.oncanplay = (e) => {
                        let _audioDom = e.target;
                        _audioDom.play();
                        this.isPlayed_scenic = true;
                        document.querySelector('.detail-img').classList.remove('d_stop');
                        document.querySelector('.detail-img').classList.add('d_start');
                    }
                } else { // 如果存在 则续播
                    detailAudio.play();
                }
                detailImg.classList.add('d_start');
                detailImg.classList.remove('d_stop');
                this.isPlayed_scenic = true;
            },
            pauseAudio_scenic() {
                let detailAudio = document.querySelector('.detail-audio');
                let detailImg = document.querySelector('.detail-img');

                // 如果存在景区语音且还在播放 才去暂停
                if ( detailAudio && !detailAudio.paused) {
                    detailAudio.pause();
                    detailImg.classList.remove('d_start');
                    detailImg.classList.add('d_stop');
                }
                this.isPlayed_scenic = false;
            },
            onConfirm() {
                console.log('开始景区播放')
                this.isOpenDetail = true;
                document.querySelector('.detail-audio').play();
                this.isPlayed_scenic = true;
                document.querySelector('.detail-img').classList.remove('d_stop');
                document.querySelector('.detail-img').classList.add('d_start');
            },
            onConfirm2() {
                console.log('开始景点播放')
                //扫码播放景点时设置交互效果 打开对应信息弹窗
                //设置id 用于对应信息弹窗的播放跳动  
                this.mapClickPointId = this.pid;
                sessionStorage.setItem("mapClickPointId",this.mapClickPointId);

                //打开扫码景点对应的信息弹窗
                this.getMarkerIndex(this.pid);
                this.markers[this.indexOfMarkers].openPopup();

                if (document.querySelector('.detail-audio') && !document.querySelector('.detail-audio').paused) {
                    this.pauseAudio_scenic();
                }

                // const mainAudio = document.querySelector('.main-audio');
                const audioContainer = document.querySelector('#app');
                // if (mainAudio) { // 当前正在播放时 切换了音频
                //     clearInterval(this.timer);
                //     if (!mainAudio.paused) {
                //         mainAudio.pause();
                //     }
                //     audioContainer.removeChild(mainAudio);
                //     this.audioPercent = 0;
                //     this.SET_PERCENT(0);
                //     this.timer = '';
                // }
                let audioDom = document.createElement('audio');
                let sourceDom = document.createElement('source');
                sourceDom.type = 'audio/mpeg';
                sourceDom.src = this.src;
                audioDom.preload = 'auto';
                audioDom.dataset.id = this.pid;
                audioDom.appendChild(sourceDom);
                audioDom.className = 'main-audio';
                audioDom.style.display = 'none';
                audioContainer.appendChild(audioDom);
                audioDom.load();

                audioDom.oncanplay = (e) => {
                    let _audioDom = e.target;
                    this.totalTime = _audioDom.duration;
                    _audioDom.play();
                    sessionStorage.setItem("totalTime",_audioDom.duration);
                    this.NOTICE_STOP(false); // 通知是否结束播放 -- 否
                    this.NOTICE_AUTO_PLAY(false); // 通知是否开始连播 -- 否
                    this.SET_HAS_GET_TOTAL(true);
                    // 添加次数统计
                    this.countPlayTimes(JSON.parse(sessionStorage.getItem('currentScenic')).scenery_id,this.pid);
                }
                audioDom.onplay = (e) => {
                    // this.changeProgress();
                    // 开始播放
                    this.START_PLAY({
                        isQrCode: true
                    });
                }
                this.START_NEW_INTERVAL(); // 开始定时器
                this.isPlayed = true;
                if(this.resourceType < 3){
                    this.changeMapIcon(true);
                }
                document.querySelector('.pointImg').classList.remove('p_stop');
                document.querySelector('.pointImg').classList.add('p_start');
            },
            onConfirm3() {
                let _self = this;
                //更新播放列表
                //如果不存在路线 播放列表为完整景点中 包含当前定位点之后的景点们
                //如果存在路线  1.当前定位点在路线中 播放列表为路线中包含当前定位点之后的景点们  
                //             2.当前定位点不在路线中 播放列表为当前定位点+完整的路线景点
                const pointList = JSON.parse(sessionStorage.getItem("pointList"));
                const currLineId = sessionStorage.getItem('lineId');
                let newPlayList = [];
                if(!currLineId){//不存在路线
                    const index_dw = pointList.findIndex(item => item.resource_id === _self.locationPointInfo.resource_id);
                    newPlayList = pointList.slice(index_dw).map(item => {
                        return {
                            aSrc : item.guideUrl,
                            aId : item.resource_id
                        }
                    })
                }else {
                    const lineList = JSON.parse(sessionStorage.getItem('lineList'));
                    let currentLineList =  lineList.filter(item => item.lineId === currLineId)[0].lineDetailList;
                    let pidList = currentLineList.map(item => item.resourceId);

                    if(_self.$tool.isExist(_self.locationPointInfo.resource_id, pidList)){//存在路线 且当前定位点在路线中
                        const index_dw_line = pidList.findIndex(item => item === _self.locationPointInfo.resource_id);
                        newPlayList = currentLineList.slice(index_dw_line).map(item => {
                            return {
                                aSrc : item.guideUrl,
                                aId : item.resourceId
                            }
                        })
                    }else{
                        let linePlayList = currentLineList.map(item => {
                            return {
                                aSrc : item.guideUrl,
                                aId : item.resourceId
                            }
                        })
                        newPlayList = [{aSrc : _self.locationPointInfo.guideUrl,aId : _self.locationPointInfo.resource_id}].concat(linePlayList);
                    }
                }
                sessionStorage.setItem("playList",JSON.stringify(newPlayList));

                //如果景区音频正在播放 暂停掉
                let detailAudio = document.querySelector(".detail-Audio");
                if(detailAudio && !detailAudio.paused) {
                    _self.pauseAudio_scenic();
                }
                
                _self.scenicPointImg = _self.locationPointInfo.url;
                _self.scenicPointName = _self.locationPointInfo.name;
                _self.scenicPointId = _self.locationPointInfo.resource_id;
                _self.mapClickPointId = _self.locationPointInfo.resource_id;
                sessionStorage.setItem("currentPoint",JSON.stringify(_self.locationPointInfo));
                sessionStorage.setItem("mapClickPointId",_self.locationPointInfo.resource_id);
                
                //播放当前定位点的音频
                const audioContainer = document.querySelector('#app');
                const mainAudio = document.querySelector('.main-audio');
                if (mainAudio) { // 当前正在播放时 切换了音频
                    if (!mainAudio.paused) {
                        mainAudio.pause();
                    }
                    audioContainer.removeChild(mainAudio);
                    _self.SET_PERCENT(0);
                    _self.CLEAR_CURRENT_INTERVAL();
                }
                let audioDom = document.createElement('audio');
                let sourceDom = document.createElement('source');
                sourceDom.type = 'audio/mpeg';
                sourceDom.src = _self.locationPointInfo.guideUrl;
                audioDom.preload = 'auto';
                audioDom.dataset.id = _self.locationPointInfo.resource_id;
                audioDom.appendChild(sourceDom);
                audioDom.className = 'main-audio';
                audioDom.style.display = 'none';
                audioContainer.appendChild(audioDom);
                audioDom.load();

                audioDom.oncanplay = (e) => {
                    let _audioDom = e.target;
                    _self.totalTime = _audioDom.duration;
                    _audioDom.play();
                    sessionStorage.setItem("totalTime",_audioDom.duration);
                    _self.NOTICE_STOP(false); // 通知是否结束播放 -- 否
                    _self.NOTICE_AUTO_PLAY(false); // 通知是否开始连播 -- 否
                    _self.SET_HAS_GET_TOTAL(true);
                    _self.countPlayTimes(JSON.parse(sessionStorage.getItem('currentScenic')).scenery_id, _self.locationPointInfo.resource_id);
                }
                audioDom.onplay = (e) => {
                    // this.changeProgress();
                    // 开始播放
                    _self.START_PLAY({
                        isQrCode: true
                    });
                }
                _self.START_NEW_INTERVAL(); // 开始定时器
                _self.isPlayed = true;
                if(_self.resourceType < 3){
                    _self.getMarkerIndex(_self.mapClickPointId);
                    _self.markers[_self.indexOfMarkers].openPopup();
                    _self.changeMapIcon(true);
                }
                document.querySelector('.pointImg').classList.remove('p_stop');
                document.querySelector('.pointImg').classList.add('p_start');
            },
            spreadDetail() {
                this.isOpenDetail = false;
                this.isOpenNewDetail = true;
            },
            async countPlayTimes(sid, pid) {
                const increaseTimes = await this.$http.get(this.$base + '/app/sys/playerVoice',{
                    sceneryId: parseInt(sid),
                    resourceId: parseInt(pid)
                });
                if (!increaseTimes) {
                    return;
                }
            }
        }
    }
</script>
