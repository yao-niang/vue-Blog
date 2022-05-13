<template>
  <div class="ToTop-content">
    <div class="raid">
      <span>Top</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  destroyed() {
      this.$bus.$off('mainScroll',this.handleScroll)
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  methods:{
      handleScroll(dom){
      }
  }
};
</script>

<style lang="less" scoped>
.ToTop-content {
  width: 60px;
  height: 60px;
  background: skyblue;
  position: fixed;
  right: 60px;
  bottom: 60px;
  border-radius: 50%;
  cursor: pointer;
  .raid {
    margin: 0 auto;
    line-height: 60px;
    font-size: 14px;
    text-align: center;
    color: white;
  }
}
</style>