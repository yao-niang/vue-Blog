<template>
  <Layout>
    <div class="main-container" ref="divContainer" v-loading="isLoading">
      
      <BlogDetail :blog="data" v-if="data"></BlogDetail>
      <BlogComment v-if="!isLoading"></BlogComment>
    </div>

    <template #right>
      <div class="blog-toc" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data"></BlogTOC>
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog.js";
import Layout from "@/components/Layout/index.vue";
import BlogDetail from "./cpmponents/BlogDetail.vue";
import BlogTOC from "./cpmponents/BlogTOC.vue";
import BlogComment from "./cpmponents/BlogComment.vue";
export default {
  mixins: [fetchData({})],
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  data(){
    return{
    scrollTop:0  
    }
  },
  created(){

  },
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id);
    },
    handleScroll(){
      this.$bus.$emit('mainScroll',this.$refs.divContainer)
    },
    handleSetMainScroll(scrollTop){
      this.$refs.divContainer.scrollTop = scrollTop
    }
  },
  mounted() {
    this.$bus.$on("setMainScroll", this.handleSetMainScroll);
    this.$refs.divContainer.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$bus.$emit("mainScroll");
    this.$refs.divContainer.removeEventListener("scroll", this.handleScroll);
    this.$bus.$off("setMainScroll", this.handleSetMainScroll);
  },
};
</script>

<style scoped lang='less'>
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(97, 184, 179, 0.1);
  background: #78b4b4;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(87, 175, 187, 0.1);
  border-radius: 10px;
  background: #ededed;
}
.main-container {
  overflow-y: scroll;
  height: 100%;
  scroll-behavior: smooth;
}
.blog-toc {
  width: 300px;
  height: 100%;
}
</style>