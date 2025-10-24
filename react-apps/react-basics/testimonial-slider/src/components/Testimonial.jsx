import React, { useState } from "react";
import Card from "./Card.jsx";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonial = ({ reviews }) => {
  const [index, setIndex] = useState(0);

  const leftHandler = () => {
    setIndex(index === 0 ? reviews.length - 1 : index - 1);
  };

  const rightHandler = () => {
    setIndex(index === reviews.length - 1 ? 0 : index + 1);
  };

  const surpriseHandler = () => {
    let randIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randIndex);
  };

  return (
    <div className="flex flex-col items-center mt-10 gap-6">
      <Card review={reviews[index]} />

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-6 text-3xl text-violet-400 font-bold mb-0">
        <button
          onClick={leftHandler}
          className="cursor-pointer hover:text-violet-500 transition-colors duration-200"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={rightHandler}
          className="cursor-pointer hover:text-violet-500 transition-colors duration-200"
        >
          <FiChevronRight />
        </button>
      </div>

      {/* Surprise Me Button */}
      <button
        onClick={surpriseHandler}
        className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 px-12 py-3 rounded-lg font-bold text-white text-lg shadow-md hover:shadow-lg"
      >
        Surprise Me
      </button>
    </div>
  );
};

export default Testimonial;
