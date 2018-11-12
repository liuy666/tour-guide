import vm from '@/main.js';

const app = {
    state: {
        lineList: [],
        resourceList: [],
        content: '',
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
        }
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