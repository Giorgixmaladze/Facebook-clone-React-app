const fs = require("fs")


const users = JSON.parse(fs.readFileSync("./data/users.json"))

const addUser = (req,res) =>{
    const newUser = {
        id:users.length? users[users.length - 1].id + 1: 1,
        ...req.body
    }

    users.push(newUser)
    fs.writeFileSync("./data/users.json",users)
}