import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/Active',
    children: [
      {
        path:'/Active',
        meta: '活动',
        component: () => import('../views/active/index.vue')
      },
      {
        path: '/Nature',
        meta: '卦石',
        // children: [
        //   {
        //     path: '/Nature/Class',
        //     name: 'Class',
        //     component: () => import('../views/nature/class.vue'),
        //     meta: '分类'
        //   }
        // ]
      },
      {
        path: '/Speed',
        meta: '花费'
      }
    ]
  }
  // {
  //   path: '/Nature',
  //   meta: '卦石',
  //   children: [
  //     {
  //       path: '',
  //       name: 'Class',
  //       component: () => import('../views/nature/class.vue'),
  //       meta: '分类'
  //     },
  //     {
  //       path: 'Attr',
  //       name: 'Attr',
  //       component: () => import('../views/nature/attr.vue'),
  //       meta: '属性'
  //     },
  //     {
  //       path: 'Computed',
  //       name: 'Computed',
  //       component: () => import('../views/nature/computed.vue'),
  //       meta: '计算'
  //     }
  //   ]
  // },
  // {
  //   path: '/Spend',
  //   component: Home,
  //   meta: '花费',
  //   children: [
  //     {
  //       path: 'Speed',
  //       name: 'Speed',
  //       component: () => import('../views/spend/spend'),
  //       meta: '计算'
  //     }
  //   ]
  // }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
export default router
