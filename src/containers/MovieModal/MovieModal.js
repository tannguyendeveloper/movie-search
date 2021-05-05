import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Modal, Rate, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";

import MovieDatabaseAPI from "@apis/MovieDatabaseAPI";
import "./MovieModal.scss";

const MovieModal = () => {
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.movieModal.visible);
  const movieId = useSelector((state) => state.movieModal.movieId);
  const [movie, setMovie] = useState({});

  const rating = Math.round(movie?.vote_average) / 2;
  const releaseDate = dayjs(movie?.release_date).format("MM/DD/YYYY");

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
    setMovie([]);
  };

  useEffect(() => {
    const getMovieFromAPI = async (movieId) => {
      try {
        const { data } = await MovieDatabaseAPI.getMovie(movieId);
        setMovie(data);
      } catch (e) {
        dispatch({ type: "CLOSE_MODAL" });
      }
    };
    if (movieId) getMovieFromAPI(movieId);
  }, [dispatch, movieId]);

  return (
    <Modal visible={visible} onCancel={closeModal} footer={null}>
      <div className="content">
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
          <Space>
            <h2 className="title">{movie?.title}</h2>
            <p className="release-date">{releaseDate}</p>
          </Space>
          <Space>
            <Rate
              style={{ fontSize: "12px" }}
              value={rating}
              disabled={true}
              count={5}
              allowHalf={true}
            />{" "}
            ({movie.vote_count})
          </Space>
          <p className="tagline">
            <strong>{movie?.tagline}</strong>
          </p>
          <p className="overview">{movie?.overview}</p>
        </div>
      </div>
    </Modal>
  );
};

export default MovieModal;
