import React from 'react'
import Register from './Register'
import Login from './Login'
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom'

const Routing = () => {
  return (
    <Router>
      <div>
        <a href="/Login">Login</a>
        <a href="/Register">Register</a>
      </div>

      <Routes>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
      </Routes>
    </Router>
  )
}

export default Routing
