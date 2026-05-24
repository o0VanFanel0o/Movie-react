import TrendingCarrusel from "../components/movie/TrendingCarrusel.jsx";
import FloatingNav from "../components/navigation/FloatingNav.jsx";
import "../styles/home.css";

const Home = () => {
    return (
        <div className="home">
            <h1>Movie Dashboard</h1>
            <TrendingCarrusel />
            <FloatingNav />
        </div>
    );
};

export default Home