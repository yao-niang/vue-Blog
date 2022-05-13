import { createRouter,createWebHashHistory,createWebHistory } from "vue-router";
import Home from '@/views/Home/index.vue'
import Blog from '@/views/Blog/index.vue'
import About from '@/views/About/index.vue'
import Project from '@/views/Project/index.vue'
import Message from '@/views/Message/index.vue'
import BlogDetail from '../views/Blog/Detail'
import store from "@/store";
const routes = [
    {
        path:'/',
        name:'Home',
        component:Home,
        meta:{
            title:'首页'
        }
    },
    {
        path:'/Blog',
        name:'Blog',
        component:Blog,
        meta:{
            title:'文章'
        }
    },
    {
        path:'/Blog/:id',
        name:'BlogDetail',
        component:BlogDetail,
        meta:{
            title:'文章列表'
        }
    },
    {
        path:'/Blog/cate/:categoryId',
        name:'CategoryBlog',
        component:Blog,
        meta:{
            title:'文章详情'
        }
    },
    {
        path:'/About',
        name:'About',
        component:About,
        meta:{
            title:'关于我'
        }
    },
    {
        path:'/Project',
        name:'Project',
        component:Project,
        meta:{
            title:'项目'
        }
    },
    {
        path:'/Message',
        name:'Message',
        component:Message,
        meta:{
            title:'留言板'
        }
    }
]
export const router = createRouter({
    history:createWebHistory(),
    routes:routes
})
router.afterEach((to,from)=>{
    if(to.meta.title){
        if(store.state.setting.data){
        document.title =  to.meta.title + '-' + store.state.setting.data.siteTitle

        }else{
            document.title = to.meta.title
        }


    }
    
})
export default router


