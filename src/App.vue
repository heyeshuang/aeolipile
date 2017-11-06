<template>
<div id="app" :style="getCSSString()">
  <el-row type="flex" justify="center">
    <el-col class="c">
      <el-card>
        <!-- <p>
    <router-link to="/@heyeshuang/hugo-mmark-katex">Go to Foo</router-link>
    <router-link to="/@heyeshuang/hugo">Go to Bar</router-link>
    <router-link to="/@anderluiz/syntax-highlight-on-steemit">Go to Bar</router-link>
  </p> -->
        <router-view></router-view>
      </el-card>
    </el-col>
  </el-row>
</div>
</template>

<script>
// import ContentContainer from "~/components/ContentContainer.vue";
import Typography from "typography";
import customTheme from '~/typography-theme-custom.js'
// import customTheme from "typography-theme-alton";
// import customTheme from "typography-theme-trajan";
// import customTheme from "typography-theme-moraga";
// import customTheme from "typography-theme-us-web-design-standards";
// import customTheme from "typography-theme-zacklive";

export default {
  components: {
    // ContentContainer
  },
  methods: {
    getCSSString: function() {
      // customTheme.headerFontFamily = [ 'Martel','Georgia', "Times New Roman","KaiTi", "楷体", 'STKaiti', "华文楷体",'serif']
      // customTheme.headerWeight = '700'
      // customTheme.scaleRatio = 5
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
