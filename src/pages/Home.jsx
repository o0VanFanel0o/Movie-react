import FloatingNav from "../components/navigation/FloatingNav.jsx";
import FeaturedCarousel from "../components/movie/FeaturedCarousel.jsx"
import RandomSynopsis from "../components/movie/RandomSynopsis.jsx";


import "../styles/home.css";

const Home = ({search, setSearch, favorites}) => {

    return (
        <div className="home">
            <header>
                <h1>Movie Dashboard</h1>
            </header>
            <main className="home-main">
                <FeaturedCarousel />
            </main>
            <footer className="home-bottom">
                <RandomSynopsis />
                <FloatingNav search={search} setSearch={setSearch} favorites={favorites}/>
            </footer>
        </div>
    );
};

export default Home