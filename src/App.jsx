import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Theme from './theme/Theme';
import { useThemeContext } from './context/theme-context';
import { useRef, useState, useEffect, useCallback } from 'react';

// import Testimonials from './sections/testimonials/Testimonials';
// import FAQs from './sections/faqs/FAQs';


const App= () => {
  const {themeState} = useThemeContext();
  
  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPosition, setSiteYPosition] = useState(0);

  const floatingNavTogglerHandler = useCallback(() => {
    const currentY = mainRef?.current?.getBoundingClientRect()?.y || 0;
    setShowFloatingNav(Math.abs(siteYPosition - currentY) > 20);
    setSiteYPosition(currentY);
  },[siteYPosition]);

  useEffect(() => {
    const handleScroll = () => floatingNavTogglerHandler();
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [floatingNavTogglerHandler])

  return (
    <main 
      className={`${themeState.primary} ${themeState.background}`}
      ref={mainRef}
    >
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <Theme/>
      {showFloatingNav && <FloatingNav/>}
    </main>
  )
}

export default App