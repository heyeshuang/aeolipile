<template>
  <div id="app">
    <el-row type="flex" justify="center">
      <el-col class="c">
    <el-card>
    <el-container>
      <el-header><h3>Some Pandas: 另一只熊猫</h3></el-header>
      <el-main>
        <h1>{{content.title}}</h1>
        <vue-markdown v-bind:source="content.body"></vue-markdown>
      </el-main>
      <el-footer><a :href='steemUrl+"@"+content.author+"/"+content.permlink'>steemit</a>
      </el-footer>
    </el-container>
    </el-card></el-col></el-row>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import { Client } from "dsteem";
import Prism from 'prismjs'
// // import './assets/prism-base2tone-meadow-light.css'
import './assets/prism-atom-dark.css'

const client = new Client("https://steemd.steemit.com");
export default {
  components: {
    VueMarkdown
  },
  data: function() {
    return {
      content: {},
      steemUrl : "https://steemit.com/"
    };
  },
  created: async function() {
    let c = await client.database.call("get_content", [
      "heyeshuang", "hugo-mmark-katex" 
      //test: hugo-mmark-katex, hugo
      // "anderluiz","syntax-highlight-on-steemit"
    ]);
    console.warn(c);
    this.content = c;
  },
  updated: function(){
    this.$nextTick(function (){
    Prism.highlightAll()
    })
  }

};
</script>

<style>
img {
  max-width: 100%;
  max-height: 100%
}
.c {
  flex-basis: 960px;
}
.el-card {
  margin: 20px;
}
.el-main {
  padding-top: 0;
}
.el-header {
  text-align: left;
}
</style>
