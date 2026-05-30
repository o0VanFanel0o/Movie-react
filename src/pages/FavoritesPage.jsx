import TrendingCarrusel from "../components/movie/TrendingCarrusel.jsx"
import FloatingNav from "../components/navigation/FloatingNav.jsx"
import "../styles/home.css"

const FavoritesPage = ({ search, setSearch, favorites, toggleFavorite }) => {
    return (
        <div className="home">
            <h1>Favorites</h1>
            <TrendingCarrusel
                movies={favorites}
                title="Favorites"
                favorites={favorites}
                toggleFavorite={toggleFavorite}
            />
            <FloatingNav search={search} setSearch={setSearch} favorites={favorites} />
        </div>
    )
}

export default FavoritesPage
