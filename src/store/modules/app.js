import vm from '@/main.js';

const app = {
    state: {
        lineList: [],
        resourceList: [],
        content: '',
        routeName: '',
        playStatus: '',
        autoPlay: false,
        playEnd: false,
        fromRouteName: '',
        fromRouteName_detail: '',
        lineStatus: ''
    },
    mutations: {
        // 保存路线列表
        GETLINELIST(state, list) {
            state.lineList = list;
        },
        // 保存资源列表
        SAVERESOURCELIST(state, rlist) {
            state.resourceList = rlist;
            sessionStorage.setItem('otherPointList', JSON.stringify(rlist));
        },
        // 保存消息详情内容
        SAVECONTENT(state, val) {
            state.content = val;
            sessionStorage.setItem('msgContent', val);
        },
        // 初始化设置消息详情内容
        INITCONTENT(state) {
            state.content = sessionStorage.getItem('msgContent');
        },
        // 设置当前所在路由的名字 用于区分景点/路线/其他资源点
        SETROUTENAME(state, val) {
            state.routeName = val;
            sessionStorage.setItem('routeName', val);
        },
        // 景点列表页监听Main页面的播放暂停
        startCurrentPlay(state, val) {
            state.playStatus = val;
        },
        // 设置当前路由的上一个路由的名字 用于区分是普通页面刷新/其他页面回退
        SETFROMROUTENAME(state, val) {
            state.fromRouteName = val;
        },
        setFromRouteName_detail(state, val) {
            state.fromRouteName_detail = val;
        },
        // 移除当前选中路线
        REMOVECURRENTLINE(state) {
            state.lineStatus = !state.lineStatus;
        },
        // 监听自动播
        autoPlay(state) {
            state.autoPlay = !state.autoPlay;
        },
        // 监听播放结束
        playEnd(state) {
            state.playEnd = !state.playEnd;
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
            commit('GETLINELIST', lineList.page.list);
            sessionStorage.setItem('lineList', JSON.stringify(lineList.page.list));
            _this.isShowLoading = false;
        },
    }
}

export default app;