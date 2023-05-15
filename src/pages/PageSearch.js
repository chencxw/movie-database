import { useParams } from "react-router-dom";
import { appTitle, API_TOKEN } from "../globals/globals";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

function PageSearch() {
  const { userInput } = useParams();
  const baseUrl = "https://api.themoviedb.org/3/search/movie?query=";
  const [results, setResults] = useState();

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch(
        `${baseUrl}${userInput}&language=en-US&page=1`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + API_TOKEN
          }
        }
      );
      let searchData = await response.json();

      setResults(searchData);
    };

    fetchResults();
  }, [userInput]);

  useEffect(() => {
    document.title = `${appTitle} | Search`;
  }, []);

  return (
    <section className="search-page">
      <div className="search-title">
        {results ? results.results.length : "Search"} results for...{" "}
        <h3>"{userInput}"</h3>
      </div>
      {results ? 
        ( results.results.length > 0 ? 
          <MovieCard movies={results.results} /> 
          : ( 
            <div className="no-result">
                <p>No Movies Found.</p>
            </div> 
            )
        ) 
        : (
          <div className="loadingMovies">
            <p>Loading...</p>
          </div>
      )}
    </section>
  );
}
export default PageSearch;
