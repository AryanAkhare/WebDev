// src/components/About.jsx
import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-gray-600 text-center max-w-2xl mb-6">
        Welcome! We are a team dedicated to building user-friendly web applications.
        Our goal is to make learning and interacting with technology simple, intuitive,
        and accessible for everyone.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl text-gray-700">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p>
          To provide high-quality educational resources, tools, and applications
          that help users grow their skills and achieve their goals.
        </p>
      </div>
    </div>
  );
}
