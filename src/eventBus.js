const listeners = {}


export default {
    $on(eventName,handle){
        if(!listeners[eventName]){
            listeners[eventName] = new Set()
        }
        listeners[eventName].add(handle)
    },
    $off(eventName,handle){
        if(!listeners[eventName]){
            return
        }
        listeners[eventName].delete(handle)
    },
    $emit(eventName,...args){
        if(!listeners[eventName]){
            return
        }
        for(const handler of listeners[eventName]){
            handler(...args)

        }

    }

}


