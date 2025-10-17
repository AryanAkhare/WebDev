import { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  // Store wrapper height in state (default: full viewport height)
  const [wrapperHeight, setWrapperHeight] = useState(window.innerHeight);
  const [inputValue, setInputValue] = useState(window.innerHeight);

  // Update wrapper height if input changes
  function handleInputChange(e) {
    const val = parseInt(e.target.value);
    if (!isNaN(val)) {
      setWrapperHeight(val);
      setInputValue(val);
    }
  }

  // Handle dragging to resize wrapper
  function handleDrag(e) {
    setWrapperHeight(e.clientY);
    setInputValue(e.clientY);
  }

  useEffect(() => {
    // Optional: adjust on window resize
    function handleResize() {
      setWrapperHeight(window.innerHeight);
      setInputValue(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        height: `${wrapperHeight}px`,
        width: '100%',
        backgroundColor: '#f0f0f0',
        position: 'relative',
        border: '2px solid blue',
      }}
    >
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        style={{
          position: 'absolute',
          width:'',
          top: 10,
          left: 10,
          padding: '5px 10px',
          border: '2px solid #333',
          borderRadius: '5px',
          width: '20vw',
        }}
      />

      {/* Drag handle at bottom */}
      <div
        onMouseDown={(e) => {
          e.preventDefault();
          function onMouseMove(eMove) {
            handleDrag(eMove);
          }
          function onMouseUp() {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
          }
          window.addEventListener('mousemove', onMouseMove);
          window.addEventListener('mouseup', onMouseUp);
        }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '10px',
          cursor: 'row-resize',
          backgroundColor: 'blue',
        }}
      />
    </div>
  );
}
