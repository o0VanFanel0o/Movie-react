import "../../styles/MovieCard.css"

const MovieCard = () => {
    return (
        <article className="movie-card">
            <div className="movie-poster"></div>
            <div className="movie-info">
                <h3>Interestelar</h3>
                <p>8.9</p>
            </div>
        </article>
    )
}

export default MovieCard