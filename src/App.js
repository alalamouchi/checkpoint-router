import React, { useState } from "react";
import "./App.css";
import MoviesList from "./components/MoviesList";
import NavBar from "./components/NavBar";
import { Routes, Route, } from "react-router-dom";
import { Link } from "react-router-dom";
import MovieItem from "./components/MovieItem";
import Layout from "./components/Layout";
import AddMovie from "./components/AddMovie";
import Description from "./components/Description";

function App() {
    const [search, setSearch] = useState("");
    const [rating, setRating] = useState();
    console.log("rating: ", rating);
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<MoviesList search={search} rating={rating} />}
            />
                <Route path="AddMovie" element={<AddMovie />} />
                <Route path="MovieItem" element={<MovieItem />} />
                <Route path="Description/:id" element={<Description />} />
          </Route>
        </Routes>
        
      </div>
    );
}

export default App;
