
function MovieBanner({movies}) {
  return (
    <div className='banner'>
      <img src={`https://image.tmdb.org/t/p/original/${movies[0].backdrop_path}`} className='movie-banner' alt={`${movies[0].title} Poster`} />
      <h1>{movies[0].title}</h1>
    </div>
  )
}

export default MovieBanner