import './contact.css';
import { BsMailbox2 } from "react-icons/bs";
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
  useEffect(() => {
        AOS.init({duration: 2000})
      }, [])
      
  return (
    <section id='contact'>
      <h2>Contact</h2>
      <p>Get in touch by sending a mail to my inbox</p>
      <div className="container contact__container" data-aos="fade-up">
        <a href="mailto:kenimade91@gmail.com" rel="noopener noreferrer">
          <BsMailbox2 />
        </a>
      </div>
    </section>
  );
};

export default Contact;