import router from './router/index'
import store from './store/index'
import { Message } from 'element-ui'
//import { getToken } from '@/utils/auth' // 验权


router.beforeEach((to, from, next) => {
  store.dispatch('GenerateRoutes', ['admin']).then(() => { // 根据roles权限生成可访问的路由表
    router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
    next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
  })
})

router.afterEach(() => {

})
