import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"

import Home from "./pages/Home.jsx"
import FavoritesPage from "./pages/FavoritesPage.jsx"

function App() {
  const [search, setSearch] = useState("")
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites")
    return savedFavorites ? JSON.parse(savedFavorites) : []
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
    localStorage.setItem("favorites", JSON.stringify(favorites))
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
    </Routes>
  )
}

export default App
