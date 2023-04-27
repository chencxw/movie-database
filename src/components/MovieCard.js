
function MovieCard({movies}) {

  return (
    <div className='posterGrid'>
      <ul>
        {movies.map(movies => (
          <li key={movies.id}>
            <h2>{movies.title}</h2>
            <img src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} className='movie-poster' alt={`${movies.title} Poster`} />
            <p>{movies.overview}</p>
            <p>Release Date: {movies.release_date}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieCard