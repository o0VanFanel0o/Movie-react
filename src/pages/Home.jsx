import { useState } from "react";

import TrendingCarrusel from "../components/movie/TrendingCarrusel.jsx";
import FloatingNav from "../components/navigation/FloatingNav.jsx";


import "../styles/home.css";

const Home = () => {
    const [search, setSearch] = useState("")
    const [favorites, setFavorites] = useState([])

    return (
        <div className="home">
            <h1>Movie Dashboard</h1>
            <TrendingCarrusel search={search}/>
            <FloatingNav search={search} setSearch={setSearch} favorites={favorites}/>
        </div>
    );
};

export default Home