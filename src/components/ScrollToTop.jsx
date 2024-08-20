import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    const heroSection = document.getElementById('home')
    const heroBottom = heroSection.getBoundingClientRect().bottom

    if (window.scrollY > heroBottom) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <>
      {isVisible && (
        <a
          href="#home"
          className="fixed bottom-8 right-8 bg-sky-600 text-white p-3 rounded-full hover:bg-sky-700 duration-300"
        >
          <FaArrowUp className="h-4 w-4" />
        </a>
      )}
    </>
  )
}

export default ScrollToTop
