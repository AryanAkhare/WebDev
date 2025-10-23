import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";


export default function Navbar(props) {
  let isLoggedIn=props.isLoggedIn;
  let setIsLoggedIn=props.setIsLoggedIn;
  let buttonStyle="bg-gray-850 text-white  py-[8px] px-[12px] rounded-[8px] border border-gray-700"
  function logOutHandler(){
    setIsLoggedIn(false);
    toast.success("Logged out")
  }

  function logInHandler(){
    setIsLoggedIn(true);toast.success("Logged in")
    
  }
  return (
        <div className="flex justify-between items-center gap-3 w-11/12 max-w-[1160px] bg-[#111827] px-4 py-3 text-white mx-auto">

            { (
              <NavLink to="/" end>
                <img src={logo} alt="Logo" width={160} height={32} />
              </NavLink>
            )}

            {/* Nav links */}
            <nav className="flex gap-3 text-white gap-x-6">
              <NavLink to="/" end>Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>

            {/* Buttons */}
            <div className="flex items-center gap-x-4">
              {!isLoggedIn && <Link to="/login" ><button className={buttonStyle}>Login</button></Link>}
              {!isLoggedIn && <Link to="/signup"><button className={buttonStyle}>Sign Up</button></Link>}
              {isLoggedIn && <Link to="/"><button onClick={logOutHandler} className={buttonStyle}>Log Out</button></Link>}
              {isLoggedIn && <Link to="/dashboard"><button >Dashboard</button></Link>}
            </div>


        </div>
  );
}

