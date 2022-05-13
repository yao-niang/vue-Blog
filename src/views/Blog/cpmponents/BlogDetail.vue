<template>
  <div class="blog-detail-container">
    <h1 class="title">{{blog.title}}</h1>
    <div class="aside">
      <span>日期:{{formatDate(blog.createDate)}}</span>
      <span>浏览:{{blog.scanNumber}}</span>
      <a href="#data-form-container">评论:{{blog.commentNumber}}</a>
    </div>
    <div v-html="blog.htmlContent" class="markdown-body">
    </div>
  </div>
</template>

<script>
import {formatDate} from '@/utils/index.js'
export default {
  props:{
    blog:{
      type:Object,
      required:true
    }
  },
  methods:{
    formatDate,
  },
}
</script>

<style scoped lang='less'>
@import url('~@/style/var.less');
@import url('~@/style/markdown.css');
.blog-detail-container{
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.aside{
  font-size: 12px;
  color: @words;
  display: inline-block;
  margin-left: 10px;
}
.markdown-body{
  padding: 20px;
}
</style>