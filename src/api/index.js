import request from '@/utils/request.js'

export const UsersApi = {
    getIndex (params) {
        return request.clientGet('/mock/5cb48c7ed491cd741c54456f/base/index', params)
    },
    Performllogin (params) {
        return request.clientPost('/mock/5cb48c7ed491cd741c54456f/base/login', params)
    }
}
