import FloatingNav from "../components/navigation/FloatingNav.jsx";
import FeaturedCarousel from "../components/movie/FeaturedCarousel.jsx"
import RandomSynopsis from "../components/movie/RandomSynopsis.jsx";
import { useState } from "react";


import "../styles/home.css";

const Home = ({search, setSearch, favorites}) => {

    const [selectedList, setSelectedList] = useState("trending")

    return (
        <div className="home">
            <header>
                <h1>Movie Dashboard</h1>
            </header>
            <main className="home-main">
                <FeaturedCarousel selectedList={selectedList}/>
            </main>
            <div className="movie-list-tabs">
                <button className={selectedList === "trending" ? "active" : ""} onClick={() => setSelectedList("trending")}>
                    Trending
                </button>
                <button className={selectedList === "popular" ? "active" : ""} onClick={() => setSelectedList("popular")}>
                    Popular
                </button>
                <button className={selectedList === "topReated" ? "active" : ""}onClick={() => setSelectedList("topRated")}>
                    Top Rated
                </button>
            </div>
            <footer className="home-bottom">
                <RandomSynopsis />
                <FloatingNav search={search} setSearch={setSearch} favorites={favorites}/>
            </footer>
        </div>
    );
};

export default Home