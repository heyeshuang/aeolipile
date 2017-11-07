import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import '~/assets/element-theme/index.css'
// import 'element-ui/lib/theme-chalk/index.css' //TODO: #1B5199
import App from '~/App.vue'
import router from '~/router'
import VueClipboard from 'vue-clipboard2'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Neuton:200','Open Sans']
  },
  fontinactive: function(family, fvd) {
    if (family === 'Neuton' && 'Open Sans') {
      WebFont.load({
        custom: {
          families: ['Neuton:200','Open Sans'],
          urls: ['https://fonts.cat.net/css?family=Neuton:200|Open+Sans']
        }
      })
    }
  },
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
