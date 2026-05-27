import MovieCard from "./MovieCard";
import "../../styles/TrendingCarrusel.css"
import { useEffect, useState } from "react";
import {getTrendingMovies} from "../../services/api"
import MovieModal from "./MovieModal";

const TrendingCarrusel = () => {

    const [movies, setMovies] = useState([])
    const [selectedMovie, setSelectedMovie] = useState(null)

    useEffect(() => {
        const fetchMovies = async () => {
            const trendingMovies = await getTrendingMovies()
            setMovies(trendingMovies)
        }
        fetchMovies()
    }, [])

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie)
    }




    return (
        <section className="trending-section">
            <div className="section-header">
                <h2>Trending Movies</h2>
            </div>
            <div className="movie-row">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onClick={() => handleMovieClick(movie)}
                    />
                ))}
            </div>
            <MovieModal movie={selectedMovie} onclose={() => setSelectedMovie(null)}/>
        </section>
    );
};

export default TrendingCarrusel