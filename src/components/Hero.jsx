import React from "react";
import { useSelector } from "react-redux";
import { baseImgUrl } from "../constants/constants";
const Hero = () => {
  //* abone olma işlemi(storede tutulan verilere erişme)
  const state = useSelector((store) => store.movieReducer);

  //* dizininn uzunluğuna göre sayı bulma
  const i = Math.floor(Math.random() * state.popularMovies.length);

  //* diziden rastgele film alma
  const film = state.popularMovies[i];

  if (state.isLoading) return "Loading..";
  return (
    <div className="row p-5">
      <>
        <div className="col-md-6 gap-3 mb-3 d-flex flex-column justify-content-center">
          <h1>{film.title}</h1>
          <p className="lead">{film.overview}</p>
          <p className="text-warning fw-bold">IMDB:{film.vote_average}</p>
          <div className="d-flex gap-3 justify-content-center">
            <button className="btn btn-danger">Filmi İzle</button>
            <button className="btn btn-info">Listeye Ekle</button>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <img
            className="img-fluid rounded shadow"
            src={`${baseImgUrl}${film.backdrop_path}`}
          />
        </div>
      </>
    </div>
  );
};

export default Hero;
