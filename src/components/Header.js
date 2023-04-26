import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';

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
    <header className={ navOpen? 'show' : undefined }>
      <h1>Logo</h1>
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