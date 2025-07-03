import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/common.less'
import '@/utils/vant-ui'
import '@/utils/animations'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
