import UsersApi from '@/api/users'
import { getToken, setToken, getOrgCode,
  removeToken, setName, setEmpCode,
  getRoleCode, getEmpCode, getEmpName,
  getRoleName, setEmpName, setOrgCode,
  getName, getCorpDb, getSysdate } from '@/utils/auth'
import router, { resetRouter } from 'router'
import { Notify } from 'vant'
import store from 'store'
const state = {
  token: getToken(),
  name: getName(),
  avatar: '',
  introduction: '',
  roles: [],
  corp: [],
  roleList: [],
  empCode: getEmpCode(),
  roleCode: getRoleCode(),
  menus: [],
  empName: getEmpName(),
  roleName: getRoleName(),
  roleDialog: false,
  corpDb: getCorpDb(),
  sysdate: getSysdate(),
  orgCode: getOrgCode() // 目前用localstorage存储
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_CORP: (state, corp) => {
    state.corp.push(corp)
  },
  RESET_CORP: (state) => {
    state.corp = []
  },
  SET_EMPCODE: (state, empCode) => {
    state.empCode = empCode
  },
  RESET_EMPCODE: (state) => {
    state.empCode = ''
  },
  SET_MENUS: (state, menus) => {
    state.menus = menus
  },
  SET_EMPNAME: (state, empName) => {
    state.empName = empName
  },
  SET_ROLENAME: (state, roleName) => {
    state.roleName = roleName
  },
  SET_ROLECODE: (state, roleCode) => {
    state.roleCode = roleCode
  },
  SET_ROLELIST: (state, roleList) => {
    state.roleList = roleList
  },
  SET_CORPDB: (state, corpDb) => {
    state.corpDb = corpDb
  },
  SET_DIALOG: (state, roleDialog) => {
    state.roleDialog = roleDialog
  },
  SET_SYSDATE: (state, sysdate) => {
    state.sysdate = sysdate
  },
  SET_ORGCODE: (state, orgCode) => {
    state.orgCode = orgCode
  }

}

const actions = {
  setMenus ({ commit, state }, menus) {
    commit('SET_MENUS', menus)
    console.log('state.user.menus')
    console.log(state.menus)
  },
  // user login
  login ({ commit, state }, userInfo) {
    const { username, password } = userInfo
    const formData = new FormData()
    for (let key in userInfo) {
      formData.append(key, userInfo)
    }
    console.log(1)
    return new Promise((resolve, reject) => {
      // { username: username.trim(), password: password } ，前端怎么以表单形式提交数据
      console.log(UsersApi, 3)
      UsersApi.login({ username: username.trim(), password: password })
        .then(response => {
          console.log('store userjs login ')
          console.log(response)
          if (response.data.code === 0) {
            console.log('response.data', response.data)
            // 获取法人信息
            commit('RESET_CORP')
            commit('RESET_EMPCODE')
            for (let corp of response.data.data) {
              commit('SET_CORP', corp.corp)
              commit('SET_EMPCODE', corp.empCode)
              setEmpCode(corp.empCode)
              commit('SET_EMPNAME', corp.empName)
              setEmpName(corp.empName)
              commit('SET_ORGCODE', corp.orgCode)
              setOrgCode(corp.orgCode)
            }
            // Message({
            //   message: response.data.msg,
            //   type: 'success',
            //   duration: 5 * 1000
            // })
            Notify({
              message: response.data.msg,
              type: 'success',
              duration: 5 * 1000
            })
          } else {
            // Message({
            //   message: response.data.msg,
            //   type: 'error',
            //   duration: 5 * 1000
            // })
            Notify({
              message: response.data.msg,
              type: 'warning',
              duration: 5 * 1000
            })
            reject(Notify)
          }

          // 实际token
          // commit('SET_TOKEN', response.headers.authorization)
          // setToken(response.headers.authorization)
          // console.log('setToken')
          // 测试token
          // commit('SET_TOKEN', username.trim())
          // setToken(username.trim())

          // 原始token方式
          // console.log(data.token)
          // commit('SET_TOKEN', data.token)
          // setToken(data.token)
          setName(username.trim())
          commit('SET_NAME', username.trim())
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  setToken ({ commit, state }, authorization) {
    commit('SET_TOKEN', authorization)
    setToken(authorization)
  },
  // get user info
  getInfo ({ commit, state }) {
    return new Promise((resolve, reject) => {
      UsersApi.getInfo(state.token)
        .then(response => {
          console.log(state.name)
          const { data } = response.data
          if (!data) {
            reject('登录验证失败，请重新登录！')
          }
          const { roles, name, avatar, introduction } = data
          // roles must be a non-empty array
          if (!roles || roles.length <= 0) {
            reject('getInfo: roles must be a non-null array!')
          }
          commit('SET_ROLES', roles)
          commit('SET_NAME', name)
          commit('SET_AVATAR', avatar)
          commit('SET_INTRODUCTION', introduction)
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // user logout
  logout ({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      UsersApi.logout(state.token)
        .then(() => {
          store.dispatch('permission/resetRoutes')
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resetRouter()
          // reset visited views and cached views
          // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
          dispatch('tagsView/delAllViews', null, { root: true })
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // remove token
  resetToken ({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  changeRoles ({ commit, dispatch }, role) {
    return new Promise(async resolve => {
      const token = role + '-token'

      commit('SET_TOKEN', token)
      setToken(token)
      const { roles } = await dispatch('getInfo')

      resetRouter()

      // generate accessible routes map based on roles
      const accessRoutes = await dispatch('permission/generateRoutes', roles, {
        root: true
      })

      // dynamically add accessible routes
      router.addRoutes(accessRoutes)

      // reset visited views and cached views
      dispatch('tagsView/delAllViews', null, { root: true })

      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
