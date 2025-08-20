const http = require("http")
const route = require("./routers/user.router.js")

const server = http.createServer((req,res) =>{
    return route(req,res)
})


server.listen(3000,()=>{
    console.log("server is listening")
})
