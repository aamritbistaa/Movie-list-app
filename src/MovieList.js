import React, { useEffect, useState } from "react";
import "./index.css";
import MovieCardList from "./MovieCardList";
import { searchMovies } from "./SearchMovies";

const MovieList = () => {
  const [searchtext, setSearchText] = useState("");
  const [movielist, setMovieList] = useState([]);
  // to assign intial value 'initial entity'
  const handleTextInput = (e) => {
    setSearchText(e.target.value);
  };
  //Default ma chai search movies related to Nepal

  // setMovieList(data.Search);

  const storeList = async () => {
    let a;
    if (searchtext.length > 0) {
      a = await searchMovies(searchtext);
    } else {
      a = await searchMovies("Nepal");
    }
    setMovieList(a);
    // console.log(a);
    // console.log(movielist);
  };

  // const storeList = async (searchtext = "Nepal") => {
  //   const a = await searchMovies(searchtext);
  //   setMovieList(a);
  // };

  useEffect(() => {
    // setMovieList("Nepal");
    storeList("Nepal");
    // console.log(searcht
  }, []);

  return (
    <div className="app">
      <div className="search">
        <input
          value={searchtext}
          placeholder="Search Movies"
          onChange={(e) => handleTextInput(e)}
        />
        <img
          src="https://w7.pngwing.com/pngs/248/925/png-transparent-computer-icons-search-for-miscellaneous-computer-program-android.png"
          alt="searchimage"
          onClick={() => storeList(searchtext)}
        />
      </div>
      {movielist && movielist.length > 0
        ? movielist.map((item) => (
            <MovieCardList
              Title={item.Title}
              Year={item.Year}
              imdbID={item.imbdID}
              Poster={item.Poster}
              Type={item.Type}
            />
          ))
        : "No Item found"}
      {/* 
      in one line we can write it as  
      {movielist.map((item) => item.Title)}
      */}
    </div>
  );
};
export default MovieList;
