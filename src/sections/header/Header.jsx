import { useEffect } from 'react'
import data from './data'
import HeaderImage from '../../assets/header.jpg'
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
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Portrait" />
        </div>
        <h3 data-aos="fade-up">Kenneth Imade</h3>
        <p data-aos="fade-up">
          I build data-driven applications that turn insights into action. With expertise in software engineering,
          data science, and web development, I create scalable solutions that empower businesses and users.
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