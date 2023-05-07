import { useEffect } from "react";
import { appTitle } from "../globals/globals";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

function PageFavourite() {
  const favs = useSelector((state) => state.favs.items);

  useEffect(() => {
    document.title = `${appTitle} - Favourites`;
  }, []);

  return (
    <main>
      <section className="favourites">
        <h2>Favourites</h2>
        {favs.length < 1 ? (
          <p>
            No movies added to favourites yet. Go back to the{" "}
            <Link to="/">home</Link> page to add some.
          </p>
        ) : (
          <div id="favs-grid">
            <MovieCard movies={favs} isFav={true} />
          </div>
        )}
      </section>
    </main>
  );
}

export default PageFavourite;
