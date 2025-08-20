import { useEffect, useState } from "react"
import { setLocal } from "../utils/localStorage"

const useForm = () =>{
    const [data,setData] = useState([])

    useEffect(()=>{
        setLocal("users",data)
    },[data])
    const handleSubmit = (e) =>{
        e.preventDefault()

        const info = {}

        const formData = new FormData(e.target)

        for(let[key,value] of formData.entries()){
            info[key]=value
        }
        if(data.some(user=> user.email === info.email)){
            alert("Account with this email is already registered")
        }else if(info.password !== info.confirmation){
            alert("Passwords do not match")
        }else{
            setData(prev => [...prev,info])
        }
              
    }
    return [data,handleSubmit]

}

export default useForm