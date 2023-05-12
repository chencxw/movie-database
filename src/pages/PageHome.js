import { useEffect, useState, useRef } from "react";
import { appTitle, API_TOKEN } from "../globals/globals";
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
  const [height, setHeight] = useState(0)
  const ref = useRef(0)
  const firstRenderRef = useRef(true);

  useEffect(() => {
    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: "smooth",
    // });

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
        if (currentPage !== 1) {
          window.scrollTo({
            top: ref.current.clientHeight,
            left: 0,
            behavior: "smooth",
          });
        }
    };

    fetchMovies();
  }, [sort, currentPage]);


  // useEffect(() => {
  //   // setHeight(ref.current.clientHeight);
  //     // if it is not the first render, we scroll to below the header
  //     if (!firstRenderRef.current) {
       
  //     }
  //   // set firstRender.current to false
  //   firstRenderRef.current = false;
  // }, [movies]);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);

  };

  if (movies.length === 0) {
    return <div className="loadingMovies">Loading movies...</div>;
  }

  return (
    <main>
      <header ref={ref}>
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
