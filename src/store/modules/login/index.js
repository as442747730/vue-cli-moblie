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
            let userDate = data.data;
            state.token = userDate.token;
            state.user = userDate;
            setCook.getToken('token', userDate.token)
            setCook.getUserDate('userDate', JSON.stringify(userDate))
            // localStorage.setItem('token', userDate.token)
            // localStorage.setItem('userDate', JSON.stringify(userDate))
            setTimeout(() => {
                if (data.memory) {
                    setCook.setUserName('username', data.username)
                }
                const redirect = '/about';
                data.$router.push({
                    path: redirect
                })
            }, 1000);
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
