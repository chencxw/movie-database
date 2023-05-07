import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import tmbdLogo from '../images/tmbdLogo.svg';


function PageAbout() {

  useEffect(() => {
    document.title = `${appTitle} | About`;
  }, []);

  return (
    <main>
      <section className="about">
        <h2>Welcome to Film Box!</h2>
        <article>
          <p>Film box movie database is a website where users can find popular, top rated, now playing and upcoming movie listings. Browse for your favourite genres or movies, check out their ratings and see how they match up! </p>

          <p>Found something you like? Add them to your favourites and remove them anytime.</p>

          <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
          <img src={tmbdLogo} alt="TMBD Logo" />
        </article>
      </section>
    </main>
  );
};

export default PageAbout;