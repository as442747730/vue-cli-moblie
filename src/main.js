import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import filters from './utils/filterstime'
import Vant from 'vant';
import 'vant/lib/index.css';
import '@babel/polyfill';
import Es6Promise from 'es6-promise'
import DefaultLayout from './layout/default.vue'
Es6Promise.polyfill()
Vue.component('default-layout', DefaultLayout)

Vue.use(Vant);
// 注入全局过滤器
Object.keys(filters).forEach(item => {
    Vue.filter(item, filters[item])
})
Vue.config.productionTip = false
Vue.config.devtools = true
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
