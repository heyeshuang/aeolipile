import Vue from 'vue'
import VueRouter from 'vue-router'

import '~/assets/element-theme/index.css'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import App from '~/App.vue'
import router from '~/router'
import VueClipboard from 'vue-clipboard2'
import WebFont from 'webfontloader'

WebFont.load({
    google: {
      families: ['Neuton:200','Open Sans']
    }
  });
// import './assets/typebase.css'
// import "./assets/typography.css"
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueClipboard)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
