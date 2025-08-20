import { createContext } from "react";
import useForm from "../hooks/useform";

export const RegisterContext = createContext()


const RegisterProvider = ({children}) =>{

    const[data,handleSubmit] = useForm()

    return(
        <RegisterContext.Provider value={{handleSubmit}}>
            {children}
        </RegisterContext.Provider>
    )
}

export default RegisterProvider