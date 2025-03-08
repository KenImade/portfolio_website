import { useEffect } from 'react'
import data from './data'
import Typewriter from '../../components/typewriter/Typewriter'
import './header.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <header id='header'>
      <div className="container header__container">
        <Typewriter textList={[
          "Data Engineer 👨🏽‍🔧", 
          "Machine Learning Engineer 🧠",
          "Data Analyst 📈",
          "AI Developer 🤖",
          "Analytics Engineer 🕵🏽‍♂️"
        ]} />
        <p data-aos="fade-up">
          Hi there, My name is Kenneth. A Software Engineer focused on data science and engineering.
          With expertise in software engineering and data science, I create scalable solutions that empower businesses and users.
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target='_blank' 
              rel='noopener noreferer'>{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header