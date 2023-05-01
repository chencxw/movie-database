import React from 'react';
import { NavLink } from 'react-router-dom';

function FilterButtons() {
  return (
    <nav className="nav-sort">
      <ul>
        <li>
          <NavLink exact to="/sort/popular" activeClassName="active">
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/sort/top-rated" activeClassName="active">
            Top Rated
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/sort/now-playing" activeClassName="active">
            Now Playing
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/sort/upcoming" activeClassName="active">
            Upcoming
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default FilterButtons;

