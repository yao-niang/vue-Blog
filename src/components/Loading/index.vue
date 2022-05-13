<template>
  <img class="loading-center" :src="loadingUrl" alt="">
</template>

<script>
import loadingUrl from '@/assets/loading.svg'
export default {
data(){
    return{
        loadingUrl
    }
}
}
</script>

<style scoped lang='less'>
@import url('~@/style/mine.less');
.loading-center{
    .self-center()
}

</style>