import { useEffect, useState } from "react";
import { appTitle, starSVG, calendarSVG, clockSVG } from "../globals/globals";
import isFav from '../utilities/isFav';
import FavButton from './FavButton';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, deleteFav } from '../features/favsSlice';

function roundRating(rating) {
  let newRating = Math.round(rating * 100) / 100
  return newRating;
}

function SingleMovie({movie, videos}) {
  const [matches, setMatches] = useState(false);
  const query = "(max-width: 800px)";

  const handleMediaChange = (e) => {
    setMatches(e.matches);
  }

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener("change", handleMediaChange);
    return () => {
      mediaQueryList.removeEventListener("change", handleMediaChange)
    }
  }, [query])

  useEffect(() => {
    document.title = `${appTitle} | ${movie.title}`;

  }, []);

  function convertTime(time) {
    let hours = Math.floor(time/60);
    let minutes = time % 60;

    return (`${hours}H ${minutes}M`)
  }

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
    <section className="individual-movie" style={matches ? {backgroundImage: "none"} : {backgroundImage: movie.backdrop_path && `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`} }>
      <div className={matches ? "single-movie-poster" : "hide-poster"} >
        { movie.backdrop_path ? 
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={`${movie.title} Poster`} />
        : <div className="no-backdrop"></div>}
        <div className="bottom-gradient-single"></div>
      </div>

      <div className="single-movie-info">
        <h1>{movie.title}</h1>
        <div className='movie-specs'>
            <p>{calendarSVG} {movie.release_date}</p>
            <p>{starSVG} {roundRating(`${movie.vote_average}`)}</p>
            <p>{clockSVG} {convertTime(`${movie.runtime}`)}</p>
        </div>
        <p className="movie-genre">{movie.genres.map((genre) => <span key={genre.id}>{genre.name} | </span>)}</p>
        <p className='movie-overview'>{movie.overview}</p>


      <div className="btn-favourite">
        {isFav(favs, null, movie.id) ?
          <FavButton movies={movie} remove={true} handleFavClick={handleFavClick} /> :
          <FavButton movies={movie} handleFavClick={handleFavClick} />
        }
      </div>

      {videos.results[0] &&
      <iframe className="trailer" src={`https://www.youtube.com/embed/${videos.results[0].key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>}

    </div>
    </section>
  )
}

export {roundRating}
export default SingleMovie