import Logo from '../../assets/logo.jpg'
import data from './data'
import { IoColorFilterOutline } from "react-icons/io5"
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="container nav__container">
          <a href="index.html" className='nav__logo'>
            <img src={Logo} alt="Logo" />
          </a>
          <ul className='nav__menu'>
            {
              data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
            }
          </ul>
          <button id='theme__icon'><IoColorFilterOutline /></button>
        </div>
    </nav>
  )
}

export default Navbar