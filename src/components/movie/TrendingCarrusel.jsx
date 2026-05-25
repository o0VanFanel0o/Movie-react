import MovieCard from "./MovieCard";
import "../../styles/TrendingCarrusel.css"

const TrendingCarrusel = () => {
    return (
        <section className="trending-section">
            <div className="section-header">
                <h2>Trending Movies</h2>
            </div>
            <div className="movie-row">
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
            </div>
        </section>
    );
};

export default TrendingCarrusel