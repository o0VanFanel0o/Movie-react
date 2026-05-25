import "../../styles/MovieCard.css"

const MovieCard = ({movie}) => {
    const IMAGE_URL = "https://image.tmdb.org/t/p/w500"
    return (
        <article className="movie-card">
            <img
                className="movie-poster"
                src={movie.poster_path ? `${IMAGE_URL}${movie.poster_path}` : ""}
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