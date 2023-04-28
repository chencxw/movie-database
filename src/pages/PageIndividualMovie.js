import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { appTitle, API_TOKEN  } from '../globals/globals';
import SingleMovie from '../components/SingleMovie';


function PageIndividualMovie() {
  const baseUrl = 'https://api.themoviedb.org/3'
  const { id } = useParams();
  const [movie, setMovie] = useState();

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

    fetchMovie();

  }, [])


    return(
      <main>
        <section className="individual-movie">
          {movie ? <SingleMovie movie={movie}/> : <p>Loading...</p>}

        </section>
      </main>
    )
};

export default PageIndividualMovie;