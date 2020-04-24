import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import filters from './utils/filterstime'
import Vant from 'vant';
import VeLing from 'v-charts/lib/line.common';
import VePie from 'v-charts/lib/pie.common';
import VeGauge from 'v-charts/lib/gauge.common';
import Es6Promise from 'es6-promise';
import eruda from 'eruda'; // 测试工具
import 'vant/lib/index.css';
import '@babel/polyfill';
eruda.init() // eruda初始化
Es6Promise.polyfill()

Vue.use(Vant);
// 注入全局过滤器
Object.keys(filters).forEach(item => {
    Vue.filter(item, filters[item])
})
Vue.component(VeLing.name, VeLing)
Vue.component(VePie.name, VePie)
Vue.component(VeGauge.name, VeGauge)
// 阻止启动生产消息
Vue.config.productionTip = false
// devtools调试
Vue.config.devtools = true
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
