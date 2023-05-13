import { Link } from 'react-router-dom';

function MoreInfoButton({movies}) {

  return (
    <div className="more-info-button">
      <Link to={`/movie/${movies.id}`}>More Info</Link>
    </div>
  )
}

export default MoreInfoButton