import React from 'react'
import Register from './Register'
import Login from './Login'
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom'

const Routing = () => {
  return (
    <Router>
      <div>
        <Link to="/Login">Login</Link>
        <Link to="/Register">Register</Link>
      </div>

      <Routes>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </Router>
  )
}

export default Routing
