<template>
  <div
    v-loading="loading"
    class="home-container"
    ref="container"
    @transitionend="transitionEnd"
    @wheel="handleWheel"
  >
    <ul class="carousel-container" :style="{ marginTop }">
      <li v-for="item in data" :key="item.id">
        <Carouseliten :carouse="item"> </Carouseliten>
      </li>
    </ul>

    <div class="icon icon-up" v-show="index >= 1" @click="switchTo(index - 1)">
      <Icon type="xiangshang"></Icon>
    </div>

    <div
      class="icon icon-down"
      v-show="index < data.length - 1"
      @click="switchTo(index + 1)"
    >
      <Icon type="xiangxia"></Icon>
    </div>

    <ul class="indicator">
      <li
        :class="{
          active: index === i,
        }"
        v-for="(item, i) in data"
        :key="item.id"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import Carouseliten from "./Carouseliten.vue";
import Icon from "@/components/Icon/index.vue";
import {mapState} from 'vuex'
export default { 

  data() {
    return {
      index: 0, //当前显示的轮播图索引
      clientHeight: 0,
      switchching: false,
    };
  },
  components: {
    Carouseliten,
    Icon,
  },
  created(){
    this.$store.dispatch('banner/fetchBanner')
  },
  mounted() {
    this.clientHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handelresize);
  },
  computed: {
    marginTop() {
      return -this.index * this.clientHeight + "px";
    },
    ...mapState('banner',['loading','data'])
  },
  destroyed() {
    window.removeEventListener("resize", this.handelresize);
  },
  methods: {
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      if (this.switchching) {
        return;
      }
      if (e.deltaY < -5 && this.index > 0) {
        this.index--;
      } else if (e.deltaY > 5 && this.index < this.data.length - 1) {
        this.index++;
      }
    },

    transitionEnd() {
      this.switchching = false;
    },
    handelresize() {
      this.clientHeight = this.$refs.container.clientHeight;
    },
  },
  beforeCreate() {},
  // async created() {
  //   this.banners = await getBanners();
  //   this.isLoading = false
  // },
};
</script>

<style scoped lang='less'>
@import "~@/style/mine.less";
@import url("~@/style/var.less");
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    transition: 500ms;
  }
  .carousel-container {
    width: 100%;
    height: 100%;
    li {
      width: 100%;
      height: 100%;
    }
  }

  .icon {
    font-size: 30px;
    .self-center();
    transform: translateY(-50%);
    cursor: pointer;
    color: @gray;
    &.icon-up {
      top: 15px;
      animation: jump-up 2s infinite;
    }
    &.icon-down {
      top: auto;
      bottom: 50px;
      animation: jump-down 2s infinite;
    }
  }
  .indicator {
    .self-center();
    left: auto;
    right: 0;
    transform: translateY(-50%);
    margin-right: 15px;
    list-style: none;

    li {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: @words;
      cursor: pointer;
      margin-bottom: 10px;
      border: 1px solid #fff;
      box-sizing: border-box;
      &.active {
        background: #fff;
      }
    }
  }
  @jump: 10px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }

  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
}
</style>