import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getRandomMovie } from "../../services/api"
import "../../styles/RandomSynopsis.css"

const RandomSynopsis = () => {
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect (() => {
        const fetchRandomMovie = async () => {
            try{
                setLoading(true)
                setError("")
                const randomMovie = await getRandomMovie()
                setMovie(randomMovie)
            } catch(error) {
                console.error("Error loading random movie:", error)
                setError("Something went wrong while loading the random synopsis")
            }finally {
                setLoading(false)
            }
        }
        fetchRandomMovie()
    }, [])
    if (loading) {
        return <p>Loading Synopsis...</p>
    }
    if (error) {
        return <p>{error}</p>
    }
    if (!movie) {
        return <p>No synompsis avalable</p>
    }
    return(
        <Link to={`/movie/${movie.id}`} className="random-synopsis">
        <p>{movie.overview || "No overview available."}</p>
        </Link>
    )
}

export default RandomSynopsis