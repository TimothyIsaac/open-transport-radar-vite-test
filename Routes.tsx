import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Home, Settings, ContactForm } from './src/pages'


function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/feedback" element={<ContactForm/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes