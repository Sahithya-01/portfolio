import React from 'react'
import SectionTitle from './SectionTitle'
import gsuLogo from '../assets/gsu.jpeg'
import bvritLogo from '../assets/bvrit.png'
const Education = () => {
  return (
    <section className="py-20 align-element" id="education">
      <SectionTitle text="education" />
      <div className="py-16 bg-sky-50 shadow-md rounded-lg">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 my-auto">
                <img
                  className="h-32 w-32 lg:h-24 lg:w-24 object-contain"
                  src={gsuLogo}
                />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-semibold">Master of Science</h3>
                <p>Computer Science</p>
                <p className="text-gray-600">Georgia State University</p>
                <p className="text-gray-500">Jan 2023 - Dec 2024</p>
                <p>CGPA: 3.8/4</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">
              Mobile App Dev | Advanced Computer Networks | Text & Web Mining
            </p>
          </div>

          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 my-auto">
                <img
                  className="h-32 w-32 lg:h-24 lg:w-24 object-contain"
                  src={bvritLogo}
                />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-semibold">
                  Bachelor of Technology
                </h3>
                <p>Computer Science & Engineering</p>
                <p className="text-gray-600">
                  B.V Raju Institute of Technology
                </p>
                <p className="text-gray-500">Jul 2017 - May 2021</p>
                <p>CGPA: 3.9/4</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">
              DSA | Web programming | Artificial Intelligence
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
