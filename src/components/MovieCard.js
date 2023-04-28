import {Link} from 'react-router-dom';
import MoreInfoButton from './MoreInfoButton';

function MovieCard({movies}) {

  return (
    <div className='movie-container'>
        {movies.map(movies => (
          <article className='movie-card' key={movies.id} >
            <div>
              <img src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} className='movie-poster' alt={`${movies.title} Poster`} />
              <p>{movies.release_date}</p>
              <h2>{movies.title}</h2>
            </div>
            
            <div className='movie-card-overlay'>
              <p>{movies.vote_average}</p>
              <p>{movies.overview}</p>
              <MoreInfoButton movies={movies}/>
            </div>
          </article>

        ))}
    </div>
  )
}

export default MovieCard