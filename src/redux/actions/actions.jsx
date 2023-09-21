import axios from "axios";
import { ActionTypes } from "../../constants/actionTypes";
import { options } from "../../constants/constants";

//* bütün atılan isteklerin başına eklenir
axios.defaults.baseURL = "https://api.themoviedb.org/3";

//! senkron (Normal) Aksiyon
export const setLoading = (payload) => ({
  type: ActionTypes.SET_LOADING,
  payload,
});

//! Asenkron (Thunk) Aksiyon
//* hem verileri çeksin hem reducere asktarsın
export const getMovies = () => {
  return async function (dispatch) {
    //* veri çekme işlemleri
    const res = await axios.get("/movie/popular?language=tr", options);
    //* gelen veriyi reducer a aktarma
    dispatch({
      type: ActionTypes.SET_MOVİES,
      payload: res.data,
    });
  };
};

export const getGenres = () => {
  return function (dispatch) {
    axios.get("/genre/movie/list?language=tr", options).then((res) =>
      //* reducer a aktar
      dispatch({
        type: ActionTypes.SET_GENRES,
        payload: res.data.genres,
      })
    ).catch;
  };
};
