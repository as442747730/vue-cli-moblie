import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: () => import('@/views/About/index'),
    meta: {
      title: '首页'
    },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/About/Home/index'),
        meta: {
        }
      },
      {
        path: 'salary',
        name: 'salary',
        component: () => import('@/views/About/Salary/index'),
        meta: {
        }
      },
      {
        path: 'achievement',
        name: 'achievement',
        component: () => import('@/views/About/Achievement/index'),
        meta: {
        }
      }
    ]
  }
  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
]
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  /**/

  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
]
const createRouter = () =>
  new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

// import Vue from 'vue'
// import Router from 'vue-router'
// import store from 'store/index'
// Vue.use(Router)

// const router = new Router({
//     mode: 'hash',
//     routes: [
//         {
//             path: '/',
//             name: '/',
//             redirect: '/login',
//             meta: {
//                 auth: false, // 是否需要登录
//                 keepAlive: false, // 是否缓存组件
//                 index: 0 // 页面栈深度 用于页面过渡动画方向判定
//             }
//         },
//         {
//             path: '/about',
//             name: 'about',
//             component: () =>
//                 import(/* webpackChunkName: "about" */ './views/About'),
//             meta: {
//                 auth: true,
//                 keepAlive: false,
//                 index: 1
//             },
//             children: [
//                 {
//                     path: 'home',
//                     name: 'home',
//                     component: () =>
//                     import('./views/About/Home'),
//                     meta: {
//                         auth: true,
//                         keepAlive: false,
//                         index: 2
//                     }
//                 },
//                 {
//                     path: 'salary',
//                     name: 'salary',
//                     component: () =>
//                     import('./views/About/Salary'),
//                     meta: {
//                         auth: true,
//                         keepAlive: false,
//                         index: 2
//                     }
//                 },
//                 {
//                     path: 'achievement',
//                     name: 'achievement',
//                     component: () =>
//                     import('./views/About/Achievement'),
//                     meta: {
//                         auth: true,
//                         keepAlive: false,
//                         index: 2
//                     }
//                 }
//             ],
//             redirect: '/about/home'
//         },
//         {
//             path: '/finance',
//             name: 'finance',
//             component: () =>
//                 import('./views/Finance'),
//             meta: {
//                 auth: true,
//                 keepAlive: false,
//                 index: 1
//             }
//         },
//         {
//             path: '/login',
//             name: 'login',
//             component: () =>
//                 import(/* webpackChunkName: "login" */ './views/login.vue'),
//             meta: {
//                 auth: false,
//                 keepAlive: true,
//                 index: 0
//             }
//         },
//         {
//             path: '*', // 未匹配到路由时重定向
//             redirect: '/',
//             meta: {
//                 // auth: true,
//                 // keepAlive: true
//             }
//         }
//     ]
// })

// // 全局路由钩子函数 对全局有效
// router.beforeEach((to, from, next) => {
//     let auth = to.meta.auth
//     let token = store.getters['login/token'];
//     if (auth) { // 需要登录
//         if (token) {
//             next()
//         } else {
//             next({
//                 path: '/login',
//                 query: {
//                     redirect: to.fullPath
//                 }
//             })
//         }
//     } else {
//         next()
//     }
// })
// export default router
