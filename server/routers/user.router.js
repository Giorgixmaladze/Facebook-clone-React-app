const {addUser} = require("../controllers/users.controller")

const route = (req,res) =>{
    const {url, method} = req

    if(url.startsWith === "/user" && method === "POST"){
        return addUser(req,res)        
    }
}


module.exports = {
    route
}