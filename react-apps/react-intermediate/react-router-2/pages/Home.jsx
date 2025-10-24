import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../assets/unnamed.jpg';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white pt-12">
      
      <div className="flex flex-col md:flex-row items-center justify-between w-11/12 max-w-[1160px] py-2 mx-auto gap-12 pt-[20rem] md:pt-5">
        
        {/* Text Content Section */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Your journey to <br />
            <span className="text-yellow-400">Mastery</span> begins here.
          </h1>
          
          <p className="text-lg text-gray-400 max-w-lg">
            Unlock your potential with expert-led courses and resources. Whether you're a student or an instructor, we provide the tools for success.
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-row gap-4 mt-4">
            <Link to="/signup">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">
                Get Started for Free
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg border border-gray-700 transition duration-300">
                Already a User? Sign In
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative md:w-1/2 mt-10 md:mt-0">
          {/* Shadow Box Effect */}
          <div className="absolute inset-0 border-4 border-yellow-500 rounded-lg transform translate-x-3 translate-y-3 hidden md:block"></div>
          
          <img
            src={homeImage}
            alt="Learning Illustration"
            className="w-full h-auto object-cover rounded-lg shadow-2xl relative z-10"
            loading='lazy'
          />
        </div>

      </div>
    </div>
  );
}