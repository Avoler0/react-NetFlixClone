import path from "path/posix";

const API_KEY = "0433ab3a6fc1f3a8f43f24aea5aab402";
const BASE_PATH = "https://api.themoviedb.org/3";

export function getMovies(){
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then((response) => response.json());
}