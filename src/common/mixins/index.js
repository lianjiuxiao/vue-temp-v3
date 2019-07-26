import {mapGetters, mapMutations, mapActions} from 'vuex'
import {merge, hasValue} from '../utils/utils'
import {$axios} from '@/network/base/axios'

export default {
    install(Vue, options) {
        // 1. 添加全局方法或属性，如:  vue-custom-element
        Vue.myGlobalMethod = function () {
            // 逻辑...
        };
        // 2. 添加全局资源：指令/过滤器/过渡等，如 vue-touch
        Vue.directive('my-directive', {
            bind(el, binding, vnode, oldVnode) {
                // 逻辑...
            }

        });
        Vue.directive('focus', {
            bind: function () {
            },
            // 当绑定元素插入到 DOM 中。
            inserted: function (el, binding, vnode, oldVnode) {
                // 聚焦元素
                el.focus();
            },
            update: function () {
            },
            componentUpdated: function () {
            },
            unbind: function () {
            }
        });
        // 3. 注入组件
        Vue.mixin({
            components: {},
            props: {},
            data() {
                return {}
            },
            created() {
            },
            mounted() {
            },
            activited() {
            },
            update() {
            },
            methods: {
                hasValue(val) {
                    return hasValue(val)
                },
                merge(obj, option) {
                    return merge(obj, option)
                },
                go({path, query}) {
                    console.log(path);
                    this.$router.push({
                        path: path,
                        query: query
                    })
                },
                appReady(cb) {
                    this.setUser({
                        "code": "1",
                        "openid": "2",
                        "unionId": "3",
                        "sourceType": "4",
                        "id": "5",
                        "agentName": "6",
                        "agentType": "7",
                        "phone": "8",
                        "isLeader": "9",
                        "verificationCode": "10",
                        "agree": true,
                        "withdrawStatus": 0
                    });
                    !!cb && cb()
                },
                ...mapMutations(['setUser']),
                ...mapActions(['alert', 'wait', 'confirm'])
            },
            filter: {},
            computed: {
                ...mapGetters(['global'])
            },
            watch: {},
        });
        // 4. 添加实例方法，通过把它们添加到 Vue.prototype 上实现逻辑...
        Vue.prototype.$myMethod = function (options) {

        }
        Vue.prototype.$axios = $axios
    }
}
