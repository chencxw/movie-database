import { useEffect, useState } from 'react';
import { appTitle, apiKey, API_TOKEN } from '../globals/globals';
import MovieCard from '../components/MovieCard';
import MovieBanner from '../components/MovieBanner';
import FilterButtons from '../components/FilterButtons';


function PageHome({sort = 'popular'}) {

  const baseUrl = 'https://api.themoviedb.org/3'
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    document.title = `${appTitle}`;
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      
        const response = await fetch(`${baseUrl}/movie/${sort}?language=en-US&page=1`, {  
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + API_TOKEN
        }});
        let data = await response.json();

        data = data.results.splice(0, 12);

        // console.log(response);
        // console.log(data);
        //`${baseUrl}/movie/${sort}?api_key=${apiKey}&page=${page}`
   
      setMovies(data);
    };

    fetchMovies();
  }, [sort]);

  if (movies.length === 0) {
    return <div>Loading movies...</div>;
  }
  

  return (
    <main>
      <header>
        <MovieBanner  movies={movies} />
      </header>

      <section>
        <FilterButtons />
        <MovieCard movies={movies} />
      </section>
    </main>
  );
}

export default PageHome;