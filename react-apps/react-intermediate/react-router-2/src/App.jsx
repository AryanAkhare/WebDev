import React, { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import About from '../pages/About' // Import the new About component
import Contact from '../pages/Contact' // Import the new Contact component

import PrivateRoute from '../components/PrivateRoute'
function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  return (
    < div className="w-screen h-screen bg-gray-900 flex flex-col overflow-x-hidden">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </PrivateRoute>
          } 
        />
        {/* New Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App