<template>
<div id="app">
 <ImageLoader
    @load="imgLoad"
    src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
    placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
    :duration="2000"
  ></ImageLoader>
</div>
 
</template>

<script>
import ImageLoader from "../ImageLoader/index.vue";
export default {
  components: {
    ImageLoader,
  },
  methods:{
      imgLoad(){
          console.log('图片加载完成');
      }
  }
};
</script>

<style>
#app{
    width: 500px;
    height: 500px;
    border: 1px solid red;
    margin: 0 auto;
}
</style>