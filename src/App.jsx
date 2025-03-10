import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Nav/Navbar'
import Footer from './Components/footer/Footer.jsx'
import Projects from './Pages/Projects'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Resume from './Pages/Resume'
import NotFound from './Pages/404.jsx'



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
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
