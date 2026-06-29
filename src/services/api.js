const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const BASE_URL = "https://api.themoviedb.org/3"

const getApiKey = () => {
    if (!API_KEY) {
        throw new Error("Falta configurar VITE_TMDB_API_KEY")
    }

    return API_KEY
}

const fetchFromTmdb = async (path, params = {}) => {
    const url = new URL(`${BASE_URL}${path}`)
    url.searchParams.set("api_key", getApiKey())

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
            url.searchParams.set(key, value)
        }
    })

    const response = await fetch(url.toString())

    if (!response.ok) {
        throw new Error("Error al obtener información de TMDB")
    }

    return response.json()
}

export const getTrendingMovies = async () => {
    const data = await fetchFromTmdb("/trending/movie/week")
    return data.results ?? []
}

export const getPopularMovies = async() => {
    const data = await fetchFromTmdb("/movie/popular", { language: "en-US" })
    return data.results ?? []
}

export const getTopRatedMovies = async() => {
    const data = await fetchFromTmdb("/movie/top_rated", { language: "en-US" })
    return data.results ?? []
}

export const searchMovies = async (query) => {
    const trimmedQuery = query?.trim()

    if (!trimmedQuery) {
        return []
    }

    const data = await fetchFromTmdb("/search/movie", { query: trimmedQuery })
    return data.results ?? []
}

export const getMovieDetails = async (movieId) => {
    if (!/^\d+$/.test(String(movieId))) {
        throw new Error("Id de película inválido")
    }

    return fetchFromTmdb(`/movie/${movieId}`, { append_to_response: "credits,videos" })
}

export const getRandomMovie = async () => {
    const randomPage = Math.floor(Math.random() * 100) + 1
    const data = await fetchFromTmdb("/discover/movie", {
        language: "en-US",
        page: randomPage,
    })
    const movies = data.results ?? []

    if (movies.length === 0) {
        throw new Error("No se encontraron películas")
    }

    const randomIndex = Math.floor(Math.random() * movies.length)

    return movies[randomIndex]
}
