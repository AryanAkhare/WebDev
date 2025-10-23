import React from "react";
import dashImage from '../assets/dash.png'; // Assuming 'dash.png' is the image you want to use

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-900 text-white px-4 pt-16">

      {/* Hero Section with Background Image */}
      <div className="relative w-full max-w-5xl rounded-lg shadow-2xl overflow-hidden mb-12" style={{ minHeight: '400px' }}>
        {/* Background Image */}
        <img
          src={dashImage}
          alt="Dashboard Background"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40" // Adjust opacity for desired effect
        />

        {/* Overlay for text content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center bg-black bg-opacity-50">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Your <span className="text-yellow-400">Personal Dashboard</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Welcome back, Aryan! Dive into your progress, courses, and activities.
          </p>
        </div>
      </div>

      {/* Other Dashboard Content (Example Card) */}
      <div className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-lg overflow-hidden mt-8">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">Continue Your Learning</h2>
          <p className="text-gray-300">
            Here's a quick look at your recent courses and modules. Keep up the great work!
          </p>
          {/* Add more content here like course cards, progress bars, etc. */}
        </div>
      </div>

    </div>
  );
}