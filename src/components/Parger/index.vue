<template>
  <div class="Pager-content" v-if="total > 1">
    <a  @click="headleClick(1)" :class="{disabled:current === 1}">|&lt;&lt;</a>
    <a  @click="headleClick(current - 1)" :class="{disabled:current === 1}">&lt;&lt;</a>
    <a  @click="headleClick(n)" v-for="(n,i) in numberArr" :key="i" :class="{active:n === current}">{{n}}</a>
    

    <a  @click="headleClick(current + 1)" :class="{disabled:current === maxNumber}">&gt;&gt;</a>
    <a  @click="headleClick(maxNumber)" :class="{disabled:current === maxNumber}">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
    props:{
        current:{
            type:Number,
            default:1
            //当前页码
        },
        total:{
            type:Number,
            default:0
            //总数据量
        },
        limit:{
            type:Number,
            default:10
            //页容量
        },
        visibleNumber:{
            type:Number,
            default:10
            //可见页码数
        },
    },
    computed:{
        //总页数
        maxNumber(){
            return Math.ceil(this.total / this.limit) 
        },
        numberArr(){
            let num = []
            for(let i = this.visibleMin; i <= this.visibleMax; i++){
                num.push(i)
            }
            return num


        },
        visibleMin(){
            let min = this.current - Math.floor(this.visibleNumber / 2)
            if(min < 1){
                min = 1
            }
            return min
        },
        visibleMax(){
            let max = this.visibleMin +  this.visibleNumber -1
            if(max > this.maxNumber){
                max = this.maxNumber
            }
            return max
        },


    },
    methods:{
        headleClick(newPage){
            if(newPage < 1){
                newPage = 1
            }
            if(newPage > this.maxNumber){
                newPage = this.maxNumber
            }
            if(newPage === this.current){
                return
            }
            this.$emit('pageNumber',newPage)

        }
    }

};
</script>

<style scoped lang='less'>
@import "~@/style/var.less";
.Pager-content{
    display: flex;
    justify-content: center;
    margin: 20px 0;
    a{
        color: @primary;
        margin: 0 6px;
        cursor: pointer;
        &.disabled{
            color: @lightWords;
            cursor: not-allowed;
        }
        &.active{
            color: @dark;
        }
    }
    
}
</style>