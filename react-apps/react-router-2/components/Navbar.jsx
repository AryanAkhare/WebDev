import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";


export default function Navbar(props) {
  let isLoggedIn=props.isLoggedIn;
  let setIsLoggedIn=props.setIsLoggedIn;

  function logOutHandler(){
    setIsLoggedIn(false);
    toast.success("Logged out")
  }

  function logInHandler(){
    setIsLoggedIn(true);toast.success("Logged in")
    
  }
  return (
        <div className="flex justify-evenly gap-3 bg-amber-500">
            {/* Logo */}
            {!isLoggedIn && (
              <NavLink to="/" end>
                <img src={logo} alt="Logo" width={160} height={32} />
              </NavLink>
            )}

            {/* Nav links */}
            <nav className="flex gap-3">
              <NavLink to="/" end>Home</NavLink>
              <NavLink to="/">About</NavLink>
              <NavLink to="/">Contact</NavLink>
            </nav>

            {/* Buttons */}
            <div className="flex gap-3">
              {!isLoggedIn && <Link to="/login" ><button >Login</button></Link>}
              {!isLoggedIn && <Link to="/signup"><button>Sign Up</button></Link>}
              {isLoggedIn && <Link to="/"><button onClick={logOutHandler}>Log Out</button></Link>}
              {isLoggedIn && <Link to="/dashboard"><button>Dashboard</button></Link>}
            </div>


        </div>
  );
}

