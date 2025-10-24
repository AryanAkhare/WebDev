// src/components/Random.js

import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

export default function Random() {
  const { gif, loading, fetchData } = useGif();

  // useEffect with an empty dependency array [] runs only ONCE when the component first loads.
  useEffect(() => {
    fetchData(); // Fetch a random GIF on component mount.
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-y-5 p-5 rounded-xl bg-green-500 border-2 border-green-600 shadow-lg">
      
      <h2 className="text-2xl font-bold text-white uppercase underline tracking-wide">
        A Random GIF
      </h2>

      {/* GIF display area */}
      <div className="flex items-center justify-center w-full h-64 bg-green-300 rounded-lg overflow-hidden">
        {loading ? <Spinner /> : <img src={gif} alt="Random GIF" className="w-full h-full object-cover" />}
      </div>

      {/* Generate Button */}
      <button
        onClick={() => fetchData()} // Call fetchData without a tag for a random GIF
        className="w-10/12 bg-yellow-100 text-gray-800 font-semibold py-2 rounded-lg shadow-md hover:bg-yellow-200 active:scale-95 transition-all duration-200"
      >
        Generate
      </button>

    </div>
  );
}