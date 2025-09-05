import { useEffect, useState } from "react"
import { setLocal } from "../utils/localStorage"

const useForm = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setLocal("users", data)
  }, [data])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const info = {}
    const formData = new FormData(e.target)

    for (let [key, value] of formData.entries()) {
      info[key] = value
    }

    if (data.some(user => user.email === info.email)) {
      alert("Account with this email is already registered")
      return
    }

    if (info.password !== info.confirmation) {
      alert("Passwords do not match")
      return
    }

    try {
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info) 
      })
      
      if (!res.ok) {
        throw new Error("Failed to save user")
      }

      const saved = await res.json()
      setData(prev => [...prev, saved]) 
    } catch (err) {
      console.log(err)
    }
  }

  return [data, handleSubmit]
}



export default useForm