import { useDispatch } from "react-redux";
import { Rate } from "antd";
import dayjs from "dayjs";
import "./MovieListing.scss";

const MovieListing = ({ movie }) => {
  const dispatch = useDispatch();
  const rating = Math.round(movie.vote_average) / 2;
  const releaseDate = dayjs(movie.release_date).format("MM/DD/YYYY");

  const openModal = () => {
    dispatch({ type: "OPEN_MODAL", movieId: movie?.id });
  };

  return (
    <button className="MovieListing" onClick={openModal}>
      {movie.poster_path ? (
        <div className="image-container">
          <img
            alt={`${movie.title}`}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
        </div>
      ) : (
        ""
      )}
      <div className="body">
        <h2 className="title">{movie?.title}</h2>
        <p className="release-date">{releaseDate}</p>
        <p className="overview">{movie?.overview}</p>
        <Rate
          style={{ fontSize: "12px" }}
          value={rating}
          disabled={true}
          count={5}
          allowHalf={true}
        />{" "}
        ({movie.vote_count})
      </div>
    </button>
  );
};

export default MovieListing;
