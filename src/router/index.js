import Vue from 'vue'
import Router from 'vue-router'
import Content from '~/components/ContentContainer.vue'
import LinkGen from '~/components/LinkGenerator.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/@:author/:permlink',
      component: Content
    },
    {
      path: '/linkgen',
      component: LinkGen
    },
    {
      path: '/*',
      redirect: '/@heyeshuang/null'
    },
  ]
})
