<template>
<el-container>
  <el-header>
    <h3>{{showBanner()}}</h3>
  </el-header>
  <el-main>
    <h1>Archive for <i>{{author}}</i></h1>
    <div class="listItem" v-for="d in contentList">
      <div class="itemTitle">
        <router-link :to="genLink(d.author,d.permlink)">
          {{d.root_title}}
        </router-link>
      </div>
      <h4><div class="meta">
        <div class="updateTime">&nbsp;{{parseDateStr(d.last_update)}}</div>
        <div class="tags"><span class="tag" v-for="t in parseJsonTags(d.json_metadata)">&nbsp;#{{t}}&nbsp;</span></div>
      </div></h4>
    </div>
    <div class="loadingContainer listItem" v-if="!endOfList">
      <div v-if="loading" class="more"><i class="el-icon-loading"></i><b>LOADING</b></div>
      <div class="more" @click="updateList" v-else><a href="javascript:void(0)">MORE...</a></div>
    </div>
  </el-main>
  <el-main v-if="emptyContent">
    <DefaultContent></DefaultContent>
  </el-main>
  <el-footer>
    <hr /><small><span v-show="loaded">
          You can see this blog at
        <a :href='steemitUrl+"@"+author'>steemit</a>,
        <a :href='cnsteemUrl+"@"+author'>cnsteem</a>, or
        <a :href='busyUrl+"@"+author'>busy.org</a>. </span>
          <span>Also you may want to <a href="https://github.com/heyeshuang/aeolipile">fork Aeolipile on Github</a>.</span></small>
  </el-footer>
</el-container>
</template>
<script>
import DefaultContent from "~/components/DefaultContent.vue"
const dSteem = () =>
  import ( /* webpackChunkName: "dsteem" */ "dsteem");
export default {
  data: function() {
    return {
      steemitUrl: "https://steemit.com/",
      cnsteemUrl: "https://cnsteem.com/",
      busyUrl: "https://busy.org/",
      contentList: [],
      loading: true,
      loaded: false,
      emptyContent: false,
      author: this.$route.params.author,
      start_permlink: "",
      endOfList: false,
      listLimit: 10
    };
  },
  components: {
    DefaultContent
  },
  created: function() {
    this.getList();
  },
  watch: {
    $route: "getList"
  },
  methods: {
    showBanner: function() {
      return Vue.siteConfig.banner
    },
    genLink: function(author, permlink) {
      return `/@${author}/${permlink}`
    },
    parseDateStr: function(dateStr) {
      let d = new Date(dateStr)
      return d.toLocaleDateString() + " " + d.toLocaleTimeString()
    },
    parseJsonTags: function(jsonStr) {
      let tags = JSON.parse(jsonStr).tags
      return tags
    },
    getList: async function() {
      this.loading = true;
      this.loaded = false;
      this.emptyContent = false;
      let start_author = ""
      if (this.start_permlink != "") {
        start_author = this.author
      }
      let c;
      try {
        const dsteem = await dSteem()
        const client = await new dsteem.Client(Vue.siteConfig.apiUrl);
        c = await client.database.getDiscussions("blog", {
          tag: this.author,
          limit: this.listLimit,
          truncate_body: 50,
          start_author: start_author,
          start_permlink: this.start_permlink
        })
        console.warn(c)
        this.contentList = c;
        this.loading = false;
        if (c.length == 0) {
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
    },
    updateList: async function() {
      let cListBuffer = this.contentList.slice()
      this.start_permlink = this.contentList[this.contentList.length - 1].permlink
      await this.getList()
      if (this.contentList.length < this.listLimit) {
        this.endOfList = true
      } else {
        this.endOfList = false
      }
      this.contentList.shift()
      this.contentList = cListBuffer.concat(this.contentList)
    },
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
  padding-top: 0;
}

.el-header {
  text-align: left;
}

.listItem {
  margin: 10px
}

.itemTitle {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.itemTitle a {
  font-size: 120%;
  font-weight: 400;
}

.loadingContainer .more{
  font-size: 120%;
  font-weight: 700;
}
.loadingContainer .more a {
  font-weight: 700;
}
.meta {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.tags,
.updateTime {
  overflow: hidden;
  white-space: nowrap;
}
h1 i {
  text-transform:uppercase
}
</style>
