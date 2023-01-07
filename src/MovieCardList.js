import React from "react";
import "./index.css";

const MovieCardList = ({ imdbID, Title, Poster, Type, Year }) => {
  return (
    <>
      <div className="movie" key={imdbID}>
        <div>
          <p>{Year}</p>
        </div>
        <div>
          <img
            src={
              Poster == "N/A"
                ? "https://eclipsys.ca/wp-content/uploads/2022/03/Error-404.png"
                : Poster
            }
          />
        </div>

        <div>
          <span>{Type}</span>
          <h3>{Title}</h3>
        </div>
      </div>
    </>
  );
};

export default MovieCardList;
