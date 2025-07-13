import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AboutImage from '../../assets/about.png'
import CV from '../../assets/cv.pdf';
import data from './data';
import './about.css'

import { FaFileDownload } from "react-icons/fa";

import Card from '../../components/card/Card';


const About = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <section id='about' data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          {/* <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className="about__card-icon">{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div> */}
          <p>
            Hi, I’m Kenneth a software engineer who loves building things that work behind the scenes. While I’ve always been drawn to data science, 
            I’ve realized what I enjoy most is the technical side of it, designing the systems, pipelines, and tools that make data useful in the first place.
          </p>
          <p>
            I have a strong foundation in backend development and I’m actively building web apps to strengthen my full-stack skills. 
            I enjoy working with technologies like Python, SQL, Flask, Django, React, Apache Spark, and Airflow, and I’m especially 
            interested in how cloud platforms and big data tools can be used to build scalable, reliable systems.
          </p>
          <p>
            Whether it’s setting up automated data workflows, integrating machine learning models, or creating backend APIs for web apps, 
            I love solving technical challenges and figuring out how everything fits together. I’m constantly learning and improving, 
            and I’m excited about roles that let me dive deeper into the engineering side of data while continuing to grow as a backend 
            and full-stack developer.
          </p>
          <a href={CV} download className='btn primary'>Download CV <FaFileDownload /></a>
        </div>
      </div>
    </section>
  )
}

export default About