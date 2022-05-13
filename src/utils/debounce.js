export default function(fn,interval){
    let timer = null
    return (...args)=>{
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
        }, interval);

    }

}