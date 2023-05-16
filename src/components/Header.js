import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';
import logo from '../images/logo.png';

function Header() {

  const [navOpen, setNavOpen] = useState(false);

  function showHideNav() {
    setNavOpen(!navOpen);
  }

  function checkDesktop(e) {
    if(e.matches) {
      setNavOpen(false);
    }
  }

  useEffect(() => {
    let mediaQuery = window.matchMedia('(min-width: 800px)');
    mediaQuery.addEventListener('change', checkDesktop);
    return () => mediaQuery.removeEventListener('change', checkDesktop);
  })



  return (
    <header className={ navOpen? 'show' : undefined } id="page-header" >
      <Link className="logo" to={'/movie-database'}><img src={logo} alt="logo" /></Link>
      <button className='hamburger-btn' onMouseDown={(e) => {e.preventDefault();}} onClick={showHideNav} >
        <span className="hamburger-icon">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </span>
        <span className="sr-only">Menu</span>
      </button>
      <NavMenu showHideNav={showHideNav} />
    </header>
  )
}

export default Header