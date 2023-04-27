import { Link } from 'react-router-dom';

function MoreInfoButton({movies}) {
  return (
    <Link to={`/movie/${movies.id}`}>More Info</Link>
  )
}

export default MoreInfoButton