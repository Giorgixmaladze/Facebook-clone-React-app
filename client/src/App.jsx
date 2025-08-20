import { useState } from 'react'
import Header from './components/Header/Header'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Profile from './pages/Profile/Profile'
import Friends from './pages/Friends/Friends'
function App() {

  return (
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/profile' element={<Profile />} />
      <Route path="/friend" element={<Friends />} />
    </Routes>
  )
}

export default App
