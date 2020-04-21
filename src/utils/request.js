import axios from 'axios'
import qs from 'qs'
import store from 'store/index'
import { Toast } from 'vant'
axios.defaults.timeout = 5000 // 请求超时时间
axios.defaults.baseURL = process.env.VUE_APP_BASE_API

axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded;charset=UTF-8' // post请求头的设置
// axios 请求拦截器
axios.interceptors.request.use(
    config => {
        // 可在此设置要发送的token
        let token = store.getters['login/token'];
        token && (config.headers.token = token)
        // Toast.loading({
        //     message: '加载中...',
        //     forbidClick: true
        // });
        return config
    },
    error => {
        return Promise.error(error)
    }
)
// axios respone拦截器
axios.interceptors.response.use(
    response => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
        // 否则的话抛出错误 结合自身业务和后台返回的接口状态约定写respone拦截器
        // Indicator.close()
        if (response.status === 200 && response.data.code === 0) {
            return Promise.resolve(response)
        } else {
            Toast({
                message: response.data.msg,
                position: 'middle',
                duration: 2000
            });
            return Promise.reject(response)
        }
    },
    error => {
        // Indicator.close()
        const responseCode = error.response.status
        switch (responseCode) {
            // 401：未登录
            case 401:
                break
            // 404请求不存在
            case 404:
                Toast({
                    message: '网络请求不存在',
                    position: 'middle',
                    duration: 2000
                });
                break
            default:
                Toast({
                    message: error.response.data.message,
                    position: 'middle',
                    duration: 2000
                });
        }

        return Promise.reject(error.response)
    }
)
/**
 * 封装get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
function get (url, params = {}) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params
            })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
    // 或者return axios.get();
}
*/
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
function post (url, params) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, qs.stringify(params))
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
    //  或者return axios.post();
}

export { get, post }
*/
function checkStatus (response) {
    // NProgress.done()
    // 如果 http 状态码正常, 则直接返回数据
    if (response.status === 200 || response.status === 304) {
        // 这里, 如果不需要除 data 外的其他数据, 可以直接 return response.data, 这样可以让后面的代码精简一些
        // return {
        //   code: response.data.status.errCode,
        //   data: response.data.data
        // }
        if (response.data.status.errCode === 200) {
            return {
                code: response.data.status.errCode,
                data: response.data.data
            }
        }
        return {
            code: response.data.status.errCode,
            data: response.data.status.message
        }
    }
    // 异常状态下, 把错误信息返回去
    return {
        code: response.status,
        data: response.statusText
    }
}
// 处理来自后端的错误
function checkCode (res) {
    // console.log('res:', res)
    if (res.code === 506) {
        // router.push('/login')
    } else if (res.code !== 200) {
        console.log('fail')
        Toast.fail(res.data)
    }
    return res
}
export default {
    clientPost (url, data) {
        return axios({
            method: 'post',
            url,
            data: qs.stringify(data),
            timeout: 30000,
            withCredentials: false,
            headers: {
                'X-Requested-With': 'XMLHttpRequest', // null同步 x ajax异步
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(checkStatus).then(checkCode)
    },
    clientPostJson (url, data) {
        return axios({
            method: 'post',
            url,
            data: data,
            timeout: 30000,
            withCredentials: false,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(checkStatus).then(checkCode)
    },
    clientGet (url, params) {
        return axios({
            method: 'get',
            url,
            params,
            timeout: 30000,
            withCredentials: false,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            paramsSerializer: function(params) {
                return qs.stringify(params, { arrayFormat: 'repeat' })
            }
        }).then(checkStatus).then(checkCode)
    },
    all (array) {
        return axios.all(array)
    },
    spread (func) {
        return axios.spread(func)
    },
    /* 用法
    api.all([
      userApi.serverPostInfo(req),
      proveApi.powerList()
    ]).then(api.spread(function (res1, res2) {
      if (res1.code === 506) {
        res1 res2分别对应上面的两个api请求
      }
    */
    // 判断手机类型
    judgeDevice (req, link) {
        const agent = req.req.headers['user-agent'].toLocaleLowerCase()
        if (!agent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
            req.redirect(302, link)
            return false
        }
    }
}
