import { useSelector } from "react-redux";
import { Spin } from "antd";

import SearchFormContainer from "@containers/SearchFormContainer";
import SearchResults from "@containers/SearchResults";

import MovieModal from "@containers/MovieModal";
import SearchForm from "@components/SearchForm";

import "./App.scss";

const App = () => {
  const search = useSelector((state) => state.search);
  const { hasSearched, searchResults, loading } = search;

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1 className="title">Movie Search App</h1>
          <SearchFormContainer>
            <SearchForm />
          </SearchFormContainer>
        </div>
      </header>
      <div className="container">
        <Spin spinning={loading}>
          <SearchResults
            hasSearched={hasSearched}
            movies={searchResults}
            loading={loading}
          />
        </Spin>
      </div>
      <MovieModal />
    </div>
  );
};

export default App;
