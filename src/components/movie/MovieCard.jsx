import "../../styles/MovieCard.css"

const MovieCard = ({movie, onClick}) => {
    const IMAGE_URL = "https://image.tmdb.org/t/p/w500"
    return (
        <article className="movie-card" onClick={onClick}>
            <img
                className="movie-poster"
                src={`${IMAGE_URL}${movie.poster_path}`}
                alt={movie.title}
            />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.vote_average?.toFixed(1)}</p>
            </div>
        </article>
    )
}

export default MovieCard