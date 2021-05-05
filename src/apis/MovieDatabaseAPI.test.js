import MovieDatabaseAPI from "./MovieDatabaseAPI";

test("API KEY authenticates", async () => {
  const response = await MovieDatabaseAPI.authenticateApiKey(
    process.env.REACT_APP_APIKEY
  );
  expect(response).toBe(true);
});

test("MovieDatabaseAPI.searchMovies - Can search movies with API ", async () => {
  const response = await MovieDatabaseAPI.searchMovies("test");
  expect(response).toBeTruthy();
});

test("MovieDatabaseAPI.getMovie - Can get valid movie from API", async () => {
  const response = await MovieDatabaseAPI.getMovie(613200);
  expect(response).toBeTruthy();
});
