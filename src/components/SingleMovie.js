import { useEffect } from "react";
import { appTitle } from "../globals/globals";


function SingleMovie({movie}) {

  useEffect(() => {
    document.title = `${appTitle} | ${movie.title}`;

  }, []);

  function convertTime(time) {
    let hours = Math.floor(time/60);
    let minutes = time % 60;

    return (<p>{hours}H {minutes}M</p>)
  }

  function roundRating(rating) {
    let newRating = Math.round(rating * 100) / 100
    return (<p>{newRating}</p>)
  }


  return (
    <div className="single-movie">
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={`${movie.title} Poster`} />
        <div className="movie-info">
            <h1>{movie.title}</h1>
            <p>{movie.release_date}</p>
            {roundRating(`${movie.vote_average}`)}
            {convertTime(`${movie.runtime}`)}
            <p className="movie-genre">{movie.genres.map((genre) => <span key={genre.id}>{genre.name} | </span>)}</p>
            <p className='movie-overview'>{movie.overview}</p>
        </div>
    </div>
  )
}

export default SingleMovie