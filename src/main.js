import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入安装Vant
import Vant from 'vant'
// 为了能定制vant样式 需要导入less
import 'vant/lib/index.less'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
