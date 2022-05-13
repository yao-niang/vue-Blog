<template>
  <div>
    <ul class="right-list-container">
      <li v-for="(item, i) in list" :key="i">
        <span  @click="handleClick(item)" :class="{ active: item.isSelect }">{{
          item.name
        }}</span>

        <span
          class="aside"
          :class="{ active: item.isSelect }"
          v-if="item.aside"
        >
          {{ item.aside }}
        </span>

        <RightList @select="handleClick" :list="item.children"></RightList>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RightList",
  props: {
    list: {
      type: Array,
      default: () => {},
    },
  },
  methods: {
    handleClick(item) {
      if (!item.isSelect) {
        this.$emit("select", item);
      }
    },
  },
  created(){
    
  }
};
</script>

<style scoped lang='less'>
@import "../../../style/var.less";
.right-list-container {
  list-style: none;
  padding: 0;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    height: 40px;
    margin: 10px 0;
    &.active {
      color: red;
      font-weight: bold;
    }
    span {
      font-size: 12px;
      margin-left: 1em;
      color: @gray;
      display: block;
      margin: 15px 0;
    }
  }
  .active{
    color: red;
  }
}
</style>