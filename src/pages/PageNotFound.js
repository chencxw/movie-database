import { useEffect } from 'react';
import { appTitile } from '../globals/globals';
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
          <p><Link to="/">Go Home</Link></p>
        </section>
      </main>
    );
};

export default PageNotFound;