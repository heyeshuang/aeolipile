import Vue from 'vue'
import Router from 'vue-router'
import Content from '~/ContentContainer.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/@:author/:permlink',
      component: Content
    },
    {
      path: '/',
      redirect: '/@heyeshuang/null'
    }
  ]
})