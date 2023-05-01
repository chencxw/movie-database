import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function MoreInfoButton({movies}) {

  const {id} = useParams();

  return (
    <div className="more-info-button">
      <Link to={`/movie/${movies.id}`}>More Info</Link>
    </div>
  )
}

export default MoreInfoButton