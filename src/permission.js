import router from './router'
// import { asyncRoutes } from './router'
import store from './store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist
// const _import = require('./router/_import_' + process.env.NODE_ENV)
// const _import = require('./router/_import_development')
// const _import = require('./router/_import_production')
router.beforeEach(async (to, from, next) => {
  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()
  console.log('from.path ')
  console.log(from.path)
  console.log('to.path ')
  console.log(to.path)
  let path = to.path
  let newPath = path.substr(4)
  // console.log('to.newPath')
  // console.log(newPath)
  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      // console.log('hasToken 1')
      next({ path: '/' })
    } else {
      // console.log(1)
      if (store.getters.permission_routes.length > 0) { // 当已经有菜单时直接跳转页面
        // console.log(2)
        if (path.indexOf('pms') === -1) {
          // console.log('path no pms')
          // console.log(path)
          // console.log(path.indexOf('pms'))
          next()
        } else {
          // console.log('path has pms')
          // console.log(path)
          // console.log(path.indexOf('pms'))
          next({ path: newPath })
        }
      } else {
        try { // 当没有菜单时，从后端请求获取菜单路由生成菜单。
          let data = { empCode: store.getters.empCode, roleCode: store.getters.roleCode }
          await store.dispatch('permission/getRoutes', data)
          console.log(1)
          // let menus = []
          await store.dispatch('permission/filterRoutes', store.getters.menus) // 1.过滤路由
          // menus = store.getters.accessedRouters
          // menus = filterAsyncRouter(store.getters.menus)
          // console.log(menus)
          console.log(2)
          await store.dispatch('permission/setRoutes', store.getters.accessedRouters)
          console.log(3)
          // menus.push({ path: '*', redirect: '/404', hidden: true })// 404页面需要动态加载，否则刷新会跳去404页面
          console.log(4)
          router.addRoutes(store.getters.accessedRouters) // 2.动态添加路由
          global.antRouter = store.getters.accessedRouters // 3.将路由数据传递给全局变量，做侧边栏菜单渲染工作
          // console.log(3)
          if (path.indexOf('pms') === -1) {
            // console.log('path no pms')
            // console.log(path)
            // console.log(path.indexOf('pms'))
            next({
              ...to,
              replace: true
            })
          } else {
            // console.log('path has pms')
            // console.log(path)
            // console.log(path.indexOf('pms'))

            next({
              path: newPath,
              replace: true
            })
          }
          // hack方法 确保addRoutes已完成 ,set the replace
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          console.log(4)
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    // has no token

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      // console.log(5)
      next()
      // next({ path: newPath })
    } else {
      // 不是白名单
      // console.log(6)
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
    }
  }
})

router.afterEach(() => {
})
