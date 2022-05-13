import axios from "axios";
import showMessage from '../utils/showMessage'

let ins = axios.create()
ins.interceptors.response.use(function(resp){
    if(resp.data.code !==0){
        showMessage({
            content:resp.data.code,
            type:'error',
            duration:1500
        })
        return null
    }
    return resp.data.data
})

export default ins