import MovieCard from "./MovieCard";
import "../../styles/TrendingCarrusel.css"
import { useEffect, useState } from "react";
import {getTrendingMovies, searchMovies} from "../../services/api"
import MovieModal from "./MovieModal";


const TrendingCarrusel = ({ search, movies: externalMovies, title = "Trending Movies", favorites, toggleFavorite }) => {

    const [movies, setMovies] = useState([])
    const [selectedMovie, setSelectedMovie] = useState(null)

    useEffect(() => {
        if (externalMovies !== undefined) {
            setMovies(externalMovies)
            return
        }

        const fetchMovies = async () => {
            if (!search?.trim()) { 
                const trendingMovies = await getTrendingMovies()
                setMovies(trendingMovies)
            }else{
                const searchedMovies = await searchMovies(search)
                setMovies(searchedMovies)
            }
        }
        fetchMovies()
    }, [search, externalMovies])

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie)
    }




    return (
        <section className="trending-section">
            <div className="section-header">
                <h2>{title}</h2>
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