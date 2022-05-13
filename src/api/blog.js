import request from './request'

//获取博客列表数据
export async function getBlogs(page=1,limit=10,categoryid = -1){
  return await  request.get('/api/blog',{
      params:{
        page,
        limit,
        categoryid
      }
        
    })

}

export async function getBlogTypes(){
    return await  request.get('/api/blogtype')
  
  }
export async function getBlog(id){
  return await request.get(`/api/blog/${id}`)

}


export async function postComment(commentInfo){
  return await request.post(`/api/comment`,commentInfo)


}

export async function getComment(blogid,page = 1,limit = 10,){
  return await request.get(`/api/comment`,{
    params:{
      blogid,
      page,
      limit
    }
  })

}