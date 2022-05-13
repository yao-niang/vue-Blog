
import getComponentsRootDom from "./getComponentRootDom";
import Icon from '../components/Icon/index.vue'
import styles from '../style/showMessage.module.less'
import { options } from "less";
/**
 * 
 * @param {String} content //内容
 * @param {String} type  //组件需要传递的属性
 * @param {HTMLElement} container //需要插入的父节点
 * @param {number} duration // 多长时间后消失
 */
export default function(options = {}){

    const content = options.container || '忘记输入内容了你'
    const type = options.type || 'error'
    const duration = options.duration || 2000
    const container = options.container || document.body
    
    let div = document.createElement('div')
    const iconDom = getComponentsRootDom(Icon,{
        type
    })
    div.innerHTML = `<span class='${styles.icon}'>${iconDom.outerHTML}</span><div>${content}</div>`
    let typeStyleClassName =styles[`message-${type}`]
    div.className = `${styles.message} ${typeStyleClassName}`
    //将div加入到容器中
    if(!container){
        container = document.body
    }else{
        if(getComputedStyle(container).position === 'static'){
            container.style.position = 'relative'
        }
    }

    container.appendChild(div)
    div.clientHeight
    div.style.opacity = 1
    div.style.transform = 'translate(-50%,-50%)'

    setTimeout(() => {
        div.style.opacity = 0
        div.style.transform = 'translate(-50%,-50%) translateY(-25px)'
        div.addEventListener('transitionend',function(){
        div.remove()
        options.callback() && options.callback()
    },{once:true})
    }, duration);
    
}