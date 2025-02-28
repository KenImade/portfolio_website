import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf';
import data from './data';
import './about.css'

import { FaFileDownload } from "react-icons/fa";

import Card from '../../components/card/Card';


const About = () => {
  return (
    <section id='about'>
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className="about__card-icon">{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>
            Hi, I'm [Your Name], a passionate Software Engineer with a strong focus on Data Science, Data Engineering, 
            and Web Development. With a deep understanding of building data-driven solutions, 
            I work at the intersection of cutting-edge technologies to solve complex problems and drive business impact.
          </p>
          <p>
            I specialize in developing data pipelines, implementing machine learning models, and creating scalable applications. 
            My experience includes working with technologies such as Python, SQL, Apache Spark, Airflow, Flask, Django, and React, 
            and I enjoy leveraging the latest advancements in cloud computing and big data to deliver impactful results.
          </p>
          <p>
            Whether it’s building automated data workflows, crafting full-stack web applications, or applying machine learning 
            techniques to solve real-world problems, I thrive in fast-paced environments and love learning new tools and methods 
            to improve the solutions I build.
          </p>
          <p>
            I’m passionate about transforming raw data into actionable insights and creating software solutions that help organizations 
            achieve their goals.
          </p>
          <a href={CV} download className='btn primary'>Download CV <FaFileDownload /></a>
        </div>
      </div>
    </section>
  )
}

export default About