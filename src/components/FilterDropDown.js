import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function FilterButtons() {
  const [path, setPath] = useState('/sort/popular');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const newPath = event.target.value;
    setPath(newPath);
    navigate(newPath);
  };

  return (
    <nav className="nav-sort">
      <select onChange={handleChange} value={path}>
        <option value="/sort/popular">Popular</option>
        <option value="/sort/top-rated">Top Rated</option>
        <option value="/sort/now-playing">Now Playing</option>
        <option value="/sort/upcoming">Upcoming</option>
      </select>
      {/* <ul>
        <li>
          <Link to="/sort/popular" activeClassName="active">
            Popular
          </Link>
        </li>
        <li>
          <Link to="/sort/top-rated" activeClassName="active">
            Top Rated
          </Link>
        </li>
        <li>
          <Link to="/sort/now-playing" activeClassName="active">
            Now Playing
          </Link>
        </li>
        <li>
          <Link to="/sort/upcoming" activeClassName="active">
            Upcoming
          </Link>
        </li>
      </ul> */}
    </nav>
  );
}

export default FilterButtons;
