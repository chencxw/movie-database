import { Link } from 'react-router-dom';


function PageNotFound() {

//   useEffect(() => {
//     document.title = `${appTitle} | Page Not Found`;
//   }, []);

    return(
      <main>
        <section className="page-not-found">
          <h2>404</h2>
          <h3>Page not found.</h3>
          <p>The page you were looking for does not exist.</p>
          <p><Link to="/">Back to home</Link></p>
        </section>
      </main>
    );
};

export default PageNotFound;