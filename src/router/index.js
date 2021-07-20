import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home',
    name: Home
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },{
    path: '/Spend',
    name: 'Spend',
    component: () => import('../views/spend/spend')
  },{
    path: '/Nature',
    name: 'Nature',
    component: () => import('../views/nature/nature'),
    redirect:'/Nature/Class',
    children:[
      {
        path:'Class',
        name:'Class',
        component:() => import('../views/nature/class')
      },
      {
        path:'Attr',
        name:'Attr',
        component:() => import('../views/nature/Attr')
      },{
        path:'Computed',
        name:'Computed',
        component:() => import('../views/nature/computed')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
