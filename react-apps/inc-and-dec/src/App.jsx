import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function decHandler() {
    setCount(count - 1)
  }

  function incHandler() {
    setCount(count + 1)
  }

  function resetHandler() {
    setCount(0)
  }

  // Reusable Tailwind classes for counter buttons
  const counterBtn = "w-20 h-12 text-5xl hover:bg-gray-200 transition flex justify-center items-center"

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#344151] flex-col gap-10">
      
      <div className="text-3xl font-bold text-blue-500">Increment and Decrement</div>
      
      {/* Counter display with buttons */}
      <div className="bg-white flex justify-center items-center gap-12 py-4 px-4 rounded-sm text-[25px] text-[#344151]">
        <button onClick={decHandler} className={`border-r-2 ${counterBtn}`}>-</button>
        <div>{count}</div>
        <button onClick={incHandler} className={`border-l-2 ${counterBtn}`}>+</button>
      </div>

      {/* Reset button */}
      <button
        onClick={resetHandler}
        className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg hover:bg-[#0280b0] transition"
      >
        Reset
      </button>
      
    </div>
  )
}

export default App
