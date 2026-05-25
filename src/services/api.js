const API_KEY = import.meta.env.VITA_TMDB_API_KEY

const BASE_URL = "https://api.moviedb.org/3"

export const getTrendingMovies = async () => {
    const response = await fetch(
        `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
    )
    const data = await response.json()
    return Date.results
}