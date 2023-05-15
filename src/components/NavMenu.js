import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

function NavMenu({showHideNav}) {

  function closeNavMenu(e){
    if(window.innerWidth < 800) {
      showHideNav();
    }else{
      e.target.blur();
    }
  }

  return (
    <>
      <nav className="nav-dropdown" >
        <ul onClick={closeNavMenu}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/favourites">Favourites</NavLink></li>
        </ul>
        <SearchBar closeNavMenu={closeNavMenu}/>
      </nav>
    </>
  )
}

export default NavMenu