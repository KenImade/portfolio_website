import { links, socials } from './data'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <ul className="nav__menu">
          {
            links.map(fLink => <li key={fLink.id}><a href={fLink.link}>{fLink.title}</a></li>)
          }
        </ul>
        <div className="footer__socials">
          {
            socials.map(sLink => <a key={sLink.id} href={sLink.link} target="_blank" rel="noopener noreferrer">{sLink.icon}</a>)
          }
        </div>
      </div>
      <div className="footer__copyright"><small>2025 Built by Kenneth Imade &copy;</small></div>
    </footer>
  )
}

export default Footer