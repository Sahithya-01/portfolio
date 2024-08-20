import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <ScrollToTop />
    </>
  )
}

export default App
