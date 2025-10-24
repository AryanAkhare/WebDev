// src/hooks/useGif.js

import { useState } from 'react';
import axios from 'axios';

// Store the API key and base URL in constants for easier maintenance
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const BASE_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = () => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);

  // This function now handles both random and tagged GIFs.
  // If 'tag' is provided, it's added to the URL. Otherwise, it fetches a completely random GIF.
  const fetchData = async (tag) => {
    setLoading(true);
    const url = tag ? `${BASE_URL}&tag=${tag}` : BASE_URL;
    
    try {
      const { data } = await axios.get(url);
      const imgSrc = data.data.images.downsized_large.url;
      setGif(imgSrc);
    } catch (error) {
      console.error("Failed to fetch GIF:", error);
      // You could add error handling here to show a message in the UI
    }
    
    setLoading(false);
  };

  // The hook returns the state and the function so components can use them.
  // Note: We removed the useEffect from here to give components control.
  return { gif, loading, fetchData };
};

export default useGif;