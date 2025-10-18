import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = ({ review }) => {
  return (
    <div className="flex flex-col relative items-center p-8 bg-white rounded-2xl shadow-lg w-[85vw] md:w-[700px] transition-all duration-700 hover:shadow-2xl hover:-translate-y-1">
  
  {/* Image with glowing circle */}
  <div className="relative -mt-20 w-[140px] h-[140px]">
    <div className="absolute inset-0 m-auto w-full h-full bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-500 rounded-full blur-xl z-0"></div>
    <img
      className="relative z-10 w-full h-full rounded-full border-4 border-white hover:scale-105 transition-transform duration-300 shadow-xl drop-shadow-2xl"
      src={review.image}
      alt={review.name}
    />
  </div>

  {/* Name & Job */}
  <p className="mt-8 text-2xl font-extrabold capitalize text-center text-gray-800 hover:text-violet-500 transition-colors duration-300">{review.name}</p>
  <p className="text-violet-400 uppercase text-sm text-center tracking-wide">{review.job}</p>

  {/* Quote */}
  <div className="text-violet-400 text-3xl mt-5 hover:scale-110 transition-transform duration-300">
    <FaQuoteLeft className="mx-auto opacity-80" />
  </div>
  <p className="mt-4 text-center text-gray-600 leading-relaxed">{review.text}</p>
  <div className="text-violet-400 text-3xl mt-5 hover:scale-110 transition-transform duration-300">
    <FaQuoteRight className="mx-auto opacity-80" />
  </div>
</div>
  );
};

export default Card;
