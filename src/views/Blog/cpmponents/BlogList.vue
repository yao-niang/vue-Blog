<template>
  <div class="blog-list-container" ref="container" v-loading="isLoading">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        
        <div class="thumb" v-if="item.thumb" >
          <RouterLink  :to='{
            name:"BlogDetail",
            params:{
              id:item.id
            }
          }'>
            <img v-lazy="item.thumb" :alt="item.title" :title="item.title" />
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink  :to='{
            name:"BlogDetail",
            params:{
              id:item.id
            }
          }'>
            <h2>{{item.title}}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期:{{formatDate(item.createDate)}}</span>
            <span>浏览:{{item.scanNumber}}</span>
            <span>评论:{{item.commentNumber}}</span>
            <RouterLink :to='{
              name:"CategoryBlog",
              params:{
                categoryId:item.category.id
              }
            }' class="">{{item.category.name}}</RouterLink>
          </div>
          <div class="desc">
           {{item.description}}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页放到这里 -->
    <Pager
     v-if="data.total"
     :current='routeInfo.page' 
     :total='data.total'
     :limit='routeInfo.limit'
     :visibleNumber='10'
     @pageNumber='handlePageNumber'
      />

      
  </div>
</template>

<script>
import Pager from '@/components/Parger/index.vue'
import fetchData from '@/mixins/fetchData.js'
import {getBlogs} from '@/api/blog.js'
import {formatDate} from '@/utils/index'

export default {
  mixins:[fetchData({})],
  components:{
    Pager,
    
  },
  data(){
    return{
      isLoading:true,
      list:[]
    }
  },
  methods:{
    formatDate,
    async fetchData(){
      return await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      )
    },
    handlePageNumber(newPage){
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      if(this.routeInfo.categoryId === -1){
        //当前没有分类
        this.$router.push({
          name:'Blog',
          query,
        })
      }else{
        //有分类
        this.$router.push({
          name:'CategoryBlog',
          query,
          params:{
            categoryId:this.routeInfo.categoryId
          }
        })
      }
      
    }
  },
  computed:{
    routeInfo(){
      const categoryId = +this.$route.params.categoryId || -1
      const page = +this.$route.query.page || 1
      const limit = +this.$route.query.limit || 10

      return {
        categoryId,
        page,
        limit
      }
    },
    
  },
  watch:{
   async $route(){
      this.isLoading = true
      this.data = await this.fetchData()
      this.$refs.container.scrollTop = 0
      this.isLoading = false
    }
  },
  
  
}


</script>

<style scoped lang='less'>
@import "~@/style/var.less";
::-webkit-scrollbar{
    width: 4px;
    height: 4px;
  }
  ::-webkit-scrollbar-thumb{
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(97, 184, 179, 0.1);
    background: #78b4b4;
  }
  ::-webkit-scrollbar-track{
    box-shadow: inset 0 0 5px rgba(87, 175, 187, 0.1);
    border-radius: 10px;
    background: #ededed;
  }
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>