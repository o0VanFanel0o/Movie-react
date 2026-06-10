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

            <div className="radio-inputs">
                <label className="radio">
                    <input
                        type="radio"
                        name="movie-list"
                        value="trending"
                        checked={selectedList === "trending"}
                        onChange={() => setSelectedList("trending")}
                    />
                    <span className="name">Trending</span>
                </label>
                <label className="radio">
                    <input
                        type="radio"
                        name="movie-list"
                        value="popular"
                        checked={selectedList === "popular"}
                        onChange={() => setSelectedList("popular")}
                    />
                    <span className="name">Popular</span>
                </label>
                <label className="radio">
                    <input
                        type="radio"
                        name="movie-list"
                        value="topRated"
                        checked={selectedList === "topRated"}
                        onChange={() => setSelectedList("topRated")}
                    />
                    <span className="name">Top Rated</span>
                </label>
            </div>
            <footer className="home-bottom">
                <h3>If you feel curious...</h3>
                <RandomSynopsis />
                <FloatingNav search={search} setSearch={setSearch} favorites={favorites}/>
            </footer>
        </div>
    );
};

export default Home