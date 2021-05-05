import { cloneElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieDatabaseAPI from "@apis/MovieDatabaseAPI";
import SearchForm from "@components/SearchForm";
import { debounce } from "@utils";

const SearchFormContainer = ({ children }) => {
  const query = useSelector((state) => state.search.query);
  const loading = useSelector((state) => state.search.loading);
  const dispatch = useDispatch();
  const [options, setOptions] = useState([]);

  async function handleChange(data) {
    if (data === "") {
      setOptions([]);
      return;
    }
    dispatch({ type: "SET_QUERY", query: data });
    const response = await MovieDatabaseAPI.searchMovies(data);
    const options = response.results.map((option) => {
      return {
        id: option.id,
        key: option.id,
        label: `${option.title} ${option.release_date ? `(${option.release_date})` : ""
          }`,
        movie: option,
        value: `${option.title}`,
      };
    });
    setOptions(options);
  }

  const onChange = debounce(handleChange, 250);

  async function onSubmit(data) {
    console.log("SUBMISSION");
    if (!data.query) return;
    setOptions([]);
    dispatch({ type: "SET_LOADING", loading: true });
    const response = await MovieDatabaseAPI.searchMovies(data.query);
    dispatch({ type: "SET_QUERY", query: data.query });
    dispatch({ type: "SET_CURRENT_PAGE", currentPage: response.page });
    dispatch({ type: "SET_TOTAL_PAGES", totalPages: response.total_pages });
    dispatch({ type: "SET_SEARCH_RESULTS", searchResults: response.results });
    dispatch({ type: "SET_LOADING", loading: false });
  }

  function onSelect(value, { movie }) {
    dispatch({ type: "SET_QUERY", query: "" });
    dispatch({ type: "SET_LOADING", loading: true });
    dispatch({ type: "SET_CURRENT_PAGE", currentPage: 1 });
    dispatch({ type: "SET_TOTAL_PAGES", totalPages: 1 });
    dispatch({ type: "SET_SEARCH_RESULTS", searchResults: [movie] });
    dispatch({ type: "SET_LOADING", loading: false });
  }

  async function onKeyUp(evt) {
    if (evt.keyCode !== 13) return;
    console.log("enter is pressed", query);
    const response = await MovieDatabaseAPI.searchMovies(query);
    dispatch({ type: "SET_CURRENT_PAGE", currentPage: response.page });
    dispatch({ type: "SET_TOTAL_PAGES", totalPages: response.total_pages });
    dispatch({ type: "SET_SEARCH_RESULTS", searchResults: response.results });
    dispatch({ type: "SET_LOADING", loading: false });
  }

  function clear() {
    setOptions([]);
  }

  return cloneElement(children, {
    loading,
    onChange,
    onKeyUp,
    onSelect,
    onSubmit,
    clear,
    options,
  });
};

export default SearchFormContainer;
