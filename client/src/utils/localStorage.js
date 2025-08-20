const setLocal = (name,value) =>{
    return localStorage.setItem(name,JSON.stringify(value))
}

const getLocal = (name) =>{
    return JSON.parse(localStorage.getItem(name))
}

export {setLocal,getLocal}