import Vue from 'vue'
import App from './App.vue'

import filters from "@/filter/filter"
import {utils} from '../src/utils'
import router from './router'

import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

Vue.config.productionTip = false
for (var key in filters) {
    Vue.filter(key, filters[key])
}
// 挂载到Vue实例上
Object.defineProperty(Vue.prototype, '$utils', {
    value: utils
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
