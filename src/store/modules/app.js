import vm from '@/main.js';

const app = {
    state: {
        lineList: [],
        resourceList: [],
        content: '',
        routeName: '',
        pauseStatus: false,
        playStatus: '',
        autoPlay: false,
        playEnd: false,
        fromRouteName: '',
        lineStatus: ''
    },
    mutations: {
        getLineList(state, list) {
            state.lineList = list;
        },
        saveResourceList(state, rlist) {
            state.resourceList = rlist;
            sessionStorage.setItem('otherPointList',JSON.stringify(rlist));
        },
        saveContent(state, val) {
            state.content = val;
            sessionStorage.setItem('msgContent', val);
        },
        initContent(state) {
            state.content = sessionStorage.getItem('msgContent');
        },
        setRouteName(state, val) {
            state.routeName = val;
            sessionStorage.setItem('routeName',val);
        },
        pauseCurrentPlay(state) {
            state.pauseStatus = !state.pauseStatus;
        },
        // 景点列表页监听Main页面的播放暂停
        startCurrentPlay(state, val) {
            state.playStatus = val;
        },
        setFromRouteName(state, val) {
            state.fromRouteName = val;
        },
        removecurrentLine(state) {
            state.lineStatus = !state.lineStatus;
        },
        // 监听自动播
        autoPlay(state) {
            state.autoPlay = !state.autoPlay;
        },
        // 监听播放结束
        playEnd(state) {
            state.playEnd = !state.playEnd;
        },
    },
    actions: {
        async getLineList({commit}, {_this, sceneryId}) {
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
            commit('getLineList', lineList.page.list);
            sessionStorage.setItem('lineList', JSON.stringify(lineList.page.list));
            _this.isShowLoading = false;
        },
    }
}

export default app;