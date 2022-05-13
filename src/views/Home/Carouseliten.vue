<template>
  <div class="carousel-item-container" ref="container" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
    <div class="carouse-img" ref="image" :style="imagePosition">
      <ImageLoader
      @load="showWord"
      :src="carouse.bigImg"
      :placeholder="carouse.midImg"
    ></ImageLoader>
    </div>
    
    <div class="title" ref="title">{{ carouse.title }}</div>
    <div class="desc" ref="desc">{{ carouse.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "../../components/ImageLoader/index.vue";
export default {
  props: ["carouse"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize:null,
      innerSize:null,
      mouseX:0,
      mouseY:0,
    };
  },
 
  computed:{
    imagePosition(){
      if(!this.innerSize || !this.containerSize){
        return
      }
      const extraWidth = this.innerSize.width - this.containerSize.width
      const extraHeight = this.innerSize.height - this.containerSize.height
      const left = (-extraWidth / this.containerSize.width) * this.mouseX
      const top = (-extraHeight / this.containerSize.height) * this.mouseY
      return {
        transform:`translate(${left}px,${top}px`
      }
    },
    center(){
      return {
        x:this.containerSize.width / 2,
        y:this.containerSize.height / 2
      }
    }
    
  },
   mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener('resize',this.setSize)
  },
  destroyed(){
    window.removeEventListener('resize',this.setSize)
  },
  methods: {
    showWord() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      //强制渲染一次
      this.$refs.title.clientWidth;
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      //强制渲染一次
      this.$refs.desc.clientWidth;
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    setSize(){
      this.containerSize = {
        width:this.$refs.container.clientWidth,
        height:this.$refs.container.clientHeight
      },
      this.innerSize = {
        width:this.$refs.image.clientWidth,
        height:this.$refs.image.clientHeight
      }
    },
    handleMouseMove(e){
      const rect = this.$refs.container.getBoundingClientRect()
      this.mouseX = e.clientX - rect.left
      this.mouseY = e.clientY - rect.top
    },
    handleMouseLeave(){
      this.mouseX = this.center.x
      this.mouseY = this.center.y
    }
  },
};
</script>

<style scoped lang='less'>
@import "~@/style/var.less";
.carousel-item-container {
  width: 100%;
  height: 100%;
  color: white;
  position: absolute;
  overflow: hidden;
  .carouse-img{
    width: 110%;
    height: 110%;
    left: 0;
    top: 0;
    transition: 0.3s;
  }
  .title {
    position: relative;
    left: 50px;
    bottom: 250px;
    font-size: 40px;
    letter-spacing: 3px;

    color: #fff;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 5), 0 -1px 0 rgba(0, 0, 0, 5);
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
  }
  .desc {
    position: relative;
    left: 50px;
    bottom: 200px;
    font-size: 20px;
    letter-spacing: 3px;

    color: #fff;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 5), 0 -1px 0 rgba(0, 0, 0, 5);
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
  }
}
</style>