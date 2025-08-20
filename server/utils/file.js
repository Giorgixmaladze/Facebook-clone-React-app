const fs = require("fs")

const readFile = (pathName) =>{
    const data = fs.readFileSync(pathName,"utf-8")
    return data
}

const writeFile = (pathName,data) =>{
    return fs.writeFileSync(pathName,data,"utf-8")
}

module.exports =  {
    readFile,
    writeFile
}