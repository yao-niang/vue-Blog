<template>
    <i class="iconfont  " :class="fontClass"></i>
</template>

<script>
const ClassMap = {
    'QQ':'icon-QQ',
    'shezhi':'icon-shezhi',
    'wushuju':'icon-wushuju',
    'error':'icon-jinggao',
    'xiangshang':'icon-xiangshang',
    'xiangxia':'icon-xiangxia'


}
export default {
    props:{
        type:{
            type:String,
            require:true
        }
    },
    components:{

    },
    computed:{
        fontClass(){
            return ClassMap[this.type]
        }
    }


}
</script>

<style scoped>
@import url('//at.alicdn.com/t/font_3200758_66i5c8xt1vd.css');

.iconfont{
    font-family:"iconfont" !important;
    font-size:inherit;font-style:normal;
    color: inherit;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    }


</style>