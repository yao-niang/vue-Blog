<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="toc" @select="handleSelect"></RightList>
  </div>
</template>

<script>
import { debounce } from "@/utils/index.js";
import RightList from "./RightList.vue";
export default {
  props: {
    toc: {
      type: Array,
    },
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  components: {
    RightList,
  },
   created(){
     this.setSelectDebounce = debounce(this.setSelect,50)
     this.$bus.$on('mainScroll',this.setSelectDebounce)
   },
   destroyed(){
     this.$bus.$off('mainScroll',this.setSelectDebounce)
   },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    setSelect(scrollDom) {
      if(!scrollDom){
        return
      }
      this.activeAnchor = "";
      const range = 200;
      for (const dom of this.doms) {
        if (!dom) {
          continue;
        }
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
        } else {
          this.activeAnchor = dom.id;
        }
      }
    },
  },
  computed: {
    tocWithSelect() {
      const getToc = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getToc(t.children),
        }));
      };
      return getToc(this.toc);
    },

    doms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
  },
};
</script>

<style scoped lang='less'>
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(97, 184, 179, 0.1);
  background: #78b4b4;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(87, 175, 187, 0.1);
  border-radius: 10px;
  background: #ededed;
}
.blog-toc-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>