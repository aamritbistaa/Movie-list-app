const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=5a5f4301";

export const searchMovies = async (title) => {
  // console.log(`${API_URL}&s=${title}`);
  const response = await fetch(`${API_URL}&s=${title}`);
  // console.log(response);
  const data = await response.json();
  // console.log(data);
  // console.log("value of ", data.Search);
  return data.Search;
};
