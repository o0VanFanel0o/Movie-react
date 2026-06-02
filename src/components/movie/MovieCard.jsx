import "../../styles/MovieCard.css"

const MovieCard = ({movie, onClick}) => {
    const IMAGE_URL = "https://image.tmdb.org/t/p/w500"
    const FALLBACK_IMAGE = "https://via.placeholder.co/500x750?text=No+Image"
    const posterUrl = movie.poster_path ? `${IMAGE_URL}${movie.poster_path}` : FALLBACK_IMAGE
    const rating = movie.vote_average ? movie.vote_average.toFixed(1):"N/A"
    return (
        <article className="movie-card" onClick={onClick}>
            <img
                className="movie-poster"
                src={posterUrl}
                alt={movie.title}
            />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{rating}</p>
            </div>
        </article>
    )
}

export default MovieCard