export function getFromStorage(key) {
    if(!key)
        return null;
    try{
        const valueStr = localStorage.getItem(key);
        if(valueStr){
            return JSON.parse(valueStr);
        }
        return null;
    }catch (e) {
        return null;
    }
}

export function setInStorage(key,obj) {
    if(!key)
        console.error("Key is missing");
    try{
        localStorage.setItem(key,JSON.stringify(obj));
    }catch (e) {
        console.error(e);
    }
}