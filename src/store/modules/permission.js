import { asyncRoutes, constantRoutes } from 'router'
// import { getRoutes } from 'api/user'
import { UsersApi } from 'api/users'
const _import = require('router/_import_' + process.env.NODE_ENV)
/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission (roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes (routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}
// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter (asyncRouterMap) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (route.component) {
      // if (route.component === 'Layout') {
      //   route.component = Layout
      // } else {
      route.component = _import(route.component) // 导入组件
      // route.component = () => import(route.component)
      // route.component = require(route.component).default
      // }
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })
  return accessedRouters
}
const state = {
  routes: [],
  addRoutes: [],
  accessedRouters: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
    state.accessedRouters.push({ path: '*', redirect: '/404', hidden: true })
  },
  RESET_ROUTES: (state) => {
    state.routes = []
  },
  FILTER_ROUTES: (state, routes) => {
    state.accessedRouters = filterAsyncRouter(routes)
  }
}

const actions = {
  filterRoutes ({ commit }, routes) {
    return commit('FILTER_ROUTES', routes)
  },
  setRoutes ({ commit, state }, routes) {
    commit('SET_ROUTES', routes)
    // setRoutes(state.routes)
  },
  resetRoutes ({ commit, state }) {
    commit('RESET_ROUTES')
    // setRoutes(state.routes)
  },
  // get routes
  getRoutes ({ commit, state, dispatch }, data) {
    // let { empCode, roleCode } = data
    return new Promise((resolve, reject) => {
      // getRoutes(empCode, roleCode)
      UsersApi.getRoutes(data)
        .then(async (res) => {
          console.log('2菜单getRoutes')
          console.log(res)
          await dispatch('user/setMenus', res.data.data.children, { root: true })
          console.log('state.user.menus')
          console.log(state.user.menus)
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  generateRoutes ({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes
      if (roles.includes('admin')) { // admin可以查看全部路由
        accessedRoutes = asyncRoutes || []
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
