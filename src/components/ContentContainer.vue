<template>
<el-container v-loading="loading">
  <el-header>
    <h3>Aeolipile - Steem Powered</h3></el-header>
  <el-main v-show="loaded">
    <h1>{{content.title}}</h1>
    <vue-markdown v-bind:source="content.body" :postrender="this.highLightHTML"></vue-markdown>
  </el-main>
  <el-main v-if="emptyContent">
    <h1>Ain't Nobody Here but Us Chickens</h1>
    <p>This is the default page of Aeolipile. </p>
    <p>Maybe you have a wrong URL?</p>
    <p>See the
      <router-link to="/@heyeshuang/aeolipile-your-code-and-formula-on-steem">instruction of Aeolipile</router-link>, or</p>
    <p>Go to
      <router-link to="/linkgen">Aeolipile Link Generator</router-link>.</p>
  </el-main>
  <el-footer>
    <hr /><small><span v-show="loaded">
          You can see the origin post at
        <a :href='steemitUrl+content.category+"/@"+content.author+"/"+content.permlink'>steemit</a>,
        <a :href='steemcnUrl+content.category+"/@"+content.author+"/"+content.permlink'>cnsteem</a>, or
        <a :href='busyUrl+content.category+"/@"+content.author+"/"+content.permlink'>busy.org</a>. </span>
          <span>Also you may want to <a href="https://github.com/heyeshuang/aeolipile">fork Aeolipile on Github</a>.</span></small>
    <!-- <a :href='steemcnUrl+"@"+content.author+"/"+content.permlink'>steemit</a> -->
    <!-- <a :href='steemUrl+"@"+content.author+"/"+content.permlink'>steemit</a> -->
  </el-footer>
</el-container>
</template>

<script>
import VueMarkdown from "vue-markdown";
// import Prism from 'prismjs'
// import './assets/prism-base2tone-meadow-light.css'
// import './assets/prism-atom-dark.css'
import Hljs from "highlight.js";
import "~/assets/base2tone-sea-light.css";
const dSteem = () => import ( /* webpackChunkName: "dsteem" */ "dsteem");
// import 'highlight.js/styles/atelier-forest-light.css'

export default {
  components: {
    VueMarkdown
  },
  data: function() {
    return {
      content: {},
      steemitUrl: "https://steemit.com/",
      steemcnUrl: "https://cnsteem.com/",
      busyUrl: "https://busy.org/",
      loading: true,
      loaded: false,
      emptyContent: false
    };
  },
  created: function() {
    this.getContent();
  },
  //TODO:watch https://router.vuejs.org/zh-cn/advanced/data-fetching.html
  watch: {
    $route: "getContent"
  },
  // updated: function() {
  //   this.$nextTick(function() {
  //     // Prism.highlightAll()
  //     console.warn("updated")
  //     Hljs.initHighlighting();
  //     // let blocks = this.$el.querySelectorAll("pre code");
  //     // Array.prototype.forEach.call(blocks, Hljs.highlightBlock);
  //   });
  // },
  methods: {
    highLightHTML: function(html) {
      let parser = new DOMParser();
      let htmlDoc = parser.parseFromString(html, "text/html");
      let blocks = htmlDoc.querySelectorAll("pre code");
      Array.prototype.forEach.call(blocks, Hljs.highlightBlock);
      let outHtml = htmlDoc.documentElement.innerHTML;
      // console.warn(outHtml);
      return outHtml;
    },
    getContent: async function() {
      this.loading = true;
      this.loaded = false;
      this.emptyContent = false;
      let c;
      // console.warn(this.$route.params.author, this.$route.params.permlink);
      try {
        const dsteem = await dSteem()
        const client = await new dsteem.Client("https://steemd.steemit.com");
        c = await client.database.call("get_content", [
          this.$route.params.author,
          this.$route.params.permlink
          // "heyeshuang", "hugo-mmark-katex"
          // "heyeshuang",
          // "hugo"
          // "anderluiz","syntax-highlight-on-steemit"
        ]);
        // console.warn(c)
        this.content = c;
        this.loading = false;
        if (c.id == 0) {
          this.emptyContent = true;
          this.loaded = false;
        } else {
          this.emptyContent = false;
          this.loaded = true;
        }
      } catch (error) {
        this.loading = false;
        this.loaded = false;
        console.warn(error.toString());
        this.$alert(error.toString(), "Error", {
          confirmButtonText: "Reload",
          callback: action => {
            this.$message({
              type: "info",
              message: `action: ${action}` //TODO: refresh after vue-route introduced
            });
          }
        });
      }
    }
  }
};
</script>

<style>
.el-container {
  display: flex;
  min-height: 80vh;
  flex-direction: column;
}

.el-main {
  flex: 1;
  padding-top: 0;
}

.el-header {
  text-align: left;
}
</style>
