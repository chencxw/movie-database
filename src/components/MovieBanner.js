import MoreInfoButton from "./MoreInfoButton";
import isFav from '../utilities/isFav';
import FavButton from './FavButton';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, deleteFav } from '../features/favsSlice';

function MovieBanner({movies}) {

  const dispatch = useDispatch();

  function handleFavClick( addToFav, obj) {
    if( addToFav === true ) {
      dispatch( addFav(obj) );
    }else{
      dispatch( deleteFav(obj) );
    }
  }

  const favs = useSelector((state) => state.favs.items);



  return (
    <div className='banner-container'>
      <picture>
        <source media="(max-width: 400px)" srcSet={`https://image.tmdb.org/t/p/w780/${movies[0].backdrop_path}`}/>
        <source media="(max-width: 720px)" srcSet={`https://image.tmdb.org/t/p/w1280/${movies[0].backdrop_path}`}/>
        <img src={`https://image.tmdb.org/t/p/original/${movies[0].backdrop_path}`} alt={`${movies[0].title} Poster`} />
        <div className="bottom-gradient"></div>
      </picture>
      <div className="banner-info-container">
        <h1>{movies[0].title}</h1>
        <div className="banner-btns">
          <div className="btn-favourite">
            {isFav(favs, null, movies[0].id) ?
              <FavButton movies={movies[0]} remove={true} handleFavClick={handleFavClick} /> :
              <FavButton movies={movies[0]} handleFavClick={handleFavClick} />
            }
          </div>
          <MoreInfoButton movies={movies[0]}/>
        </div>
      </div>
    </div>
  )
}

export default MovieBanner