import Vue from 'vue'
import Router from 'vue-router'
import store from 'store/index'
Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: '/',
            redirect: '/login',
            meta: {
                auth: false, // 是否需要登录
                keepAlive: false, // 是否缓存组件
                index: 0 // 页面栈深度 用于页面过渡动画方向判定
            }
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import(/* webpackChunkName: "about" */ './views/About'),
            meta: {
                auth: false,
                keepAlive: false,
                index: 1
            },
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component: () =>
                    import('./views/About/Home'),
                    meta: {
                        auth: false,
                        keepAlive: false,
                        index: 2
                    }
                },
                {
                    path: 'salary',
                    name: 'salary',
                    component: () =>
                    import('./views/About/Salary'),
                    meta: {
                        auth: false,
                        keepAlive: false,
                        index: 2
                    }
                },
                {
                    path: 'achievement',
                    name: 'achievement',
                    component: () =>
                    import('./views/About/Achievement'),
                    meta: {
                        auth: false,
                        keepAlive: false,
                        index: 2
                    }
                }
            ],
            redirect: '/about/home'
        },
        {
            path: '/finance',
            name: 'finance',
            component: () =>
                import('./views/Finance'),
            meta: {
                auth: false,
                keepAlive: false,
                index: 1
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import(/* webpackChunkName: "login" */ './views/login.vue'),
            meta: {
                auth: false,
                keepAlive: true,
                index: 0
            }
        },
        {
            path: '*', // 未匹配到路由时重定向
            redirect: '/',
            meta: {
                // auth: true,
                // keepAlive: true
            }
        }
    ]
})

// 全局路由钩子函数 对全局有效
router.beforeEach((to, from, next) => {
    let auth = to.meta.auth
    let token = store.getters['login/token'];
    if (auth) { // 需要登录
        if (token) {
            next()
        } else {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    } else {
        next()
    }
})
export default router
