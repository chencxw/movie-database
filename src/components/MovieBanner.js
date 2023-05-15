import MoreInfoButton from "./MoreInfoButton";
import isFav from '../utilities/isFav';
import FavButton from './FavButton';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, deleteFav } from '../features/favsSlice';
import noBanner from '../images/no-banner.png';

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

  function bannerIsSet(movies, length) {
    for ( let i=0; i < length; i++ ) {
      if (movies[i].backdrop_path) {
          // const movieSource = `https://image.tmdb.org/t/p/original/${movies[i].backdrop_path}`;
          return movies[i];
      }
    }
    return (
      <img src={noBanner} alt="No banner available." />
    );
  }



  return (
    <div className='banner-container'>
      <picture>
        <source media="(max-width: 400px)" srcSet={`https://image.tmdb.org/t/p/w780/${bannerIsSet(movies, movies.length).backdrop_path}`}/>
        <source media="(max-width: 720px)" srcSet={`https://image.tmdb.org/t/p/w1280/${bannerIsSet(movies, movies.length).backdrop_path}`}/>
        {/* <img src={`https://image.tmdb.org/t/p/original/${movies[0].backdrop_path}`} alt={`${movies[0].title} Poster`} /> */}
        <img src={`https://image.tmdb.org/t/p/original/${bannerIsSet(movies, movies.length).backdrop_path}`} alt={`${bannerIsSet(movies, movies.length).title} Poster`} />
        <div className="bottom-gradient"></div>
      </picture>
      <div className="banner-info-container">
        <h1>{bannerIsSet(movies, movies.length).title}</h1>
        <div className="banner-btns">
          <div className="btn-favourite">
            {isFav(favs, null, bannerIsSet(movies, movies.length).id) ?
              <FavButton movies={bannerIsSet(movies, movies.length)} remove={true} handleFavClick={handleFavClick} /> :
              <FavButton movies={bannerIsSet(movies, movies.length)} handleFavClick={handleFavClick} />
            }
          </div>
          <MoreInfoButton movies={bannerIsSet(movies, movies.length)}/>
        </div>
      </div>
    </div>
  )
}

export default MovieBanner