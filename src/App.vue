<template>
  <div id="App">
    <Layout>
      <template #left>
        <div class="siteAside">
          <SiteAside></SiteAside>
        </div>
      </template>
      <template #default>
        <router-view></router-view>
      </template>
    </Layout>
    <div>
      
    </div>
  </div>
</template>
 
<script>
import Avatar from "./components/Avatar/index.vue";
import Icon from "./components/Icon/index.vue";
import Pager from "./components/Parger/index.vue";
import Empty from "./components/Empty/index.vue";
import ImageLoader from "./components/ImageLoader/index.vue";
import SiteAside from "./components/SiteAside/index.vue";
import Layout from "./components/Layout/index.vue";
import ToTop from "./components/ToTop/index.vue";
export default {
  name: "App",
  data() {
    return {
      current: 1,
      total: 302,
    };
  },
  components: {
    Avatar,
    Icon,
    Pager,
    Empty,
    ImageLoader,
    SiteAside,
    Layout,
    ToTop,
  },

  computed: {},
  methods: {
    headlePageNumber(newPage) {
      console.log("页码变了", newPage);
      this.current = newPage;
    },
    imgLoad() {
      console.log("图片加载完成");
    },
    
  },
};
</script>

<style scoped lang='less'>
@import "~@/style/var.less";
@import "~@/style/mine.less";
#App {
  .self-fill(fixed);
}
.siteAside {
  width: 250px;
  height: 100%;
}
</style>
