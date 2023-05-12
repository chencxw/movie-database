import { useEffect, useState } from "react";
import { appTitle, apiKey, API_TOKEN } from "../globals/globals";
import MovieCard from "../components/MovieCard";
import MovieBanner from "../components/MovieBanner";
import FilterButtons from "../components/FilterButtons";
import FilterTest from "../components/FilterTest";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function PageHome({ sort = "popular" }) {
  const baseUrl = "https://api.themoviedb.org/3";
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
      setMovies(data.results);
      setTotalPages(Math.min(50, data.total_pages));
      console.log(data);
    };

    fetchMovies();
  }, [sort, currentPage]);

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

      <section>
        <FilterTest />
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
