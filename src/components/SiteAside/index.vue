<template>
  <div class="site-aside-content" >
    <div class="avatar-conint" v-loading='loading'>
      <Avatar
       v-if="data"
        :size="150"
        :url="data.avatar"
      ></Avatar>
    </div>
    <div class="tle" v-if="data">{{data.siteTitle}}</div>
    <Menu v-loading='loading'></Menu>
    <Contace v-loading='loading'></Contace>
    <p class="footer" v-if="data">{{data.icp}}</p>
  </div>
</template>

<script>
import Avatar from "../Avatar/index.vue";
import Contace from "./Contace/index.vue";
import Menu from "./Menu/index.vue";
import { mapState } from "vuex";
export default {
  components: {
    Avatar,
    Contace,
    Menu,
  },
  mounted() {
    console.log(this.$store._modules.root.state.setting.data);
  },
    computed: {
      ...mapState("setting",['loading',"data"]),
    }
  
};
</script>

<style scoped lang='less'>
@import "~@/style/var.less";
.site-aside-content {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-conint {
  display: flex;
  justify-content: center;
}
.footer,
.tle {
  text-align: center;
}
.tle {
  font-size: 20px;
  color: white;
  margin: 10px 26px;
}
</style>