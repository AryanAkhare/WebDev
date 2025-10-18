import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import reviews  from './data.js'
import Testimonial from './components/Testimonial.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold mb-20'>Our Testimonials</h1>
        
        <Testimonial reviews={reviews}></Testimonial>
      </div>
    </div>
      

    </>
  )
}

export default App
