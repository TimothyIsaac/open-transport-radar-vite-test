import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Home, Settings } from './pages'


function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/settings" element={<Settings/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes