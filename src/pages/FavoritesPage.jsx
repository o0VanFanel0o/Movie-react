import TrendingCarrusel from "../components/movie/TrendingCarrusel.jsx"
import FloatingNav from "../components/navigation/FloatingNav.jsx"
import "../styles/home.css"

const FavoritesPage = ({ search, setSearch, favorites, toggleFavorite }) => {
    const filterFavorites = favorites.filter((movie) => 
        movie.title.toLowerCase().includes(search.toLowerCase())
    )


    return (
        <div className="home">
            <h1>Favorites</h1>
            <TrendingCarrusel
                movies={filterFavorites}
                title="Favorites"
                favorites={favorites}
                toggleFavorite={toggleFavorite}
            />
            <FloatingNav search={search} setSearch={setSearch} favorites={favorites} />
        </div>
    )
}

export default FavoritesPage


