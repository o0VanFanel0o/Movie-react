import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"

import Home from "./pages/Home.jsx"
import FavoritesPage from "./pages/FavoritesPage.jsx"
import MovieDetail from "./pages/MovieDetail.jsx"

function App() {
  const [search, setSearch] = useState("")
  const [favorites, setFavorites] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem("favorites")
      return savedFavorites ? JSON.parse(savedFavorites) : []
    } catch (error) {
      console.error("Error al obtener los favoritos:", error)
      return []
    }
  })

  const toggleFavorite = (movie) => {
    const exists = favorites.some((fav) => fav.id === movie.id)

    if (exists) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id))
    } else {
      setFavorites([...favorites, movie])
    }
  }

  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites))
    } catch (error) {
      console.error("Error al guardar los favoritos:", error)
    }
  }, [favorites])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            search={search}
            setSearch={setSearch}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        }
      />
      <Route
        path="/favorites"
        element={
          <FavoritesPage
            search={search}
            setSearch={setSearch}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        }
      />
      <Route
        path="/movie/:id"
        element={
        <MovieDetail
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />}
      />
    </Routes>
  )
}

export default App
