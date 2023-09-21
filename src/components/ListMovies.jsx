import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import axios from "axios";
import { baseImgUrl, options } from "../constants/constants";
import { Link } from "react-router-dom";

const ListMovies = ({ genre }) => {
  const [movies, SetMovies] = useState([]);
  useEffect(() => {
    //* listeleme kategoriye ait film verilerini çekme
    axios
      .get(`/discover/movie?with_genres=${genre.id}`, options)
      .then((res) => SetMovies(res.data.results));
  }, []);
  return (
    <div className="p-4">
      <h1>{genre.name}</h1>
      <Splide options={{ autoWidth: true, pagination: false, gap: "20px" }}>
        {movies.map((movie) => (
          <SplideSlide>
            <Link to={`/movie/${movie.id}`}>
              <img
                className="movie"
                src={`${baseImgUrl}${movie.poster_path}`}
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ListMovies;
