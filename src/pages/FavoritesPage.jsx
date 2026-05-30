import FloatingNav from "../components/navigation/FloatingNav"

const FavoritesPage = ({ favorites = [], toggleFavorite }) => {
    return (
        <div>
            <FloatingNav favorites={favorites} />
            <h1>Favorites</h1>
            {favorites.length === 0 ? (
                <p>No tienes favoritos aún</p>
            ) : (
                <ul>
                    {favorites.map((movie) => (
                        <li key={movie.id}>
                            <span>{movie.title}</span>
                            {toggleFavorite && (
                                <button onClick={() => toggleFavorite(movie)}>
                                    Quitar
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default FavoritesPage
