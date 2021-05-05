const INITIAL_MODAL_STATE = {
  visible: false,
  movie: '',
  movieId: undefined
}

const modalReducer = (state = INITIAL_MODAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, visible: true, movieId: action.movieId };
    case 'CLOSE_MODAL':
      return { ...state, visible: false, movieId: '', movie: undefined };
    default:
      return state;
  }
}

export default modalReducer;