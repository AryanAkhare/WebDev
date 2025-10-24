// src/App.js

import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    // Main container with a gradient background
    <div className="w-full min-h-screen flex flex-col items-center p-4 bg-gradient-to-br from-green-400 to-blue-600">
      
      {/* Main Title */}
      <h1 className="w-11/12 max-w-xl text-3xl font-bold text-center bg-white rounded-lg shadow-md mt-10 p-3">
        Random GIFs
      </h1>

      {/* Container for the GIF cards */}
      <div className="flex flex-col items-center w-full max-w-xl mt-8 gap-y-10 mb-10">
        <Random />
        <Tag />
      </div>
      
    </div>
  );
}

export default App;