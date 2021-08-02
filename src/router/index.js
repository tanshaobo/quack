import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SubMenu from '@/components/common/subMenu/index.vue'
Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    redirect: '/Nature'
  },
  {
    path: '/Nature',
    name: 'Nature',
    component: Home,
    meta: '卦石',
    children: [
      {
        path: '/Class',
        name: 'Class',
        component: SubMenu,
        meta: '分类'
        // children: [
        //   {
        //     path: '',
        //     name: 'Class',
        //     component: () => import('../views/nature/class'),
        //     meta: '详情'
        //   }
        // ]
      }
    ]
  },
  {
    path: '/Spend',
    name: 'Spend',
    component: () => import('../views/spend/spend')
  }
  // {
  //   path: '/Nature',
  //   name: 'Nature',
  //   component: () => import('../views/nature/nature'),
  //   redirect: '/Nature/Class',
  //   children: [
  //     {
  //       path: 'Class',
  //       name: 'Class',
  //       component: () => import('../views/nature/class')
  //     },
  //     {
  //       path: 'Attr',
  //       name: 'Attr',
  //       component: () => import('../views/nature/Attr')
  //     },
  //     {
  //       path: 'Computed',
  //       name: 'Computed',
  //       component: () => import('../views/nature/computed')
  //     }
  //   ]
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
