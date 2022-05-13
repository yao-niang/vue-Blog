import eventBus from '../eventBus'


const imgs = []

function setImage(img){

    console.log(img);

}
setImage()



export default{
    inserted(el,bindings){
        const img = {
            dom:el,
            src:bindings.value
        };
        imgs.push(img)
        setImage(img)
    },
    unbind(el){
        
    }
}