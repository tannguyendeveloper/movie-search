# Movie Search App

Movie Search is a React application that allows users to search for Movies based on the title. Movie Search app uses data from the The Movie Databse API.

## Requirements

NodeJS

## Installation

From the terminal run
`npm install`

## Notable dependencies

- Axios
- Antd
- Craco
- dayjs
- Redux
- React Redux
- mode-sass

## Running the application

Once installed, you can run the application with the following command

`npm start`

## Tests

You can run unit test by entering the following into your terminal. Included is a single test that checks the Movie Database API api key, as well as the endpoints to search and load a specific movie.

There is currently no tests for the components.

`npm test`

## Challenges

- Time
  I am a bit ambitious and I really want to show off my best work. I honestly spent maybe 8 hours on this project though some of it can be attributed to setting up my boilerplate. I wanted to demonstrate my use of redux though it may be overkill for this assignment

## Design Choice Reasoning

- I think having the movie search results update in the background while you're typing is distracting. I opted instead to have an autocomplete search box that updates its options in a dropdown for the user to select. I hope that fulfills your requirement of having something visually update as the user is typing.

- The use of ANTD component library.
  Initially I was going to code my own search input component but decided to use one from a component library instead. The reason why I chose to use a component from a library is that is more likely to be tested, particularly for accessibility. Other components I used include the Rating, buttons

- The use of a form element to wrap the search input.
  This is for usability and accessibility. I wanted the user to be able to update the movie listing search results when they pressed the "enter" and only update the avaiable options to select from the dropdown field as they typed.

## What Can Be Improved?

- Given time I would like to create a custom hook to memoize the data returned from the api calls into a hashmap so that hey can be accessed again without another api call to sace on resources.
- I did not have the time to leverage useCallback and useMemo to optimize the rendering of components
- I really wish I had more time to devote to the visual design of the application
