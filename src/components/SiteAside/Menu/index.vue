<template>
  <div class="menu-container">
    <router-link
      :exact='item.exact'
      :to='{name:item.name}'
      v-for="(item, i) in items"
      :key="i"
      active-class="selected"
      exact-active-class=""
    >
      <div class="menu-for">
        <div class="icon">
          <Icon :type="item.icon"></Icon>
        </div>
        <span class="title">{{ item.title }}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import Icon from "../../Icon/index.vue";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "shouye",
          exact:true
        },
        {
          name: "Blog",
          title: "文章",
          icon: "wenzhang",
          exact:false
        },
        {
          name: "About",
          title: "关于我",
          icon: "guanyu",
          exact:true
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "xiangmu",
          exact:true
        },
        {
          name: "Message",
          title: "留言板",
          icon: "liuyanban",
          exact:true
        },
      ],
    };
  },
  methods: {
    
  },
};
</script>

<style scoped lang='less'>
@import "~@/style/var.less";
.menu-container {
  color: @gray;
  margin: 24px 0;
  width: 100%;
  a {
    &.selected {
      background: darken(@words, 3%);
    }
    padding: 0 50px;
    display: block;
    display: flex;
    align-items: center;
    height: 45px;
    
  }
  .menu-for {
    display: flex;
    font-size: 16px;
    margin: 10px 0;

    .icon {
      margin: 0 5px;
    }
  }
}
</style>