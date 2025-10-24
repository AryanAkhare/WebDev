// src/components/Tag.js

import { useState, useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

export default function Tag() {
  // Start with an initial tag so the user sees a relevant GIF on load.
  const [tag, setTag] = useState('coding');
  const { gif, loading, fetchData } = useGif();
  
  // Fetch a GIF based on the initial tag when the component first loads.
  useEffect(() => {
    fetchData(tag);
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-y-5 p-5 rounded-xl bg-blue-500 border-2 border-blue-600 shadow-lg">
      
      <h2 className="text-2xl font-bold text-white uppercase underline tracking-wide text-center">
        Random {tag} GIF
      </h2>

      {/* GIF display area */}
      <div className="flex items-center justify-center w-full h-64 bg-blue-300 rounded-lg overflow-hidden">
        {loading ? <Spinner /> : <img src={gif} alt={`A GIF about ${tag}`} className="w-full h-full object-cover" />}
      </div>

      {/* Input for the user to type a tag */}
      <input 
        type="text" 
        className="w-10/12 text-lg py-2 rounded-lg text-center bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setTag(e.target.value)}
        value={tag}
      />
      
      {/* Generate Button - This now passes the 'tag' to fetchData */}
      <button
        onClick={() => fetchData(tag)}
        className="w-10/12 bg-yellow-100 text-gray-800 font-semibold py-2 rounded-lg shadow-md hover:bg-yellow-200 active:scale-95 transition-all duration-200"
      >
        Generate
      </button>

    </div>
  );
}