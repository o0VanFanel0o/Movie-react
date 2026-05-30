import TrendingCarrusel from "../components/movie/TrendingCarrusel.jsx";
import FloatingNav from "../components/navigation/FloatingNav.jsx";


import "../styles/home.css";

const Home = ({search, setSearch, favorites, toggleFavorite}) => {

    return (
        <div className="home">
            <h1>Movie Dashboard</h1>
            <TrendingCarrusel search={search} favorites={favorites} toggleFavorite={toggleFavorite}/>
            <FloatingNav search={search} setSearch={setSearch} favorites={favorites}/>
        </div>
    );
};

export default Home