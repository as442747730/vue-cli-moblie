import Cookies from 'js-cookie'
export const getCook = {
  getToken (key) {
    return Cookies.get(key)
  },
  getUserDate (key) {
    return Cookies.get(key)
  },
  getUserName (key) {
    return Cookies.get(key)
  }
}
export const setCook = {
  setToken (key, value) {
    return Cookies.set(key, value)
  },
  setUserDate (key, value) {
    return Cookies.set(key, value)
  },
  setUserName (key, value) {
    return Cookies.set(key, value)
  }
}
export const removeCook = {
  removeToken (key) {
    return Cookies.remove(key)
  },
  removeUserDate (key) {
    return Cookies.remove(key)
  },
  removeUserName (key) {
    return Cookies.remove(key)
  }
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
