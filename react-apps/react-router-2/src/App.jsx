import React, { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* //route for dashboard if login true else nav to login*/}
        {/* <Route
          path="/dashboard"
          element={
            isLoggedin ? <Dashboard /> : <Navigate to="/login" replace />
          }
        /> */}

        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </>
  )
}

export default App
