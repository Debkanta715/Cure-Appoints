import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='bg-amber-50'>
      <Routes>
        <Route path='/' element='<Home/'/>
        <Route path='' element='<Login/>'/>
      </Routes>
    </div>
  )
}

export default App
