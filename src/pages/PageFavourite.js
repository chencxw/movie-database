import { useEffect } from 'react';
import { appTitle } from '../globals/globals';

function PageFavourite() {

  useEffect(() => {
    document.title = `${appTitle} - Favourites`;
  }, [])

  return (
    <main>
      <section className="favourites">
        <h2>Favourites</h2>
      </section>
    </main>
  )
}

export default PageFavourite;