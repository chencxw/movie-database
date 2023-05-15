import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    </nav>
  );
}

export default FilterButtons;
