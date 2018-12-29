import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/store'
import plugins from '@/common/mixins/index'
import mock from '@/network/mockNetWork'

Vue.config.productionTip = false
Vue.use(router)
Vue.use(plugins, {someOption: true})
if (process.env.NODE_ENV !== 'production') {
    Vue.use(mock)
}
new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
