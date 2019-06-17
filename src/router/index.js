import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login'
import Main from '../pages/main'
import Home from '../components/home'
import About from '../components/about'
import Admin from '../components/admin'
import User from '../components/user'

Vue.use(Router)

/* 静态路由 */
export const constRoutes = [
  {
    path:'/',
    component: Login
  },
  {
    path: '/main',
    component: Main,
    children: [{
      path:'/about',
      component: About
    },{
      path:'/home',
      component: Home
    }]
  }
]

/* 权限路由 */
export const asyncRoutes = [
  {
    path: '/main',
    component: Main,
    meta: {
      roles: ['admin', 'user']
    },
    children: [{
      path:'/admin',
      component: Admin,
      meta: ['admin']
    },{
      path:'/user',
      component: User,
      meta: ['user']
    }]
  }
]

/* export default new Router({
  routes: [
    {
      path:'/',
      component: Login
    },
    {
      path: '/main',
      component: Main,
      children: [{
        path:'/home',
        component: Home,
      }]
    }
  ]
})
*/

const createRouter = () => new Router({
  routes: constRoutes
})

const router = createRouter()

// 用户退出登录不刷新页面重新登录其他权限账号需要重新更新路由
export function resetRouter() {
  const newRouter = createRouter();
  router.match = newRouter.matcher
}

export default router


