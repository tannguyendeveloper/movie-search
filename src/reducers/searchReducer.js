const INITIAL_SEARCH_STATE = {
  hasSearched: false,
  loading: false,
  searchResults: [],
  page: 1,
  totalPages: 1,
}

const searchReducer = (state = INITIAL_SEARCH_STATE, action) => {
  switch (action.type) {
    case 'SET_HAS_SEARCHED':
      return { ...state, hasSearched: true };
    case 'SET_LOADING':
      return { ...state, loading: action.loading };
    case 'SET_SEARCH_RESULTS':
      return { ...state, searchResults: action.searchResults };
    case 'APPEND_TO_SEARCH_RESULTS':
      return { ...state, searchResults: [...state.searchResults, ...action.searchResults] };
    case 'SET_QUERY':
      return { ...state, query: action.query };
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.currentPage };
    case 'SET_TOTAL_PAGES':
      return { ...state, totalPages: action.totalPages };
    case 'CLEAR_SEARCH_RESULTS':
      return { ...state, searchResults: [] };
    case 'RESET':
      return INITIAL_SEARCH_STATE;
    default:
      return state;
  }
}

export default searchReducer;