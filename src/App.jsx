import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Nav/Navbar'
import Footer from './Components/footer/Footer.jsx'
import Projects from './Pages/Projects'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Resume from './Pages/Resume'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about-me" element={<About/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/resume" element={<Resume/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
