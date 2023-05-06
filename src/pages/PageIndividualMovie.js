import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { appTitle, API_TOKEN  } from '../globals/globals';
import SingleMovie from '../components/SingleMovie';


function PageIndividualMovie() {
  const baseUrl = 'https://api.themoviedb.org/3'
  const { id } = useParams();
  const [movie, setMovie] = useState();

  // https://api.themoviedb.org/3/movie/640146/videos?api_key=1e55f4bc336e25a4e8d5e6a0873de6c6&language=en-US
  const [videos, setVideos] = useState();

  useEffect(() => {

    const fetchMovie = async () => {
      const response = await fetch(`${baseUrl}/movie/${id}?language=en-US`, {  
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + API_TOKEN
      }});
      let data = await response.json();

      setMovie(data);
    }

    const fetchTrailer = async () => {
      const trailerResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + API_TOKEN
      }})
      let trailerData = await trailerResponse.json();

      setVideos(trailerData);
    }

    fetchMovie();

    fetchTrailer();

  }, [])


    return(
      <main>
        <>
          {(movie && videos) ? <SingleMovie movie={movie} videos={videos} /> : <p>Loading...</p> }
        </>
      </main>
    )
};

export default PageIndividualMovie;