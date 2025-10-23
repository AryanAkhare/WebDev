import React from 'react';
import Template from '../components/Template';
import loginImg from '../assets/login.png'; // import your image

// FIX: Receive setIsLoggedIn prop here
export default function Login({ setIsLoggedIn }) { 
  return (
    <Template
      title="Welcome Back"
      desc1="Build Skills for Today, Tomorrow and Beyond"
      desc2="Education to future-proof your career"
      image={loginImg}
      formType="login"
      // FIX: Pass the prop down to the Template
      setIsLoggedIn={setIsLoggedIn} 
    />
  );
}