import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routes = [
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


router.beforeEach((to, from, next) => {
    console.log("beforeEach>>>>>>>>>>>>>>>")
    console.log(to)
    console.log(from)

    next()
})

router.afterEach(to => {
    console.log("afterEach>>>>>>>>>>>>>>>")
    console.log(to);
})

export default router
