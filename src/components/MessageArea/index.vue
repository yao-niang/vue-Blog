<template>
  <div class="message-area-container">
    <DataFrom @submit22='indexeSubmit'></DataFrom>
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <DataList :list='list' ></DataList>
    <div class="isLiLoading" v-loading='isLiLoading'></div>
  </div>
</template>

<script>
import DataFrom from "./DataForm.vue";
import DataList from "./DataList.vue";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    isLiLoading:{
        type:Boolean,
        default:false
    }
  },
  components: {
    DataFrom,
    DataList,
    
  },
  methods:{
      indexeSubmit(fromData,callback){
          this.$emit('indexsubmit',fromData,callback)
      }
  }
 
};
</script>

<style scoped lang='less'>


</style>