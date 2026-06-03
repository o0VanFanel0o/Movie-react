import "../../styles/MovieModal.css"

const MovieModal = ({ movie, onclose, favorites = [], toggleFavorite }) => {
    if (!movie) return null

    const IMAGE_URL = "https://image.tmdb.org/t/p/w500"
    const FALLBACK_IMAGE = "https://via.placeholder.co/500x750?text=No+Image"
    const isFavorite = favorites.some((fav) => fav.id === movie.id)
    const backdropUrl = movie.backdrop_path ? `${IMAGE_URL}${movie.backdrop_path}` : FALLBACK_IMAGE
    const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"
    return (
        <div className="modal-overlay">
            <div className="movie-modal">
                <button className="close-btn" onClick={onclose}>X</button>
                <img src={backdropUrl} alt={movie.title} />
                <div className="modal-content">
                    <h2>{movie.title}</h2>
                    <p>{rating}</p>
                    <p>{movie.overview}</p>
                    {toggleFavorite && (
                        <button onClick={() => toggleFavorite(movie)}>
                            {isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MovieModal