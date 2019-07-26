import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: '_home',
            redirect: '/home',
            component: () => import('@/views/Index'),
            meta: {
                hideInMenu: true,
                notCache: true
            },
            children: [
                {
                    path: '/home',
                    name: 'home',
                    meta: {
                        hideInMenu: true,
                        title: '首页',
                        notCache: true,
                        icon: 'md-home'
                    },
                    component: () => import('@/views/Home')
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            meta: {
                title: 'Login - 登录',
                hideInMenu: true
            },
            component: () => import('@/views/login/login')
        },
    ]
})
