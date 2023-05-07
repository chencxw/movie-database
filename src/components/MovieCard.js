import { Link, useParams } from 'react-router-dom';
import MoreInfoButton from './MoreInfoButton';
import FavButton from './FavButton';
import { starSVG, calendarSVG } from "../globals/globals";
import { useDispatch, useSelector } from 'react-redux';
import { addFav, deleteFav } from '../features/favsSlice';
import isFav from '../utilities/isFav';


function MovieCard({movies}) {
  
  const dispatch = useDispatch();

  function handleFavClick( addToFav, obj) {
    if( addToFav === true ) {
      dispatch( addFav(obj) );
    }else{
      dispatch( deleteFav(obj) );
    }
  }

  const favs = useSelector((state) => state.favs.items);

  const {id} = useParams();

  return (
    <div className="movie-container">
        {movies.map(movies => (
          <article className="movie" key={movies.id} >
            <Link to={`/movie/${movies.id}`} className="movie-card">
              <div className="movie-poster">
                  <img src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} alt={`${movies.title} Poster`} />
                
              </div>
              <div className="movie-card-overlay">
                <p className="movie-rate">{starSVG} {movies.vote_average}</p>
                <p className="movie-overview">{movies.overview}</p>
                <div className="btn-favourite">
                  {isFav(favs, null, movies.id) ?
                    <FavButton movies={movies} remove={true} handleFavClick={handleFavClick} /> :
                    <FavButton movies={movies} handleFavClick={handleFavClick} />
                  }
                </div>
                <MoreInfoButton movies={movies}/>
              </div>
            </Link>
            <div className="movie-info">
              <p>{movies.release_date}</p>
              <h3>{movies.title}</h3>
            </div>
          </article>

        ))}
    </div>
  )
}

export default MovieCard