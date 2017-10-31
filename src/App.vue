<template>
  <div id="app">
    <el-row type="flex" justify="center">
      <el-col class="center">
    <el-card>
    <el-container>
      <el-header><h2>Some Pandas: 另一只熊猫</h2></el-header>
      <el-main>
        <vue-markdown></vue-markdown>
      </el-main>
      <el-footer>Bamboo</el-footer>
    </el-container>
    </el-card></el-col></el-row>
  </div>
</template>

<script>
// import Typography from 'typography'
// import customTheme from './typography-theme-custom.js'
export default {
  methods: {
    // startHacking () {
    //   this.$notify({
    //     title: 'It works!',
    //     type: 'success',
    //     message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
    //     duration: 5000
    //   })
    // },
    // introTypo () {
      // const typography = new Typography(customTheme)
      // return typography.toString()
    // }
  }
}
</script>

<style>
#app {
  /* font-family: Helvetica, sans-serif;
  text-align: center; */
}
.center {
  flex-basis: 960px;
}
.el-card {
  margin: 20px;
}
.el-header {
  text-align: left
}
</style>
