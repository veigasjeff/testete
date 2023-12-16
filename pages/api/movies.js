// pages/api/movies.js
import moviesData from '../../public/movies.json';

export default function handler(req, res) {
  res.status(200).json(moviesData);
}
