import React from 'react'

const SkillsCard = ({ icon, title }) => {
  return (
    <article className="flex flex-col items-center">
      <span>{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
    </article>
  )
}

export default SkillsCard
