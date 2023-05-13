import {useParams} from 'react-router-dom';
import { API_TOKEN  } from '../globals/globals';
import { useState, useEffect } from 'react';
import MovieCard from "../components/MovieCard";

function PageSearch() {
    const {userInput} = useParams();
    const baseUrl = 'https://api.themoviedb.org/3/search/movie?query=';
    const [results, setResults] = useState();

    // https://api.themoviedb.org/3/search/movie?query=john%20wick&api_key=1e55f4bc336e25a4e8d5e6a0873de6c6&language=en-US&page=1&include_adult=false

    useEffect(() => {
        const fetchResults = async () => {
            const response = await fetch(`${baseUrl}${userInput}&language=en-US&page=1`, {  
              headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + API_TOKEN
            }});
            let searchData = await response.json();
      
            setResults(searchData);
          }
        
        fetchResults();
    }, []);

  return (
    <section className="search-page">
        <div className="search-title">
            <h2>Search results for...</h2>
            <h3>"{userInput}"</h3>
        </div>
        {results ? <MovieCard movies={results.results} /> : <div className='loadingMovies'><p>Loading...</p></div>}
    </section>
  )
}
export default PageSearch