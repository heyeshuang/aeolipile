import Vue from 'vue'
import Router from 'vue-router'
import Content from '~/components/ContentContainer.vue'
import LinkGen from '~/components/LinkGenerator.vue'
import PostList from '~/components/PostList.vue'
Vue.use(Router)
const routeConf = function() {
  let routes = [
    {
      path: '/linkgen',
      component: LinkGen
    },
  ]
  routes = routes.concat([
    {
      path: '/@:author/:permlink',
      component: Content
    },
    {
      path: '/@:author',
      component: PostList
    },
    {
      path: '/*',
      redirect: '/@heyeshuang/null'
    },
  ]);
  return routes
}
export default new Router({
  routes: routeConf()
})
