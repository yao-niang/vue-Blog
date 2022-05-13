<template>
  <div class="message-container">
    <MessageArea
      title="留言板"
      :isLiLoading="isLoading"
      :list="data.rows"
      :subTitle="`(${data.total})`"
      @indexsubmit="handleSubmit"
    ></MessageArea>
  </div>
</template>

<script>
import MessageArea from "../../components/MessageArea/index.vue";
import fetchData from "../../mixins/fetchData";
import { getMessage, postMessage } from "../../api/message";
export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },

  methods: {
    async fetchData() {
      return await getMessage(this.page, this.limit);
    },
    async handleSubmit(data, callback) {
      await postMessage(data);
      callback("我是你爹");
    },
  },
  created() {},
};

function Vue() {
  var updateComponent = () => {
    this._update(this._render());
  };
  new Watcher(updateComponent)
}
</script>

<style scoped lang='less'>
.message-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 25px 0;
  box-sizing: border-box;
}
.message-area-container {
  width: 700px;
  margin: 0 auto;
}
</style>