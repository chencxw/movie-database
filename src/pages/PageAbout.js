import { useEffect } from 'react';
import { appTitle } from '../globals/globals';

function PageAbout() {
  
  useEffect(() => {
    document.title = `${appTitle} | About`;
  }, []);
  
  return (
    <main>
      <section className="about">
        <h2>About</h2>
        <article>
          <p>Film box movie database is a website where users can find popular, top rated, now playing and upcoming movie listings. Browse for your favourite genres or movies, check out their ratings and see how they match up! </p>
          
          <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
          {/* TMDb logo - <img src="" alt="" /> */}
        </article>
      </section>
    </main>
  );
};

export default PageAbout;