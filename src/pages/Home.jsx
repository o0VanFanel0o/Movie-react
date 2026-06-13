import FloatingNav from "../components/navigation/FloatingNav.jsx";
import FeaturedCarousel from "../components/movie/FeaturedCarousel.jsx"
import RandomSynopsis from "../components/movie/RandomSynopsis.jsx";
import { useState } from "react";


import "../styles/home.css";

const Home = ({search, setSearch, favorites}) => {

    const [selectedList, setSelectedList] = useState("trending")

    return (
        <div className="home">
            <header className="home-header">
                <div className="home-brand">
                    <span className="brand-mark">M</span>
                    <span className="brand-name">Movie dashboard</span>
                </div>
                <a className="profile-avatar"
                    href="https://github.com/o0VanFanel0o"
                    target="_blank"
                    rel="noreferrer">
                    <span>AG</span>
                </a>

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
                <RandomSynopsis />
                <FloatingNav search={search} setSearch={setSearch} favorites={favorites}/>
            </footer>
        </div>
    );
};

export default Home