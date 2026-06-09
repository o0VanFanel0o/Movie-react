const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const BASE_URL = "https://api.themoviedb.org/3"

export const getTrendingMovies = async () => {
    const response = await fetch(
        `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
    )
    const data = await response.json()
    return data.results
}

export const getPopularMovies = async() => {
    const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`
    )
    if (!response.ok) {
        throw new Error("Error al obtener los detalles de la película")
    }
    const data = await response.json()
    return data.results
}

export const getTopRatedMovies = async() => {
    const response = await fetch(
        `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`
    )
    if (!response.ok) {
        throw new Error("Error al obtener los detalles de la película")
    }

    const data = await response.json()
    return data.results
}

export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    )
    const data = await response.json()
    return data.results ?? []
}

export const getMovieDetails = async (movieId) => {
    const response = await fetch(
        `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    )
    if (!response.ok) {
        throw new Error("Error al obtener los detalles de la película")
    }
    return response.json()
}

export const getRandomMovie = async () => {
    const randomPage = Math.floor(Math.random() * 100) + 1
    const response = await fetch(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=${randomPage}`
    )
    if (!response.ok) {
        throw new Error("Failed to fetch")
    }
    const data = await response.json()
    const movies = data.results
    const randomIndex = Math.floor(Math.random() * movies.length)

    return movies[randomIndex]
}