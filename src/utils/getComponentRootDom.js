import {createApp,h,$el} from 'vue'
export default function(comp, props) {
    const app = createApp({
      render:()=>h(comp,props)
    });
    const fragment = document.createDocumentFragment()
    const componentInstance = app.mount(fragment)

    app.mount();
    return componentInstance.$el;
  }

// export default  function (comp,props){
//     const vm = createApp(App)

//     vm.$mount()
//     return vm.$el
//   }
  

