import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails } from "../services/api";

import "../styles/MovieDetail.css"

const MovieDetail = ({ favorites = [], toggleFavorite }) => {
    const { id } = useParams();

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const IMAGE_URL = "https://image.tmdb.org/t/p/w500";


    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                setLoading(true);
                setError("");

                const data = await getMovieDetails(id);
                setMovie(data);
            } catch (error) {
                console.error("Error al obtener los detalles de la película:", error);
                setError("Error al obtener los detalles de la película");
            } finally {
                setLoading(false);
            }
        }
        fetchMovieDetails();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!movie) return <div>No se encontró la película</div>;

    const FALLBACK_POSTER = "https://placehold.co/500x750?text=No+Image"
    const posterUrl = movie.poster_path ? IMAGE_URL + movie.poster_path : FALLBACK_POSTER
    const heroImage = movie.backdrop_path ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}` : posterUrl;
    const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A";
    const year = movie.release_date ? movie.release_date.split("-")[0] : "N/A";
    const genres = movie.genres ? movie.genres.map(genre => genre.name).join(", ") : "N/A";
    const isFavorite = favorites.some(favorite => favorite.id === movie.id);
    const cast = movie.credits?.cast?.slice(0,6) || []
    const PROFILE_URL = "https://image.tmdb.org/t/p/w185"
    const FALLBACK_PROFILE = "https://placehold.co/185x278?text=No+Photo"
    const videos = movie.videos?.results || []
    const trailer = videos.find((video) => video.site === "YouTube" && video.type === "Trailer")

    return (
        <main className="movie-detail">
            <section className="movie-detail-hero">
                <img src={heroImage} alt={movie.title} className="movie-detail-hero-img"/>
                <Link to="/" className="movie-detail-back">←</Link>
                {toggleFavorite && (
                    <button className="movie-detail-favorite" onClick={() => toggleFavorite(movie)}>{isFavorite ? "♥" : "♡"}</button>
                )}
                <div className="movie-detail-hero-info">
                    <h2>{movie.title}</h2>
                    <p><strong>Year:</strong> {year}</p>
                    <p><strong>Rating:</strong> {rating}</p>
                    <p><strong>Genres:</strong> {genres}</p>
                </div>
            </section>
            <section className="movie-detail-content">    
                <p> {movie.overview}</p>
            </section>
            <section className="movie-cast">
                <h2>Cast</h2>
                <div className="cast-list">
                    {cast.map((actor) => (
                        <article className="cast-card" key={actor.id}>
                            <img
                                src={actor.profile_path ? `${PROFILE_URL}${actor.profile_path}` : FALLBACK_PROFILE}
                                alt={actor.name}
                            />
                            <p>{actor.name}</p>
                        </article>
                    ))}
                </div>
            </section>
            {trailer && (
                <section className="movie-trailer">
                    <h2>Trailer</h2>
                    <iframe
                        src={`https://www.youtube.com/embed/${trailer.key}`}
                        title={trailer.name}
                        allowFullScreen
                    ></iframe>
                </section>
            )}
        </main>
    )
}

export default MovieDetail;