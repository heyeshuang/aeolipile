<template>
  <div id="app" :style="getCSSString()">
    <el-row type="flex" justify="center">
      <el-col class="c">
    <el-card >
        <!-- <p>
    <router-link to="/@heyeshuang/hugo-mmark-katex">Go to Foo</router-link>
    <router-link to="/@heyeshuang/hugo">Go to Bar</router-link>
    <router-link to="/@anderluiz/syntax-highlight-on-steemit">Go to Bar</router-link>
  </p> -->
      <router-view ></router-view>
    </el-card></el-col></el-row>
  </div>
</template>

<script>
// import ContentContainer from "~/components/ContentContainer.vue";
import Typography from "typography";
import CodePlugin from 'typography-plugin-code'
// import customTheme from './typography-theme-custom.js'
import customTheme from "typography-theme-alton";
// import customTheme from "typography-theme-zacklive";

export default {
  components: {
    // ContentContainer
  },
  methods: {
    getCSSString: function() {
      customTheme.plugins = [new CodePlugin()];
      const typography = new Typography(customTheme);
      // console.warn(typography.toString())
      typography.injectStyles()
      return //typography.toString();
    }
  }
};
</script>

<style>
img {
  max-width: 100%;
  max-height: 100%;
}
.c {
  flex-basis: 960px;
}
.el-card {
  margin: 20px;
  min-height: 80vh;
}
</style>
