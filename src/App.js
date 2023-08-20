import React from 'react'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Project from "./Pages/Projects"
import Contact from "./Pages/Contact"
import Services from './Pages/Services'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App