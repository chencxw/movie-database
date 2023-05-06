import { useEffect, useState } from "react";
import { appTitle } from "../globals/globals";
import isFav from '../utilities/isFav';
import FavButton from './FavButton';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, deleteFav } from '../features/favsSlice';


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

  function roundRating(rating) {
    let newRating = Math.round(rating * 100) / 100
    return newRating;
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
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={`${movie.title} Poster`} />
        <div className="bottom-gradient"></div>
      </div>

      <div className="single-movie-info">
        <h1>{movie.title}</h1>
        <div className='movie-specs'>
            <p>{movie.release_date}</p>
            <p><svg fill="#fff" width="25px" height="auto" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero"/></svg> {roundRating(`${movie.vote_average}`)}</p>
            <p>{convertTime(`${movie.runtime}`)}</p>
        </div>
        <p className="movie-genre">{movie.genres.map((genre) => <span key={genre.id}>{genre.name} | </span>)}</p>
        <p className='movie-overview'>{movie.overview}</p>


      <div className="btn-favourite">
        {isFav(favs, null, movie.id) ?
          <FavButton movies={movie} remove={true} handleFavClick={handleFavClick} /> :
          <FavButton movies={movie} handleFavClick={handleFavClick} />
        }
      </div>

      <iframe className="trailer" src={`https://www.youtube.com/embed/${videos.results[0].key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    </section>
  )
}

export default SingleMovie