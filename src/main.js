import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import '~/assets/element-theme/index.css'
// import 'element-ui/lib/theme-chalk/index.css' //TODO: #1B5199
import App from '~/App.vue'
import siteConfig from '~/config.js'
import router from '~/router'
import VueClipboard from 'vue-clipboard2'
import WebFont from 'webfontloader'

// import './assets/typebase.css'
// import "./assets/typography.css"
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueClipboard)
Vue.use(siteConfig)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

WebFont.load({
  google: {
    families: Vue.siteConfig.googleFonts
  },
  fontinactive: function() {
    WebFont.load({
      custom: {
        families: Vue.siteConfig.googleFonts,
        urls: Vue.siteConfig.fallbackFontUrls
      }
    })
  },
});
