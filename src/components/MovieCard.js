// import { Link, useParams } from 'react-router-dom';
import MoreInfoButton from './MoreInfoButton';
import FavButton from './FavButton';
import { starSVG } from "../globals/globals";
import { useDispatch, useSelector } from 'react-redux';
import { addFav, deleteFav } from '../features/favsSlice';
import isFav from '../utilities/isFav';
import noPoster from '../images/no-movie-poster.png';
import {useState, useEffect } from "react";


function MovieCard({movies}) {
  
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [matches, setMatches] = useState(false);
  const query = "(max-width: 1024px)";

  const handleMediaChange = (e) => {
    setMatches(e.matches);
  }

  function handleIsClicked(id)  {
    setIsSelected(id);
    setIsClicked(current => !current);
  }

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener("change", handleMediaChange);
    return () => {
      mediaQueryList.removeEventListener("change", handleMediaChange);
    }
  }, [query])

  useEffect(() => {
    if(window.innerWidth > 1024) {
      setIsClicked(false);
    }
  }, [matches])

  function handleFavClick( addToFav, obj) {
    if( addToFav === true ) {
      dispatch( addFav(obj) );
    }else{
      dispatch( deleteFav(obj) );
    }
  }

  const favs = useSelector((state) => state.favs.items);

  return (
    <div className="movie-container">
        {movies.map(movies => (
          <article className="movie" key={movies.id} >
            <div className="movie-card" onClick={matches ? () => handleIsClicked(movies.id) : null}>
              <div className="movie-poster">
                {movies.poster_path === null ?
                  <img src={noPoster} alt="No poster available." /> :
                  <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt={`${movies.title} Poster`} />
                }                
              </div>
              <div className={(movies.id === isSelected && isClicked) ? 
                              'movie-card-overlay show-overlay' : 
                              'movie-card-overlay'} >
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
            </div>
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