import Card from '../../components/card/Card'

const Project = ({project}) => {
  return (
    <Card className="portfolio__project">
        <div className="portfolio__project-image">
            <img src={project.image} alt="Portfolio project image" />
        </div>
        <h4>{project.title}</h4>
        <p>{project.desc}</p>
        <div className="tools">
            <h5>Tools</h5>
            <span>{project.tools.join(", ")}</span>
        </div>
        <div className="portfolio__project-cta">
            <a href={project.demo} className="btn sm" target="_blank" rel="noopener noreferrer">Demo</a>
            <a href={project.github} className="btn sm primary" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
    </Card>
  )
}

export default Project