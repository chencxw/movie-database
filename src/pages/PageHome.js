import { useEffect, useState, useRef } from "react";
import { appTitle, API_TOKEN } from "../globals/globals";
import MovieCard from "../components/MovieCard";
import MovieBanner from "../components/MovieBanner";
import FilterMobile from '../components/FilterMobile';
import FilterButtons from "../components/FilterButtons";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function PageHome({ sort = "popular" }) {
  const baseUrl = "https://api.themoviedb.org/3";
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const ref = useRef(null);
  const firstRenderRef = useRef(true);

  useEffect(() => {
    document.title = `${appTitle}`;
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `${baseUrl}/movie/${sort}?language=en-US&page=${currentPage}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + API_TOKEN
          }
        }
      );
      let data = await response.json();
      setMovies(data.results.slice(0, 12));
      setTotalPages(Math.min(50, data.total_pages));
    };

    fetchMovies();
  }, [sort, currentPage]);

  useEffect(() => {
    //   // if it is not the first render, we scroll to below the header
      if ( ref.current && !firstRenderRef.current) {
         ref.current.scrollIntoView({ behavior: "smooth" });
      }
    // // set firstRender.current to false
    firstRenderRef.current = false;
  }, [currentPage]);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);

  };

  if (movies.length === 0) {
    return <div className="loadingMovies">Loading movies...</div>;
  }

  return (
    <main>
      <header>
        <MovieBanner movies={movies} />
      </header>

      <section  ref={ref}>
        <FilterMobile />
        <FilterButtons />
        <MovieCard movies={movies} />
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Stack>
      </section>
    </main>
  );
}

export default PageHome;
