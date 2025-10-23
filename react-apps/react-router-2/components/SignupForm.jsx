import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'; // 👈 IMPORT NEEDED for navigation
import toast from 'react-hot-toast'; // 👈 IMPORT NEEDED for feedback

export default function SignupForm({setIsLoggedIn}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const navigate = useNavigate(); // 👈 Initialize useNavigate

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  }

  // 🎯 FIX: Define the submitHandler function
  function submitHandler(e) {
    e.preventDefault();

    // Basic Password Match Validation (Highly Recommended)
    if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match!");
        return;
    }

    // You can add an API call here for actual signup...
    setIsLoggedIn(true)
    // Feedback and Navigation on successful form submission
    toast.success("Account Created Successfully!");
    const accountData={
        ...formData
    };
    navigate("/dashboard"); // Redirect to dashboard or login page
  }

  return (
    <div>
      {/* Student/Instructor tab */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      {/* FIX: The form calls the new submitHandler */}
      <form onSubmit={submitHandler}> 
        {/* First & Last Name */}
        <div>
          {/* ... (First Name Label/Input) ... */}
          <label>
            <p>First Name <sup>*</sup></p>
            <input
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="Enter first name"
            />
          </label>

          {/* ... (Last Name Label/Input) ... */}
          <label>
            <p>Last Name <sup>*</sup></p>
            <input
              required
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Enter last name"
            />
          </label>
        </div>

        {/* Email */}
        <label>
          <p>Email Address <sup>*</sup></p>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="example@gmail.com"
          />
        </label>

        {/* Password & Confirm Password */}
        <div>
          <label>
            <p>Create Password <sup>*</sup></p>
            <input
              required
              type={showCreatePass ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Create password"
            />
            <span onClick={() => setShowCreatePass((prev) => !prev)}>
              {showCreatePass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </label>

          <label>
            <p>Confirm Password <sup>*</sup></p>
            <input
              required
              type={showConfirmPass ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Re-enter password"
            />
            <span onClick={() => setShowConfirmPass((prev) => !prev)}>
              {showConfirmPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </label>
        </div>
        
        {/* The button is already a submit button by default since it's inside a form */}
        <button type="submit">Create Account</button> 
      </form>
    </div>
  );
}