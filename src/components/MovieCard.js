import {Link} from 'react-router-dom';
import MoreInfoButton from './MoreInfoButton';
import FavButton from './components/FavButton';
import { useDispatch } from 'react-redux';
import { addFav, deleteFav } from '../features/favsSlice';
import isFav from '../utilities/isFav';

function MovieCard({movies, isFav}) {
  
  const dispatch = useDispatch();

  function handleFavClick( addToFav, obj) {
    if( addToFav = true ) {
      dispatch( addFav(obj) );
    }else{
      dispatch( deleteFav(obj) );
    }
  }

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
            <div className="btn-favourite">
              {isFav ?
                <FavButton movies={movies} remove={true} handleFavClick={handleFavClick} /> :
                <FavButton movies={movies} handleFavClick={handleFavClick} />
              }


            </div>
          </article>

        ))}
    </div>
  )
}

export default MovieCard