import { useNavigate } from 'react-router-dom';
import { searchSVG } from '../globals/globals';
import {useState} from 'react'

function SearchBar({closeNavMenu}) {

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    let q = e.target.elements.search.value;

    navigate(`/search/${q}`);
  }

  return (
    <div className="search-bar">
      <form action="/search" className="search-form" method="get" onSubmit={handleSubmit}>
        <label htmlFor="search" className="sr-only">Search</label>
        <input  type="text"
                className="search-input"
                name="search"
                id="search"
                placeholder="Search..." />
        <button type="submit" value="Submit" className='search-btn' onClick={closeNavMenu} >{searchSVG}</button>
      </form>
    </div>
    
  )
}

export default SearchBar