import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import {merge} from '@/common/utils/utils'
import Vue from 'vue'
import user from './module/user'

Vue.use(Vuex)
const global = {
    "code": "",
    "openid": "",
    "unionId": "",
    "sourceType": "",
    "id": "",
    "agentName": "",
    "agentType": "",
    "phone": "",
    "isLeader": "",
    "verificationCode": "",
    "agree": true,
    "withdrawStatus": 0
}

const state = {
    global: {
        ...global,
    }
}
const getters = {
    global: state => state.global,
}

const mutations = {
    setGlobal(state, options) {
        merge(state.global, options)
    },
}

const actions = {
    load: ({commit}, bool) => commit('setStates', {
        isLoading: bool
    }),
    alert: ({commit}, {text, callback}) => commit('setStates', {
        isAlerting: true,
        alertingText: text,
        alertingOkCallback() {
            callback && callback()
            commit('setStates', {isAlerting: false})
        },
        alertingCancelCallback: null
    }),
    confirm: ({commit}, {text, okCallback, cancelCallback}) => commit('setStates', {
        isAlerting: true,
        alertingText: text,
        alertingOkCallback() {
            okCallback && okCallback()
            commit('setStates', {isAlerting: false})
        },
        alertingCancelCallback() {
            cancelCallback && cancelCallback()
            commit('setStates', {isAlerting: false})
        }
    })
}

const reducer = state => ({
    global: state.global,
});
const filter = mutation => (
    mutation.type === 'setGlobal'
);
const vuexLocal = new VuexPersistence({
    key: 'temp',
    storage: window.sessionStorage,
    reducer,
    filter
});

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
        user
    },
    plugins: [vuexLocal.plugin]
})

