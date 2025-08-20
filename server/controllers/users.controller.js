const addUser = (req,res) =>{
    let body = ""

    req.on("data",chunk =>{
        body += chunk.toString()
    })

    req.on("end",()=>{
        console.log(JSON.stringify(body))
    })
}