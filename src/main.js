import { createApp, VueElement } from 'vue'
import App from './App.vue'
import './style/global.less'
import {router} from './router/index'

import './mock/index'
import { showMessage } from './utils'
import eventBus from './eventBus'
import vLoading from './directives/loading.js'
import vLazy from './directives/lazy.js'
import store from './store'
store.dispatch('setting/fetchSetting')
const app = createApp(App)
app.config.globalProperties.$showMessage = showMessage
app.config.globalProperties.$bus = eventBus


app.directive('loading',vLoading)
app.directive('lazy',vLazy)

app.use(router) 
app.use(store)
app.mount('#app')
