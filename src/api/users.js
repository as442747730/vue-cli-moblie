import request from '@/utils/request'
export const UsersApi = {
  getIndex (params) {
    return request.clientGet('/mock/5cb48c7ed491cd741c54456f/base/index', params)
  },
  //   login (data) {
  //     return request.clientPost('/mock/5cb48c7ed491cd741c54456f/base/login', formdata)
  //   },
  login (data) {
    return request.clientPost('/system/login.json', data)
  },
  getInfo (token) {
    return request.clientGet('/system/loadUserInfo.json', token)
  },
  logout () {
    return request.clientGet('/system/logout.json')
  },
  // 加载用户的角色信息
  getRoleList (params) {
    return request.clientGet('/system/loadUserInfo.json', params)
  },
  // 加载用户的菜单
  getRoutes (params) {
    return request.clientGet('/system/loadUserInfo.json', params)
  },
  // 获取角色列表,网页右上角
  getRoles () {
    return request.clientGet('/system/getRoles.json')
  },
  // 应用日志记录
  insertAppLog (data) {
    return request.clientPost('/system/insertAppLog.json', data)
  }
}

// 加载用户的角色信息
// export function getRoleList (empCode, corpDb) {
//   return request({
//     url: '/system/loadUserInfo.json',
//     method: 'get',
//     params: { empCode, corpDb }
//   })
// }

// 加载用户的菜单
// export function getRoutes (empCode, roleCode) {
//   return request({
//     url: '/system/userMenu.json',
//     method: 'get',
//     params: { empCode, roleCode }
//   })
// }
// 获取角色列表,网页右上角
// export function getRoles () {
//   return request({
//     url: '/system/getRoles.json',
//     method: 'get'

//   })
// }
// 应用日志记录
// export function insertAppLog (itemCode, evtType, evtDesc, memo) {
//   return request({
//     url: '/system/insertAppLog.json',
//     method: 'post',
//     data: { itemCode, evtType, evtDesc, memo }

//   })
// }
