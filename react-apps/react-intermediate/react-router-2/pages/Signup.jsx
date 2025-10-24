import React from 'react';
import Template from '../components/Template';
import signupImg from '../assets/signup.png'; // replace with your signup image path

// Receiving the prop, as set up in App.jsx:
export default function Signup({ setIsLoggedIn }) { 
  return (
    <Template
      title="Join Us Today"
      desc1="Start Learning and Building Your Skills"
      desc2="Sign up to future-proof your career and unlock opportunities"
      image={signupImg}
      formType="signup"
      // Passing the prop down
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}