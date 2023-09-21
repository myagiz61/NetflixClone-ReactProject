import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero";
import { getGenres, getMovies, setLoading } from "../redux/actions/actions";
import ListMovies from "../components/ListMovies";

const MainPage = () => {
  const dispatch = useDispatch();

  const state = useSelector((store) => store.movieReducer);

  useEffect(() => {
    //* loading i true yapar
    dispatch(setLoading(true));
    //* populer film verisini çek
    dispatch(getMovies());
    //* kategori verisini çek ve store a aktar
    dispatch(getGenres());
  }, []);

  return (
    <div>
      <Hero />
      {/* her bir kategori için o kategoriye ait
       filmleri listelecek bileşeni ekrana basma
       */}
      {state.genres.map((genre) => (
        <ListMovies key={genre.id} genre={genre} />
      ))}
    </div>
  );
};

export default MainPage;
