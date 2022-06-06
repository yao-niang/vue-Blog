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
    'xiangxia':'icon-xiangxia',
    'guanyu':'icon-guanyuwomen',
    'weixin':'icon-weixin',
    'wenzhang':'icon-wenzhang',
    'youxiang':'icon-youxiang',
    'xiangmu':'icon-xiangmu',
    'liuyanban':'icon-liuyanban-05',
    'github':'icon-github',
    'shouye':'icon-shouye'


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
@import url('//at.alicdn.com/t/font_3430541_v67s0u1fobi.css');

.iconfont{
    font-family:"iconfont" !important;
    font-size:inherit;font-style:normal;
    color: inherit;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    }


</style>