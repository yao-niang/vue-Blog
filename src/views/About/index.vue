<template>
  <div  class="about-content" v-loading='loading'>
    <iframe v-if="src" class="iframe-content" :src="src" frameborder="0"></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },

  computed: mapState("about", {
    src:'data',
    loading:'loading'
  }),
  created() {
    this.$store.dispatch("about/fetchAbout");
  },
};
</script>

<style scoped lang='less'>
.about-content {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.iframe-content{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>