import { useContext } from "react";
import { RegisterContext } from "../../context/RegisterContext";
import Header from "../../components/Header/Header";
import SignupHeader from "./SignupHeader";

const Signup = () =>{
    const {handleSubmit} = useContext(RegisterContext)

    return(
        <div className="w-screen h-screen" >
            
            
            <SignupHeader />
            <div className="w-full h-10/12 flex justify-center items-center" >
                <div className="w-[400px] h-[500px] shadow-xl bg-gray-200 flex flex-col items-center">
                    <h2 className="text-[30px] text-blue-600 font-semibold"> Sign up</h2>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <input type="email" placeholder="Enter your Email" name="email"/>
                    <input type="password" placeholder="Create a new password" name="password"/>
                    <input type="password" placeholder="Confirm the password" name="confirmation" />
                    <button>Submit</button>
                </form>
                </div>
               
            </div>

        </div>
    )
}

export default Signup;