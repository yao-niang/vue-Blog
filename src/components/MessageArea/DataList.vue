<template>
  <ul class="data-list-container">
    <li v-for="item in list" :key="item.id">
      <div class="avatar">
         <Avatar :url='item.avatar' :size='44'></Avatar>
      </div>
     
      <div class="data">
        <div class="nickname">{{item.nickname}}</div>
        <div class="content">{{item.content}}</div>
        <div class="time">{{formatDate(item.createDate)}}</div>
      </div>
    </li>
  </ul>

</template>

<script>
import Avatar from "@/components/Avatar/index.vue";
import {formatDate} from '@/utils/index.js'
export default {
  props:{
    list:{
      type:Array,
      require:true
    }
  },
  components:{
    Avatar
  },
  methods:{
    formatDate,
  }
}
</script>
<style scoped lang="less">
@import "~@/style/var.less";
.data-list-container {
  list-style: none;
  margin: 0;
  padding: 0 10px;
}
.avatar{
  margin: 0  5px;
}
li {
  display: flex;
  border-bottom: 1px solid lighten(@gray, 20%);
  padding: 15px 0;
}
.avatar-container {
  margin-right: 15px;
}
.nickname {
  color: darken(@success, 10%);
  margin-bottom: 10px;
}
.content {
  font-size: 14px;
}
.data {
  flex: 1 1 auto;
  position: relative;
}
.time {
  position: absolute;
  right: 0;
  top: 5px;
  font-size: 12px;
  color: @gray;
}
</style>