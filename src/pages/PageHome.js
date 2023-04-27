import { useEffect, useState } from 'react';
import { appTitle, apiKey } from '../globals/globals';
import MovieCard from '../components/MovieCard';
import MovieBanner from '../components/MovieBanner';
import MoreInfoButton from '../components/MoreInfoButton';



function PageHome() {

  const baseUrl = 'https://api.themoviedb.org/3'
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    document.title = `${appTitle}`;
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      let allMovies = [];
      let page = 1;
      let totalPages = 1;

      while (page <= totalPages) {
        const response = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}&page=${page}`);
        const data = await response.json();

        // console.log(response);
        // console.log(data);


        allMovies = allMovies.concat(data.results);
        // totalPages = data.total_pages;
        page++;
      }
   
      setMovies(allMovies);
    };

    fetchMovies();
  }, []);

  if (movies.length === 0) {
    return <div>Loading movies...</div>;
  }
  

  return (
    <main>
      <header>
        <MovieBanner  movies={movies} />
        <MoreInfoButton movies={movies}/>
      </header>

      <section>
        <h1>Popular Movies</h1>
        <MovieCard movies={movies} />
      </section>
    </main>
  );
}

export default PageHome;