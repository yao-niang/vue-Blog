<template>
<div class="avatar-conint">
    <img :src="url" alt="" :style="{
        width:size + 'px',
        height:size + 'px'
    }">
    <div>{{fullName}}</div>
</div>
    
</template>
<script>

export default {
    props:{
        url:{
            type:String,//数据类型
            required:true,//是否必填
            // default:'url'默认值
            
        },
        size:{
            type:Number,
            default:100
        },
    },
    computed:{
        fullName:{
            get(){

            },
            set(){
                
            }
        }
    }


}
</script>
<style scoped>
    img{
        border-radius: 50%;
        object-fit: cover;
    }

</style>
