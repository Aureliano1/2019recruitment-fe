import Vue from 'vue'
import VueRouter from 'vue-router'

import home from './pages/login/home.vue'
import answer from './pages/answer/answer.vue'
import adminindex from './pages/adminindex/adminindex.vue'
import announce from './components/announce.vue'
import overview from './components/overview.vue'
import concrate from './components/concrate.vue'
import marking from './pages/marking/marking.vue'
import introduce from './router/Pre-Introduce.vue'
import text from './router/sub/introduce.vue'
import product from './router/sub/product.vue'
import FE from './router/sub/FE.vue'
import BE from './router/sub/BE.vue'
import android from './router/sub/android.vue'
import IOS from './router/sub/IOS.vue'
import design from './router/sub/design.vue'
import DevOps from './router/sub/DevOps.vue'
import ending from './router/Ending.vue'
import managerLogin from './router/managerLogin.vue'
import ctrlques from './components/ctrlques.vue'
// import manager from './router/manager.vue'
// import checking from './router/sub/checking.vue'
import add from './router/sub/add.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/main',
      component: introduce,
      children: [
        {
          path: '/',
          component: text
        },
        {
          path: 'product',
          component: product
        },
        {
          path: 'FE',
          component: FE
        },
        {
          path: 'BE',
          component: BE
        },
        {
          path: 'android',
          component: android
        },
        {
          path: 'IOS',
          component: IOS
        },
        {
          path: 'design',
          component: design
        },
        {
          path: 'DevOps',
          component: DevOps
        }
      ]
    },
    {
      path: '/ending',
      component: ending
    },
    {
      path: '/managerlogin',
      component: managerLogin
    },
    // {path:'/manager',
    // component:manager,
    // children:[
    //     {path:'checking',component:checking},
    //     {path:'add',component:add},
    // ]},
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/answer',
      name: 'answer',
      component: answer
    },
    {
      path: '/adminindex',
      component: adminindex,
      children: [
        {
          path: '/',
          name: 'announce',
          component: announce
        },
        {
          path: 'overview',
          name: 'overview',
          component: overview
        },
        {
          path: 'concrate',
          name: 'concrate',
          component: concrate
        },
        // {
        //   path: 'checking',
        //   component: checking
        // },
        {
          path: 'add',
          component: add
        },
        {
          path: 'ctrlques',
          component: ctrlques
        }
      ]
    },
    {
      path: '/marking',
      name: 'marking',
      component: marking
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/managerlogin') {
    next()
  } else {
    let token = localStorage.getItem('Authorization')

    if (token === 'null' || token === '') {
      next('/managerlogin')
    } else {
      next()
    }
  }
})

// 将路由对象暴露出去
export default router
