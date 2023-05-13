import { useNavigate } from 'react-router-dom';

function SearchBar() {

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
        <input type="submit" value="Submit" />
      </form>
    </div>
    
  )
}

export default SearchBar