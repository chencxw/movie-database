import { NavLink } from 'react-router-dom';
import SearchButton from './SearchButton';

function NavMenu({showHideNav}) {

  function closeNavMenu(e){
    if(window.innerWidth < 600) {
      showHideNav();
    }else{
      e.target.blur()
    }
  }

  return (
    <>
      <nav className="nav-dropdown" onClick={closeNavMenu} >
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/favourites">Favourites</NavLink></li>
        </ul>
      </nav>
      <SearchButton />
    </>
  )
}

export default NavMenu