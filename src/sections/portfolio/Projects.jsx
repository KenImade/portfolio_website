import Project from "./Project"
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = ({projects}) => {
  useEffect(() => {
        AOS.init({duration: 2000})
      }, [])
  return (
    <div className="portfolio__projects" data-aos="fade-in">
        {
            projects.map(project => (
                <Project key={project.id} project={project}/>
            ))
        }
    </div>
  )
}

export default Projects