import MoreInfoButton from "./MoreInfoButton"

function MovieBanner({movies}) {
  return (
    <div className='banner-container'>
      <picture>
        <source media="(max-width: 400px)" srcSet={`https://image.tmdb.org/t/p/w780/${movies[0].backdrop_path}`}/>
        <source media="(max-width: 720px)" srcSet={`https://image.tmdb.org/t/p/w1280/${movies[0].backdrop_path}`}/>
        <img src={`https://image.tmdb.org/t/p/original/${movies[0].backdrop_path}`} alt={`${movies[0].title} Poster`} />
      </picture>
      <div className="banner-info-container">
        <h1>{movies[0].title}</h1>
        {/* <h2>{movies[0].release_date}</h2> */}
        <MoreInfoButton movies={movies[0]}/>
      </div>
    </div>
  )
}

export default MovieBanner