import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function MoreInfoButton({movies}) {

  const {id} = useParams();

  return (
    <Link to={`/movie/${movies.id}`}>More Info</Link>
  )
}

export default MoreInfoButton