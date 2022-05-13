import { createStore } from 'vuex'
import banner from './banner'
import setting from  './setting'
import about from './about'
import project from './project'
import message from './message'
export default createStore({
  strict: true,
    modules: {
        banner:banner,
        setting:setting,
        about:about,
        project:project,
        message:message
      },
    state () {
        return {
          count: 0
        }
      },
      mutations: {
        increment (state) {
          state.count++
        },
        
      }
})


