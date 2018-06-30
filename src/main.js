import Vue from 'vue'
import App from './App.vue'
import Antv from 'antv'
import 'antv/dist/antv.css'
Vue.use(Antv)

new Vue({
  el: '#app',
  render: h => h(App)
})
