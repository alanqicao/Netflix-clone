import React, { useState, useEffect } from "react";
import axios from "./axios";
import './Row.css';
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchDate() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      return request;
    }
    fetchDate();
  }, [
    fetchUrl,
  ]); /*if [] is empty, run once when the row loads,and do not run again. 
          when you put [fetchUrl], every time movies change it will run again */
 

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/*ser row poster */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* container-> posters*/}
    </div>
  );
}

export default Row;
