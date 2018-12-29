import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import MyInfo from '@/views/my/Index'
import BankInfo from '@/views/my/BankInfo'
import uiLayout from '@/views/ui/layout'
import uiIndex from '@/views/ui/index'
import uiElement from '@/views/ui/element'
import uiIview from '@/views/ui/iview'
import uiVuetify from '@/views/ui/vuetify'

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/my',
      component: MyInfo,
      children: [
        {
          path: '/bankinfo',
          component: BankInfo,
        },
      ]
    },
    {
      path: '/ui',
      name: 'ui',
      component: uiLayout,
      children: [
        {
          path: 'index',
          name: 'index',
          component: uiIndex,
        },
        {
          path: 'element',
          name: 'element',
          component: uiElement,
        },
        {
          path: 'iview',
          name: 'iview',
          component: uiIview,
        },
        {
          path: 'vuetify',
          name: 'vuetify',
          component: uiVuetify,
        },
      ]
    },
  ]
})
