// utils/dataFetching.js
import moviesData from '../public/movies.json';
import tvshowsData from '../public/tvshow.json';

export const getMovies = () => {
  // Implement your logic to fetch movies data (e.g., from moviesData array)
  return moviesData;
};

export const getTvShows = () => {
  // Implement your logic to fetch TV shows data (e.g., from tvshowsData array)
  return tvshowsData;
};

export const fetchTvshowDetails = (id) => {
  // Implement your logic to fetch TV show details based on the id
  // Example: return tvshowsData.find((tvshow) => tvshow.id === id);
};
