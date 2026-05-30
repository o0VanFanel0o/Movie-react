import "../../styles/MovieModal.css"

const MovieModal = ({ movie, onclose, favorites = [], toggleFavorite }) => {
    if (!movie) return null

    const IMAGE_URL = "https://image.tmdb.org/t/p/w500"
    const isFavorite = favorites.some((fav) => fav.id === movie.id)

    return (
        <div className="modal-overlay">
            <div className="movie-modal">
                <button className="close-btn" onClick={onclose}>X</button>
                <img src={`${IMAGE_URL}${movie.backdrop_path}`} alt={movie.title} />
                <div className="modal-content">
                    <h2>{movie.title}</h2>
                    <p>{movie.vote_average.toFixed(1)}</p>
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