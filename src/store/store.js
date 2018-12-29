import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import {merge} from '@/common/utils/utils'
import Vue from 'vue'
Vue.use(Vuex)
const user = {
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
  user: {
    ...user,
  }
}
const getters = {
  user: state => state.user,
}

const mutations = {
  setUser(state, options) {
    merge(state.user, options)
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
  user: state.user,
});
const filter = mutation => (
  mutation.type === 'setUser'
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
  plugins: [vuexLocal.plugin]
})

