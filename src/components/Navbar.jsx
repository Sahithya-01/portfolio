import React from 'react'
import { links } from '../data'

const Navbar = () => {
  return (
    <nav className="bg-sky-100  sticky top-0 z-10">
      <div className="align-element pt-4 pb-2 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:pt-8 sm:pb-4">
        <h2 className="text-3xl font-bold ">
          Port
          <span className="text-sky-600">folio</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-sky-600 duration-300"
              >
                {text}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
