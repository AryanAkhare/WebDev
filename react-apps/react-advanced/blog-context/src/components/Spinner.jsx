import React from 'react';

// Loading spinner component shown while fetching data
const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="h-8 w-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;