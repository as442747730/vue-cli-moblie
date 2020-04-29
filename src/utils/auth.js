import Cookies from 'js-cookie'

const TokenKey = 'Authorization'
const Name = 'gzadmin' // 暂时没用到
const RoleCode = 'roleCode'
const EmpCode = 'empCode'
const EmpName = 'empName'
const RoleName = 'roleName'
const CorpDb = 'corpDb'
const Sysdate = 'sysdate'
const OrgCode = 'orgCode'
// get
export function getToken () {
  return Cookies.get(TokenKey)
}
export function getName () {
  return Cookies.get(Name)
}
export function getEmpName () {
  return Cookies.get(EmpName)
}
export function getRoleName () {
  return Cookies.get(RoleName)
}
export function getCorpDb () {
  return Cookies.get(CorpDb)
}
export function getRoleCode () {
  return Cookies.get(RoleCode)
}
export function getEmpCode () {
  return Cookies.get(EmpCode)
}
export function getSysdate () {
  return Cookies.get(Sysdate)
}
export function getOrgCode () {
  return Cookies.get(OrgCode)
}
// set
export function setToken (token) {
  return Cookies.set(TokenKey, token)
}
export function setName (name) {
  return Cookies.set(Name, name)
}
export function setEmpName (empName) {
  return Cookies.set(EmpName, empName)
}
export function setRoleName (roleName) {
  return Cookies.set(RoleName, roleName)
}
export function setCorpDb (corpDb) {
  return Cookies.set(CorpDb, corpDb)
}
export function setRoleCode (roleCode) {
  return Cookies.set(RoleCode, roleCode)
}
export function setEmpCode (empCode) {
  return Cookies.set(EmpCode, empCode)
}
export function setSysdate (sysdate) {
  return Cookies.set(Sysdate, sysdate)
}
export function setOrgCode (orgCode) {
  return Cookies.set(OrgCode, orgCode)
}
// remove
export function removeToken () {
  return Cookies.remove(TokenKey)
}
// export function removeRoutes() {
//   return Cookies.remove(Routes)
// }
export function removeRoleCode () {
  return Cookies.remove(RoleCode)
}
export function removeEmpCode () {
  return Cookies.remove(EmpCode)
}

export const isJSON = function (str) {
  if (typeof str === 'string') {
    try {
      let obj = JSON.parse(str)
      if (typeof obj === 'object' && obj) {
        return true
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  }
}
