import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function FilterButtons() {

  const location = useLocation();

  return (
    <nav className="nav-sort">
      <ul>
        <li>
          <NavLink to="/sort/popular" className={({ isActive }) => (isActive || location.pathname === '/' ? 'active' : undefined)}>
            Popular
          </NavLink>
        </li>
        <span>|</span>
        <li>
          <NavLink to="/sort/top-rated" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Top Rated
          </NavLink>
        </li>
        <span>|</span>
        <li>
          <NavLink to="/sort/now-playing" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Now Playing
          </NavLink>
        </li>
        <span>|</span>
        <li>
          <NavLink to="/sort/upcoming" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Upcoming
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default FilterButtons;

