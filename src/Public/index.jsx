import React from 'react'
import Login from './Login'
import Register from './Register'
import { Routes,Route } from 'react-router-dom'

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  )
}

export default index