import MoreInfoButton from "./MoreInfoButton"

function MovieBanner({movies}) {
  return (
    <div className='banner-container'>
      <img src={`https://image.tmdb.org/t/p/original/${movies[0].backdrop_path}`} alt={`${movies[0].title} Poster`} />
      <div className="banner-info-container">
        <h1>{movies[0].title}</h1>
        <h2>{movies[0].release_date}</h2>
        <MoreInfoButton movies={movies[0]}/>
      </div>
    </div>
  )
}

export default MovieBanner