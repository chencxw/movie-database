import { useNavigate } from 'react-router-dom';

function SearchBar({ query, onInputChange }) {

  let navigate = useNavigate();

  function handleSubmit(e) {
    debugger;
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
      </form>
    </div>
    
  )
}

export default SearchBar