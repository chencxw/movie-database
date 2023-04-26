import { useEffect } from 'react';
import { appTitle } from '../globals/globals';

function PageHome() {

  useEffect(() => {
    document.title = `${appTitle}`;
  }, []);

  return (
    <main>
      <section className="home">
        <h2 className="sr-only">Home</h2>
      </section>
    </main>
  )
}

export default PageHome;