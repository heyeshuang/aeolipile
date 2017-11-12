import Vue from 'vue'
import Router from 'vue-router'
import Content from '~/components/ContentContainer.vue'
import LinkGen from '~/components/LinkGenerator.vue'
import PostList from '~/components/PostList.vue'
import siteConfig from '~/config.js'

Vue.use(siteConfig)
Vue.use(Router)

const routeConf = function() {
  let routes = [
    {
      path: '/linkgen',
      component: LinkGen
    },
    {
      path: '/@:author/:permlink',
      component: Content,
      props: (route) => ({
        author:route.params.author,
        permlink:route.params.permlink
       })
    },
  ]
  if (Vue.siteConfig.blogMode) {
    let blogAuthor = Vue.siteConfig.author
    routes = routes.concat([
    {
      path: '/:permlink',
      component: Content,
      props: (route) => ({
        author: blogAuthor,
        permlink :route.params.permlink
       })
    },
    {
      path: '/',
      component: PostList,
      props: () => ({ author: blogAuthor})
    },
    // {
    //   path: '/*',
    //   redirect: '/null'
    // },
    ])
  } else{
  routes = routes.concat([
    {
      path: '/@:author',
      component: PostList,
      props: (route) => ({ author:route.params.author })
    },
    {
      path: '/*',
      redirect: '/@nobody/null'
    },
  ])}
  return routes
}
export default new Router({
  routes: routeConf()
})
