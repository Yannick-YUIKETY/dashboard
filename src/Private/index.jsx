import React from 'react'
import Home from './Home'
import Compte from './Compte'
import { Routes, Route } from 'react-router-dom'

const index = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/compte" element={<Compte/>}/>
        </Routes>
    </div>
  )
}

export default index