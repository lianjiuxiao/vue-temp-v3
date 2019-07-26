import Vue from 'vue'
import Router from 'vue-router'
import {setToken, getToken} from '../common/utils/utils'

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: '_home',
        redirect: '/index',
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
        path: '/index',
        name: 'index',
        meta: {
            title: '首页 - 首页',
            hideInMenu: true
        },
        component: () => import('@/views/Index')
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
    {
        path: '/401',
        name: 'error_401',
        meta: {
            hideInMenu: true
        },
        component: () => import('@/views/error-page/401.vue')
    },
    {
        path: '/500',
        name: 'error_500',
        meta: {
            hideInMenu: true
        },
        component: () => import('@/views/error-page/500.vue')
    },
    {
        path: '*',
        name: 'error_404',
        meta: {
            hideInMenu: true
        },
        component: () => import('@/views/error-page/404.vue')
    }
]

const router = new Router({
    mode: 'hash',
    routes
});

const LOGIN_PAGE_NAME = 'login'
const Index_PAGE_NAME = 'index'

router.beforeEach((to, from, next) => {
    const token = getToken();
    // 不验证登陆的页面
    if (to.name === Index_PAGE_NAME) {
        next()
    } else {
        if (!token && to.name !== LOGIN_PAGE_NAME) {
            // 未登录且要跳转的页面不是登录页
            next({
                name: LOGIN_PAGE_NAME // 跳转到登录页
            })
        } else if (!token && to.name === LOGIN_PAGE_NAME) {
            // 未登陆且要跳转的页面是登录页
            next() // 跳转
        } else if (token && to.name === LOGIN_PAGE_NAME) {
            // 已登录且要跳转的页面是登录页
            next() // 跳转
        } else {
            // 已经登陆 查看用户用户菜单权限列表
            next()
        }
    }
})

router.afterEach(to => {
    console.log("afterEach>>>>>>>>>>>>>>>")
    console.log(to);
})

export default router
