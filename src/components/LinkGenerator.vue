<template>
<el-container>
  <el-header>
    <h1>Aeolipile Link Generator</h1></el-header>
  <el-main>
    <div class="para-input">
      <span>Name </span>
      <el-input v-model="author" placeholder="Your steem username"></el-input>
    </div>
    <div class="para-input">
      <span>Title </span>
      <el-input v-model="title" placeholder="What you want to name your post"></el-input>
    </div>
    <div class="show-url">
      <code>{{getUrl}}</code>
    </div>
    <el-button type="primary" size="small" @click="testUrl" :loading="isLoading">Test usability</el-button>
    <el-button type="primary" size="small" v-clipboard:copy="getUrl" v-clipboard:success="onCopy" v-clipboard:error="onError">Copy URL to Clipboard</el-button>
    <el-alert show-icon :title="errorMessage" type="error" @close="showError=false" v-show="showError">
    </el-alert>
    <el-alert show-icon :title="okMessage" type="success" @close="showOk=false" v-show="showOk">
    </el-alert>
  </el-main>
  <el-footer>
    <hr />
    <small>
        <span><a href="https://github.com/heyeshuang/aeolipile">Fork Aeolipile on Github</a></span>
      </small>
  </el-footer>
</el-container>
</template>
<script>
import {
  Client
} from "dsteem";
import getSlug from "speakingurl"
export default {
  // components: {
  //   VueClipboard
  // },
  data: function() {
    return {
      baseUrl: "http://localhost:8010/#/",
      author: "",
      title: "",
      showError: false,
      errorMessage: "",
      showOk: false,
      okMessage: "",
      isLoading: false
    }
  },
  computed: {
    getUrl: function() {
      this.baseUrl = window.location.href.replace(window.location.hash, '') + "#/";
      let author = (this.author === "") ? "<AUTHOR>" : this.author
      let title = (this.title === "") ? "<TITLE>" : getSlug(this.title)
      return this.baseUrl + "@" + author + "/" + title
    }
  },
  methods: {
    onCopy: function() {
      this.showOk = true
      this.okMessage = "URL copied!"
    },
    onError: function() {
      console.warn("Copy failed")
    },
    testUrl: async function() {
      this.isLoading = true
      let c;
      let slug = getSlug(this.title)
      try {
        if (this.author === "") {
          throw new Error("Author is needed")
        } else if (slug === "") {
          throw new Error("Title is needed, and must contain some latin words.")
        }
        const client = await new Client("https://steemd.steemit.com");
        c = await client.database.call("get_content", [
          this.author, slug
        ]);
        if (c.id != 0) {
          throw new Error("This title is already exist.")
        } else {
          console.warn("Okay");
          this.showError = false
          this.showOk = true
          this.okMessage = "Congratulations, you can use this title."
        }
      } catch (error) {
        this.errorMessage = error.message
        this.showError = true
        this.showOk = false
        // console.warn(error.toString());
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>
<style>
.el-container {
  display: flex;
  min-height: 80vh;
  flex-direction: column;
}

.el-main {
  flex: 1;
}
.para-input {
  display: flex;
  margin: 10px;
  align-items: center;
}

.para-input span {
  flex-basis: 100px;
}

/*.show-url {
  display: flex;
  align-items: center;
  justify-content:flex-end;
}
.show-url code{
  flex-grow: 1
}
.show-url .el-button{
  flex:0
}*/
</style>
