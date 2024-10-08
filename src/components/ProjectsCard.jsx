import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
const ProjectsCard = ({ url, icon, github, title, tags, text }) => {
  return (
    <article className="bg-white rounded-lg shadow-md block hover:shadow-xl duration-300">
      {icon}
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-sm text-slate-700 leading-loose">{text}</p>
        <div className="flex justify-between">
          <div className="mt-4 flex gap-x-4">
            {tags.map((tag, index) => [
              <span
                className="inline-block px-2 py-1 text-xs text-sky-800"
                key={index}
              >
                {tag}
              </span>,
            ])}
          </div>
          <div className="mt-4 flex gap-x-4">
            <a href={url} className={` ${url ? '' : 'hidden'}`}>
              <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href={github}>
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
export default ProjectsCard
