import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import MovieListing from "@components/MovieListing";

import MovieDatabaseAPI from "@apis/MovieDatabaseAPI";

import "./SearchResults.scss";

const SearchResults = ({ movies = [], loading }) => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const currentPage = useSelector((state) => state.search.currentPage);
  const totalPages = useSelector((state) => state.search.totalPages);

  async function loadMoreMovies() {
    dispatch({ type: "SET_LOADING", loading: true });
    try {
      const response = await MovieDatabaseAPI.searchMovies(
        query,
        currentPage + 1
      );
      dispatch({ type: "SET_CURRENT_PAGE", currentPage: response.page });
      dispatch({
        type: "APPEND_TO_SEARCH_RESULTS",
        searchResults: response.results,
      });
    } catch (e) {
      console.log(e);
    }
    dispatch({ type: "SET_LOADING", loading: false });
  }

  if (!movies.length) return null;
  return (
    <div className="container">
      <ul className="SearchResults">
        {movies.map((movie) => (
          <li className="item">
            <MovieListing movie={movie} />
          </li>
        ))}
      </ul>
      {currentPage < totalPages ? (
        <Button type="primary" loading={loading} onClick={loadMoreMovies}>
          Load More
        </Button>
      ) : null}
    </div>
  );
};

export default SearchResults;
