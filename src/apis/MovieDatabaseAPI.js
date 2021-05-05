import axios from "axios";

class MovieDatabaseAPI {
  static token = process.env.REACT_APP_APIKEY;
  static apiUrlRoot = "https://api.themoviedb.org/3";

  static config = {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    },
  };

  static async authenticateApiKey(api_key) {
    try {
      const { data } = await axios.get(
        `${this.apiUrlRoot}/authentication/token/new`,
        this.config
      );
      return data.success;
    } catch (e) {
      throw e;
    }
  }

  static async searchMovies(query, page = 1) {
    try {
      const { data } = await axios.get(
        `${this.apiUrlRoot}/search/movie?query=${query}&page=${page}`,
        this.config
      );
      return data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  static async getMovie(movieId) {
    console.log("getting movie", movieId);
    try {
      const response = await axios.get(
        `${this.apiUrlRoot}/movie/${movieId}`,
        this.config
      );
      console.log(response);
      return response;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}

export default MovieDatabaseAPI;
