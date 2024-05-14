import axios from "axios";

const API_URL = "http://localhost:5000";

/* 
    INSTRUCTION: 
    - Create a function to fetch games from the API. 
    - API call may include query parameters for pagination, search, genre, and sort. 
*/
export const fetchGames = async (page, limit, search, genre, sort) => {
  let params = {
    page,
    limit,
  };
  if (limit === "all") {
    params.limit = limit;
  }

  if (search) params.search = search;
  if (genre !== "all") {
    params.genre = genre;
  }
  if (sort !== "") {
    params.sort = sort;
  }
  const query = new URLSearchParams(params);
  const res = await axios.get(`${API_URL}/games?${query.toString()}`);
  return res.data;
};

/* INSTRUCTION: Create a function to fetch genres from the API */
export const fetchGenres = async () => {
  const res = await axios.get(`${API_URL}/genres`);
  return res.data;
};
