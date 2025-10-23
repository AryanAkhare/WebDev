import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function LoginForm({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData(prev => ({ ...prev, [event.target.name]: event.target.value }));
  }

  function submitHandler(e) {
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged in"); // fixed typo
    navigate("/dashboard");
    
    
  }

  let placeholderStyle='bg-gray-800 rounded-[0.5rem] w-[100%] p-[12px] placeholder-white text-white shadow-[0_2px_6px_rgba(255,255,255,0.15)] focus:outline-none focus:ring-1 focus:ring-blue-400'

  let submitStyle = `
  w-full bg-yellow-500 hover:bg-yellow-300 
  text-gray-900 font-semibold rounded-lg 
  py-3 px-4 
  shadow-[0_4px_12px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.45)]
  transition-colors transition-shadow duration-200 
  focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900
`;

  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 pt-3'>
      <label className="w-full">
      <p className="text-[0.875rem] text-gray-300 mb-1">
        Email address <sup className="text-pink-500">*</sup>
      </p>

      <input
        required
        type="email"
        name="email"
        value={formData.email}
        onChange={changeHandler}
        placeholder="Enter Email ID"
        className={placeholderStyle}
      />
    </label>

      <div className="w-full relative">
  <p className="text-[0.875rem] text-gray-300 mb-1">
    Password <sup className="text-pink-500">*</sup>
  </p>

  <div className="relative">
        <input
          required
          type={showPass ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter password"
          className={placeholderStyle}
        />
        <button
          type="button"
          onClick={() => setShowPass(prev => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
        >
          {showPass ? <AiOutlineEye fontSize={20}/> : <AiOutlineEyeInvisible fontSize={20}/>}
        </button>
      </div>

      <Link
        to="/forgot-password"
        className="text-[0.8rem] text-blue-300 hover:text-blue-400 float-right mt-1 transition-all duration-300"
      >
        Forgot Password?
      </Link>
      </div>

      
      <button type="submit" className={submitStyle}>Sign In</button>
    </form>
  );
}

export default LoginForm;
