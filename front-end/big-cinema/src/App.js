import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import SgineUP from "./Componets/isAuth/SgineUP";
import SignIN from "./Componets/isAuth/SignIN";
import ListMovies from "./Componets/ListMovies/ListMovies";
import ListCinema from "./Componets/List_cinema/ListCinema";
import Navigation from "./Componets/Navigation/Navigation";
import ListAllMovies from "./Componets/ListMovies/ListAllMovies";
import MoviesProfile from "./Componets/ListMovies/MoviesProfile";
import Movies from "./Componets/ListMovies/Movies";

function App() {
  const [search, setsearch] = useState("");

  return (
    <div className="App">
      {" "}
      <Navigation setsearch={setsearch} />
      <Routes>
        <Route path="/" element={<SignIN />} />
        <Route path="/signUP" element={<SgineUP />} />
        <Route path="/listCinema" element={<ListCinema search={search} />} />
        <Route path="/movies/:_id" element={<ListMovies />} />
        <Route path="/allmovies" element={<ListAllMovies />} />
        <Route path="/profilmovie/:_id" element={<MoviesProfile />} />
        <Route path="/movie/:_id" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
