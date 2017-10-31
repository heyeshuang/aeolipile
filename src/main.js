import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import './assets/typebase.css'
import VueMarkdown from 'vue-markdown'

Vue.use(ElementUI)
Vue.use(VueMarkdown)

new Vue({
  el: '#app',
  render: h => h(App)
})
