import vm from '@/main.js';

const app = {
    state: {
        lineList: [],
        resourceList: [],
        content: '',
        routeName: '',
        fromRouteName: '',
        fromRouteName_detail: '',
        lineStatus: '',
        sId: '',
        playParams: null, // 播放所需参数，包括景点id和音频src
        percent: 0, // 播放进度百分比
        playStatus: '', // 当前播放状态 -- pause/play
        isStop: false, // 判断当前播放是否结束
        isAutoPlay: false, // 判断是否自动播放下一个
        nextMessage: null, // 下一个播放景点所需信息
        hasGetTotal: false, //是否已经得到总时长
        isLastOne: false,
    },
    mutations: {
        // 保存初始状态
        SAVE_STATE(state) {
             let initState = {
                lineList: [],
                resourceList: [],
                content: '',
                routeName: '',
                fromRouteName: '',
                fromRouteName_detail: '',
                lineStatus: '',
                sId: '',
                playParams: null,
                percent: 0,
                playStatus: '',
                isStop: false,
                isAutoPlay: false,
                nextMessage: null,
                hasGetTotal: false,
                isLastOne: false
            }
            localStorage.setItem('initState', JSON.stringify(initState));
        },
        // 初始化vuex
        INIT_STATE(state) {
            let initState = JSON.parse(localStorage.getItem('initState'));
            for (let attr in state) {
                for (let attr2 in initState) {
                    if (attr == attr2) {
                        state[attr] = initState[attr2];
                    }
                }
            }
        },
        // 保存路线列表
        GET_LINE_LIST(state, list) {
            state.lineList = list;
        },
        // 保存资源列表
        SAVE_RESOURCE_LIST(state, rlist) {
            state.resourceList = rlist;
            sessionStorage.setItem('otherPointList', JSON.stringify(rlist));
        },
        // 保存消息详情内容
        SAVE_CONTENT(state, val) {
            state.content = val;
            sessionStorage.setItem('msgContent', val);
        },
        // 初始化设置消息详情内容
        INIT_CONTENT(state) {
            state.content = sessionStorage.getItem('msgContent');
        },
        // 设置当前所在路由的名字 用于区分景点/路线/其他资源点
        SET_ROUTE_NAME(state, val) {
            state.routeName = val;
            sessionStorage.setItem('routeName', val);
        },
        // 设置当前路由的上一个路由的名字 用于区分是普通页面刷新/其他页面回退
        SET_FROM_ROUTE_NAME(state, val) {
            state.fromRouteName = val;
        },
        setFromRouteName_detail(state, val) {
            state.fromRouteName_detail = val;
        },
        // 移除当前选中路线
        REMOVE_CURRENT_LINE(state) {
            state.lineStatus = !state.lineStatus;
        },
        // 监听自动播
        // AUTO_PALY(state) {
        //     state.autoPlay = !state.autoPlay;
        // },
        SET_SCENIC_ID(state, val) {
            state.sId = val;
        },
        // 保存当前景区信息
        // SET_CURRENT_SCENIC(state, val) {
        //     state.currentScenic = val;
        // },



        // 开始播放
        START_PLAY(state, params) {
            state.playParams = {...params };
        },
        // 设置播放进度百分比
        SET_PERCENT(state, percent) {
            state.percent = percent;
            sessionStorage.setItem('audioPercent', percent);
        },
        // 清除当前播放计时器
        CLEAR_CURRENT_INTERVAL(state) {
            state.playStatus = 'pause';
        },
        // 开始新的播放计时器
        START_NEW_INTERVAL(state) {
            state.playStatus = 'play';
        },
        // 通知是否结束播放
        NOTICE_STOP(state, isStop) {
            state.isStop = isStop;
        },
        // 通知是否开始连播
        NOTICE_AUTO_PLAY(state, { isAutoPlay, nextMessage }) {
            state.isAutoPlay = isAutoPlay;
            state.nextMessage = nextMessage;
        },
        SET_HAS_GET_TOTAL(state, hasGetTotal) {
            state.hasGetTotal = hasGetTotal;
        },
        SET_IS_LAST(state, isLastOne) {
            state.isLastOne = isLastOne;
        }
    },
    actions: {
        async getLineList({ commit }, { _this, sceneryId }) {
            _this.isShowLoading = true;
            console.log(vm)
            const lineList = await vm.$http.get(vm.$base + '/hqyatu-navigator/app/line/getLineList', {
                sceneryId
            });
            console.log(lineList);

            if (!lineList) {
                _this.isShowLoading = false;
                return;
            }
            commit('GET_LINE_LIST', lineList.page.list);
            sessionStorage.setItem('lineList', JSON.stringify(lineList.page.list));
            _this.isShowLoading = false;
        },
    }
}

export default app;