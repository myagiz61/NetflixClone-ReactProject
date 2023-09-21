import MainPage from "./pages/MainPage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/movie/:movie_id" element={<MovieDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
