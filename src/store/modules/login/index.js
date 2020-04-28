import * as type from './mutations_types'
import { UsersApi } from 'api/users'
import { getCook, setCook, isJSON } from 'utils/auth'
// import { Toast } from 'vant';
export default {
    namespaced: true,
    state: {
        token: getCook.getToken('token') || '',
        user: isJSON(getCook.getToken('userDate')) ? JSON.parse(getCook.getToken('userDate')) : {}
    },
    mutations: {

        [type.LOGIN](state, data) {
            state.token = data.password
            state.user = data.username
            /* 通过cook存储 */
            // let userDate = data.data;
            // state.token = userDate.token;
            // state.user = userDate;
            // setCook.setToken('token', userDate.token)
            // setCook.setUserDate('userDate', JSON.stringify(userDate))
            /* 通过loca存储 */
            // localStorage.setItem('token', userDate.token)
            // localStorage.setItem('userDate', JSON.stringify(userDate))
        }

    },
    actions: {
        async login (state, res) {
            state.commit(type.LOGIN, res)
            // const { code, data } = await UsersApi.Performllogin(
            //     {
            //         username: res.username,
            //         password: res.password
            //     }
            // )
            // if (code === 200) {
            //     state.commit(type.LOGIN, data);
            // }
            setTimeout(() => {
                if (res.memory) {
                    setCook.setUserName('username', res.username)
                }
                const redirect = '/about';
                res.$router.push({
                    path: redirect
                })
            }, 1000);
        }
    },
    getters: {
        token(state) {
            return state.token
        },
        user(state) {
            console.log('state', state);
            return state.user
        }
    }
}
