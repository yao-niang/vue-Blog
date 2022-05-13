<template>

  <Layout>
    <BlogList/>
      <template #right>
            <BlogCategory/>
      </template>
  
  </Layout>
 
</template>

<script>
import Layout from '@/components/Layout/index.vue'
import BlogList from './cpmponents/BlogList.vue'
import BlogCategory from './cpmponents/BlogCategory.vue'

export default {
  components:{
    Layout,
    BlogList,
    BlogCategory
  },
  data(){
    return{
      
    }
  },
  methods:{
    
  }
}
</script>

<style>

</style>