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

  return (
    <form onSubmit={submitHandler}>
      <label>
        <p>Email address <sup>*</sup></p>
        <input
          required
          type="email" // changed from text
          name="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter Email ID"
        />
      </label>

      <label>
        <p>Password <sup>*</sup></p>
        <input
          required
          type={showPass ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter password"
        />
        <button
          type="button"
          onClick={() => setShowPass(prev => !prev)}
        >
          {showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </button>

        <Link to="/forgot-password"><p>Forgot Password</p></Link>
      </label>

      <button type="submit">Sign In</button>
    </form>
  );
}

export default LoginForm;
