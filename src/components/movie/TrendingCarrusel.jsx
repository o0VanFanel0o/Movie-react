import MovieCard from "./MovieCard";
import "../../styles/TrendingCarrusel.css"
import { useEffect, useState } from "react";
import {getTrendingMovies, searchMovies} from "../../services/api"
import MovieModal from "./MovieModal";


const TrendingCarrusel = ({ search, movies: externalMovies, title = "Trending Movies", favorites, toggleFavorite }) => {

    const [movies, setMovies] = useState([])
    const [selectedMovie, setSelectedMovie] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        if (externalMovies !== undefined) return
    
        const fetchMovies = async () => {
            try {
                setLoading(true)
                setError("")
                if (!search?.trim()) { 
                    const trendingMovies = await getTrendingMovies()
                    setMovies(trendingMovies)
                } else {
                    const searchedMovies = await searchMovies(search)
                    setMovies(searchedMovies)
                }
            } catch (error) {
                console.error("Something went wrong:", error)
                setError("Something went wrong: " + error.message)
                setMovies([])
            } finally {
                setLoading(false)
            }
        }
        fetchMovies()
    }, [search, externalMovies])

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie)
    }
    const displayedMovies = externalMovies ?? movies




    return (
        <section className="trending-section">
            <div className="section-header">
                <h2>{title}</h2>
            </div>
            <div className="movie-row">
                {loading && <div className="loading">Loading...</div>}
                {error && <div className="error">{error}</div>}
                {!loading && !error && displayedMovies.length === 0 && (<div className="no-movies">No movies found</div>)}
                {!loading && !error && displayedMovies.length > 0 && (
                    <div className="movie-row">
                        {displayedMovies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                onClick={() => handleMovieClick(movie)}
                            />
                        ))}
                    </div>
                )}
            </div>
            <MovieModal
                movie={selectedMovie}
                onclose={() => setSelectedMovie(null)}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
            />
        </section>
    );
};

export default TrendingCarrusel