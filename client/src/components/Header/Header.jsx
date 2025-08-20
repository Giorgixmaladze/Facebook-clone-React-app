import { Link } from "react-router-dom";
import Home from "../../pages/Home/Home";

const Header = () =>{
    return(
        <header className="h-[150px] w-full">
            <div className="h-6/12 w-full flex justify-around items-center">
                <h1 className="text-blue-600 text-[40px] font-bold">facebook</h1>
                <div>
                    <nav className="flex gap-[50px]">
                        <ul className="flex gap-[30px]">
                            <li className="hover:text-blue-600 hover:font-bold transition-all duration-400"><Link to="/profile">Profile</Link></li>
                            <li className="hover:text-blue-600 hover:font-bold transition-all duration-400"><Link to="/friends">Suggested Friends</Link></li>
                            <li className="hover:text-blue-600 hover:font-bold transition-all duration-400"><Link to="/home">Home</Link></li>
                        </ul>

                        <span className="flex gap-[10px] text-gray-600">
                            <Link to="/login">Login</Link>
                            /
                            <Link to="/signup">Sign up</Link>
                        </span>
                        
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;