import React from 'react'
import profileImg from '../../public/assets/profilePicture.jpeg'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="bg-sky-100 py-24 " id="home">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Sahithya</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/Sahithya-01">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/sahithya-hanumandla-a5a21918b/">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="/Final_resume.pdf" download>
              <button className="bg-sky-500 h-8  text-white px-2 rounded-md hover:bg-sky-700 duration-300">
                Resume
              </button>
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img
            src={profileImg}
            className="h-80 lg:h-96 border-4 border-sky-600 shadow-2xl rounded-tr-lg"
          />
        </article>
      </div>
    </section>
  )
}

export default Hero
