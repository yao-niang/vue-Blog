<template>
  <div class="Empty-center">
    <Icon type="wushuju" class="icon-font"></Icon>
    <div>{{ text }}</div>
  </div>
</template>
<script>
import Icon from "../Icon/index.vue";
export default {
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script>

<style scoped lang='less'>
@import "~@/style/mine.less";
@import "~@/style/var.less";
.Empty-center {
  .self-center();
  text-align: center;
  color: @gray;
  font-size: 30px;
}
.icon-font {
  font-size: 60px;
}
</style>