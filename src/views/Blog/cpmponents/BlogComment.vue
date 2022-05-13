<template>
  <div class="blog-comment-container">
    <MessageArea
      @indexsubmit="blogeSubmit"
      title="评论列表"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isLiLoading="false"
    ></MessageArea>
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea/index.vue";
import fetchData from "@/mixins/fetchData.js";
import { getComment, postComment } from "@/api/blog.js";
export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limitL: 10,
    };
  },
  created(){
    this.$bus.$on('mainScroll',this.handleScroll)
    window.fetchMore = this.fetchMore
  },
  methods: {
    async fetchData() {
      return await getComment(this.$route.params.id, this.page, this.limitL);
    },
    async fetchMore(){
      if(this.hasMore){
        return
      }
      console.log(111);
      this.page++
      this.isLoading = true
      const resp = await this.fetchData()
      this.data.total = resp.total
      this.data.rows = this.data.rows.concat(resp.rows)
      this.isLoading = false
    },
    async blogeSubmit(fromData, callback) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...fromData,
      });
      this.data.rows.unshift(resp);
      this.data.total++;
      console.log(fromData);
      callback("发布成功");
    },
    async handleScroll(dom){
      if(this.isLoading){
        return
      }
      const range = 100
      let dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight) 
      if(dec <= range){
        this.fetchMore()
        console.log('到达了底部');
      }
    }
  },
  computed:{
    hasMore(){
      return this.data.rows < this.data.total.length
    }
  }
};
</script>

<style scoped lang='less'>
.blog-comment-container {
  margin: 30px 0;
}
</style>