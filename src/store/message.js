import { getMessage } from "@/api/message"

export default {
    namespaced:true,
    state:{
        loading:false,
        data:[],

    },
    mutations:{
        setLoading(state,payload){
            state.loading = payload
        },
        setData(state,payload){
            state.data = payload
        }
    },
    actions:{
        
        async fetchMessage(ctx){
            
            ctx.commit('setLoading',true)
            const resp = await getMessage()
            ctx.commit('setData',resp)
            ctx.commit('setLoading',false)
        }
    }
}