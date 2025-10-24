import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function SignupForm({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [accountType, setAccountType] = useState("student");

  const navigate = useNavigate();

  const placeholderStyle =
    "bg-gray-800 rounded-md w-full p-3 placeholder-white text-white shadow-[0_2px_6px_rgba(255,255,255,0.15)] focus:outline-none focus:ring-1 focus:ring-blue-400";

  const submitStyle = `w-full bg-yellow-500 hover:bg-yellow-300 text-gray-900 font-semibold rounded-lg py-3 mt-2 shadow-[0_4px_12px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.45)] transition-colors transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900`;

  const changeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created Successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col w-full gap-6 pt-3 px-4 sm:px-6 md:px-0">
      {/* Student/Instructor Toggle */}
      <div className="relative flex bg-gray-800 p-1 my-6 rounded-full w-full max-w-xs mx-auto">
        {/* Sliding pill */}
        <div
          className="absolute top-0 left-0 h-full w-1/2 bg-yellow-500 rounded-full transition-transform duration-300 ease-in-out"
          style={{
            transform: accountType === "student" ? "translateX(0%)" : "translateX(100%)",
          }}
        ></div>

        <button
          onClick={() => setAccountType("student")}
          className={`relative flex-1 z-10 py-2 text-sm sm:text-base font-semibold text-center ${
            accountType === "student" ? "text-gray-900" : "text-gray-300 hover:text-white"
          }`}
        >
          Student
        </button>

        <button
          onClick={() => setAccountType("instructor")}
          className={`relative flex-1 z-10 py-2 text-sm sm:text-base font-semibold text-center ${
            accountType === "instructor" ? "text-gray-900" : "text-gray-300 hover:text-white"
          }`}
        >
          Instructor
        </button>
      </div>

      {/* Form */}
      <form onSubmit={submitHandler} className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
        {/* First + Last Name */}
        <div className="flex flex-col md:flex-row gap-4">
          <label className="flex-1">
            <p className="text-[0.875rem] text-gray-300 mb-1">
              First Name <sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="Enter first name"
              className={placeholderStyle}
            />
          </label>
          <label className="flex-1">
            <p className="text-[0.875rem] text-gray-300 mb-1">
              Last Name <sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Enter last name"
              className={placeholderStyle}
            />
          </label>
        </div>

        {/* Email */}
        <label>
          <p className="text-[0.875rem] text-gray-300 mb-1">
            Email <sup className="text-pink-500">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="example@gmail.com"
            className={placeholderStyle}
          />
        </label>

        {/* Password + Confirm Password */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Create Password */}
          <label className="flex-1 relative">
            <p className="text-[0.875rem] text-gray-300 mb-1">
              Create Password <sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type={showCreatePass ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Create password"
              className={placeholderStyle + " pr-10"}
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 cursor-pointer"
              onClick={() => setShowCreatePass((prev) => !prev)}
            >
              {showCreatePass ? <AiOutlineEye fontSize={20} /> : <AiOutlineEyeInvisible fontSize={20} />}
            </span>
          </label>

          {/* Confirm Password */}
          <label className="flex-1 relative">
            <p className="text-[0.875rem] text-gray-300 mb-1">
              Confirm Password <sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type={showConfirmPass ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Re-enter password"
              className={placeholderStyle + " pr-10"}
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 cursor-pointer"
              onClick={() => setShowConfirmPass((prev) => !prev)}
            >
              {showConfirmPass ? <AiOutlineEye fontSize={20} /> : <AiOutlineEyeInvisible fontSize={20} />}
            </span>
          </label>
        </div>

        {/* Submit */}
        <button type="submit" className={submitStyle}>
          Create Account
        </button>
      </form>
    </div>
  );
}
