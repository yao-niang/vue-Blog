<template>
  <div class="image-loader-container">
    <img v-if="!everything" 
    class="placeholder" 
    :src="placeholder"  />
    <img
      :src="src"
      alt=""
      @load="handleLoad"
      :style="{
        opacity: originOption,
        transition: `${duration}ms`,
      }"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      require: true,
    },
    placeholder: {
      type: String,
      require: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  computed: {
    originOption() {
      return this.originLoaded ? 1 : 0;
    },
  },
  data() {
    return {
      originLoaded: false,
      everything: false,
    };
  },
  methods: {
    handleLoad() {
      this.originLoaded = true;
      setTimeout(() => {
        this.everything = true;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style scoped lang='less'>
@import url(~@/style/mine.less);
.image-loader-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }

  .placeholder {
    filter: blur(2vw);
  }
}
</style>